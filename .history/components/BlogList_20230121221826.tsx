import Image from "next/image";
import urlFor from "../lib/urlFor";
import author from "../schemas/author";
import category from "../schemas/category";
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
          <div key={post._id} className="fles flex-col group cursor-pointer">
            <div
              className="relative w-full h-80 drop-shadow-xl
            group-hover:scale-105 transition-transform duration-200 ease-out"
            >
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.auther?.name}
                fill
              />
              {/* Here -> Title aith dateTime */}
              <div
                className="absolute bottom-0 w-full bg-opacity-20 
              bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between"
              >
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex flex-col mf:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories.map((category) => (
                    <div className="bg-[#BA2948] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 flex-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
