import { DnD } from "@/components/DnD";

export default async function Home() {
  return (
    <main className="flex flex-col items-center p-24 min-h-screen bg-slate-500">
      <DnD />
    </main>
  );
}
