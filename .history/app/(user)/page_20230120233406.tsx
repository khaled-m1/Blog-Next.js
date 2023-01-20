import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspon from "../../components/PreviewSuspon";
const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createAd desc)
`;
export default async function HomePage() {
  if (previewData()) {
    return <PreviewSuspon fallback={(
      <div role="status">
        <p className="text-center text-lg animate-pulse text-[#BA2948]">
        Loding Preview data...
        </p>
      </div>

    )}></PreviewSuspon>;
  }
  const posts = await client.fetch(query);
  console.log(posts);

  return (
    <div>
      <h1>Not in Preview mode</h1>
    </div>
  );
}
