import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { gemboxRefetch } from 'store/store';
import Axios from './Axios';

export const getTotalLinkCount = () => {
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [boxRefetch] = useRecoilState(gemboxRefetch);
  const fetchLinkData = async () => {
    try {
      const result = await Axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/links`,
        method: 'get',
      });
      setTotalCount(result?.data?.result?.totalCount);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLinkData();
  }, [boxRefetch]);

  return totalCount;
};
