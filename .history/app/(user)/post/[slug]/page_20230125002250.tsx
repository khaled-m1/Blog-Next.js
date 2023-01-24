type Props = {
  params: {
    slug: string;
  };
};

function Post({params: {s}}: Props) {
  return <div>page</div>;
}

export default Post;
