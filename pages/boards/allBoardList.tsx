import React, {useEffect, useRef, useState } from 'react'
import AllBoardList from '@/components/boards/AllBoardList'
import { useAppDispatch } from '@/hooks'
import {  GetStaticProps,  InferGetStaticPropsType, NextPage } from 'next'
import { writeComment } from '@/modules/slices/boardSlce'
import axios from 'axios'
import { Article } from '@/modules/types'
import { readList } from '@/modules/apis/article'


const headers = {
  "Content-Type" : "application/json",
  Authorization: "JWT fefege...",

}

const AllBoardListPage: NextPage = () => {
  

  const [ data, setData ] = useState<Array<Article>>([])
  
  useEffect (() => {
    readList().then(resonse => {
      setData(resonse)
    })
} ,[])

  
  return (
    <AllBoardList data = {data} />
  )
}





export default AllBoardListPage