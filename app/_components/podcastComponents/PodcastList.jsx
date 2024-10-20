"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@chakra-ui/react";

const PodcastList = ({ api }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(api, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setPodcasts(response.data.data.podcasts);
      } catch (err) {
        console.error("Error fetching podcasts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, [api]);

  return (
    <div className="px-4 relative">
      {loading ? (
        <p>Loading podcasts...</p>
      ) : (
        <div>
          {/* Custom Previous and Next Buttons */}
          <button
            className="absolute top-[40%] left-0 z-10 p-2 h-10 w-10 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-all"
            id="prevButton"
          >
            <ChevronLeft className="animate-pulse" strokeWidth="3" />
          </button>

          <button
            className="absolute top-[40%] right-0 z-10 p-2 h-10 w-10 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-all"
            id="nextButton"
          >
            <ChevronRight className="animate-pulse" strokeWidth="3" />
          </button>

          {/* Swiper Component */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={8}
            navigation={{
              prevEl: "#prevButton", // Link to custom previous button
              nextEl: "#nextButton", // Link to custom next button
            }}
          >
            {podcasts.map((podcast, index) => (
              <SwiperSlide key={index}>
                <PodcastInfo podcast={podcast} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

const PodcastInfo = ({ podcast }) => {
  return (
    <Link
      href={`/podcasts/${podcast._id}?${podcast.podcastName}`}
      className="p-2 rounded-md cursor-pointer"
    >
      <img
        className="aspect-square object-cover mb-2 rounded-md"
        src={podcast.featuredImage}
        alt={podcast.podcastName}
      />
      <p className="font-medium text-sm">{podcast.podcastName}</p>
      <p className="font-medium dark:text-stone-400 text-stone-500 text-sm">
        {podcast.author.name}
      </p>
    </Link>
  );
};

export default PodcastList;
