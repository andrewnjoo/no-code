"use client";

import React from "react";
import Draggable from "react-draggable";

const Draggable1: any = Draggable;

export const DnD = () => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [className, setClassName] = React.useState(
    "bg-gradient-to-r from-purple-500 to-indigo-500 p-8 rounded-xl shadow-lg text-white"
  );
  const [text, setText] = React.useState("Drag me");

  return (
    <>
      <Draggable1>
        <div className={className}>{text}</div>
      </Draggable1>
      <div>
        <div>
          <span className="mt-12">Class name</span>
          <div className="border mb-12">
            <textarea
              className="h-[100px] w-[600px]"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <span>Text</span>
          <div className="border mb-12">
            <input
              className="w-full"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
