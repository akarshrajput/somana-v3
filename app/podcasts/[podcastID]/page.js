import PodcastPage from "@/app/_components/podcastComponents/PodcastPlayer";

export async function generateMetadata({ params }) {
  const podcastTitle = params?.podcastTitle || "Podcast Page"; // Example: You can fetch actual data here if needed

  return {
    title: `Podcast-${params.podcastID}`, // Customize the title
    description: `Listen to the latest episode`, // Customize the description
    openGraph: {
      title: ` My Podcast`,
      description: `Listen to the latest episode.`,
      url: `/podcast/${params.podcastID}`, // Assuming params has an `id`
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ` My Podcast`,
      description: `Listen to the latest episode.`,
    },
  };
}

const page = ({ params }) => {
  return (
    <div>
      <PodcastPage params={params} />
    </div>
  );
};
export default page;
