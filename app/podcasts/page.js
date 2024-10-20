import HeaderFill from "../_components/mainComponents/HeaderFill";
import PodcastList from "../_components/podcastComponents/PodcastList";

const page = () => {
  return (
    <div className="px-4">
      <HeaderFill />
      <PodcastList api="/api/v1/podcasts?limit=20" />
    </div>
  );
};
export default page;
