import React, { useEffect, useState } from 'react'
import Plupload from '@/components/plagiarism/Plupload'
import { NextPage } from 'next'
import axios from 'axios'
import {HOST_3000,HOST_8000} from "@/components/common/Path"

const headers = {
  "Content-Type" : "multipart/form-data",
  //Authorization: "JWT fefege...",
}

const PlUploadPage: NextPage = () => {
  
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
    console.log(`업로드 된 표절용 악보 : ${(formData)}`)
    window.location.href = `${HOST_3000}/plagiarism/plagiarism`
    const res = await axios.post(`${HOST_8000}/rc`, formData, {headers})
  }
  
  const fixonSubmitFile =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fixData = new FormData()
    fixData.append('uploadImage', images[0])
    console.log('>>' + fixData)
    console.log(`업로드 된 원본 악보 : ${(fixData)}`)
    const res = await axios.post(`${HOST_8000}/rc`, fixData, {headers})
  }

  useEffect(()=> {
  } ,[])

  return (
    <Plupload onChange = {onLoadFile} onSubmit = {onSubmitFile} onSubmit1={fixonSubmitFile}/>
  )
}
export default PlUploadPage