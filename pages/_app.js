import React from "react";
import App from "next/app";
import { Devtools } from "@ui-devtools/tailwind";
import "../styles/tailwind.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Devtools>
        <Component {...pageProps} />
      </Devtools>
    );
  }
}

export default MyApp;
