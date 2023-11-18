import Image from "next/image";

export default function Home() {
  return (
    <div className="px-8 bg-gray-50 py-4">
      <nav className="flex flex-row justify-between">
        <div className="text-[22px] font-bold">VetPlus</div>
        <div className="flex flex-row space-x-8">
          <div className="text-md">Services</div>
          <div className="text-md">About Us</div>
          <div className="text-md">Contact Us</div>
        </div>
      </nav>
      <main className="flex items-center justify-center h-screen">
        <div className="text-4xl">
          <span className="font-bold">VetPlus</span> is Coming Soon
        </div>
      </main>
    </div>
  );
}
