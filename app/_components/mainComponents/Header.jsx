import Link from "next/link";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "../buttons/ThemeButton";
import { DropdownMenuCheckboxes } from "./NavBar";
import { auth } from "@/app/_lib/auth";
import ProfileMenu from "../userComponents/ProfileMenu";
import { Upload } from "lucide-react";
import ScrollProgress from "./ScrollProgress";

const Header = async () => {
  const session = await auth();
  return (
    <div className="w-full">
      <ScrollProgress />
      <div className="flex dark:bg-black dark:bg-opacity-50 bg-white bg-opacity-50 items-center gap-2 px-2 py-2">
        <Logo />

        <div className="ml-auto flex items-center gap-2">
          <Link href="/upload">
            <Button variant="outline">
              Upload <Upload />
            </Button>
          </Link>
          <DropdownMenuCheckboxes />
          <ThemeButton />
          {session ? (
            <ProfileMenu session={session} />
          ) : (
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
