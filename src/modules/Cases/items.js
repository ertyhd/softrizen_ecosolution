import { nanoid } from "nanoid";
import wind_power_d_1x from "../../assete/images/jpg/desk/slider/wind_power1x.jpg";
import wind_power_d_2x from "../../assete/images/jpg/desk/slider/wind_power2x.jpg";
import wind_power_d_4x from "../../assete/images/jpg/desk/slider/wind_power4x.jpg";
import solar_panels_d_1x from "../../assete/images/jpg/desk/slider/solar_panels1x.jpg";
import solar_panels_d_2x from "../../assete/images/jpg/desk/slider/solar_panels2x.jpg";
import solar_panels_d_4x from "../../assete/images/jpg/desk/slider/solar_panels4x.jpg";
import thermal_modules_d_1x from "../../assete/images/jpg/desk/slider/thermal_modules1x.jpg";
import thermal_modules_d_2x from "../../assete/images/jpg/desk/slider/thermal_modules2x.jpg";
import thermal_modules_d_4x from "../../assete/images/jpg/desk/slider/thermal_modules4x.jpg";
import kherson_city_d_1x from "../../assete/images/jpg/desk/slider/kherson_city1x.jpg";
import kherson_city_d_2x from "../../assete/images/jpg/desk/slider/kherson_city2x.jpg";
import kherson_city_d_4x from "../../assete/images/jpg/desk/slider/kherson_city4x.jpg";
import nuclear_power_d_1x from "../../assete/images/jpg/desk/slider/nuclear-power1x.jpg";
import nuclear_power_d_2x from "../../assete/images/jpg/desk/slider/nuclear-power2x.jpg";
import nuclear_power_d_4x from "../../assete/images/jpg/desk/slider/nuclear-power4x.jpg";

const items = [
  {
    id: nanoid(),
    title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    text: "Wind Power for auto field irrigation",
    date: "July 2023",
    img: {
      d_1x: wind_power_d_1x,
      d_2x: wind_power_d_2x,
      d_4x: wind_power_d_4x,
    },
  },
  {
    id: nanoid(),
    title: "Zhytomyr city Private Enterprise “Bosch”",
    text: "Solar Panels for industrial use",
    date: "November 2023",
    img: {
      d_1x: solar_panels_d_1x,
      d_2x: solar_panels_d_2x,
      d_4x: solar_panels_d_4x,
    },
  },
  {
    id: nanoid(),
    title: "Rivne city Private Enterprise “Biotech”",
    text: "Thermal modules",
    date: "October 2023",
    img: {
      d_1x: thermal_modules_d_1x,
      d_2x: thermal_modules_d_2x,
      d_4x: thermal_modules_d_4x,
    },
  },
  {
    id: nanoid(),
    title: "Kherson city Private Enterprise “HealthyFarm”",
    text: "Wind power",
    date: "September 2021",
    img: {
      d_1x: kherson_city_d_1x,
      d_2x: kherson_city_d_2x,
      d_4x: kherson_city_d_4x,
    },
  },
  {
    id: nanoid(),
    title: "Zaporizhia city Private Enterprise “Biotech”",
    text: "Mini nuclear stations",
    date: "May 2021",
    img: {
      d_1x: nuclear_power_d_1x,
      d_2x: nuclear_power_d_2x,
      d_4x: nuclear_power_d_4x,
    },
  },
];

export default items;
