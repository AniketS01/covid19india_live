import axios from 'axios'

const url = 'http://covid19-india-adhikansh.herokuapp.com/states';

export const fetchData = async() => {
    try {
       const {data:{state}} = await axios.get(url); 

       const modifiedData = {state}
         return modifiedData
    } catch (error) {
        console.error(error.message)
    }
}
