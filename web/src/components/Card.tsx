import { useDrag } from "react-dnd";

export const ItemTypes = {
  CARD: "card",
};

export default function Card({ isDragging, text, className }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );
  return (
    <div ref={dragRef} style={{ opacity }} className={className}>
      {text}
    </div>
  );
}
