import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
    types: {
        image: ({value}:any)=> {
            return (
                <div className="relative w-full h-96 m-10 mx-auto">
                    <Image className=""
                </div>
            )
        }
    }

};
