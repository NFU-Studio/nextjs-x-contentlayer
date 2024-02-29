import { allBlogPosts } from "@/.contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: { slug: string };
}
const PostPage = ({ params: { slug } }: PostPageProps) => {
  const post = allBlogPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) return notFound();
  const Content = getMDXComponent(post.body.code);
  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString()}
        </time>
      </header>
      <Content />
    </article>
  );
};
export default PostPage;
