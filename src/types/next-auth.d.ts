import "next-auth";

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
