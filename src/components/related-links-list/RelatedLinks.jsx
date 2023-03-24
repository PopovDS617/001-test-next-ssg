import React from "react";

import Link from "next/link";

import { WrenchIcon } from "../assets/icons/WrenchIcon";

export const RelatedLinks = ({ list }) => {
  return (
    <div className="my-10">
      <ul className="  flex flex-wrap gap-10 justify-start ">
        {list.map((link) => {
          if (link.fixslug !== "") {
            return (
              <li
                key={Math.random() * 10}
                className="flex items-center   text-xl font-bold   gap-2 text-blue-900 hover:text-yellow-400"
              >
                <WrenchIcon />
                <Link href={`/fixes/${link.fixslug}`}>{link._title}</Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
