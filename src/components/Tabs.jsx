import React, { useState } from "react";
import SignUpForm from "../UI/SignUpForm";

const Tabs = () => {
  // State to track the selected tab
  const [selectedTab, setSelectedTab] = useState("Top Headlines");

  // Assume this state tracks if the user is logged in or not
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true); // Replace with actual logic for checking login status

  // Content to show for each tab
  const renderContent = () => {
    if (selectedTab === "Top Headlines") {
      return <div>X</div>; // Content for Top Headlines
    } else if (selectedTab === "Following") {
      //check if user is logged in, if they aren't show a sign up button if they are,then show then their following list

      return isUserLoggedIn ? (
        <div>Your following list goes here</div> // Replace with actual following list
      ) : (
        <SignUpForm /> // Show SignUpForm if user is not logged in
      ); // Content for Following
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 rounded-xl p-2 overflow-hidden">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>
        <select
          id="Tab"
          className="w-full rounded-md border-gray-200"
          value={selectedTab}
          onChange={(e) => setSelectedTab(e.target.value)}
        >
          <option>Top Headlines</option>
          <option>Following</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            <a
              href="#"
              className={`shrink-0 border-b-2 ${
                selectedTab === "Top Headlines"
                  ? "border-gray-500 text-gray-700"
                  : "border-transparent text-gray-500"
              } px-1 pb-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedTab("Top Headlines");
              }}
            >
              Top Headlines
            </a>

            <a
              href="#"
              className={`shrink-0 border-b-2 ${
                selectedTab === "Following"
                  ? "border-gray-500 text-gray-700"
                  : "border-transparent text-gray-500"
              } px-1 pb-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedTab("Following");
              }}
            >
              Following
            </a>
          </nav>
        </div>
      </div>

      {/* Conditional rendering based on selected tab */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
