import React, {useEffect, useState } from 'react'
import AllBoardList from '@/components/boards/AllBoardList'
import { NextPage } from 'next'
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