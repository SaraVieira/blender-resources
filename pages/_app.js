import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/tailwind.css";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    Fathom.load("YHNPIPAF", {
      includedDomains: ["https://blenderresources.com/"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Blender Resources</title>
        <meta name="title" content="Blender Resources" />
        <meta
          name="description"
          content="A list of curated and community-driven resources to help you learn blender"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blenderresources.com/" />
        <meta property="og:title" content="Blender Resources" />
        <meta
          property="og:description"
          content="A list of curated and community-driven resources to help you learn blender"
        />
        <meta
          property="og:image"
          content="https://mblenderresourcesicomassets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://blenderresources.com/" />
        <meta property="twitter:title" content="Blender Resources" />
        <meta
          property="twitter:description"
          content="A list of curated and community-driven resources to help you learn blender"
        />
        <meta
          property="twitter:image"
          content="https://mblenderresourcesicomassets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
