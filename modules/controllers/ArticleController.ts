import { Article } from "@/modules/types";
import axios, { AxiosResponse } from "axios";
import {HOST_8000} from "@/components/common/Path"

const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
} 
export class ArticleController {
    
    
    async writeArticle(writeData: Article) : Promise<any>  {
            try {
                await axios.post(`${HOST_8000}/articles/write`, writeData, {headers})            
            } catch (err) {
                return err;
            }
        }
    
    
    async removeArticle (removeForData : Article) : Promise<any> {
        try{
            await axios.delete(`${HOST_8000}/articles/delete`, {data : removeForData})
        } catch (err) {
            return(err);
        }
    }
    
    async writeComment (writeComment : Article) : Promise<any> {
        try{
            console.log('>>')
            await axios.post(`${HOST_8000}/articles/write`, writeComment, {headers})
        } catch (err){
            return(err)
        }
    }
    
    async readList () : Promise<any> {
        try{
            const response = await axios.get(``)
            return response.data
        } catch (err) {
            return(err)
        }
    }
    
 
}

