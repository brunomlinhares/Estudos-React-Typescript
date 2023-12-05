import {
  BookmarkSimple,
  HouseSimple,
  MagnifyingGlass,
  User,
} from "@phosphor-icons/react";

export default function FooterBar() {
  const icons = [
    {
      id: 1,
      icon: <HouseSimple size={20} />,
    },
    {
      id: 2,
      icon: <MagnifyingGlass size={20} />,
    },
    {
      id: 3,
      icon: <BookmarkSimple size={20} />,
    },
    {
      id: 4,
      icon: <User size={20} />,
    },
  ];
  return (
    <>
      <div className="fixed bottom-0 flex justify-between w-full p-3 text-white bg-slate-400 opacity-95">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="p-2 transition-colors rounded-lg hover:bg-orange-500"
          >
            {icon.icon}
          </div>
        ))}
      </div>
    </>
  );
}
