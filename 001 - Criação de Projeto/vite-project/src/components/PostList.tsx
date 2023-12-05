import PostItem from "./PostItem";

export default function PostList() {
  const posts = [
    {
      id: 1,
      title: "Os melhores Plugins para o seu VSCode",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://source.unsplash.com/random/800x600",
      category: "Tech",
    },
  ];
  return (
    <>
      <div>
        <div className="flex items-end justify-between p-5 font-medium ">
          <p className="text-lg ">Popular</p>
          <p className="text-sm text-orange-500">Post</p>
        </div>

        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}
