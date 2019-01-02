import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () =>  async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
  }

  export const fetchHello = () =>  async dispatch => {
    console.log('hello there');
    const res = await axios.get('/api/hello')
    console.log('RESPOISEf', res.data);
  }