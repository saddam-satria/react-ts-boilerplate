import axios from 'axios';
import { API_URL } from '../commons/constant';

export default axios.create({
  baseURL: API_URL,
});