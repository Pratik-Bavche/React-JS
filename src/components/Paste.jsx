import React from "react";
import { useSelector } from "react-redux";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  
  return <div>list of pastes</div>;
};

export default Paste;
