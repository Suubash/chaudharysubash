import Layout from "../components/Layout";
import Head from "next/head";
import Button from "../components/button/Button";
import router from "next/router";
import Image from "next/image";
import { useEffect } from "react";
import {
  fadeAnimation,
  triggerYSlide,
  xSlide,
  ySlide,
} from "../styles/animations";

function About() {
  useEffect(() => {
    fadeAnimation(".fade-animation");
    xSlide(".slide-left");
    ySlide(".slide-bottom");
    triggerYSlide(".journey-desc-trigger-top");
    triggerYSlide(".journey-scroll");
  }, []);
  return (
    <>
      <Head>
        <title>About - Subash</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta property="og:site_name" content="Chaudhary Subash" />
        <meta
          property="og:url"
          content="https://www.chaudharysubash.com.np/about"
        />
        <meta property="og:title" content="Hi! I am a Developer." />
        <meta
          property="og:description"
          content="I write Front-End codes, prototype a Figma design, write backend codes, and even write some blogs."
        />
      </Head>
      <Layout>
        <div className="px-5 py-12 md:py-0 bg-secondaryDark flex flex-col gap-5 items-center justify-evenly md:flex-row md:h-screen">
          <div className="text-left slide-bottom">
            {/* bg-gradient-to-br from-[#FFB75E] to-[#ED8F03] */}
            <h1 className="fade-animation text-6xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Hi! I am a <span>Developer</span>.
            </h1>
            <p className="fade-animation mb-5 text-sm text-gray-300">
              I write Front-End codes, prototype a Figma design, write backend
              codes, and even write some blogs.
            </p>
            <div className="fade-animation">
              <Button
                accent
                title="View My Blogs"
                onClick={() => router.push("/blog")}
              />
            </div>
          </div>
          <div className="min-w-full md:min-w-min slide-left md:w-1/4 border-8 border-gray-300 rounded-sm">
            <div className="w-full h-full relative">
              <Image
                alt="subash chaudhary"
                src="/subash.jpg"
                width={1920}
                height={2080}
                priority={true}
                layout="responsive"
                objectFit="cover"
                objectPosition="right"
                quality={30}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 mx-auto px-5 max-w-[70ch]">
          <div className="journey-scroll">
            <h1 className="text-3xl font-bold mb-2">
              I am more than a developer.
            </h1>
            <p className="">
              Being developer is not only my skill, I also write blogs on the
              different topics related to programming. You can read it in{" "}
              <b>&apos;blogs&apos;</b> page.
            </p>
          </div>
          <div className="mt-12 journey-desc-trigger-top overflow-hidden">
            <h2 className="text-lg mb-5 font-semibold">
              How my journey started?
            </h2>
            <p className="mb-5">
              It took a long time for me to get into front end development
              because I was still learning how to code. Before I got into
              programming, I was primarily interested in learning 3D design with
              Blender. However, you are all aware that 3D design softwares
              consume so many resources in the machine that you could literally
              use it as a heater in your room.
            </p>
            <p className="mb-5">
              Learning <b>`Blender`</b> was a time-consuming and painful task.
              If you have low-end PCs, you literally have to wait 2 - 3 minutes
              to render a single frame.
            </p>
            <p className="mb-5">
              Blender couldn&apos;t run smoothly on complex scenes on low-end
              PCs. So I dumped Blender and began learning mobile app
              development. For creating cross-platform apps, I used Flutter, a
              Google UI toolkit. Days passed, and I was pleased with the Flutter
              but not completely satisfied. As a result, I began learning React.
            </p>
            <p className="mb-5">
              I was very pleased with the react after writing some react codes.
              Following my introduction to React, I began studying NextJS (a
              React framework) for Static Site Generation (SSG), Server Side
              Rendering (SSR), and Incremental Static Regeneration (ISR).
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
