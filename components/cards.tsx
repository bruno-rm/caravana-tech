import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default async function Card({ title, description, imageUrl }: CardProps) {

  

  return (
    <div className="p-6 w-full ">
      <div>
        <h2 className="text-2xl text-[#48773a] font-bold mb-3 font-serif">{title}</h2>
      </div>

      <div className="relative w-full ">
        <Image src={imageUrl} alt={title} width={960} height={640} className="object-cover" />
      </div>

      <div className="mt-2">
        <p className="text-[#382255] text-xl ">{description}</p>
      </div>
    </div>
  );
}
