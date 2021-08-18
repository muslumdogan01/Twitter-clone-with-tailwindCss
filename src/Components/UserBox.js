import React from "react";

function UserBox() {
  return (
    <div
      className="flex justify-around items-center mb-6 hover:bg-gray-100 
    cursor-pointer transform transition-colors duration-200 py-2 px-4 "
    >
      <img
        src="https://pbs.twimg.com/profile_images/1404810765736022026/LWLJGzOs_400x400.jpg"
        alt="Profile"
        className="w-14 h-14 rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Müslüm Doğan</span>
        <span className="text-sm text-gray-500">@Muslumdoga...</span>
      </div>
      <div className="flex space-x-1">
        <div className="w-1 h-1 rounded-full  bg-gray-700" />
        <div className="w-1 h-1 rounded-full bg-gray-700" />
        <div className="w-1 h-1 rounded-full bg-gray-700" />
      </div>
    </div>
  );
}

export default UserBox;
