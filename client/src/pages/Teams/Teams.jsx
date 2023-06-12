import React from "react";
import TeamWorking from "../../components/TeamComponets/TeamWorking";
import { Helmet } from "react-helmet-async";

const Teams = () => {
  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>ITS Teams</title>
        <link rel="notImportant" href="https://www.chipotle.com" />
        <meta name="whatever" value="notImportant" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta property="og:title" content="ITS Society Teams Member" />
      </Helmet>
      <TeamWorking />
    </div>
  );
};

export default Teams;
