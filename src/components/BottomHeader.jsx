import React from "react";
import { socials } from "../constants";

const BottomHeader = () => {
  return (
    <div className="mt-2 w-[100%] flex bg-transparent items-center justify-center">
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-2">
          <ul className="flex gap-5 flex-wrap">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.id}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-[#0076ee]"
              >
                <img
                  src={social.iconUrl}
                  alt={social.title}
                  width={16}
                  height={16}
                />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
