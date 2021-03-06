import Layout from "../components/Layout";
import Head from "next/head";
import Xarrow from "react-xarrows";
import TimelineItem from "../components/TimelineItem";
import { timelineItems } from "../components/timeline-items/timelineItems";
import { fadeAnimation } from "../styles/animations";
import { useEffect } from "react";

// importing primary color from another js file (not ES6 style)
const primary = require("../styles/constants");

function MyProjects() {
  const color = primary.primary;

  //Animation section
  useEffect(() => {
    fadeAnimation(".fadeAnimation");
  });

  // creating an empty array of lines
  const lines = [];

  // using for loop to insert into lines array
  for (let i = 0; i < timelineItems.length - 1; i++) {
    lines.push({
      start: `${i + 1}`,
      end: `${i + 2}`,
      color: color,
      headSize: 0,
      strokeWidth: 2,
      // curveness: 0.8, //default value
      startAnchor: "middle",
      endAnchor: "middle",
      dashness: { strokeLen: 40, nonStrokeLen: 20, animation: 0.3 },
    });
  }

  return (
    <>
      <Head>
        <title>My-projects - Subash</title>
        <meta property="og:site_name" content="Chaudhary Subash" />
        <meta
          property="og:url"
          content="https://www.chaudharysubash.com.np/my-projects"
        />
        <meta property="og:title" content="My Project Roadmap" />
        <meta
          property="og:description"
          content="The following are the projects that I have created. The link to those projects will be available soon. Thanks for visiting my site."
        />
      </Head>
      <Layout>
        <div className="my-projects">
          <div className="mt-12 mx-5">
            <div className="md:text-center max-w-[70ch] mx-auto mb-12">
              <h1 className="text-3xl font-semibold fadeAnimation">
                My Project Roadmap
              </h1>
              <p className="mt-5 fadeAnimation">
                The following are the projects that I have created. The link to
                those projects will be available soon. Thanks for visiting my
                site.
              </p>
            </div>
            <div className="fadeAnimation">
              {/* Creating timeline items */}
              {timelineItems.map((item, i) => (
                // Adding className only for animation purpose
                <TimelineItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  index={i}
                />
              ))}
              {/* Creating the line between dots */}
              {lines.map((line, i) => (
                <Xarrow key={i} {...line} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default MyProjects;
