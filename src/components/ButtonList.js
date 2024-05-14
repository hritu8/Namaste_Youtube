import React from "react";
import Button from "./Button";

const ButtonList = () => {
    const list=["All", "WrestleMania", "Live", "Tag teams", "Cricket", "Ipl"];
  return (
    <div className="flex space-x-2">
      {list.map(
        (name) => (
          <Button key={name} name={name} />
        )
      )}
    </div>
  );
};

export default ButtonList;
