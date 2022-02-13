import React from "react";
import Head from "next/head";
import "../styles/tailwind.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Blender Resources</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
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
          defer
          data-domain="blenderresources.com"
          src="https://analytics.iamsaravieira.com/js/plausible.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
