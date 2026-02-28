import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className=" p-10 md:mt-15 md:ml-[55%]  text-left font-serif md:mb-[-50]" >
        <h1 className="text-6xl text-[#382255] font-bold ">Tecnologia e pesquisa,</h1>
        <h1 className="text-5xl text-[#669a2f]">a serviço dos direitos digitais</h1>{" "}
      </div>

      <Image
        src="/images/caravana.png"
        width={915}
        height={562}
        style={{
          height: "auto",
          width: "100%",
          transform: "scaleX(-1)",
        }}
        alt="caravana"
      ></Image>
    </div>
  );
}
