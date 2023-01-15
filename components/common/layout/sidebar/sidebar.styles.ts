import styled from 'styled-components';
import { size } from 'styles/variable';

interface IPropsGemboxStyles {
  isChecked?: boolean;
  error?: string | boolean;
  isMore?: boolean;
}

export const Sidebar = styled.ul`
  min-width: 184px;
  margin-top: 64px;
  margin-right: 72px;
  padding-left: 24px;
  @media screen and (max-width: ${size.mobile}) {
    padding-left: 20px;
  }

  @media screen and (max-width: ${size.tabletS}) {
    display: none;
  }
`;

export const ItemWrapper = styled.div`
  width: 160px;
  border-radius: 8px;
  background-color: #f3edff;
`;

export const SidebarIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const Item = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const ItemTitle = styled.div`
  font-family: 'Spoqa Han Sans';
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #1a1b1d;
`;

export const GemboxList = styled.li`
  border-bottom: 1px solid #cecece;
`;

export const FilterTitle = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  color: #3c3c3f;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;

  font-family: 'Poppins';
`;

export const GemboxListTitle = styled(FilterTitle)`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #f3edff;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #1a1b1d;
  cursor: pointer;
`;

export const GemboxItem = styled.ul`
  padding: 32px 16px;
`;

export const GemboxTitle = styled.li<{ pathname: string }>`
  cursor: pointer;
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: ${({ pathname }) => (pathname === '/gembox' ? '600' : '500')};
  span {
    font-size: 12px;
    font-weight: 400;
    margin-left: 2px;
  }
`;

export const GemboxText = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-bottom: 16px;
  font-size: 16px;
  span {
    font-size: 12px;
    margin-left: 2px;
  }

  .side-filter {
    font-size: 16px;
    text-align: center;
  }

  .current {
    color: #5200ff;
  }

  &.active {
    font-weight: 600;
  }
`;

export const GemboxButton = styled.button`
  width: 100%;
  height: 34px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Spoqa Han Sans';
  font-size: 14px;
  font-weight: 500;
  color: #3c3c3f;
  letter-spacing: -0.02em;
`;

export const FilterText = styled(GemboxText)`
  display: flex;
  align-items: center;
`;

export const FilterList = styled.li`
  padding: 24px 16px;
`;

export const GemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  /* height: 390px; */
  /* padding-left: 15px; */
  margin-bottom: 10px;
  max-height: 700px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: ${size.tabletS}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ModalButton = styled.button`
  width: 100%;
  height: 64px;
  border: none;
  background-color: #f3edff;
  color: #0f0223;
  font-size: 18px;
  letter-spacing: -0.02em;
  cursor: pointer;
  span {
    margin-left: 5px;
    font-weight: 500;
    font-size: 20px;
    color: #5200ff;
  }
`;

export const WriteWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  /* padding: 4vh 4vw; */
`;

export const WriteList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GemModalText = styled.span`
  margin-bottom: 8px;
  font-family: 'Spoqa Han Sans';
  font-weight: 400;
  font-size: 0.78vw;
  letter-spacing: -0.02em;
  color: #3c3c3f;
`;

export const GemModalInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 6vh;
  padding: 1vw;
  border-radius: 8px;
  outline: none;
  border: ${(props: IPropsGemboxStyles) =>
    props.error ? '1px solid #FF0000' : '1px solid #cecece'};
  font-size: 0.9vw;
  letter-spacing: -0.02em;
  color: #8e8e8e;
  :focus {
    border: 1px solid #1a1b1d;
    color: #1a1b1d;
  }
`;

export const GemBoxButton = styled.button`
  background-color: #5200ff;
  border-radius: 50px;
  font-family: 'Spoqa Han Sans';
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
