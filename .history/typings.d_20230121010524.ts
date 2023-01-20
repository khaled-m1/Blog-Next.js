import { Image, Slug } from "sanity";
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
    asset: Ref
}