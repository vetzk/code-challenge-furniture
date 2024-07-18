import Landing from "@/app/landing/";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between pl-2">
      <Landing />
    </main>
  );
}
