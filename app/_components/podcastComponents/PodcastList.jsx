"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/v1/podcasts`, {
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
  }, []);

  return (
    <div className="p-2 grid grid-cols-12 gap-2">
      {podcasts.map((podcast, index) => (
        <PodcastInfo key={index} podcast={podcast} />
      ))}
    </div>
  );
};

const PodcastInfo = ({ podcast }) => {
  return (
    <Link
      href={`/podcasts/${podcast._id}`}
      className="border p-1 rounded-md cursor-pointer"
    >
      <img
        className="w-full mb-2 rounded-md"
        src={podcast.featuredImage}
        alt="Podcast"
      />
      <p className="font-medium text-sm">{podcast.podcastName}</p>
      <p className="font-medium dark:text-stone-400 text-stone-500 text-sm">
        {podcast.author.name}
      </p>
    </Link>
  );
};

export default PodcastList;
