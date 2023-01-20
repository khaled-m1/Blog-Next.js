"use client"
import { UsePreview } from "next-sanity/preview";
import { usePreview } from "../lib/sanity.preview";
import BlogList from './BlogList';

type Props = {
    query : string;
};

export default function PreviewBlogList({query}:Props){
    const posts = usePreview(null, query);
    console.log("LODING posts...", posts);
    return<BlogList posts={posts} />;
}