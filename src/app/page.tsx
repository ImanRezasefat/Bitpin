import Image from "next/image";
import { Button } from "@/components/Button";
import { Header } from "../containers/Header/Header";
import { useEffect } from "react";
import Markets from "@/containers/Markets";

export default function Home() {
  return (
    <main className="container md:mx-auto md:w-3/4 bg-slate-400">
      <Markets />
    </main>
  );
}
