import { Lightbulb } from "@phosphor-icons/react";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between px-3 py-1 text-slate-400">
        <img src="https://i.pravatar.cc/50" className="rounded-lg" />
        <Lightbulb size={25} weight="bold" />
      </div>
    </>
  );
}
