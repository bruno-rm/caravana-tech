import Image from "next/image";
// import Card from "@/components/cards";
import PostsTable from "@/components/posts-table";

export default function Home() {
  return (
    <div>
      <div className="p-10 md:mt-15 md:ml-[55%] text-left font-serif md:mb-[-50]">
        <h1 className="text-4xl md:text-6xl text-[#382255] font-bold ">
          Tecnologia e pesquisa,
        </h1>
        <h1 className="text-3xl md:text-5xl text-[#669a2f]">
          a serviço dos direitos digitais
        </h1>{" "}
      </div>

      <Image
        src="/images/caravana-915-562.png"
        width={915}
        height={562}
        style={{
          height: "auto",
          width: "100%",
          transform: "scaleX(-1)",
        }}
        alt="caravana"
      ></Image>

      <div className="ml-5 md:mt-[-60] md:ml-20">
        <Image
          src="/images/logo-2700-1132.png"
          width={2700}
          height={1132}
          alt="logo"
          className="ml-1 md:ml-0 w-[40%] md:w-[25%]"
        ></Image>
        <div className="md:mt-5 md:mr-[35%] mr-5 ml-1 font-serif">
          <h2 className="text-lg/5 md:text-5xl text-[#382255] font-bold mt-2 ">
            Somos uma equipe dedicada a apoiar organizações sem fins lucrativos
            na defesa dos direitos digitais.
          </h2>
          <h2 className="text-lg/5 mt-1 md:text-3xl text-[#669a2f]">
            Oferecemos serviços de pesquisa, apóio técnico e estratégias que
            ajudam a fortalecer a segurança e a atuação de quem trabalha por
            justiça social.
          </h2>
        </div>
      </div>

      <div className="">
        <PostsTable section={"news"}/> 
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-3 md:mt-30 md:ml-12 md:mr-12">
        <div>
           <Card
          title="Título"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl="/images/desktop.jpg"
        />
        </div>

        <div>
           <Card
          title="Título"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl="/images/desktop.jpg"
        />
        </div>

        <div>
           <Card
          title="Título"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl="/images/desktop.jpg"
        />
        </div>

               
      </div> */}

      
      
    </div>
  );
}
