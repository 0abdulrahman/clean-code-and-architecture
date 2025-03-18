import { User } from "next-auth";

export type LoginResponse = Pick<User, "token" | "user">;

export type RegisterResponse = Pick<User, "token" | "user">;
