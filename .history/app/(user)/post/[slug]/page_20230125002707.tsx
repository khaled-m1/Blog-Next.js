type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  return <div>page{slug}</div>;
}

export default Post;
