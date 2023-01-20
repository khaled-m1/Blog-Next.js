import { previewData } from "next/headers";
import { groq } from "next-sanity";

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createAd desc)
`;
export default function HomePage() {
  if (previewData()) {
    return <div>Preview mode</div>;
  }

  const posr
  return (
    <div>
      <h1>Not in Preview mode</h1>
    </div>
  );
}
