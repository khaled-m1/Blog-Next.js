"use client";

import { DefaultPreview } from "sanity";
import { projectId, dataset } from "./sanity.clint";

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}
function onPublicAccessOnly() {
    throw new Error(`Unable to load preview as you're not logged in`);
  }