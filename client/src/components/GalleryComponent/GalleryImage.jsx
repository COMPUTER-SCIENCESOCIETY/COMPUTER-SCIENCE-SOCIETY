import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./Photo";
import { Helmet } from "react-helmet-async";

const GalleryImage = () => {
  return (
    <div className="container mx-auto pb-14">
        <Helmet prioritizeSeoTags>
        <title>ITS Gallery</title>
        <link rel="notImportant" href="https://www.chipotle.com" />
        <meta name="whatever" value="notImportant" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta property="og:title" content="ITS Society Teams Member" />
      </Helmet>
        <div>
            <p className="text-2xl font-semibold pt-2 pb-2">ITS Gallery</p>
        </div>
      <Gallery photos={photos} />
    </div>
  );
};

export default GalleryImage;
