import "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    user: IUser;
    accessToken: string;
  }

  interface Session extends DefaultSession {
    user: IUser;
    accessToken: string;
  }
}
