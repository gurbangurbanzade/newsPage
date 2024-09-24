export interface ILatestNews {
  id: string;
  title: string;
  desc: string;
  cover: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface IProducts {
  id: number;
  title: string;
  color?: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
