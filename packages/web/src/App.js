import React, { useState, useEffect } from "react";
import EmailInfo from "./EmailInfo";

import GravatarList from "./GravatarList";
import Header from "./Header";
import { calculateNumberOfImages } from "./utils";

const App = () => {
  const listener = () => setState({ images: calculateNumberOfImages() });

  const [state, setState] = useState(() => {
    window.addEventListener("scroll", listener);
    window.addEventListener("resize", listener);
    return { images: calculateNumberOfImages() };
  });

  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", listener);
      window.removeEventListener("resize", listener);
    };
  }, []);

  const getUrl = (url) => {
    setImgUrl(url);
  };
  return (
    <>
      <Header />
      <GravatarList state={state} getUrl={getUrl} />
    </>
  );
};

export default App;
