import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const uploadFile = (file) => async dispatch => {
  const data = new FormData();
  data.append('file', file, 'list.xlsx');
  const res = await axios.post('/upload', data);
  console.log(res);
}

export const fetchHello = () => async dispatch => {
  const res = await axios.get('/api/hello');
  console.log('This is hello: ', res);
}