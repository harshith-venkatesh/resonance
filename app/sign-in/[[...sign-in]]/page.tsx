import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
   return(
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <SignIn appearance={{elements: {
        rootBox: "w-[400px] rounded-lg border bg-white p-6 shadow-md",
        card: 'shadow-lg'
      }}}/>
    </div>
   ) 
}