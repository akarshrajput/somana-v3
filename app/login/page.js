import { Button } from "@/components/ui/button";
import { signInAction, signInGithub } from "../_lib/actions";
import { GooglePlayLogo } from "@phosphor-icons/react/dist/ssr";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { Lock } from "lucide-react";
const page = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 items-center mt-10">
        <h1 className="font-bold text-2xl flex items-center gap-2">
          <Lock weight="bold" />
          Login to Somana
        </h1>
        <p className="text-sm text-stone-400">
          Select any service to login to your account
        </p>
        <Separator className="my-4" />
        <div className="flex flex-col items-center gap-2">
          <form action={signInAction}>
            <Button className="w-72" variant="outline">
              <GooglePlayLogo weight="bold" /> Google
            </Button>
          </form>

          <form action={signInGithub}>
            <Button className="w-72" variant="outline">
              <GitHubLogoIcon /> GitHub
            </Button>
          </form>
          <Separator className="my-4" />

          <p className="text-sm max-w-72 text-center">
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
