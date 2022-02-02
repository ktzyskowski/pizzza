import Post from "./types/post";
import PostCard from "./postcard";

const Navigator: React.FC = () => {
  const posts: Post[] = [
    { title: "First post" },
    { title: "Second post" },
    { title: "Third post" },
    { title: "Fourth post" },
    { title: "Fifth post" },
  ];

  return (
    <div className="relative w-64">
      <div className="absolute inset-y-0 w-full overflow-y-auto border-r border-neutral-200">
        <p className="bg-neutral-200 font-bold text-neutral-600 p-1 text-xs">
          TODAY
        </p>
        <ul className="flex flex-col overflow-y-hidden">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigator;
