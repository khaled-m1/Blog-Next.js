import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
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
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#BA2948] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.auther?.name}
              fill
            />
          </div>
          <section className="p-5 bg-[#BA2948] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* desc */}
              <div className="flex item-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(post.mainImage).url()}
                  alt={post.auther?.name}
                  height={40}
                  width={40}
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.auther?.name}</h3>
                  <div>{/* TODO: Autor BIO */}</div>
                </div>
              </div>
            </div>
            <div>
                <h2 className="italic pt-">{post.description}</h2>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
}

export default Post;
