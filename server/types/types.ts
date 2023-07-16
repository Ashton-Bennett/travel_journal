export interface User {
  name: string;
  skills: string[];
  hobbies: string[];
  about: string;
  id: number;
}

export interface Journal {
  pictures: string[];
  title: string;
  date: string;
  imageFolder: string;
  content: string[];
  id?: number;
}
