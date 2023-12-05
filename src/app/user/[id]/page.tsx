import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - User`,
  description: `${SITE_TITLE} - User`
};
import UserEdit from "@/components/user/UserEdit";
interface EditUserProps {
  id: string;
  onUpdated: () => void;
}
export default function EditUser({ params }: { params: { id: string } }) {
  return (
    <section>
      <UserEdit />
    </section>
  );
}
