import React, { useState } from "react";

import { gravatarUrl, IMAGE_SIZE } from "./utils";

const Gravatar = () => {
  const data = gravatarUrl(IMAGE_SIZE);
  const [isloading, setIsloading] = useState(true);
  return (
    <>
      {isloading ? <p>Loading...</p> : <></>}
      <img
        alt="Gravatar"
        src={data.url}
        style={{ display: isloading ? "none" : "block" }}
        onLoad={() => setIsloading(false)}
        onClick={(event) => {
          event.target.classList.toggle("is-highlighted");
          alert(data.email);
        }}
      />
    </>
  );
};

export default React.memo(Gravatar);
