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
    
}

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#BA2948] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
