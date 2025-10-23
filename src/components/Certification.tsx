"use client";
import { certifications } from "@/constants/certifications";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";

export const Certification = () => {
  return (
    <div>
      {certifications.map((item, index) => (
        <div
          className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative"
          key={`certifications-${index}`}
        >
          <Paragraph className="w-40">{item.date}</Paragraph>
          <div>
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-emerald-500"
            >
              {item.issuer}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
          </div>
        </div>
      ))}
    </div>
  );
};
