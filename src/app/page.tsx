import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <section className="flex h-screen justify-between">
        <div className="mx-4 h-screen w-full bg-white sm:w-10/12">
          <section className="ml-8 h-[545px] bg-blue-200">
            <div></div>
          </section>
          <section className="mt-8 h-80 bg-blue-400"></section>
        </div>
        <div className="mx-4 h-screen w-full bg-white sm:w-5/12"></div>
      </section>
    </main>
  );
}
