import useSWR from 'swr';
import { Posts } from '@/@types';
import { axiosInstance } from '@/lib/axios';

export function useReadPosts() {
  const fetcher = (url: string) =>
    axiosInstance<Posts>(url, {
      params: {
        populate: {
          image: {
            fields: ['name', 'alternativeText', 'caption', 'url'],
          },
        },
      },
    }).then((res) => res.data);

  const { data, error, isLoading } = useSWR('/api/posts', fetcher);

  return {
    posts: data?.data,
    isLoading,
    isError: error,
  };
}
