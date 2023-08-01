import ReactMarkdown from 'react-markdown';
import { Container, Heading, MainHeader, Text } from '@/components';
import { BASE_URL } from '@/lib/environment';
// import { useReadPostBySlug } from '@/hooks';
import { getPost } from '@/lib/posts';
// import { getPost } from '@/lib/posts';

interface PostProps {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostProps) {
  const post = await getPost(params.slug);

  // using swr because it's a client component
  // const { post } = useReadPostBySlug(params.slug);

  if (!post) {
    return null;
  }

  return (
    <>
      <MainHeader />

      <main>
        <section className="pt-32">
          <div className="container max-w-5xl m-auto">
            <Heading as="h1" weight="light" className="text-center">
              {post.title}
            </Heading>
          </div>
        </section>

        <section className="max-w-5xl m-auto">
          <Container>
            <img
              src={`${BASE_URL}${post.image.url}`}
              alt={post.image.alternativeText}
              width={1200}
              height={800}
              className="mb-16 m-auto rounded-3xl"
            />

            <ReactMarkdown
              components={{
                p: ({ children }) => <Text className="mb-6 text-lg">{children}</Text>,
                h2: ({ children }) => (
                  <Heading as="h2" className="mt-10 mb-4">
                    {children}
                  </Heading>
                ),
                h3: ({ children }) => (
                  <Heading as="h3" className="mt-10 mb-4">
                    {children}
                  </Heading>
                ),
                h4: ({ children }) => (
                  <Heading as="h4" weight="bold" className="my-4">
                    {children}
                  </Heading>
                ),
                a: ({ children, ...props }) => (
                  <a className="text-primary-500 hover:underline" {...props}>
                    {children}
                  </a>
                ),
                ul: ({ children }) => <ul className="list-inside list-disc mb-6">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal mb-6 pl-5">{children}</ol>,
                li: ({ children }) => <li className="text-lg text-primary-700 mb-6">{children}</li>,
              }}
              linkTarget="_blank"
            >
              {post.text}
            </ReactMarkdown>
          </Container>
        </section>
      </main>
    </>
  );
}
