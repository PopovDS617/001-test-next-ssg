import React from "react";
import { PotentialFixItem } from "./PotentialFixItem";

export const PotentialFixesList = ({ list }) => {
  return (
    <div className="my-10">
      <div className="  grid grid-cols-2 gap-10  ">
        {list.map((item) => {
          if (item.fixslug !== "") {
            return (
              <div
                key={Math.random() * 10}
                className="flex p-5 items-start rounded-lg flex-col bg-slate-200   text-xl font-bold   gap-2 text-blue-900  "
              >
                <div className="flex items-center gap-4">
                  <span className="bg-yellow-500 rounded-full h-4 w-4 text-transparent ">
                    •
                  </span>
                  <span>{item._title}</span>
                </div>
                <PotentialFixItem list={item.jobs} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
