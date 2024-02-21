import { IoIosArrowDown } from "react-icons/io";
import cn from "classnames";
import { usePathname, useRouter } from "next/navigation";

type tNavBtn = {
  menus: {
    href: string;
    menu: string;
    isDropdown?: boolean;
    onHover?: () => void;
    onLeft?: () => void;
  }[];
};

export default function NavManus({ menus }: tNavBtn) {
  const pathname = usePathname();
  const { push } = useRouter();

  // console.log("needs pathname ", pathname);

  return (
    <ul className="hidden items-center gap-4 font-medium md:flex">
      {menus.map((v, i) => (
        <li key={i}>
          <button
            onClick={() => !v.isDropdown && push(v.href)}
            className={cn(
              "group/event flex items-center gap-3 text-text-950 hover:text-text-800 dark:text-text-50 dark:hover:text-text-200",
            )}
            onMouseEnter={() => {
              v.onHover?.();
            }}
            onMouseLeave={v.onLeft}
          >
            <p>{v.menu}</p>
            {v.isDropdown && (
              <i className="transition-all duration-300 group-hover/event:rotate-180">
                <IoIosArrowDown />
              </i>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
