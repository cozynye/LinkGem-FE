import axios from 'axios';
import { useEffect, useState } from 'react';
import Axios from './Axios';

export const useQuery = (apiName: string, params?: object) => {
  const [state, setState] = useState<any>({
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    let unmounted = false;
    const source = axios.CancelToken.source();

    Axios({
      cancelToken: source.token,
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/${apiName || ''}`,
      method: 'get',
      params,
    })
      .then((res) => {
        if (!unmounted) {
          setState({ ...state, data: res.data.result });
        }
      })
      .catch(() => {
        console.warn = console.log = () => {};
      });

    return () => {
      unmounted = true;
      source.cancel('cancle');
    };
  }, [trigger]);

  return { ...state, refetch };
};
