import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { roadmap } from "../constants";
import Button from "./Button";
import CompanyLogos from "./CompanyLogos";
import Heading from "./Heading";
import Section from "./Section";
import RoadmapCard from "./RoadmapCard";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="What we're working on" title="Roadmap" />

      <div className="relative flex justify-center md:pb-[7rem]">
        <VerticalTimeline layout="1-column">
          {roadmap.map((item, index) => (
            <RoadmapCard
              key={item.id}
              item={item}
            />
          ))}
        </VerticalTimeline>

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="#roadmap">Our roadmap</Button>
      </div>
    </div>
    <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
  </Section>
);

export default Roadmap;
