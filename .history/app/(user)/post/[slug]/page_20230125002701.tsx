type Props = {
  params: {
    slug: string;
  };
};

a function Post({ params: { slug } }: Props) {
  return <div>page{slug}</div>;
}

export default Post;
