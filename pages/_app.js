import React from "react";
import Head from "next/head";
import "../styles/tailwind.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Blender Resources</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📚</text></svg>"
        ></link>
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
          content="https://storage.googleapis.com/screenshots_blender_resources/share.png"
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
          content="https://storage.googleapis.com/screenshots_blender_resources/share.png"
        />
        <script
          src="https://cdn.usefathom.com/script.js"
          data-site="YHNPIPAF"
          defer
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
