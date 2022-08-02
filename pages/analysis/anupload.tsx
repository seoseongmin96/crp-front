import React, { useEffect, useState } from 'react'
import Anupload from '@/components/analysis/Anupload'
//import ImageUploading, {ImageListType} from "react-images-uploading"
import { NextPage } from 'next'
import axios from 'axios'
import { HOST_8000 ,HOST_3000 } from '@/components/common/Path'


const headers = {
  "Content-Type" : "multipart/form-data",
  'Accept': 'application/json'
  //Authorization: "JWT fefege...",
}
const onSubmitFile = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  window.location.href = `${HOST_3000}/analysis/analysis`
}



const AnUploadPage: NextPage = () => {
  
  

  return (
    <Anupload onSubmit={onSubmitFile}/>
  )
}
export default AnUploadPage

