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

export interface Formation {
  formation_id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image_url: string;
  lessons?: Array<string>;
}