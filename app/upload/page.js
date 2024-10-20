import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Database, Music, Pen, Podcast, Store } from "lucide-react";
import Link from "next/link";
import HeaderFill from "../_components/mainComponents/HeaderFill";

const page = () => {
  return (
    <>
      <HeaderFill />
      <div className="flex flex-col items-center ">
        <div className="w-96 flex flex-col gap-2">
          <Link href="/story/write">
            <Button className="w-full" variant="outline">
              <Pen />
              Write Story
            </Button>
          </Link>

          <Separator className="my-2" />
          <Link href="/music/upload">
            <Button className="w-full" variant="outline">
              <Music />
              Upload Music
            </Button>
          </Link>
          <Separator className="my-2" />
          <Link href="/podcasts/upload">
            <Button className="w-full" variant="outline">
              <Podcast />
              Upload Podcast
            </Button>
          </Link>
          <Separator className="my-2" />
          <Link href="/drive/upload">
            <Button className="w-full" variant="outline">
              <Database />
              Upload File
            </Button>
          </Link>
          <Separator className="mt-2 mb-6" />
          <p className="text-center text-sm">Terms and Conditions apply</p>
        </div>
      </div>
    </>
  );
};
export default page;
