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
      </Head>
      <Layout>
        <div className="px-5 py-12 md:py-0 bg-secondaryDark flex flex-col gap-5 items-center justify-evenly md:flex-row md:h-screen">
          <div className="text-left slide-bottom">
            {/* bg-gradient-to-br from-[#FFB75E] to-[#ED8F03] */}
            <h1 className="fade-animation text-6xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Hi! I am a <span>Developer</span>.
            </h1>
            <p className="fade-animation mb-5 text-sm text-gray-300">
              Hey, I write Front-End codes, prototype a Figma design, write
              backend codes, and even write some blogs.
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
              Hi! My name is <b>Subash Chaudhary</b> and I am a front end web
              developer. I mainly use React for creating the app.
            </p>
          </div>
          <div className="mt-12 journey-desc-trigger-top overflow-hidden">
            <h2 className="text-lg mb-5 font-semibold">
              How my journey started?
            </h2>
            <p className="mb-5">
              It took very long time to be in the field of front end development
              since I was learning how to code. Well, primarily, before coming
              to programming, I was just trying to learn 3D design using
              Blender. But you all know that, 3D design softwares take so much
              resources in the machine, you can literally use it as a heater for
              your room.
            </p>
            <p className="mb-5">
              Learning <b>Blender</b> was very painful and time consuming task.
              You literally just wait 2 - 3 minutes just to render a single
              frame if you got low end PCs.
            </p>
            <p className="mb-5">
              The low end PC&apos;s couldn&apos;t run Blender smoothly. So I
              decided to leave the Blender and started learning Mobile app
              development. I used Flutter, a Google&apos;s UI toolkit, for
              making cross platform apps. Well, days were running and I was
              happy with the Flutter but not so satisfied. So I started to learn
              React.
            </p>
            <p className="mb-5">
              After writing some react codes, I was so satisfied with the react.
              It is so easy to learn basics of react.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
