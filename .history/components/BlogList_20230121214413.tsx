import { Post } from "../typings";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {

  return <div>
    <hr className="border-[#BA2948] mb-10" />

    <div>
        {/* Posts */}
        {posts.map(post => (
            <div key={post._id}></div>
        ))}
    </div>
  </div>;
}

export default BlogList;
