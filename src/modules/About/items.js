import { nanoid } from "nanoid";
import wind_farms_d_1x from "../../assete/images/jpg/desk/wind-farms-fields_1x.jpg";
import wind_farms_d_2x from "../../assete/images/jpg/desk/wind-farms-fields_2x.jpg";
import wind_farms_d_4x from "../../assete/images/jpg/desk/wind-farms-fields_4x.jpg";
import solar_panel_d_1x from "../../assete/images/jpg/desk/man-worker-firld-by-solar-panels_1x.jpg";
import solar_panel_d_2x from "../../assete/images/jpg/desk/man-worker-firld-by-solar-panels_2x.jpg";
import solar_panel_d_4x from "../../assete/images/jpg/desk/man-worker-firld-by-solar-panels_4x.jpg";
const items = [
  {
    id: nanoid(),
    title: "Openness",
    text: "to the world, people, new ideas and projects",
    svgId: "openness",
    atr: "card",
    img: {},
  },
  {
    id: nanoid(),
    title: "Responsibility",
    text: "we are aware that the results of our work have an impact on our lives and the lives of future generations",
    svgId: "responsibility",
    atr: "card",
    img: {},
  },
  {
    id: nanoid(),
    title: "Two men against the background of wind generators ",
    text: "",
    svgId: "",
    atr: "img",
    img: {
      d_1x: wind_farms_d_1x,
      d_2x: wind_farms_d_2x,
      d_4x: wind_farms_d_4x,
    },
  },
  {
    id: nanoid(),
    title: "Solar panels",
    text: "",
    svgId: "",
    atr: "img",
    img: {
      d_1x: solar_panel_d_1x,
      d_2x: solar_panel_d_2x,
      d_4x: solar_panel_d_4x,
    },
  },
  {
    id: nanoid(),
    title: "Innovation",
    text: "we use the latest technology to implement non-standard solutions",
    svgId: "innovation",
    atr: "card",
    img: {},
  },
  {
    id: nanoid(),
    title: "Quality",
    text: "we do not strive to be the first among others, but we want to be the best in our business",
    svgId: "quality",
    atr: "card",
    img: {},
  },
];

export default items;
