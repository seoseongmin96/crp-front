import { Article } from '@/modules/types'
import React from 'react'
import Image from 'next/image'

export interface Props  {
  
  data : Article[]
}

const AllBoardList: React.FC<Props> = ({data} : Props) => {
  return (
    <div className='container'>
    <div>
      <h1 className='text-center'># CRP 사용자들 #</h1>
    </div>
    <br/>
    {data.map((article: Article) => 
    
    <div className="row mb-2" key={article.articleId}>
    <div className="col-12">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <input type='hidden' key={article.articleId}/>
          <strong className="d-inline-block mb-2 text-primary">
            <h5>{article?.nickname}</h5>
          </strong>
          <input type = 'hidden' name = 'articleId' value = {article.articleId}/>
          <h3 className="mb-0">
            {article?.title}
          </h3>
          <div className="mb-1 text-muted">
          <h5> {article?.writtenDate} </h5>
          </div>
          <p key={article.content} className="card-text mb-auto">{article?.content}</p>
          
          
        </div>
        <div className="col-auto d-none d-lg-block">
          <Image src={article?.picture} alt="board"/>
        </div>
        
      </div>
      </div>
      </div>
      )}
    </div>
  )
}

  
export default AllBoardList