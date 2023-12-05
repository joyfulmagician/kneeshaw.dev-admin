import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import UserEdit from "@/components/user/UserEdit";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - User`,
  description: `${SITE_TITLE} - User`
};

export default function EditUser() {
  return (
    <section>
      <UserEdit />
    </section>
  );
}
