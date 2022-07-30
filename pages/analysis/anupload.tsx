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

const AnUploadPage: NextPage = () => {
  
  const [images, setImages] = useState('')
  const maxNumber = 69;

  const onLoadFile = (e: React.FormEvent<HTMLInputElement> | any ) => {
    e.preventDefault()
    const file = e.target.files[0]
    console.log(file)
    setImages(file)
     
  }

  const onSubmitFile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('uploadImage', images[0])
    console.log('>>' + formData)
    console.log(`업로드 된 분석 악보 : ${(formData)}`)
    window.location.href =`${HOST_3000}/analysis/analysis`
    const res = await axios.post(`${HOST_8000}/files/upload`, formData, {headers})
  }
  

  
  useEffect(()=> {
  } ,[])

  return (
    <Anupload onChange = {onLoadFile} onSubmit = {onSubmitFile}/>
  )
}
export default AnUploadPage

