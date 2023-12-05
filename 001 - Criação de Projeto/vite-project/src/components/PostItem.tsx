import { BookmarkSimple, Clock, ThumbsUp } from "@phosphor-icons/react";

interface PostItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function PostItem(props: PostItemProps) {
  return (
    <>
      <div className="flex items-start gap-4 pb-3 border border-slate-200 rounded-xl">
        <div className="p-3 transition-all w-28 ">
          <img
            className="object-cover w-full rounded-lg aspect-square"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <div>
            <p className="text-xs font-bold text-orange-500">
              {props.category}
            </p>
            <h2 className="pr-2 font-semibold">{props.title}</h2>
          </div>
          <div className="flex gap-5 text-slate-500">
            <div className="flex items-center gap-3">
              <Clock size={12} />
              <span className="text-xs">2 min</span>
            </div>
            <div className="flex items-center gap-3">
              <ThumbsUp size={12} />
              <span className="text-xs">785</span>
            </div>
            <div className="flex items-center gap-3">
              <BookmarkSimple size={12} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
