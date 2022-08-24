import React, { useEffect, memo, useState } from 'react';
import Join from 'components/Join';
import Modal from 'components/common/Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { joinState, modalState } from 'store/store';
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
  LogoImage,
  UrlCategory,
  SpaceCell,
  UrlCategoryItem,
} from './Header.style';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const [isOpenModal, setIsOpenModal] = useRecoilState(modalState);
  const joinUserInfo = useRecoilValue(joinState);
  const [isLogin, setIsLogin] = useState(false);
  const history = useRouter();
  const [path, setPath] = useState('/');

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseJoinModal = () => {
    setIsOpenModal(false);
  };
  console.log(joinUserInfo);
  useEffect(() => {
    if (joinUserInfo.accessToken) {
      setIsOpenModal(true);
    }
    setIsLogin(useLogin());
  }, [joinUserInfo.accessToken, isLogin]);

  useEffect(() => {
    setIsLogin(useLogin());
    setPath(history.pathname);
  }, [history.pathname]);

  console.log('path');
  console.log(path);
  return (
    <HeaderContainer login={isLogin}>
      <LogoContainer>
        <Link href="/">
          <ImageContainer>
            <LogoImage
              src="/static/image/Linkgem-Logo.svg"
              alt="linkgem-logo"
            />
          </ImageContainer>
        </Link>
        <span>Beta</span>
      </LogoContainer>
      {isLogin ? (
        <UrlCategory>
          <Link href="/">
            <a>
              <UrlCategoryItem current={path === '/'}>Home</UrlCategoryItem>
            </a>
          </Link>
          <Link href="/gembox">
            <a>
              <UrlCategoryItem current={path === '/gembox'}>
                My Gem Box
              </UrlCategoryItem>
            </a>
          </Link>
        </UrlCategory>
      ) : (
        ''
      )}

      <SpaceCell />
      <ButtonContainer>
        {isLogin ? (
          <>
            <LinkSaveButton>+링크저장</LinkSaveButton>
            <AlarmImage>
              <Image
                priority
                src="/static/image/icons/alarm-icon.svg"
                alt="linkgem-logo"
                width={26}
                height={28}
              />
            </AlarmImage>
            <Link href="/setting">
              <Initial></Initial>
            </Link>
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
        <Modal visible={isOpenModal} handleCloseModal={handleCloseJoinModal}>
          <Join />
        </Modal>
      )}
    </HeaderContainer>
  );
}

export default memo(Header);
