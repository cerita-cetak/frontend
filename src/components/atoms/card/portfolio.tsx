import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="relative w-full bg-slate-300">
      <div className="absolute right-2 top-2 rounded-full bg-main-50 p-1 text-xs font-medium">
        Wedding
      </div>
      <Image
        src={"https://picsum.photos/200"}
        alt="image"
        width={1000}
        height={1000}
        className="rounded-md"
      />

      <div className="absolute inset-x-0 bottom-0 p-3 text-main-50">
        <p className="font-medium">Nama a dan Nama b</p>
        <small>Tanggal acara</small>
      </div>
    </div>
  );
}
