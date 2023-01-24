type Props = {
  params: {
    slug: string;
  };
};

function Post({ params: { slug } }: Props) {
  return <div>page</div>;
}

export default Post;
