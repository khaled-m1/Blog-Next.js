"use client";

import { DefaultPreview } from "sanity";
import { projectId, dataset } from "./sanity.clint";

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}
if (! projectId || dataset){
    throw new Error (
        `Missing projectId or dataset. Check sanity.json or .env`
    )
}