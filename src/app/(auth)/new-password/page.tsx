import type { Metadata } from "next";
import NewPasswordForm from "./NewPasswordForm";

export const metadata: Metadata = {
  title: "New Password",
};

export default function NewPasswordPage() {
  return <NewPasswordForm />;
}
