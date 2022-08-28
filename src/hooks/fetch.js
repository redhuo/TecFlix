import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.5:9000/';

const useAxios = (initParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState(initParams);

  const fetchData = async params => {
    if(params) {
      try {
        const result = await axios.request(params);
        setResponse(result.data);
        setError('');
      } 
      catch( error ) {
        setError(error);
      } 
      finally {
        setLoading(false);
      }
    } 
  };

  useEffect(() => {
    setLoading(true);
    fetchData(params);
  }, [params])
  
  return [ response, error, loading, setParams ];
}

export default useAxios;