import React, {useEffect, useState} from "react"

type Props = {
    onSubmit : (e: React.FormEvent<HTMLFormElement> ) => void
    onChange : (e: React.FormEvent<HTMLInputElement> | any ) => void
}
const Plagiarism: React.FC<Props> = ({onChange, onSubmit}) => {



   
    return(
    <div>
    <form onSubmit={onSubmit}>
        <div >
            <img src="https://cdn.imweb.me/upload/S20200724abcb07db26ecf/0837716fc9c26.jpeg" style={{width:500+"px"}} alt=" score"/> &nbsp; &nbsp; &nbsp;
            <img src="https://t1.daumcdn.net/cfile/blog/216726375580C95335" style={{width:500+"px"}} alt="score"/>
        </div>
        <div className="col-md-3 text-center m-auto">
        <br/><br/>
        <h5>검사 결과 ... 악보와 XX.X% 유사합니다.</h5> <br/> <br/>
        </div>

        
</form>
    </div>)
}

export default Plagiarism;