import { Post } from "../typings";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {

  return <div>
    <hr className=" mb-10" />
  </div>;
}

export default BlogList;
