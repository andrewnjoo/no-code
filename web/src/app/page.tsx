"use client";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "@/components/Card";

export default function Home() {
  const [isDragging, setIsDragging] = React.useState(false);
  const [className, setClassName] = React.useState("");

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <DndProvider backend={HTML5Backend}>
        <Card text="Drag me" isDragging={isDragging} className={className} />
      </DndProvider>
      <div className="border mt-12">
        <input type="text" onChange={(e) => setClassName(e.target.value)} />
      </div>

      {/* TODO: find way to get all tailwind classes */}
      <div className='hidden text-xl text-2xl text-3xl'></div>
    </main>
  );
}
