import LoginForm from "@/components/login-form";

import { Suspense } from "react";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center p-15 bg-black">
              
        <Suspense>
          <LoginForm />
        </Suspense>
      
    </main>
  );
}

