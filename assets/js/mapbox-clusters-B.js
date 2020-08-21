mapboxgl.accessToken = "pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoiY2pudzRtaWloMDAzcTN2bzN1aXdxZHB5bSJ9.2bkj3IiRC8wj3jLThvDGdA";

// create base map
const map = new mapboxgl.Map({
  container: "map", // container id
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
map.addControl(new mapboxgl.NavigationControl());


// NAICS data
naics_codes = [7225, 7211, 7121, 7139, 6111, 5311, 4523, 4511, 4451, 4471];

// Cluster settings
var cluster_array = [100, 750];
var cluster_colors = ["#3399ff", "#33ccff", "#ffff66", "#ff6666"]; // ff4d4d
var cluster_size = [8, 16, 32, 48];
var cluster_opacity = [0.9, 0.8, 0.75, 0.7];
const current_target = "point_count";

const pie_colorsA = ["#66C2A5", "#FC8D62", "#8DA0CB", "#E78AC3", "#A6D854", "#FFD92F", "#CCCCCC"];
const pie_colorsB = ["#80B1D3", "#FB8072", "#FDB462", "#B3DE69", "#8DD3C7", "#BEBADA", "#CCCCCC"];


// const data_source = "https://raw.githubusercontent.com/a-prejean/data-viz/master/CREST/powerPlants.geojson";
const data_source = "https://raw.githubusercontent.com/a-prejean/data-viz/master/CREST/PhaseTransition_FilteredNAICS.geojson";

const data_point_size = 6; // 5
const data_point_outer_size = 10; // 10
const data_point_outer_stroke = 2; // 2

// Data
const naics1 = ['==', ['get', 'naics_code'], '7225'];
const naics2 = ['==', ['get', 'naics_code'], '7211'];
const naics3 = ['==', ['get', 'naics_code'], '7139'];
const naics4 = ['==', ['get', 'naics_code'], '7121'];
const naics5 = ['==', ['get', 'naics_code'], '6111'];
const naics6 = ['==', ['get', 'naics_code'], '5311'];
const naics7 = ['==', ['get', 'naics_code'], '4523'];
const naics8 = ['==', ['get', 'naics_code'], '4511'];
const naics9 = ['==', ['get', 'naics_code'], '4471'];
const naics10 = ['==', ['get', 'naics_code'], '4451'];
const other = ['any', ['==', ['get', 'naics_code'], 'other']];


// Colors
const color_Domain = ["naics1", "naics2", "naics3", "naics4", "naics5","naics6", "naics7", "naics8", "naics9", "naics10", "other"];

// Getting colors from here: https://observablehq.com/@d3/color-schemes
const colorsA = ["#4b4ccb","#3987f9","#26bce1","#2ee5ae","#57fb7a","#95fb51","#d3e436","#feb927","#ff821d","#e54813","#af1a06"];
const colorsB = [
  "#6685ff", // 335cff "Dark Blue"
  "#fff533", // "Yellow"
  "#66ffa1", // "Teal"
  "#66cfff", // 33beff "Light Blue"
  "#ffb066", // ff9633 "Orange"
  "#bdff66", // "Yellow Green"
  "#8f66ff", // 6933ff "Purple"
  "#66ffe8", // "Turqoise"
  "#75ff66", // "Lime Green"
  "#d966ff", // cc33ff "Pink"
  "#ff6666"];// ff3333 "Red"
const colorsC = ["#4DC19C", "#125C77", "#DA70BF", "#223F9A", "#F15C17", "#FF991F", "#88572C", "#DDB27C", "#12939A", "#776E57", "#ff6666"];


const colorScale = d3.scaleOrdinal().domain(color_Domain).range(colorsB)
// const colorScale = d3.scaleOrdinal(color_Domain, d3.schemeSpectral[color_Domain.length]);



map.on('load', () => {
  // add a clustered GeoJSON source
  map.addSource('main_data', {
    'type': 'geojson',
    'data': data_source,
    'cluster': true,
    'clusterRadius': 100,
    // EDIT DATA
    'clusterProperties': { // keep separate counts for each category in a cluster
      'naics1': ['+', ['case', naics1, 1, 0]],
      'naics2': ['+', ['case', naics2, 1, 0]],
      'naics3': ['+', ['case', naics3, 1, 0]],
      'naics4': ['+', ['case', naics4, 1, 0]],
      'naics5': ['+', ['case', naics5, 1, 0]],
      'naics6': ['+', ['case', naics6, 1, 0]],
      'naics7': ['+', ['case', naics7, 1, 0]],
      'naics8': ['+', ['case', naics8, 1, 0]],
      'naics9': ['+', ['case', naics9, 1, 0]],
      'naics10': ['+', ['case', naics10, 1, 0]],
      'other': ['+', ['case', other, 1, 0]]
    }
  });
  
  
  // EDIT DATA
  map.addLayer({
    'id': 'data_point',
    'type': 'circle',
    'source': 'main_data',
    'filter': ['!=', ['get', 'cluster'], true],
    'paint': {
      'circle-color': ['case',
        naics1, colorScale('naics1'),
        naics2, colorScale('naics2'),
        naics3, colorScale('naics3'),
        naics4, colorScale('naics4'),
        naics5, colorScale('naics5'),
        naics6, colorScale('naics6'),
        naics7, colorScale('naics7'),
        naics8, colorScale('naics8'),
        naics9, colorScale('naics9'),
        naics10, colorScale('naics10'),
        other, colorScale('other'), '#ffed6f'],
      'circle-radius': data_point_size
    }
  });

    
    // EDIT DATA
    map.addLayer({
      'id': 'data_point_outer',
      'type': 'circle',
      'source': 'main_data',
      'filter': ['!=', ['get', 'cluster'], true],
      'paint': {
        'circle-stroke-color': ['case',
          naics1, colorScale('naics1'),
          naics2, colorScale('naics2'),
          naics3, colorScale('naics3'),
          naics4, colorScale('naics4'),
          naics5, colorScale('naics5'),
          naics6, colorScale('naics6'),
          naics7, colorScale('naics7'),
          naics8, colorScale('naics8'),
          naics9, colorScale('naics9'),
          naics10, colorScale('naics10'),
          other, colorScale('other'), '#ffed6f'],
        'circle-stroke-width': data_point_outer_stroke,
        'circle-radius': data_point_outer_size,
        'circle-color': "rgba(0, 0, 0, 0)"
      }
    });


    // Marker variables
    let markers = {};
    let markersOnScreen = {};
    let point_counts = [];
    let totals;
    const getPointCount = (features) => {
      features.forEach(f => {
        if (f.properties.cluster) {
          point_counts.push(f.properties.point_count)
        }
      })
      return point_counts;
    };
  
  
    // Update markers function
    const updateMarkers = () => {
      document.getElementById('key').innerHTML = '';
      let newMarkers = {};
      const features = map.querySourceFeatures('main_data');
      totals = getPointCount(features);
      features.forEach((feature) => {
        const coordinates = feature.geometry.coordinates;
        const props = feature.properties;

        if (!props.cluster) {
          return;
        };

        const id = props.cluster_id;

        let marker = markers[id];
        if (!marker) {
          const el = createDonutChart(props, totals);
          marker = markers[id] = new mapboxgl.Marker({
            element: el
          })
          .setLngLat(coordinates)
        }

        newMarkers[id] = marker;

        if (!markersOnScreen[id]) {
          marker.addTo(map);
        }
      });

      for (id in markersOnScreen) {
        if (!newMarkers[id]) {
          markersOnScreen[id].remove();
        }
      }
        markersOnScreen = newMarkers;
    };

  
    // pie/doughnut chart
    const createDonutChart = (props, totals) => {
      const div = document.createElement('div');
      
      // EDIT DATA
      const data = [
        {type: 'naics1', count: props.naics1},
        {type: 'naics2', count: props.naics2},
        {type: 'naics3', count: props.naics3},
        {type: 'naics4', count: props.naics4},
        {type: 'naics5', count: props.naics5},
        {type: 'naics6', count: props.naics6},
        {type: 'naics7', count: props.naics7},
        {type: 'naics8', count: props.naics8},
        {type: 'naics9', count: props.naics9},
        {type: 'naics10', count: props.naics10},
        {type: 'other', count: props.other},
      ];

      const thickness = 10;
      const scale = d3.scaleLinear()
        .domain([d3.min(totals), d3.max(totals)])
        .range([500, d3.max(totals)])

      const radius = Math.sqrt(scale(props.point_count));
      const circleRadius = radius - thickness;

      const svg = d3.select(div)
        .append('svg')
        .attr('class', 'pie')
        .attr('width', radius * 2)
        .attr('height', radius * 2);

      //center
      const g = svg.append('g')
        .attr('transform', `translate(${radius}, ${radius})`);

      const arc = d3.arc()
        .innerRadius(radius - thickness)
        .outerRadius(radius);

      const pie = d3.pie()
        .value(d => d.count)
        .sort(null);

      const path = g.selectAll('path')
        .data(pie(data.sort((x, y) => d3.ascending(y.count, x.count))))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', (d) => colorScale(d.data.type))

      const circle = g.append('circle')
        .attr('r', circleRadius)
        .attr('fill', 'rgba(11, 12, 15, 0.9)')
        .attr('class', 'center-circle')

      const text = g
        .append("text")
        .attr("class", "total")
        .text(props.point_count_abbreviated)
        .attr('text-anchor', 'middle')
        .attr('dy', 5)
        .attr('fill', 'white')

        const infoEl = createTable(props);

        svg.on('click', () => {
          d3.selectAll('.center-circle').attr('fill', 'rgba(11, 12, 15, 0.9)')
          circle.attr('fill', 'rgba(66, 69, 87, 0.95)')
          document.getElementById('key').innerHTML = '';
          document.getElementById('key').append(infoEl);
        })

      return div;
    }
    
    
    // popup legend
    const createTable = (props) => {
      const getPerc = (count) => {
        return count/props.point_count;
      };
      
      // EDIT DATA
      const data = [
        {type: 'naics1', perc: getPerc(props.naics1)},
        {type: 'naics2', perc: getPerc(props.naics2)},
        {type: 'naics3', perc: getPerc(props.naics3)},
        {type: 'naics4', perc: getPerc(props.naics4)},
        {type: 'naics5', perc: getPerc(props.naics5)},
        {type: 'naics6', perc: getPerc(props.naics6)},
        {type: 'naics7', perc: getPerc(props.naics7)},
        {type: 'naics8', perc: getPerc(props.naics8)},
        {type: 'naics9', perc: getPerc(props.naics9)},
        {type: 'naics10', perc: getPerc(props.naics10)},
        {type: 'other', perc: getPerc(props.other)},
      ];

      const columns = ['type', 'perc']
      const div = document.createElement('div');
      const table = d3.select(div).append('table').attr('class', 'table')
  		const thead = table.append('thead')
  		const	tbody = table.append('tbody');

  		thead.append('tr')
  		  .selectAll('th')
  		  .data(columns).enter()
  		  .append('th')
		    .text((d) => {
          let colName = d === 'perc' ? '%' : 'By Week'
          return colName;
        })

  		const rows = tbody.selectAll('tr')
  		  .data(data.filter(i => i.perc).sort((x, y) => d3.descending(x.perc, y.perc)))
  		  .enter()
  		  .append('tr')
        .style('border-left', (d) => `20px solid ${colorScale(d.type)}`);

  		// create a cell in each row for each column
  		const cells = rows.selectAll('td')
  		  .data((row) => {
  		    return columns.map((column) => {
            let val = column === 'perc' ? d3.format(".0%")(row[column]) : row[column];
  		      return {column: column, value: val};
  		    });
  		  })
  		  .enter()
  		  .append('td')
		    .text((d) => d.value)
        .style('text-transform', 'capitalize')

  	  return div;
    }

    // Update markers when map moves
    map.on('data', (e) => {
      if (e.sourceId !== 'main_data' || !e.isSourceLoaded) return;

      map.on('move', updateMarkers);
      map.on('moveend', updateMarkers);
      updateMarkers();
    });
});
