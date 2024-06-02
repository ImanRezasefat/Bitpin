import { Orders } from "@/containers/Orders";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="container md:mx-auto md:w-3/4 bg-slate-400">
      <Orders id={params.id} />
    </div>
  );
}
