import PostItem from "./PostItem";

export default function PostList() {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://source.unsplash.com/random/800x600",
      category: "Dicas",
    },
  ];
  const extendList = (list: [], size: number) => {
    const newList: never[] = [];
    for (let i = 0; i < size; i++) {
      newList.push(...list);
    }
    return newList;
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex items-end justify-between p-5 font-medium border-b border-slate-200 ">
          <p className="text-lg ">Popular</p>
          <p className="text-sm text-orange-500">Post</p>
        </div>

        <div className="flex flex-col gap-4">
          {extendList(posts, 10).map((post) => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}
