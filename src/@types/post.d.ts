export interface Post {
  id: number;
  title: string;
  image: {
    name: string;
    alternativeText: string;
    caption: string;
    url: string;
  };
  text: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
}

export interface Posts {
  data: Post[];
}
