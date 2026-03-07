import SignupForm from "@/components/signup-form";
import { Suspense } from "react";

export default function Signup() {
  return (
    <main className="flex items-center justify-center p-15 bg-[#dbdda8]">      
        
        <Suspense>
          <SignupForm />
        </Suspense>
      
    </main>
  );
}


