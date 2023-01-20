import { previewData } from "next/headers";
import { groq } from "next-sanity";
import {cli}
const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createAd desc)
`;
export default async function HomePage() {
  if (previewData()) {
    return <div>Preview mode</div>;
  }
  const posts = await client.fetch(query);
  console.log(posts);

  return (
    <div>
      <h1>Not in Preview mode</h1>
    </div>
  );
}
