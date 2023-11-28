import { nanoid } from "nanoid";
const items = [
  {
    id: nanoid(),
    title: "Phone:",
    text_1: "38 (098) 12 34 567",
    text_2: "38 (093) 12 34 567",
    link_1: "+380981234567",
    link_2: "+380931234567",
    ico_1: "phone",
    ico_2: "phone",
  },
  {
    id: nanoid(),
    title: "E-mail:",
    text_1: "office@ecosolution.com",
    text_2: "",
    link_1: "mailto:office@ecosolution.com",
    link_2: "",
    ico_1: "mail",
    ico_2: "",
  },
  {
    id: nanoid(),
    title: "Address:",
    text_1: "79005, Ukraine, Lvivstreet. Shota Rustaveli, 7",
    text_2: "",
    link_1: "https://maps.app.goo.gl/Yx6zwwFb6TKQEmMk8",
    link_2: "",
    ico_1: "map",
    ico_2: "",
  },
  {
    id: nanoid(),
    title: "Social Networks:",
    text_1: "",
    text_2: "",
    link_1: "https://www.facebook.com/",
    link_2: "https://www.instagram.com/",
    ico_1: "fb",
    ico_2: "inst",
  },
];

export default items;
