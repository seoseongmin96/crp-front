import React, { useEffect, useState } from 'react'
import AddBoard from '@/components/boards/AddBoard'
import { useAppDispatch } from '@/hooks'
import { NextPage } from 'next'
import { writeBoard } from '@/modules/slices/boardSlce'

import { Article } from '@/modules/types'

const AddBoardPage: NextPage = () =>  {
  const date = new Date();
  const writtenDate = date.toDateString()
  const [write, setWrite] = useState<Article>({ articleId: 0, userId : 0, title:'', content: '',
  picture: '', writtenDate: '', pictureName: ''
})
  const dispatch = useAppDispatch()
  


  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setWrite({...write, [name]: value})
  }

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() 
    dispatch(writeBoard(write))
  }

  return (
    <AddBoard onChange={onChange} onSubmit = {onSubmit}/>
  )
}
export default AddBoardPage