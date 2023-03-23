import Link from "next/link";
import React from "react";

export const StateList = ({ title, stateLinks }) => {
  return (
    <div className="my-10  ">
      <h2 className="font-bold text-blue-900 text-4xl  my-10 ">
        Select the state and town where this fix should be performed
      </h2>
      <hr />
      <div className="text-blue-900 font-semibold text-3xl    my-5">{`${title} in States of`}</div>
      <div className="flex justify-center flex-col items-center">
        <div className="flex justify-center items-center w-full">
          <ul className="     grid grid-cols-4     font-semibold items-center whitespace-nowrap  ">
            {stateLinks.map((state) => {
              return (
                <li
                  className="state-item p-2   text-blue-900 hover:text-yellow-500"
                  key={state.state_id}
                >
                  <Link href="/">{state.state_name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
