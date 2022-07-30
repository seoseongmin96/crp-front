import React, { useEffect, useState } from 'react'
import Lyupload from '@/components/lyrics/Lyupload'
import { NextPage } from 'next'
import axios from 'axios'
import {HOST_3000,HOST_8000} from "@/components/common/Path"

const headers = {
  "Content-Type" : "multipart/form-data",
  //Authorization: "JWT fefege...",
}

const LyUploadPage: NextPage = () => {
  
  const [images, setImages] = useState('')

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
    console.log(`업로드 된 작사 악보 : ${(formData)}`)
    window.location.href = `${HOST_3000}/lyrics/lyrics`
    const res = await axios.post(`${HOST_8000}/rc`, formData, {headers})
    
  }
  
  
  
  
  
  useEffect(()=> {
  } ,[])

  return (
    <Lyupload onChange = {onLoadFile} onSubmit = {onSubmitFile}/>
  )
}
export default LyUploadPage