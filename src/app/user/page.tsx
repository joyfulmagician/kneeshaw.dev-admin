import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import UsersList from "@/components/user/UserList";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Users`,
  description: `${SITE_TITLE} - Users`
};

export default async function Users() {
  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <UsersList />
    </section>
  );
}
