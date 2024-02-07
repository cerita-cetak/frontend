import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import cn from "classnames";
import { usePathname } from "next/navigation";

type tNavBtn = {
  onHover: () => void;
  onLeft: () => void;
};

export default function NavBtn({ onHover, onLeft }: tNavBtn) {
  const pathname = usePathname();

  console.log("needs pathname ", pathname);

  return (
    <ul className="hidden items-center gap-4 font-medium md:flex">
      <li>
        <Link
          href={"#"}
          className={cn(
            " hover:text-text-500 dark:text-text-50 dark:hover:text-text-500",
            pathname == "/" ? "text-text-500" : "text-text-950",
          )}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"#service"}
          className={cn(
            "hover:text-text-500 dark:text-text-50 dark:hover:text-text-500",
            pathname == "/#service" ? "text-text-500" : "text-text-950",
          )}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href={"#pricing"}
          className={cn(
            "hover:text-text-500 dark:text-text-50 dark:hover:text-text-500",
            pathname == "/#pricing" ? "text-text-500" : "text-text-950",
          )}
        >
          Pricing
        </Link>
      </li>
      <li>
        <button
          className={cn(
            "group/event flex items-center gap-3 text-text-950 hover:text-text-500 dark:text-text-50 dark:hover:text-text-500",
          )}
          onMouseOver={() => onHover()}
          onMouseLeave={() => onLeft()}
        >
          <p>Events</p>
          <i className="transition-all duration-300 group-hover/event:rotate-180">
            <IoIosArrowDown />
          </i>
        </button>
      </li>
    </ul>
  );
}
