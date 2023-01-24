import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import { Post } from "../../../../typings";

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

  const post: Post = await client.fetch(query, { slug });

  return (
    <article>
      <section>
        <div>
          <div>
            <Image 
            className="object-cover obj"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

export default Post;
