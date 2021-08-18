import React, { useState } from "react";
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../icons/icon";
import db from "../firebase";
import firebase from "firebase";

function TweetBox() {
  const [content, setContent] = useState("");
  const sendTweet = () => {
    if (content !== "") {
      db.collection("feed").add({
        displayName: "Muslum Dogan",
        userName: "@muslum_dogann",
        content,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        avatar:
          "https://pbs.twimg.com/profile_images/1404810765736022026/LWLJGzOs_400x400.jpg",
      });
      setContent("");
    }
  };

  return (
    <div className="flex-1">
      <textarea
        className="w-full text-xl outline-none bg-transparent placeholder-gray-600 overflow-hidden resize-none"
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />

      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 ">
            <ImageIcon className="w-6 h-6 text-blue-300 " />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 ">
            <GIFIcon className="w-6 h-6 text-blue-300 " />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 ">
            <PollIcon className="w-6 h-6 text-blue-300 " />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 ">
            <EmojiIcon className="w-6 h-6 text-blue-300 " />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 ">
            <ScheduleIcon className="w-6 h-6 text-blue-300 " />
          </div>
        </div>
        <button
          onClick={sendTweet}
          className="bg-blue-500 py-2 px-4 rounded-full font-medium"
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default TweetBox;
