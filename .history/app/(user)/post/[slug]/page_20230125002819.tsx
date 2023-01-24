type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
    const query = groq`
    *[_]
    
    `
  return <div>page{slug}</div>;
}

export default Post;
