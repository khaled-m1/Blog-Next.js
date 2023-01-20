import { Post } from "../typings";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
    console.log(posts)
  return <div>Salam</div>;
}

export default BlogList;
