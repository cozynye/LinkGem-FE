import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loadingx from 'components/atom/Loading/Loadingx';
import { joinState } from 'store/store';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const setUserState = useSetRecoilState(joinState);

  const getUserInfo = async () => {
    const location = window.location.href.split('=')[1];
    const token = location.split('&')[0];
    if (token === 'access_denied') router.push('/');
    localStorage.removeItem('auth');
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/oauth/login/naver`,
        {
          params: {
            code: token,
          },
        }
      );

      const result = await response.data;
      const userInfo = result?.result;
      localStorage.setItem('auth', JSON.stringify(userInfo));
      localStorage.setItem('accessToken', userInfo.accessToken);
      localStorage.setItem('refreshToken', userInfo.refreshToken);
      setUserState(userInfo);
      setLoading(false);
      router.push('/');
    } catch (error) {
      console.error('에러가 발생했습니다', error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return <div>{loading && <Loadingx />}</div>;
}

export default Index;
