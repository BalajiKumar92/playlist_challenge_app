import axios from 'axios';

export default function fetchApi(){
  axios.get('http://localhost:5000/library')
    .then(response => {
      console.log(response.data);
      return response.data
    })
    .catch(error => {
      console.log(error);
    });
}