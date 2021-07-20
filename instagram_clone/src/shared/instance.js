import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:4000/"
  baseURL: "http://52.79.234.172/"
});

export function getCookie(cName) {
  cName = cName + '=';

  var cookieData = document.cookie;
  var start = cookieData.indexOf(cName);
  var cValue = '';

  if(start !== -1){
    start += cName.length;
    var end = cookieData.indexOf(';', start);
    if(end === -1)end = cookieData.length;
    cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
};
  
const USER_TOKEN = getCookie("USER_TOKEN");

instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export default instance;