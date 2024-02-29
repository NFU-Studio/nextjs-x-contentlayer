import { allBlogPosts, BlogPost } from "contentlayer/generated";
import Link from "next/link";

const PostCard = ({ blogPost }: { blogPost: BlogPost }) => {
  return (
    <div className="bg-gray-950 relative p-4 rounded-lg flex">
      <div>
        <h3 className="font-semibold text-xl">{blogPost.title}</h3>
        <p className="text-gray-400">
          {new Date(blogPost.date).toLocaleDateString()}
        </p>
      </div>
      <Link href={blogPost.url} className="absolute size-full"></Link>
    </div>
  );
};

export default function Home() {
  return (
    <section>
      <h2 className="font-bold text-3xl border-b">Posty</h2>
      <div className="grid lg:grid-cols-2 my-4 gap-4">
        {allBlogPosts.map((post) => (
          <PostCard blogPost={post} key={post._id} />
        ))}
      </div>
    </section>
  );
}
