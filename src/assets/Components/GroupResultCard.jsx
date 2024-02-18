/* eslint-disable react/prop-types */
import { useState } from "react";

const GroupResultCard = ({ eventData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  if (!eventData || !Array.isArray(eventData)) {
    return <div>No data available</div>;
  }

  const validEvents = eventData.slice(1).filter((event) => {
    return event.length === 5 && event[2] && event[3] && event[4];
  });

  const filteredEvents = validEvents.filter((event) =>
    event[1].toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div className="space-y-7 ">
        <div className="mb-4 flex flex-col md:flex-row md:justify-between w-9/12 md:w-full space-y-3">
          <h1 className="text-2xl border-b-2 border-b-gray-600 pt-sans w-fit">
            Group Results
          </h1>
          <input
            type="text"
            placeholder="Search by event name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="py-2 px-10 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {filteredEvents.map((event, index) => {
            const eventName = event[1];
            const first = {
              name: event[2],
            };
            const second = {
              name: event[3],
            };
            const third = {
              name: event[4],
            };

            return (
              <div
                key={index}
                className="max-w-md mx-auto w-[350px] md:w-[400px] rounded-md overflow-hidden shadow-2xl flex flex-col relative"
              >
                <img
                  src="./card.png"
                  alt="Event Card"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="text-center h-28 mt-6 px-1 flex justify-center items-center relative z-10">
                  <h2 className="text-3xl font-semibold text-white h-10">
                    {eventName}
                  </h2>
                </div>
                <div className="p-4 py-8 md:py-10 flex-grow relative z-10">
                  <div className="mb-4">
                    <div className="flex items-center justify-between bg-[#333333] text-white p-2 py-6 rounded-md">
                      <div className="flex-grow">
                        <p className="text-base font-bold">{first.name}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-4xl mr-2">🥇</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between bg-[#FFD700] p-2 py-6 rounded-md">
                      <div className="flex-grow">
                        <p className="text-base font-bold">{second.name}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-3xl mr-2">🥈</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between bg-white text- p-2 py-6 rounded-md">
                      <div className="flex-grow">
                        <p className="text-base font-bold">{third.name}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-3xl mr-2">🥉</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GroupResultCard;
