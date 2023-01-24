type Props = {
  params: {
    slug: string;
  };
};

function Post({ params: { slug } }: Props) {
  return <div>page{slug}</div>;
}

export default Post;
