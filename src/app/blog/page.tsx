import Link from 'next/link';
import { BlogPost, Container, Heading, MainHeader } from '@/components';
// import { useReadPosts } from '@/hooks';
import { getPosts } from '@/lib/posts';
// import { getPosts } from '@/lib/posts';

export default async function Blog() {
  const posts = await getPosts();

  // using swr because it's a client component
  // const { posts } = useReadPosts();

  if (!posts) {
    return null;
  }

  return (
    <>
      <MainHeader />

      <main>
        <section className="pt-32">
          <div className="container">
            <Heading as="h1" className="text-center">
              Blog
            </Heading>
          </div>
        </section>

        <section>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="flex">
                  <BlogPost post={post} />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
