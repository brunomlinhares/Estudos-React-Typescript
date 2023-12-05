import { Clock } from "@phosphor-icons/react";

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
      <div className="flex gap-4">
        <div className="w-1/3 p-4 transition-all hover:p-0 ">
          <img
            className="object-cover w-full rounded-lg aspect-square"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className="flex flex-col w-2/3 gap-2">
          <div>
            <p className="text-xs font-semibold text-orange-500">
              {props.category}
            </p>
            <h2 className="font-semibold ">{props.title}</h2>
          </div>
          <div className="flex gap-5 text-slate-500">
            <div className="flex items-center gap-3">
              <Clock size={12} />
              <span className="text-xs">2 min</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={12} />
              <span className="text-xs">2 min</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
