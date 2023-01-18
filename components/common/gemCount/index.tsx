import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { gemboxRefetch } from 'store/store';
import Axios from 'utils/Axios';

interface IPropsGemCount {
  gemBoxId?: number;
  isFavorites?: boolean;
  hasMemo?: boolean;
}

const GemCount = (props: IPropsGemCount) => {
  const [count, setCount] = useState<number>(0);
  const boxRefetch = useRecoilValue(gemboxRefetch);
  console.log('Dighdigh!!!!');

  const params: IPropsGemCount = {};
  if (props.isFavorites) params.isFavorites = props.isFavorites;
  if (props.hasMemo) params.hasMemo = props.hasMemo;

  useEffect(() => {
    let unmounted = false;
    const source = axios.CancelToken.source();

    Axios({
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/links`,
      method: 'get',
      params,
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
  }, [boxRefetch]);

  return <span>({count})</span>;
};

export default GemCount;
