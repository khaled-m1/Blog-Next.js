import {client} from './sanity.client'
import { imageUrlBuilder } from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source: any){
    
}