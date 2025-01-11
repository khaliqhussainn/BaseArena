import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { check2, loading1, grid } from "../assets";

const RoadmapCard = ({ item }) => {
  const status = item.status === "done" ? "Done" : "In progress";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
        boxShadow: "none",

      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(59, 130, 246, 0.5)" }}
      date={
        <div className="text-blue-400 font-mono tracking-wider animate-pulse">
          {item.date}
        </div>
      }
      iconStyle={{
        background: item.status === "done" ? "#1A237E" : "#1E1E1E",
        boxShadow: `0 0 20px ${item.status === "done" ? "#3B82F6" : "#3B82F6"}`,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={item.status === "done" ? check2 : loading1}
            alt={status}
            className={`w-[60%] h-[60%] object-contain ${
              item.status !== "done" && "animate-spin"
            }`}
          />
        </div>
      }
    >
      <div className="relative group">
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 opacity-50 rounded-[2.4375rem] blur-sm group-hover:opacity-70 transition-opacity duration-300" />

        {/* Main content container */}
        <div className="relative p-7 bg-gray-900 bg-opacity-95 backdrop-blur-xl rounded-[2.4375rem] overflow-hidden border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 max-xs:p-4 max-xs:rounded-lg">
          {/* Grid background with enhanced opacity */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <img
              className="w-full pointer-events-none select-none"
              src={grid}
              width={550}
              height={550}
              alt="Grid"
            />
          </div>

          {/* Content wrapper */}
          <div className="relative z-1">
            {/* Image section with glow effect */}
            <div className="mb-10 -my-10 -mx-15 relative group max-xs:mb-6 max-xs:-my-6 max-xs:-mx-8">
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl" />
              <img
                className={`w-full rounded-lg ${
                  item.status !== "done" && "animate-pulse"
                } transform group-hover:scale-[1.02] transition-transform duration-300`}
                src={item.imageUrl}
                width={628}
                height={426}
                alt={item.title}
              />
            </div>

            {/* Title with gradient effect */}
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-500 bg-clip-text text-transparent max-xs:text-xl max-xs:mb-2">
              {item.title}
            </h4>

            {/* Description with enhanced readability */}
            <p className="text-gray-300 leading-relaxed max-xs:text-sm">{item.text}</p>

            {/* Status indicator */}
            <div
              className={`mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm ${
                item.status === "done"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-blue-400/10 text-blue-300"
              } max-xs:mt-2 max-xs:text-xs`}
            >
              <span
                className={`w-2 h-2 rounded-full mr-2 ${
                  item.status === "done"
                    ? "bg-blue-400 animate-pulse"
                    : "bg-blue-300 animate-pulse"
                }`}
              />
              {status}
            </div>
          </div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default RoadmapCard;
