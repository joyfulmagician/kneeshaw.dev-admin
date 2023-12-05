"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SESSION_STATUS } from "@/utils/constants";
import Logo from "../layout/Logo";

const formSchema = z.object({
  email: z
    .string()
    .email({
      message: "Please enter a valid email address."
    })
    .min(5, {
      message: "Email must be at least 5 characters."
    }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters." })
});

export default function SignInForm() {
  const params = useSearchParams();
  const router = useRouter();
  const session = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const [error, setError] = useState<string | null>("");

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await signIn("credentials", {
        email: values.email,
        password: values.password
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setError(params.get("error"));
  }, [params]);

  useEffect(() => {
    if (session.status === SESSION_STATUS.AUTHENTICATED) {
      router.push("/");
    }
  }, [session]);

  useEffect(() => {
    if (form.formState.isDirty) setError(null);
  }, [form.formState.isDirty]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border px-4 py-8">
      <Logo disableLink />

      <h6 className="mb-8 text-2xl font-bold">Good to see you again.</h6>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
          method="post"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input autoFocus placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant="link">
            <Link href="/forgot">Forgot your password?</Link>
          </Button>

          <Button type="submit" disabled={form.formState.isSubmitting}>
            Sign In
          </Button>

          {error && <h5 className="text-red-600">{error}</h5>}
        </form>
      </Form>
    </div>
  );
}
