type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
    const query = groq`
    *[_type]
    
    `
  return <div>page{slug}</div>;
}

export default Post;
