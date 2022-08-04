import React, { useEffect, useState } from "react";
import Comupload from "@/components/compose/Comupload";
import { NextPage } from "next";
import axios from "axios";
import { HOST_3000, HOST_8000 } from "@/components/common/Path";

const headers = {
  "Content-Type": "multipart/form-data",
  Accept: "application/json",
  //Authorization: "JWT fefege...",
};
const onSubmitFile = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  window.location.href = "/compose/complayer";
  
};

const ComUploadPage: NextPage = () => {
  return <Comupload onSubmit={onSubmitFile} />;
};
export default ComUploadPage;
