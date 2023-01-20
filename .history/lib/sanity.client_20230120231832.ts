import { createClient } from "next-sanity";
import sanityClient from '@sanity/client'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false,
// });
const client = sanityClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion, // use a UTC date string
  token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})