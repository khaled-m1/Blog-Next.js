import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>;
    },
    number: ({ children }: any) => {
      <ol className="ml-lg py-5 list-discimal">{children}</ol>;
    },
  },

  block: {
    h1: ({ children }: any) => {
      <h1 className="text-5xl py-10 font-bold">{children}</h1>;
    },
    h2: ({ children }: any) => {
        <h2 className="text-5xl py-10 font-bold">{children}</h2>;
      },
      h3: ({ children }: any) => {
        <h1 className="text-5xl py-10 font-bold">{children}</h1>;
      },
      h1: ({ children }: any) => {
        <h1 className="text-5xl py-10 font-bold">{children}</h1>;
      },
  },
};
