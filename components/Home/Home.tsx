import React, { useEffect, useState } from 'react';
import LinkSave from 'components/LinkSave';
import RecentSaveLink from 'components/RecentSaveLink';
import GemCrewPick from 'components/GemCrewPick';
import { useRecoilState } from 'recoil';
import { recentLinkState } from 'store/store';
import Axios from 'utils/Axios';
import LinkCopy from 'components/LinkCopy';
import Modal from 'components/common/Modal/HomeModal';
import styled from 'styled-components';
import { size } from 'styles/variable';

function Home() {
  const [recentLink, setRecentLink] = useRecoilState(recentLinkState);
  const [isCopy, setIsCopy] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
    getLink();
  };

  const copyToClipboard = (val: string) => {
    const element = document.createElement('textarea');
    element.value = val;
    element.setAttribute('readonly', '');
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    document.body.appendChild(element);
    element.select();
    const returnValue = document.execCommand('copy');
    document.body.removeChild(element);

    if (!returnValue) {
      console.error('복사하기가 실패했습니다');
    }
    setIsCopy(true);

    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };
  const getLink: () => void = async () => {
    try {
      const response = await Axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/links`,
        method: 'get',
        params: {
          page: 0,
          size: 4,
        },
      });

      const contents = await response?.data?.result?.contents;
      setRecentLink(contents);
    } catch (error: any) {
      // const originalRequest = error.config;
      // if (error.response?.data?.code === 'ACCESS_TOKEN_EXPIRED') {
      //   const response = await axios.post(
      //     '/api/v1/user/oauth/reissue',
      //     {},
      //     {
      //       headers: {
      //         'ACCESS-TOKEN': user.accessToken,
      //         'REFRESH-TOKEN': user.refreshToken,
      //       },
      //     }
      //   );
      //   const accessToken = await response?.data?.result?.accessToken;
      //   localStorage.setItem('accessToken', accessToken);
      //   setUser({ ...user, accessToken });
      //   axios(originalRequest);
      // }
      console.error(error);
    }
  };
  useEffect(() => {
    getLink();
  }, []);

  return (
    <HomeContainer>
      <LinkSave getLink={getLink} recentLink={recentLink} />
      <RecentSaveLink
        recentLink={recentLink}
        getLink={getLink}
        copyToClipboard={copyToClipboard}
        handleModal={handleModal}
      />
      <GemCrewPick copyToClipboard={copyToClipboard} getLink={getLink} />

      {isCopy && <LinkCopy setIsCopy={setIsCopy} />}
      {isOpenModal && (
        <Modal
          visible={isOpenModal}
          handleModal={handleModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${size.desktop}) {
  }

  @media screen and (max-width: ${size.tabletL}) {
    padding-left: 24px;
    padding-right: 24px;
    max-width: 100%;
    width: 100%;
  }

  @media screen and (max-width: ${size.tabletS}) {
    padding-top: 20px;
  }

  @media screen and (max-width: ${size.mobile}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
