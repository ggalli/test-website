import { BASE_URL } from '@/lib/environment';
import { Heading, Text, Card } from '@/components';
import { Post } from '@/@types';
import { formatDate } from '@/helpers/date';

interface BlogPostProps {
  post: Post;
}

export const BlogPost = ({ post }: BlogPostProps) => {
  const imageUrl = `${BASE_URL}${post.image.url}`;

  return (
    <Card className="flex flex-col">
      <img
        src={imageUrl}
        alt={post.image.alternativeText}
        width={600}
        height={300}
        className="rounded-2xl"
      />

      <Text size="sm" className="my-4">
        {formatDate(post.publishedAt)}
      </Text>
      <Heading as="h3" className="mt-auto">
        {post.title}
      </Heading>
    </Card>
  );
};
