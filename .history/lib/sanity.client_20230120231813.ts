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
  dataset: 'production',
  apiVersion: '2021-08-31', // use a UTC date string
  token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})