type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
    const query = groq`
    *[_type=='post'&& slug.current == $slug][0]{
        ...,
        au
    }
    
    `
  return <div>page{slug}</div>;
}

export default Post;
