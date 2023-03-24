import React from "react";

export const PotentialFixItem = ({ list }) => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li className="text-slate-500 font-normal" key={Math.random() * 10}>
            <span className="text-blue-900">-</span> {item._val}
          </li>
        );
      })}
    </ul>
  );
};
