import {Book} from './book';

export class Author{
  id: number;
  name: string;
  image: string;
  description: string;
  constructor(author: any) {
    {
      this.id = author.id || -1;
      this.name = author.name || 'anonymous author';
      this.image = author.image || 'https://howsmydealing.com/wp-content/uploads/2016/12/anonymous-icon.jpg';
      this.description = author.description || 'No Description';
    }
  }
}
