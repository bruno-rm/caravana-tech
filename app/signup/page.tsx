import SignupForm from "@/components/signup-form";
import { Suspense } from "react";

export default function Signup() {
  return (
    <main className="flex justify-center h-screen items-center">      
        
        <Suspense>
          <SignupForm />
        </Suspense>
      
    </main>
  );
}


