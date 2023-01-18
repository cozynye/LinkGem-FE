import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loadingx from 'components/atom/Loading/Loadingx';
import Axios from 'utils/Axios';

function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  let id = 0;
  const userWithdrawal = async () => {
    const location = window.location.href.split('=')[1];
    const token = location.split('&')[0];
    if (localStorage) {
      id = Number(JSON.parse(localStorage.getItem('auth') as string)?.id);
    }
    localStorage.clear();
    setLoading(false);
    try {
      await Axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/oauth/leave`,
        method: 'post',
        data: {
          code: token,
          providerName: 'naver',
          userId: id,
        },
      });
      setLoading(false);
      localStorage.clear();
      router.push('/');
    } catch (error) {
      console.error('에러가 발생했습니다', error);
    }
  };

  useEffect(() => {
    userWithdrawal();
  }, []);

  return <div>{loading && <Loadingx />}</div>;
}

export default Index;
