import { Base_URL } from "@/api/ProductApi";
import axios from "axios";

//Data fetching based on gender
export const fetchDataByGender = async (url: string,gender:string) => {
  const { data } = await axios.get(`${url}?gender=${gender}`);
  return data;
};

//Overall product fetch
export const fetchData = async ()=>{
  const {data}=await axios.get(Base_URL)
  return data
}


//Product fetch based on search query
export const fetchProduct = async (query:string)=>{
   if (!query) return []; 
  const cleanQuery = encodeURIComponent(query.trim().toLowerCase());
  const res = await axios.get(`${Base_URL}?name_like=${cleanQuery}`);
  return res.data;
}

