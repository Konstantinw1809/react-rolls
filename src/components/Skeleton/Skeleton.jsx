import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={350}
    height={508}
    viewBox="0 0 350 508"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="42" y="0" rx="5" ry="5" width="265" height="265" />
    <rect x="25" y="288" rx="5" ry="5" width="300" height="25" />
    <rect x="149" y="353" rx="5" ry="5" width="50" height="14" />
    <rect x="26" y="386" rx="5" ry="5" width="120" height="38" />
    <rect x="236" y="378" rx="5" ry="5" width="40" height="14" />
    <rect x="235" y="399" rx="5" ry="5" width="90" height="24" />
    <rect x="25" y="445" rx="5" ry="5" width="300" height="43" />
  </ContentLoader>
);

export default MyLoader;
