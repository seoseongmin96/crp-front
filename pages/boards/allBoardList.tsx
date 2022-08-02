import React, {useEffect, useState } from 'react'
import AllBoardList from '@/components/boards/AllBoardList'
import { NextPage } from 'next'
import { Article } from '@/modules/types'
import { ArticleController } from '@/modules/controllers/ArticleController'

const headers = {
  "Content-Type" : "application/json",
  Authorization: "JWT fefege...",

}

const AllBoardListPage: NextPage = () => {
  

  const [ data, setData ] = useState<Array<Article>>([])
  
  useEffect (() => {
    const articleController = new ArticleController();
    articleController.readList().then(resonse => {
      setData(resonse)
    })
} ,[])

  
  return (
    <AllBoardList data = {data} />
  )
}

export default AllBoardListPage