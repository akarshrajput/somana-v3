import HeaderFill from "@/app/_components/mainComponents/HeaderFill";
import UploadPodcast from "@/app/_components/podcastComponents/UploadPodcast";
import { auth } from "@/app/_lib/auth";
import React from "react";
const hostname = process.env.HOSTNAME;
const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;

const page = async () => {
  const session = await auth();
  if (!session?.user) {
    return <p>You are not Logged in</p>;
  }
  return (
    <div>
      <HeaderFill />
      <UploadPodcast
        session={session}
        supabaseURL={supabaseURL}
        hostname={hostname}
      />
    </div>
  );
};

export default page;
