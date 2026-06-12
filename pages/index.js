import Features from "@/components/templates/homes/Features";
import Gallery from "@/components/templates/homes/Gallery";
import Homes from "@/components/templates/homes/Homes";
import Story from "@/components/templates/homes/Story";
import React from "react";

function index() {
  return (
    <>
      <Features />
      <Story />
      <Homes />
      <Gallery />
    </>
  );
}

export default index;
