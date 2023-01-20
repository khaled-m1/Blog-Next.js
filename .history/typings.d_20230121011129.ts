import { Image, Reference, Slug } from "sanity";
import { Block } from "typescript";

type Base = {
  _createAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  auther: Auther;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}
interface Auther extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}
interface Image {
  _type: "image";
  asset: Reference;
}
interface Reference {
  _ref: string;
  _type: "reference";
}
interface Slug {
  _type: "slug";
  current: string;
}
interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}
interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}
interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}
interface Title {
    _ty
}