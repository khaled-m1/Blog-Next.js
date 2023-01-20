import { previewData } from "next/headers";
import { groq } from "next-sanity";
 
export const query = groq`

`
export default function HomePage() {
  if (previewData()) {
    return <div>Preview mode</div>;
  }
  return (
    <div>
      <h1>Not in Preview mode</h1>
    </div>
  );
}
