import axios from "axios";

const api = axios.create({
  baseURL: 'https://httpbin.org',
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
});

export const requestHandler = (requesData) => {
  return axios({
    method: requesData.apiAction,
    url: requesData.apiUrl,
    // data: ''
  }).then( (response) => {
    return response;
  }).catch( (error) => {
    const errorMsg = 'Network Error. Check console for more Errors';

    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      const resError = { 
        'data' : error.response.data ? error.response.data : errorMsg,
        'status' : error.response.status ? error.response.status : '400'
      };

      return resError;
    } else if (error.request) {
      console.log(error.request);
      const reqError ={
        'data' : errorMsg,
        'status' : '400'
      };

      return reqError;
    } else {
      console.log('Error', error.message);
      const reqError = {
        'data' : error.message ? error.message : errorMsg,
        'status' : '400'
      };

      return reqError;
    }
  });
}

export default api;
