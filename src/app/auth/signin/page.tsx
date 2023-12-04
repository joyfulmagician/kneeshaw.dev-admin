import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { SITE_TITLE } from "@/utils/constants";
import SignInForm from "@/components/signin/SignInForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign In`,
  description: `${SITE_TITLE} - Sign In`
};

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }

  return (
    <main className="flex h-[100vh] w-full items-center justify-center">
      <section className="w-full sm:w-[400px]">
        <SignInForm />
      </section>
    </main>
  );
}
