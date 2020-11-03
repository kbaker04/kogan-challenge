import axios from "axios";

//create a default axios instance - proxy set in package json used for dev
export default axios.create({
  baseURL: process.env.REACT_APP_PRODUCTS_API,
});
