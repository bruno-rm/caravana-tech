import Form from "@/components/form";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";

export default function Page() { 
  return (
    <div className="m-auto justify-center p-6 lg:w-2/3 ">
      <div className="text-[#382255] px-6 py-4 font-bold ">
        <h1 className="flex text-2xl justify-center">Criar post</h1>
        <div className="flex justify-end">
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button className="flex cursor-pointer items-center gap-2 text-[#48773a]  hover:text-[#382255]   p-3 text-sm font-medium  md:p-2 md:px-3">
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
