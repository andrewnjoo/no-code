"use client";

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "@/components/Card";

export const DnD = () => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [className, setClassName] = React.useState("bg-gradient-to-r from-purple-500 to-indigo-500 p-8 rounded-xl shadow-lg text-white");
  const [text, setText] = React.useState("Drag me");
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Card text={text} isDragging={isDragging} className={className} />
      </DndProvider>
      <span className='mt-12'>Class name</span>
      <div className="border mb-12">
        <input className='h-[100px] w-[600px]' type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
      </div>
      <span>Text</span>
      <div className="border mb-12">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </>
  );
};
