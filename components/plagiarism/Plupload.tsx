import React, { useState } from 'react'
import style from '@/styles/Table.module.css'


type Props = {
  onChange : (e: React.FormEvent<HTMLInputElement> | any ) => void
  onSubmit : (e: React.FormEvent<HTMLFormElement> ) => void
  onSubmit1 :(e: React.FormEvent<HTMLFormElement> ) => void
}

const PlUpload: React.FC<Props> = ({onChange, onSubmit, onSubmit1 }: Props) => {
  

  return (
  <div>
    <form onSubmit={onSubmit1}>
    <div>
      <div className="col-md-3 text-center m-auto">
    <h3 className={style.h3}> <br/>
      원본용 악보를 업로드 하세요
    </h3>
    </div>
    <div className="input-group p-5">
      <input onChange={onChange} type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
      <button className="btn btn-outline-secondary" type="submit" id="inputGroupFileAddon04">
        <h5>악보 등록</h5>
      </button>
    </div>
    </div>
    </form>

    <form onSubmit={onSubmit}>
    <div>
      <div className="col-md-3 text-center m-auto">
    <h3 className={style.h3}> <br/>
      표절용 악보를 업로드 하세요
    </h3>
    </div>
    <div className="input-group p-5">
      <input onChange={onChange} type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
      <button className="btn btn-outline-secondary" type="submit" id="inputGroupFileAddon04">
        <h5>악보 등록</h5>
      </button>
    </div>
    </div>
    </form>
    </div>
  )
}
export default PlUpload