import React, { useEffect } from "react";
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

  return <Component {...pageProps} />;
};

export default App;
