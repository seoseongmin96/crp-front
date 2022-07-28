export interface Article {  
    userId?: number,
    nickname? : string,
    articleId?: number ,
    title?: string,
    content?: string,
    picture?: FileList | string | any,
    writtenDate?: string
    open? : string,
    comment? : string,
    qna? : string,
    pictureName?: string,
    size? : number
   
  }

  export interface ArticleState{
    data: Article,
    status: 'successed' | 'loading' | 'failed' 
    error: null
  }

  



