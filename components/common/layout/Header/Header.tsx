import React, {
  useEffect,
  memo,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useMemo,
} from 'react';

import Join from 'components/Join';
import Modal from 'components/common/Modal';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  recentLinkState,
  joinState,
  modalState,
  userInfo,
  linkSaveState,
  gemboxRefetch,
} from 'store/store';
import JoinButton from 'components/atom/Button/JoinButton';
import Image from 'next/image';
import useLogin from 'utils/useLogin';
import {
  HeaderContainer,
  LogoContainer,
  ButtonContainer,
  ImageContainer,
  LinkSaveButton,
  AlarmImage,
  Initial,
  SpaceCell,
  HeaderLinkSave,
  LinkText,
  MenuContainer,
  Menu,
  SettingBox,
  SettingModal,
  AlarmBox,
  PolygonBox2,
  HeaderBox,
} from './Header.style';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Axios from 'utils/Axios';
import { headerFormData } from './form';
import { v4 as uuidv4 } from 'uuid';
import AlarmModal from 'components/common/Modal/alarmModal';
import { throttle } from 'lodash';

function Header() {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpenModal, setIsOpenModal] = useRecoilState(modalState);
  const joinUserInfo = useRecoilValue(joinState);
  const [userInfoState, setUserInfoState] = useRecoilState(userInfo);
  const [isLogin, setIsLogin] = useState(false);
  const [urlText, setUrlText] = useState('');
  const [isLinkSave, setIsLinkSave] = useState(false);
  const [isSettingModal, setIsSettingModal] = useState(false);
  const [isAlarmModal, setIsAlarmModal] = useState(false);
  const setRecentLink = useSetRecoilState(recentLinkState);
  const setLinkSaveBar = useSetRecoilState(linkSaveState);
  const setBoxRefetch = useSetRecoilState(gemboxRefetch);
  const [isLatestInfo, setIsLatestInfo] = useState(false);

  const updateScroll = useMemo(
    () =>
      throttle(() => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
      }, 500),
    [scrollPosition]
  );

  const handleInputUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUrlText(e.target.value);
  };
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseJoinModal = () => {
    setIsOpenModal(false);
  };

  const handleSettingModal = () => {
    setIsSettingModal(!isSettingModal);
    setIsAlarmModal(false);
  };
  const handleAlarmModal = () => {
    setIsAlarmModal(!isAlarmModal);
    setIsSettingModal(false);
    setIsLatestInfo(false);
  };

  const handleLinkSave = async () => {
    try {
      if (isLinkSave) {
        if (!urlText) {
          setIsLinkSave(false);
          return;
        }
        await Axios(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/links`, {
          method: 'post',
          data: {
            url: urlText.includes('https://')
              ? urlText
              : urlText.includes('http://')
              ? `https://${urlText.split('http://')[1]}`
              : `https://${urlText}`,
          },
        });

        setUrlText('');
        setIsLinkSave(false);
        getLink();
        setBoxRefetch((prev) => !prev);
        setLinkSaveBar({ isVisible: true, isSuccess: true });
      } else {
        setIsLinkSave(true);
      }
    } catch (error) {
      console.error(error);
      setIsLinkSave(false);
      setLinkSaveBar({ isVisible: true, isSuccess: false });
    }

    setTimeout(() => {
      // setIsVisibleMessage(false);
      setLinkSaveBar({ isVisible: false, isSuccess: false });
    }, 3000);
  };

  const movePage = (url: string) => () => {
    router.push(`${url}`);
  };

  const getLink: () => void = async () => {
    try {
      const response = await Axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/links`,
        method: 'get',
        params: {
          page: 0,
          size: 8,
        },
      });
      const contents = await response?.data?.result?.contents;
      setRecentLink(contents);
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      handleLinkSave();
    }
  };

  const getLatestInfomation = async () => {
    try {
      const response = await Axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/notifications/latest-information`,
        method: 'get',
      });
      const contents = await response?.data?.result;
      if (contents.length > 0) setIsLatestInfo(true);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsLogin(useLogin());
    if (isLogin) getLatestInfomation();
    const auth = JSON.parse(localStorage.getItem('auth') as string);
    setUserInfoState({ ...auth });
    if (auth?.userPhase === 'READY') setIsOpenModal(true);
  }, [joinUserInfo.accessToken, isLogin]);

  useEffect(() => {}, [userInfoState, isLatestInfo]);
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  useEffect(() => {
    if (router.pathname !== '/') setIsOpenModal(false);
    setIsLogin(useLogin());
  }, [router.pathname]);
  return (
    <HeaderContainer login={isLogin} scrollPosition={scrollPosition}>
      <HeaderBox>
        <LogoContainer>
          <Link href="/">
            <ImageContainer>
              <img
                src="https://linkgem-storage.s3.ap-northeast-2.amazonaws.com/prod/image/static/linkgem-logo.svg"
                alt="linkgem-logo"
              />
            </ImageContainer>
          </Link>
          <span>Beta</span>
        </LogoContainer>
        {isLogin && (
          <MenuContainer>
            {headerFormData.map((li) => (
              <Menu
                onClick={movePage(li.url)}
                key={uuidv4()}
                current={
                  router.asPath === li.url ||
                  (li.url !== '/' && router.asPath.includes(li.url))
                }
              >
                {li.title}
              </Menu>
            ))}
          </MenuContainer>
        )}
        <SpaceCell />
        <ButtonContainer>
          {isLogin ? (
            <>
              <HeaderLinkSave isLinkSave={isLinkSave}>
                <Image
                  src="/images/icons/plus-icon.svg"
                  alt="plus-icon"
                  width={15}
                  height={16}
                />
                <LinkText
                  placeholder="https://..."
                  onChange={handleInputUrl}
                  value={urlText}
                  onKeyPress={handleKeyPress}
                />
                <img
                  src="/images/icons/link-x.svg"
                  alt="memo-img"
                  onClick={() => {
                    setIsLinkSave(false);
                    setUrlText('');
                  }}
                />
              </HeaderLinkSave>
              <LinkSaveButton onClick={() => handleLinkSave()}>
                {isLinkSave ? '' : '+ '} 링크저장
              </LinkSaveButton>
              <AlarmBox>
                <AlarmImage onClick={handleAlarmModal}>
                  {/* <img src="/images/icons/alarm-icon.svg" alt="linkgem-logo" /> */}
                  <img
                    src="https://linkgem-storage.s3.ap-northeast-2.amazonaws.com/prod/image/static/alarm-icon.svg"
                    alt="linkgem-logo"
                  />
                </AlarmImage>
                {isAlarmModal && (
                  <AlarmModal
                    isAlarmModal={isAlarmModal}
                    setIsAlarmModal={setIsAlarmModal}
                  />
                )}
                {isLatestInfo && (
                  <div className="new-alarm-alert">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#41FB6A" />
                    </svg>
                  </div>
                )}
              </AlarmBox>

              <SettingBox>
                <Initial>
                  <img
                    alt="profile-image"
                    src={
                      userInfoState.profileImageUrl ||
                      '/images/header-profile-default.svg'
                    }
                    onClick={handleSettingModal}
                  ></img>
                </Initial>
                {isSettingModal && (
                  <SettingModal isSettingModal={isSettingModal}>
                    <PolygonBox2>
                      <img
                        src="/images/icons/header-Polygon 1.svg"
                        alt="linkgem-logo"
                      />
                    </PolygonBox2>
                    <p>
                      <img
                        alt="profile-image"
                        src={
                          userInfoState.profileImageUrl ||
                          '/images/header-profile-default.svg'
                        }
                      />
                      <span>{userInfoState.nickname}</span>
                    </p>
                    <hr />
                    <Link href="/setting">
                      <p onClick={handleSettingModal}>
                        <img
                          alt="profile-image"
                          src={'/icons/header-setting-icon.svg'}
                        />
                        <span>설정</span>
                      </p>
                    </Link>
                  </SettingModal>
                )}
              </SettingBox>
            </>
          ) : (
            <JoinButton
              onClick={handleOpenModal}
              backgroundColor="#41FB6A"
              color="#1A1B1D"
              width="120px"
              height="48px"
              text="시작하기"
              fontSize="18px"
              type=""
              hoverColor="#1CE047"
            />
          )}
        </ButtonContainer>
        {!isLogin && (
          <Modal
            visible={isOpenModal}
            handleCloseModal={handleCloseJoinModal}
            setIsOpenModal={setIsOpenModal}
          >
            <Join />
          </Modal>
        )}
      </HeaderBox>
    </HeaderContainer>
  );
}

export default memo(Header);
