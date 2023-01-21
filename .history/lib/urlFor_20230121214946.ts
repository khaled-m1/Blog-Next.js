import { client } from "./sanity.client";
import imageUrlBu

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}
export default urlFor;
