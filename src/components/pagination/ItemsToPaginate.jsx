import Link from "next/link";
import { WrenchIcon } from "../assets/icons/WrenchIcon";

export const ItemsToPaginate = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <li
            key={Math.random() * 10}
            className="flex items-center   text-xl font-bold   gap-2 text-blue-900 hover:text-yellow-400"
          >
            <WrenchIcon />{" "}
            <Link href={`/fixes/${item.fixslug}`}>{item.fixTitle}</Link>
          </li>
        ))}
    </>
  );
};
