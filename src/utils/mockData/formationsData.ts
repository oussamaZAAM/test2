import { Formation } from "../interfaces";

export const formationsData: Formation[] = [
  {
    formation_id: "testing",
    title: "Testing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus",
    price: 799,
    duration: "2 Mois",
    lessons: ["Postman", "Selenium", "Mockito"],
    image_url: "https://i.ibb.co/dDZFmNv/testing.png"
  },
  {
    formation_id: "automation",
    title: "Automation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus",
    price: 1299,
    duration: "3 Semaines",
    image_url: "https://i.ibb.co/C7Tv1dH/automation.png"
  }
]