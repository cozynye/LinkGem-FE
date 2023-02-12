import VerticalText from './verticalText/index';
import * as S from './main.styles';
import Twinkle from '../main/twinkle';
import ScrollTop from 'components/common/scrollTop';
import { useSetRecoilState } from 'recoil';
import { modalState } from 'store/store';

const MainUI = () => {
  const setIsOpenModal = useSetRecoilState(modalState);

  const openModal = () => {
    setIsOpenModal(true);
  };
  return (
    <>
      <S.Wrapper>
        <ScrollTop />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <S.Title>
            <span>WELCOME TO</span>
            <br />
            LINK GEM
          </S.Title>
          <S.TitleRemark>
            여기저기 흩어진 원석같은 링크들을
            <br />
            이제 링크잼으로 관리하세요
          </S.TitleRemark>
          <S.MainButton onClick={() => openModal()}>
            지금 바로 시작하기
          </S.MainButton>
        </div>
        <Twinkle />
      </S.Wrapper>
      <VerticalText />
    </>
  );
};

export default MainUI;
