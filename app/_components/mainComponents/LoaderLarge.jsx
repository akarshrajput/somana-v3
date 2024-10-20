"use client";
const { Spinner } = require("@phosphor-icons/react/dist/ssr");

const LoaderLarge = () => {
  return (
    <div className="flex justify-center">
      <Spinner className="size-8 text-black dark:text-white animate-spin" />
    </div>
  );
};
export default LoaderLarge;
