import React, { useEffect, useState } from "react";
import Divider from "../Components/Divider";
import FeedList from "../Components/FeedList";
import TweetBox from "../Components/TweetBox";
import db from "../firebase";
import { PopulerIcon } from "../icons/icon";

const Content = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    db.collection("feed")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  console.log(tweets);
  return (
    <main className="flex flex-col flex-1 border-l border-r border-gray-100">
      <header className="flex items-center justify-between sticky top-0 z-10 bg-white p-4 border-b border-gray-100">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-blue-500" />
      </header>
      <div className="flex px-4 py-3 space-x-4">
        <img
          src="https://pbs.twimg.com/profile_images/1404810765736022026/LWLJGzOs_400x400.jpg"
          alt="Profile"
          className="w-14 h-14 rounded-full"
        />

        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets} />
    </main>
  );
};

export default Content;
