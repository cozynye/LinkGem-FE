import Header from './Header';
import Footer from './Footer';
import Sidebar from './sidebar';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ReactChild } from 'react';
import { size } from 'styles/variable';
import { BottomBar } from 'components/common/bottomBar';
import MobileModal from 'components/common/Modal/MobileModal/MobileModal';
import { useRecoilState } from 'recoil';
import { isMmVisible, linkSaveState } from 'store/store';
import LinkSave from 'components/mobile/linksave';
import {
  FailMessage,
  LinkSaveSuccessBar,
  SuccessMessage,
  XIconImage,
} from 'components/mobile/linksave/LinkSave.style';
import Image from 'next/image';

const HIDE_SIDEBAR = ['/'];

interface IPropsLayout {
  children: ReactChild;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BodyWrapper = styled.div<{ pathname: string }>`
  margin-top: 84px;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) =>
    props.pathname === 'setting' ? '#faf5ff' : '#ffffff'};

  @media screen and (max-width: ${size.tabletS}) {
    margin-top: 64px;
  }
`;

const Body = styled.section<{ pathname: string }>`
  margin: 0 auto;
  max-width: ${(props) => (props.pathname === '' ? '100%' : '1200px')};
  width: 100%;
  height: 100%;

  display: flex;

  @media screen and (max-width: ${size.tabletS}) {
    /* padding-top: 34px; */
  }
`;

const Layout = (props: IPropsLayout) => {
  const router = useRouter();
  const isHideSidebar = HIDE_SIDEBAR.includes(router.asPath);
  const pathname = router.pathname.split('/')[1];
  const [isMdVisible, setIsMdVisible] = useRecoilState(isMmVisible);
  const [linkSaveBar, setLinkSaveBar] = useRecoilState(linkSaveState);
  const onCloseMessage = () => {
    // setIsVisibleMessage(false);
    setLinkSaveBar({ ...linkSaveBar, isSuccess: false, isVisible: false });
  };
  return (
    <Wrapper>
      <Header />
      <BodyWrapper pathname={pathname}>
        <Body pathname={pathname}>
          {!isHideSidebar && <Sidebar />}
          {props.children}
        </Body>
      </BodyWrapper>
      <BottomBar />
      <Footer />
      {isMdVisible && (
        <MobileModal
          visible={isMdVisible}
          handleModal={() => setIsMdVisible((prev) => !prev)}
          setIsOpenModal={setIsMdVisible}
          isCloseButton={false}
        >
          <LinkSave />
        </MobileModal>
      )}
      {/* TODO : 스낵바 추후 수정해야함 , 레이아웃 컴포넌트 정리, 스낵바 위치 정리 , 링크 삭제나 추가등 하단에 차례로 쌓이게 */}
      {linkSaveBar.isVisible && (
        <LinkSaveSuccessBar
          isVisibleMessage={linkSaveBar.isVisible}
          isSuccessLink={linkSaveBar.isSuccess}
        >
          {linkSaveBar.isSuccess ? (
            <SuccessMessage>
              링크 저장 완료!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <XIconImage onClick={onCloseMessage}>
                <Image
                  src="/images/icons/link-x.svg"
                  alt="plus-icon"
                  width={12}
                  height={11}
                />
              </XIconImage>
            </SuccessMessage>
          ) : (
            <>
              <FailMessage>
                링크 저장 실패. 다시 한번 시도해 주세요.
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <XIconImage onClick={onCloseMessage}>
                  <Image
                    src="/images/icons/link-x.svg"
                    alt="plus-icon"
                    width={12}
                    height={11}
                  />
                </XIconImage>
              </FailMessage>
            </>
          )}
        </LinkSaveSuccessBar>
      )}
    </Wrapper>
  );
};

export default Layout;
