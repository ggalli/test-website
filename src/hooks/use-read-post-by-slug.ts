import useSWR from 'swr';
import { Posts } from '@/@types';
import { axiosInstance } from '@/lib/axios';

export function useReadPostBySlug(slug: string) {
  const fetcher = (url: string) =>
    axiosInstance<Posts>(url, {
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
    }).then((res) => res.data);

  const { data, error, isLoading } = useSWR('/api/posts', fetcher);

  return {
    post: data?.data[0],
    isLoading,
    isError: error,
  };
}
