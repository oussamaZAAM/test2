import { Blog, Formation, User } from "./interfaces";

const users: User[] = [
  {
    name: "John Doe",
    job: "Formateur",
    description: "Proin nec massa massa. Fusce placerat justo nisi"
  },
  {
    name: "Jane Doe",
    job: "Formatrice",
    description: "Lorem ipsum dolor sit amet, consectetur "
  },
];

export const blogsData: Blog[] = [
  {
    id: "postman",
    title: "Getting Started with Postman",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    author: users[0],
    date: new Date("2023-07-10"),
  },
  {
    id: "git-github",
    title: "Git et Github",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, tellus eu interdum placerat, odio neque scelerisque est, at placerat enim erat a lorem. Vestibulum sed dolor malesuada erat commodo viverra et finibus nunc. Ut magna dui, varius in elit vitae, maximus condimentum ipsum. Ut tristique lobortis nunc vitae porta. Nam sit amet quam augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod blandit tortor id viverra. Sed nec ultrices massa, eu vulputate massa. Cras ut nunc enim. In iaculis arcu sem, nec pharetra lacus cursus eget. Cras vulputate tempus urna, non mollis ex. Nam vulputate nunc sit amet risus molestie, vehicula iaculis neque bibendum. Morbi blandit rutrum tristique. Morbi eget eros ac eros cursus faucibus non laoreet metus. Quisque ipsum diam, interdum non gravida sit amet, dapibus a odio. Curabitur turpis turpis, viverra nec sem sed, egestas pretium sem. \n\n Nulla facilisi. Aliquam erat volutpat. Nunc venenatis commodo rhoncus. Sed blandit lectus id tortor varius feugiat. Aenean efficitur a felis pellentesque tempus. Proin aliquet dolor id lacus faucibus, nec iaculis justo dictum. Vestibulum egestas egestas urna, quis dictum orci iaculis ut. Donec vehicula condimentum fermentum. Aliquam justo leo, aliquam sit amet orci ut, dignissim egestas augue. Suspendisse ut mi lacinia lectus sollicitudin lacinia. Integer ac purus dignissim, maximus arcu non, blandit erat. \n\n Aliquam erat volutpat. Fusce interdum velit tellus, non vulputate sem placerat sed. Vestibulum lorem orci, dictum ac nisi quis, dictum fringilla ipsum. Mauris volutpat libero lorem, id tempus nisi ultricies sed. Vivamus velit magna, hendrerit at gravida non, porttitor nec dolor. Donec tristique dignissim lacus, vitae tincidunt ex efficitur vel. Praesent viverra tristique est, nec gravida turpis tincidunt nec. Nam elementum pharetra augue, tincidunt laoreet nisi mattis id. Pellentesque sollicitudin orci maximus, consectetur odio posuere, ornare odio. Aenean id ante nec magna ultrices euismod. Pellentesque vestibulum nisl nec arcu vestibulum, ac mollis sapien blandit. Sed mollis erat id risus dignissim, vel venenatis magna tempus. Sed mattis aliquet lacus vel vehicula. \n\n Nunc fringilla euismod felis nec tristique. Curabitur sed tortor nisi. Donec porta molestie porttitor. Sed commodo mollis libero in mattis. Pellentesque mauris nulla, ultrices convallis lacus a, euismod accumsan nisl. Nunc ultrices commodo nulla. Sed vel elit in ligula euismod ullamcorper et iaculis ante. Aliquam convallis, sapien ac imperdiet pretium, nisl est accumsan mauris, sit amet mattis augue ligula vel lorem. Integer sit amet justo ac urna sodales interdum vitae et eros. Vivamus nunc ipsum, molestie quis lorem quis, placerat mattis ipsum. Suspendisse aliquet dictum elementum. Nunc nec mi ut massa pulvinar tincidunt. \n\n Etiam scelerisque sapien vel ante rutrum aliquam. Maecenas venenatis diam vel quam accumsan fringilla. Duis tincidunt velit arcu. Suspendisse blandit, arcu ac sagittis ullamcorper, ligula mauris interdum velit, non accumsan lorem ligula vel dui. Aliquam tincidunt nibh in tortor molestie interdum ut ac ligula. Aliquam consequat augue non quam rhoncus, gravida auctor elit dictum. Vivamus euismod nunc ex, vel accumsan eros dignissim eget. Phasellus ut ultricies tellus. Pellentesque consectetur velit eget fermentum consequat. Vivamus hendrerit pellentesque nunc, vitae porttitor enim fermentum eu. Donec ultricies justo ac sem consectetur dictum. Proin a pharetra leo, eget vestibulum ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris convallis accumsan malesuada.",
    author: users[1],
    date: new Date("2023-07-08"),
  },
  {
    id: "cypress",
    title: "Cypress: consectetur adipiscing elit. Morbi ",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus, felis id tincidunt mattis, nulla lorem lacinia quam, vitae fermentum elit nisl ac leo. In sodales sit amet nibh quis congue. Maecenas tristique molestie elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean et faucibus nunc. Phasellus ac risus sit amet orci porta convallis sit amet ac tortor. Etiam tempor purus nec efficitur vestibulum. Proin et metus ut odio egestas luctus et ut eros. Vestibulum pulvinar mi rutrum nunc fringilla viverra. \n\n Fusce sollicitudin nulla sit amet magna dictum, quis dapibus nulla hendrerit. Sed est massa, finibus vel rutrum at, varius at nisl. Donec congue id nibh in ornare. Curabitur viverra sed quam quis tincidunt. Nullam congue velit et augue convallis ornare. Morbi commodo dignissim mollis. Nullam condimentum massa ut diam commodo sodales.",
    author: users[0],
    date: new Date("2023-07-05"),
  },
];


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
  },
  // {
  //   formation_id: "graphic-design",
  //   title: "Graphic Design",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus",
  //   price: 699,
  //   duration: "1 Mois",
  //   image_url: "https://i.ibb.co/C7Tv1dH/automation.png"
  // },
]