mapboxgl.accessToken = "pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoiY2pudzRtaWloMDAzcTN2bzN1aXdxZHB5bSJ9.2bkj3IiRC8wj3jLThvDGdA";

// create base map
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/aprejean/ckd7s972901rs1inyi8ahzxu0",
  center: [-90.09, 29.95], // starting position
  zoom: 10.25, //.75, // starting zoom
  minZoom: 8
});

// disable map rotation using right click + drag
map.dragRotate.disable();
// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();

// navigation controls
// map.addControl(new mapboxgl.NavigationControl());

// Cluster settings
var cluster_array = [10, 100, 500, 1000, 2000];
var cluster_colors = ["#3399ff", "#33ccff", "#ffff66", "#ff6666"]; // ff4d4d
var cluster_size = [8, 16, 32, 48];
var cluster_opacity = [0.9, 0.8, 0.75, 0.7];

const size_range = [100000, 50000, 10000, 5000, 1000];
const pie_size = [50, 45, 40, 35, 30, 25];


// Colors
const colors = ["#3399ff", "#ff6666", "#ffff66"];
// const colors = ["#617BFF", "#ED724A", "#A0E667"];


// const data_source = "https://raw.githubusercontent.com/a-prejean/data-viz/master/CREST/powerPlants.geojson";
const data_source = "https://raw.githubusercontent.com/a-prejean/data-viz/master/CREST/PhaseTransition.geojson";

naics_codes = [7225, 7211, 7121, 7139, 6111, 5311, 4523, 4511, 4451, 4471];
naics_colors = ["#4DC19C", "#125C77", "#DA70BF", "#223F9A", "#F15C17", "#FF991F", "#88572C", "#DDB27C", "#12939A", "#776E57"];

// load map and add layers
map.on("load", function () {
  // add a clustered GeoJSON source
  map.addSource("mobility", {
    type: "geojson",
    data: data_source,
    cluster: true,
    clusterMaxZoom: 16, // Max zoom to cluster points on
    clusterRadius: 100, // Radius of each cluster when clustering points (defaults to 50)
    clusterProperties: {
      // keep separate counts for each category in a cluster
      w1: ["+", ["get", 'w1']],
      w2: ["+", ["get", 'w2']],
      w3: ["+", ["get", 'w3']]
    }
  });
  // Unclustered points
  map.addLayer({
    id: "unclustered-point",
    type: "circle",
    cluster: true,
    source: "mobility",
    filter: ["!", ["has", "point_count"]]
  });


  // objects for caching and keeping track of HTML marker objects (for performance)
  var markers = {};
  var markersOnScreen = {};
  var indMarker = {};
  var indMarkeronScreen = {};

  function updateMarkers() {
    var newMarkers = {};
    var indNewMarkers = {};
    var features = map.querySourceFeatures("mobility");
    // for every cluster on the screen, create an HTML marker for it (if we didn't yet),
    // and add it to the map if it's not there already
    for (var i = 0; i < features.length; i++) {
      var coords = features[i].geometry.coordinates;
      var props = features[i].properties;

	      if (!props.cluster){
	      	var props_new = {'w1':props.w1, 'w2':props.w2, 'w3':props.w3};
	      	var ind_id = props.safegraph_place_id;
	      	var point_marker = indMarker[ind_id];
	      	if (!point_marker) {
		        var el = createDonutChart(props_new);
		        point_marker = indMarker[ind_id] = new mapboxgl.Marker({
		          element: el
		        }).setLngLat(coords);
		      }
	      	indNewMarkers[ind_id] = point_marker;

	      	if (!indMarkeronScreen[ind_id]) point_marker.addTo(map);
	      	
	      }else{
	      var id = props.cluster_id;

	      var marker = markers[id];
	      if (!marker) {
	        var el = createDonutChart(props);
	        marker = markers[id] = new mapboxgl.Marker({
	          element: el
	        }).setLngLat(coords);
	      }
	      newMarkers[id] = marker;

	      if (!markersOnScreen[id]) marker.addTo(map);
	    }
	}
    // for every marker we've added previously, remove those that are no longer visible
    for (id in markersOnScreen) {
      if (!newMarkers[id]) markersOnScreen[id].remove();
    }
    markersOnScreen = newMarkers;

    for (id in indMarkeronScreen){
    	if (!indNewMarkers[id]) indMarkeronScreen[id].remove();
    }
    indMarkeronScreen = indNewMarkers;
  }

  // after the GeoJSON data is loaded, update markers on the screen and do so on every map move/moveend
  map.on("data", function (e) {
    if (e.sourceId !== "mobility" || !e.isSourceLoaded) return;

    map.on("move", updateMarkers);
    map.on("moveend", updateMarkers);
    updateMarkers();
  });
});

// code for creating an SVG donut chart from feature properties
function createDonutChart(props) {
  var offsets = [];
  var counts = [props.w1, props.w2, props.w3];
  var total = 0;
  for (var i = 0; i < counts.length; i++) {
    offsets.push(total);
    total += counts[i];
  }
  var fontSize = total >= 1000 ? 16 : total >= 100 ? 16 : total >= 10 ? 16 : 12;
  // var r = total >= 1000 ? 50 : total >= 100 ? 32 : total >= 10 ? 24 : 20;
  var r = total >= size_range[0] ? pie_size[0] : 
  total >= size_range[1] ? pie_size[1] : 
  total >= size_range[2] ? pie_size[2] : 
  total >= size_range[3] ? pie_size[3] : 
  total >= size_range[4] ? pie_size[4] : 
  pie_size[5]

  var r0 = Math.round(r * 0.75); // For relative sized border
  // var r0 = Math.round(r - 16); // For static sized border
  var w = r * 2;

  var html =
    '<div><svg width="' +
    w +
    '" height="' +
    w +
    '" viewbox="0 0 ' +
    w +
    " " +
    w +
    '" text-anchor="middle" style="font: ' +
    fontSize +
    'px sans-serif; display: block">';

  for (i = 0; i < counts.length; i++) {
    html += donutSegment(
      offsets[i] / total,
      (offsets[i] + counts[i]) / total,
      r,
      r0,
      colors[i]
    );
  }
  html +=
    '<circle cx="' +
    r +
    '" cy="' +
    r +
    '" r="' +
    r0 +
    '" fill="rgba(11, 12, 15, 0.9)" /><text dominant-baseline="central" transform="translate(' +
    r +
    ", " +
    r +
    ')" fill="white">' +
    total.toLocaleString() +
    "</text></svg></div>";

  var el = document.createElement("div");
  el.innerHTML = html;
  return el.firstChild;
}

function donutSegment(start, end, r, r0, color) {
  if (end - start === 1) end -= 0.00001;
  var a0 = 2 * Math.PI * (start - 0.25);
  var a1 = 2 * Math.PI * (end - 0.25);
  var x0 = Math.cos(a0),
    y0 = Math.sin(a0);
  var x1 = Math.cos(a1),
    y1 = Math.sin(a1);
  var largeArc = end - start > 0.5 ? 1 : 0;

  return [
    '<path d="M',
    r + r0 * x0,
    r + r0 * y0,
    "L",
    r + r * x0,
    r + r * y0,
    "A",
    r,
    r,
    0,
    largeArc,
    1,
    r + r * x1,
    r + r * y1,
    "L",
    r + r0 * x1,
    r + r0 * y1,
    "A",
    r0,
    r0,
    0,
    largeArc,
    0,
    r + r0 * x0,
    r + r0 * y0,
    '" fill="' + color + '" />'
  ].join(" ");
}