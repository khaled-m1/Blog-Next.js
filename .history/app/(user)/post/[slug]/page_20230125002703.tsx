type Props = {
  params: {
    slug: string;
  };
};

as function Post({ params: { slug } }: Props) {
  return <div>page{slug}</div>;
}

export default Post;
