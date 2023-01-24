import { groq } from "next-sanity";

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post'&& slug.current == $slug][0]{
        ...,
        author->,
        categories[]->
    }`;

    const post: Post = await cli
  return <div>page{slug}</div>;
}

export default Post;
