import Layout from "../../components/Layout";
import Head from "next/head";
import { getPosts } from "../../services/blog";
import PostCard from "../../components/blog/PostCard";
import FeaturedPosts from "../../components/blog/FeaturedPosts";
// import PostCategories from "../../components/blog/PostCategories";
// import { useState, useEffect } from "react";

function Blog({ posts }) {
  // const [posts, setposts] = useState([]);
  // useEffect(() => {
  //   getPosts().then((result) => {
  //     setposts(result);
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title>Blog - Subash</title>
        <meta
          name="description"
          content="Want to know advanced topics on Front-end development? You are in the right place. You can find different blogs covering advanced topics on front-end development."
        />
        <meta property="og:site_name" content="Chaudhary Subash" />
        <meta
          property="og:url"
          content="https://www.chaudharysubash.com.np/blog"
        />
        <meta property="og:title" content="Want to read dangerous blogs?" />
        <meta
          property="og:description"
          content="Want to know advanced topics on Front-end development? You are in the right place. You can find different blogs covering advanced topics on front-end development."
        />
      </Head>
      <Layout>
        <div className="grid gap-5 md:grid-cols-12 mt-12 mx-5">
          {/* New Posts */}
          <div className="md:col-span-9">
            <div className=" max-w-[70ch] mx-auto">
              <h2 className="text-2xl font-bold mb-5">New posts</h2>
              {
                <div className="flex flex-wrap gap-5">
                  {posts?.length === 0 ? (
                    <div>No posts to show</div>
                  ) : (
                    posts
                      ?.map((post, index) => (
                        <PostCard key={index} post={post.node} />
                      ))
                      .reverse()
                  )}
                </div>
              }
            </div>
          </div>

          {/* Featured post */}
          <div className="md:col-span-3">
            <div className="md:sticky top-14">
              <div className="mb-12">
                <div className="mb-12">
                  <FeaturedPosts />
                </div>
                {/* <div className="mb-12">
                  <PostCategories />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}
