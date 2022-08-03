import React from "react";
import Anupload from "@/components/analysis/Anupload";
import { NextPage } from "next";
import { HOST_3000 } from "@/components/common/Path";

const headers = {
  "Content-Type": "multipart/form-data",
  Accept: "application/json",
};

const onSubmitFile = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  window.location.href = `${HOST_3000}/analysis/analysis`;
};

const AnUploadPage: NextPage = () => {
  return <Anupload onSubmit={onSubmitFile} />;
};
export default AnUploadPage;
