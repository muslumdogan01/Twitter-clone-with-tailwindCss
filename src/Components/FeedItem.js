import React from "react";
import { ReplyIcon } from "../icons/icon";

function FeedItem({ avatar, displayName, userName, content, timeStamp }) {
  return (
    <article className="flex space-x-3 border-b py-3  cursor-pointer px-4">
      <img src={avatar} alt="Profile" className="w-11 h-11 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">{displayName}</h4>
          <span className="text-gray-700 ml-2">{userName}</span>
          <span className="text-gray-700 ml-2">
            {timeStamp?.toDate().toLocaleTimeString("tr-TR")}
          </span>
        </div>
        <p className="mt-2 text-gray-900 text-sm">{content}</p>
      </div>
      <ul>
        <li className="group">
          <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-gray-100">
            <ReplyIcon className="w-5 h-5" />
          </div>
        </li>
      </ul>
    </article>
  );
}

export default FeedItem;
