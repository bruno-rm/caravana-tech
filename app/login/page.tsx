import LoginForm from "@/components/login-form";

import { Suspense } from "react";

export default function LoginPage() {
  return (
    <main className="flex justify-center h-screen items-center">
              
        <Suspense>
          <LoginForm />
        </Suspense>
      
    </main>
  );
}

