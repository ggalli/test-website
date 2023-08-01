import { Post, Posts } from '@/@types';
import { axiosInstance } from './axios';

export async function getPosts(): Promise<Post[]> {
  const response = await axiosInstance<Posts>(`/api/posts`, {
    params: {
      populate: {
        image: {
          fields: ['name', 'alternativeText', 'caption', 'url'],
        },
      },
    },
  });
  return response.data.data;
}

export async function getPost(slug: string): Promise<Post> {
  const response = await axiosInstance<Posts>('/api/posts', {
    params: {
      populate: {
        image: {
          fields: ['name', 'alternativeText', 'caption', 'url'],
        },
      },
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
  });

  return response.data.data[0];
}
