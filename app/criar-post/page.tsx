import Form from "@/components/form";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";

export default function Page() {
  return (
    <div className="">
      <div className="flex bg-black px-6 py-4 font-bold text-white text-justify">
        <h1 className="w-1/2 text-2xl ">Criar post</h1>
        <div className="flex w-1/2 justify-end">
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button className="flex cursor-pointer  items-center gap-2 bg-[#353535] hover:text-[#b4b4b4]  text-white p-3 text-sm font-medium  md:p-2 md:px-3">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
      </div>

      <div>
        <Form />
        {/* <Table/> */}
      </div>
    </div>
  );
}
