"use client";
import { skills } from "@/constants/skills";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";

export const Skill = () => {
  return (
    <div>
      {skills.map((item) => (
        <div
          className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative"
          key={item.type}
        >
          <Paragraph className="w-40 capitalize">{item.type}</Paragraph>
          <div>
            {item.skills.map((skill) => (
              <Paragraph key={`${item.type}-${skill}`} className="text-sm md:text-sm lg:text-sm mb-4">
                {skill}
              </Paragraph>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
