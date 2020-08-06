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
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
  });
}

export default api;
