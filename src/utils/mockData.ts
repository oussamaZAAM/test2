import { Blog, User } from "./interfaces";

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
    id: "1",
    title: "Getting Started with Next.js",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    author: users[0],
    date: new Date("2023-07-10"),
  },
  {
    id: "2",
    title: "CSS Tips and Tricks",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    author: users[1],
    date: new Date("2023-07-08"),
  },
  {
    id: "3",
    title: "JavaScript Best Practices",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus.At vero eos et accusamus et iusto odio dignissimos ducimus.At vero eos et accusamus et iusto odio dignissimos ducimus.",
    author: users[0],
    date: new Date("2023-07-05"),
  },
];