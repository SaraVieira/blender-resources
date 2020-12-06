import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    router.push(`/search?query=${searchValue}`);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        search={search}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
