import React from "react";

const EmailInfo = ({ imgUrl }) => {
  return <div>{imgUrl || "email@gmail.com"}</div>;
};

export default EmailInfo;
