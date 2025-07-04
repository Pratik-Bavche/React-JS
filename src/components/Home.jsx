import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
import { addToPaste, updateToPaste } from "../Redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      //update paste
      dispatch(updateToPaste(paste));
    } else {
      //create paste
      dispatch(addToPaste(paste));
    }
    setTitle("");
    setValue("");
    setSearchParams("");
  }

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl mt-2 w-[60%] border-2 pl-4"
          type="text"
          placeholder="Enter title here!"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createPaste} className="mt-4 rounded-3xl">
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div className="mt-4">
        <textarea
          className="p-4 rounded-2xl mt-4 min-w-[500px] border-2"
          value={value}
          rows={20}
          placeholder="enter content here!"
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
