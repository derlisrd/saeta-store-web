import axios from "axios";

const BASE_API_URL = process.env.BASE_API_URL || 'https://saeta.dev.saeta.uk/ecommerce'
const X_API_KEY = process.env.API_KEY || 'WKvn3xFC3JflK8lkIRHVSe60hBFSEjApMZyCnEdwUc'

export const BASE = axios.create({ baseURL: BASE_API_URL , headers: { 
    'x-api-key': X_API_KEY, 
    Accept: 'application/json'
} });
