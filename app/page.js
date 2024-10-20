import HeaderFill from "./_components/mainComponents/HeaderFill";
import BlogsList from "./_components/storyComponents/BlogList";

export default function Home() {
  return (
    <>
      <HeaderFill />
      <div className="px-2 flex justify-center">
        <div className="grid grid-cols-4 w-[1200px] gap-2">
          <div className="col-span-3 flex justify-center">
            <div>
              <BlogsList />
            </div>
          </div>

          {/* <div className="w-72">
          <div className="sticky top-16 font-medium flex-col">
            <SideNav />
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
}
