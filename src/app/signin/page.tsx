import Pending from "@/components/pending"
import { signIn } from "@/lib/auth"

export default function SignIn() {
  return (
    <>
      <h1>Sign In</h1>

      <form
        action={async (fd) => {
          "use server"
          await signIn("nodemailer", fd)
        }}
      >
        <input name="email" />
        <Pending />
      </form>
    </>
  )
}
