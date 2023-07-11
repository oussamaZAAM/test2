export interface Blog {
  id: string;
  title: string;
  body: string;
  author: User;
  date: Date;
}

export interface User {
  name: string;
  job: string;
  description: string;
}