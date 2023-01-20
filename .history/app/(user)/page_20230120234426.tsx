import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspon from "../../components/PreviewSuspon";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from '../../components/BlogList'
const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createAd desc)
`;
export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspon
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#BA2948]">
              Loding Preview data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspon>
    );
  }
  const posts = await client.fetch(query);
  console.log(posts);

  return (
   <BlogList po />
  );
}
