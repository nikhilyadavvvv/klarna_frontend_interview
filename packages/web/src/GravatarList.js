import React from "react";

import Gravatar from "./Gravatar";

const GravatarList = ({ state, getUrl }) => {
  return Array.apply(null, Array(state.images)).map((_, index) => (
    <Gravatar key={index} getUrl={getUrl} />
  ));
};
export default GravatarList;
