//export default 'This is a exported string';
import axios from 'axios';
export default class Search{
    constructor(query){
        this.query= query;
    }
    async getResults(){
        //query=this.query;
        try{
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
        this.result= res.data.recipes;
        console.log(this.result);
        console.log(res);
        }catch(error){
            alert(error);
        }
    }
}





