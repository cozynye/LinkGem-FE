import axios from 'axios';
import { useEffect, useState } from 'react';

interface IPropsGemCount {
  id: number;
}

const GemCount = (props: IPropsGemCount) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let unmounted = false;
    const source = axios.CancelToken.source();

    axios
      .get(`/api/v1/links`, {
        cancelToken: source.token,
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        params: {
          gemBoxId: props.id,
        },
      })
      .then((res) => {
        if (!unmounted) {
          setCount(res?.data.result.totalCount);
        }
      })
      .catch(() => {
        console.warn = console.log = () => {};
      });
    return () => {
      unmounted = true;
      source.cancel('cancle');
    };
  }, []);

  return <span>({count})</span>;
};

export default GemCount;
