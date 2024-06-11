import React from "react";
import JobsList from "./JobsList";
import SearchBar from "./SearchBar";
type Props = {};

async function BoardSection({}: Props) {
  return (
    <div className="flex flex-col  justify-center items-center w-full  gap-10 bg-background/75  ">
      <h1
        id="board"
        className=" text-3xl font-bold mt-10  flex justify-center items-center gap-1 "
      >
        Job Board
      </h1>
      <div className="w-4/6 ">
        <SearchBar />

        <div
          className="
              w-full flex pt-5 
        "
        >
          <JobsList />
        </div>
      </div>
    </div>
  );
}

export default BoardSection;
