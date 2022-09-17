import axios from 'axios';

const Axios = axios.create({
  baseURL: `${process.env.SERVER_URL}/api/`,
  withCredentials: false,
  timeout: 4000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

interface success {
  data: {
    data: Array<Object>;
    meta: Object;
  };
}

interface error {
  response: {
    data: any;
  };
}

const success = (res: success) => {
  return res.data;
};

const error = (err: error) => {
  return err.response.data;
};

Axios.interceptors.response.use(success, error);

export default Axios;
