import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://devapi.innotraveltech.com',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'apikey': '88853344696524514',
    'secretecode': '9eVgaK8l1stXNzz4YC5KiOBotf9BOUINpK3g7kUI9TJ',
  },
});

export default axiosInstance;