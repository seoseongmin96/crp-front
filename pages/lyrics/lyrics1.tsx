import React, {useState} from 'react';
import { NextPage } from 'next';
import Lyrics1 from '@/components/lyrics/Lyrics1';

const Lyrics1Page: NextPage = () =>{
    const onChange =(e: React.FormEvent<HTMLInputElement> ) => {
        e.preventDefault()
         
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault() 

    }

    return <Lyrics1 onChange={onChange} onSubmit={onSubmit}/>
}
export default Lyrics1Page;