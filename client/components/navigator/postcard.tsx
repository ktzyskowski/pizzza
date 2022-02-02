import Post from "./types/post";

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="border-b py-3 px-1 border-neutral-200">
      <p>{post.title}</p>
    </div>
  );
};

export default PostCard;
