import { Post } from "../typings";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {

  return <div>
    <hr className="border-[#BA2948] mb-10" />

    <div>
        {/* Posts */}
        {posts.map(post => ())}
    </div>
  </div>;
}

export default BlogList;
