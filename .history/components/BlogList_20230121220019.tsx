import Image from "next/image";
import urlFor from "../lib/urlFor";
import author from "../schemas/author";
import { Post } from "../typings";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#BA2948] mb-10" />

      <div>
        {/* Posts */}
        {posts.map((post) => (
          <div key={post._id}>
            <div>
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                // auth?.['user']?.['name']
                alt={post}
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
