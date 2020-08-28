import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@a-prejean/covid-19-data-for-louisiana.js?v=3";
(new Runtime).module(define, name => {
  if (name === "description") return Inspector.into("#observablehq .observablehq-description")();
  if (name === "viewof map_shows") return Inspector.into("#observablehq .observablehq-viewof-map_shows")();
  if (name === "viewof date_selection") return Inspector.into("#observablehq .observablehq-viewof-date_selection")();
  if (name === "viewof vega_map_embed") return Inspector.into("#observablehq .observablehq-viewof-vega_map_embed")();
  if (name === "viewof vega_lite_chart") return Inspector.into("#observablehq .observablehq-viewof-vega_lite_chart")();
  if (name === "viewof la_vega_chart") return Inspector.into("#observablehq .observablehq-viewof-la_vega_chart")();
  if (name === "viewof la_m_vega_chart") return Inspector.into("#observablehq .observablehq-viewof-la_m_vega_chart")();
  if (name === "chart_description") return Inspector.into("#observablehq .observablehq-chart_description")();
  if (name === "viewof vl_selected_parish_chart") return Inspector.into("#observablehq .observablehq-viewof-vl_selected_parish_chart")();
  if (name === "viewof vl_state_chart") return Inspector.into("#observablehq .observablehq-viewof-vl_state_chart")();
  if (name === "viewof county_scale_type") return Inspector.into("#observablehq .observablehq-viewof-county_scale_type")();
  if (name === "viewof vl_parish_charts") return Inspector.into("#observablehq .observablehq-viewof-vl_parish_charts")();
});