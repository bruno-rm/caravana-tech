"use client";

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/app/ui/button";
import { useActionState } from "react";
import { authenticate } from "@/lib/actions";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/criar-post";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction}>
      <div className="flex-1 bg-white px-6 pb-4 pt-8 ">
        <h1 className=" mb-3 text-2xl">Log in to create a post</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="block w-full border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500 "
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="block w-full  border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <Button className="mt-6 w-full " aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-white" />
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

// "use client";

// import {
//   AtSymbolIcon,
//   KeyIcon,
//   ExclamationCircleIcon,
// } from "@heroicons/react/24/outline";
// import { ArrowRightIcon } from "@heroicons/react/20/solid";
// import { Button } from "@/app/ui/button";
// import { useActionState } from "react";
// import { authenticate } from "@/lib/actions";
// import { useSearchParams } from "next/navigation";

// export default function LoginForm() {
//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl") || "/criar-post";
//   const [errorMessage, formAction, isPending] = useActionState(
//     authenticate,
//     undefined,
//   );

//   return (
//     <form action={formAction} className="space-y-3">
//       <div className="flex-1  bg-white px-6 pb-4 pt-8">
//         <h1 className={` mb-3 text-2xl`}>Log in to create a post</h1>
//         <div className="w-full">
//           <div>
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <div className="realtive">
//               <AtSymbolIcon className="   top-1/2 h-4.5 w-4.5  text-gray-500 peer-focus:text-gray-900" />

//               <input
//                 className="peer block w-full  border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email address"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full  border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="password"
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 required
//                 minLength={6}
//               />
//               <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>
//         <input type="hidden" name="redirectTo" value={callbackUrl} />
//         <Button className="mt-6 w-full " aria-disabled={isPending}>
//           Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-white" />
//         </Button>
//         <div
//           className="flex h-8 items-end space-x-1"
//           aria-live="polite"
//           aria-atomic="true"
//         >
//           {errorMessage && (
//             <>
//               <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
//               <p className="text-sm text-red-500">{errorMessage}</p>
//             </>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// }
