import styled from 'styled-components';

import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { IPropsGemboxStyles } from './gembox.types';
import AddOutlined from '../../public/icons/AddOutlined.svg';
import ChangeOutlined from '../../public/icons/ChangeOutlined.svg';
import { Select } from 'antd';
import { size } from 'styles/variable';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 64px 0;
  min-height: 76vh;

  padding-right: 24px;

  @media screen and (max-width: ${size.tabletS}) {
    padding-left: 24px;
  }
  @media screen and (max-width: ${size.mobile}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const GemboxSection = styled.div`
  width: 100%;
`;

export const GexboxSectionTitle = styled.h1`
  font-family: 'Spoqa Han Sans';
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: #1a1b1d;
  margin-bottom: 20px;
  span {
    margin-left: 2px;
    font-weight: 400;
    font-size: 12px;
  }
`;

export const LinkBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(31%, auto));
  width: 100%;
  grid-auto-rows: minmax(200px, 320px);

  grid-gap: 24px;
  @media screen and (max-width: ${size.tabletS}) {
    grid-template-columns: repeat(auto-fill, minmax(43%, auto));
    /* grid-auto-rows: minmax(200px, auto); */
    grid-auto-rows: 50vw;
  }
`;

export const LinkBox = styled.article`
  position: relative;
  /* width: 280px; */
  /* height: 320px; */
  height: 100%;
  /* margin-top: 32px; */
  border-radius: 16px;
  background-color: ${(props: IPropsGemboxStyles) =>
    props.isMore ? '#a0a0a0' : 'white'};
  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
`;

export const LinkBoxImg = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 16px 16px 0px 0px;
  object-fit: cover;
  filter: ${(props: IPropsGemboxStyles) =>
    props.isMore ? 'brightness(60%)' : 'brightness(100%)'};
`;

export const LinkBoxContents = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  padding: ${(props: IPropsGemboxStyles) => (props.isMore ? '12px' : '20px')};
  background-color: white;
  border-radius: ${(props: IPropsGemboxStyles) =>
    props.isMore ? '16px' : '0px 0px 16px 16px'};

  @media screen and (max-width: ${size.tabletS}) {
    padding: ${(props: IPropsGemboxStyles) =>
      props.isMore ? '12px' : '16px 12px'};
  }
`;

export const MoreItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const MoreItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 22%;
  height: 40%;
  min-height: 55px;
  font-family: 'Spoqa Han Sans';
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #1a1b1d;

  height: 50%;

  @media screen and (max-width: ${size.mobile}) {
    font-size: 10px;
  }
`;

export const MemoIcon = styled.img`
  width: 24px;
  height: 24px;
  /* padding: 7px; */
  cursor: pointer;
`;

export const AddIcon = styled(AddOutlined)`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  padding: 9px;
  fill: #ffffff;
  font-size: 900;
  text-align: center;
  background-color: #0f0223;
  border-radius: 50%;
`;

export const ChangeIcon = styled(ChangeOutlined)`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  padding: 8px;
  fill: #ffffff;
  font-size: 900;
  text-align: center;
  background-color: ${(props) => (props.isEdit ? '#5200FF' : '#0f0223')};
  border-radius: 50%;
`;

export const DeleteIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const LinkBoxTitle = styled.span`
  display: block;
  width: 100%;
  height: 20px;
  color: #1a1b1d;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const LinkBoxRemark = styled.span`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 46px;
  padding: 10px 0;
  color: #3c3c3f;
  font-size: 14px;
  line-height: 19.6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media screen and (max-width: ${size.tabletS}) {
    display: none;
  }
`;

export const LinkSubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  white-space: nowrap;
  .etc-info {
  }
`;

export const LinkDate = styled.span`
  color: #3c3c3f;
  font-size: 14px;
  letter-spacing: -0.02em;
`;

export const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: '450px',
  // height: '588px',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  overflow: 'hidden',
  boxSizing: 'border-box',
  padding: '32px 40px',
};

export const GemboxWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const ModalTitle = styled.div`
  margin-bottom: 20px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  color: #1a1b1d;
`;

export const GemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-top: 1.5vh;
`;

export const GemCard = styled.div`
  width: 140px;
  height: 170px;
`;

export const GemImg = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

export const GemInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding-top: 8px;
`;

export const GemName = styled.span`
  font-family: 'Spoqa Han Sans';
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
  color: #000000;
`;

export const GemText = styled.span`
  margin-right: 9px;
  font-family: 'Spoqa Han Sans';
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #3c3c3f;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const WriteWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* padding: 60px 80px 0px 80px; */
`;

export const WriteList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;

export const CreateWrapper = styled(WriteWrapper)`
  /* padding: 20px 100px 0px 100px; */
`;

export const GemModalText = styled.span`
  margin-bottom: 4px;
  font-family: 'Spoqa Han Sans';
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #3c3c3f;
`;

export const GemModalInput = styled.input`
  box-sizing: border-box;
  width: 350px;
  height: 40px;
  padding: 16px;
  border-radius: 4px;
  outline: none;
  border: ${(props: IPropsGemboxStyles) =>
    props.error ? '1px solid #FF0000' : '1px solid #cecece'};
  font-size: 16px;
  letter-spacing: -0.02em;
  color: ${(props) => (props.error ? '#FF0000' : '#cecece')};
  :focus {
    border: 1px solid #1a1b1d;
    color: #1a1b1d;
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  padding: 5px 10px;
  font-family: 'Spoqa Han Sans';
  font-size: 0.7vw;
  color: #ff0000;
`;

export const GemBoxButton = styled.button`
  background-color: #5200ff;
  border-radius: 4px;
  font-family: 'Spoqa Han Sans';
  font-size: 14px;
  letter-spacing: -0.02em;
  font-weight: 500;
  white-space: nowrap;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const GemButton = styled.button<{
  bgColor: string;
  color: string;
  dif?: string;
}>`
  background-color: ${(props) => props.bgColor};
  border: ${(props) => (props.dif === '1' ? '1px solid #CECECE' : 'none')};
  font-weight: ${(props) => (props.dif === '1' ? '400' : '500')};
  color: ${(props) => props.color};
  width: 66px;
  height: 36px;
  border-radius: 4px;
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  opacity: 1;

  @media screen and (max-width: ${size.tabletS}) {
    font-size: 16px;
    line-height: 20px;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const ModalButton = styled.button`
  width: 100%;
  height: 120px;
  border: none;
  background-color: #f3edff;
  color: #0f0223;
  font-size: 1vw;
  letter-spacing: -0.02em;
  cursor: pointer;
  span {
    margin-left: 0.5vw;
    font-weight: 500;
    font-size: 1.2vw;
    color: #5200ff;
  }
`;

export const ModalClose = styled(CloseOutlined)`
  position: absolute;
  top: 28px;
  right: 28px;
  color: #1a1b1d;
  font-size: 24px;
`;

export const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const DeleteTitle = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  margin-top: 16px;
`;

export const DeleteText = styled.div`
  font-family: 'Spoqa Han Sans';
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #1a1b1d;
  margin-top: 4px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GemLinkWrapper = styled.ul`
  box-sizing: border-box;
  width: 100%;
  height: 13.5vh;
  border: 1px solid #cecece;
  border-radius: 4px;
  overflow: auto;
  padding: 1vh 0.6vw;
`;

export const LinkItem = styled.li`
  display: flex;
  align-items: center;
  padding: 2px 0;
  font-family: 'Spoqa Han Sans';
  font-size: 0.9vw;
  letter-spacing: -0.02em;
  color: #252730;
  cursor: pointer;
`;

export const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-color: ${(props: IPropsGemboxStyles) =>
    props.isChecked ? '#5200ff' : '#cecece'};
  border-radius: 5px;
`;

export const CheckIcon = styled(CheckOutlined)`
  color: white;
`;

export const MemoWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const MemoDeleteWrapper = styled(MemoWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const MemoArea = styled.textarea`
  box-sizing: border-box;
  width: 380px;
  height: 250px;
  padding: 20px 16px;
  border: 1px solid #cecece;
  border-radius: 8px;
  font-family: 'Spoqa Han Sans';
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.02em;
  resize: none;
  :focus {
    border: 2px solid #cecece;
    outline: none;
  }
`;

export const MemoFooter = styled.div`
  margin-top: 20px;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 20%;
`;

export const LeftSubInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 85px; */
`;

export const Memobox = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: -70px;
  left: 100px;
  z-index: 2;
  width: 212px;
  max-height: 158px;
  padding: 20px 36px 10px 16px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
  border-radius: 8px;
`;

export const MemoText = styled.div`
  margin-bottom: 10px;
  font-family: 'Spoqa Han Sans';
  font-size: 13px;
  letter-spacing: -0.02em;
  color: #1a1b1d;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const MemoOption = styled.span`
  font-family: 'Spoqa Han Sans';
  font-size: 12px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #3c3c3f;
  cursor: pointer;
`;

export const MemoClose = styled(ModalClose)`
  top: 15px;
  right: 15px;
  font-size: 13px;
  font-weight: 900;
`;

export const Changebox = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 230px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
  border-radius: 8px;
`;

export const ChangeList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const ChangeItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  font-family: 'Spoqa Han Sans';
  font-size: 11px;
  letter-spacing: -0.02em;
  color: #1a1b1d;
`;

export const ChagneInput = styled.input`
  box-sizing: border-box;
  padding: 11px;
  border: 1px solid #ededed;
  border-radius: 8px;
  font-size: 13px;
`;

export const DataTitle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* or 20px */

  letter-spacing: -0.02em;
`;

export const ItemBox = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ededed;
  margin-top: 10px;
  padding: 10px 16px;
  font-size: 12px;
`;

export const ItemSelect = styled(Select)`
  box-sizing: border-box;
  width: 85%;
  height: 36px;
  margin-top: 4px;
  border-radius: 8px;
  /* border: 1px solid #ededed; */
  /* padding-left: 8px; */
  font-size: 12px;
`;

export const RenderBox = styled.div`
  width: 100%;
`;

// export const SuccessMessage = styled.div`
//   font-family: 'Spoqa Han Sans';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 150%;
//   /* identical to box height, or 24px */

//   /* main/purpleblack */

//   color: #0f0223;

//   /* Inside auto layout */

//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 0 auto;
//   align-items: center;
//   justify-content: center;
// `;

// export const XIconImage = styled.div`
//   width: 12px;
//   height: 12px;

//   &:hover {
//     cursor: pointer;
//   }
// `;

export const ChangeNobox = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
  border-radius: 8px;

  .description {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    color: #1a1b1d;
    @media screen and (max-width: ${size.mobile}) {
      font-size: 12px;
    }
    span {
      font-weight: 500;
    }
  }

  .btn-group {
    display: flex;
    gap: 8px;

    button {
      display: flex;
      align-items: center;
      padding: 11px 0px;
      justify-content: center;
      font-size: 14px;

      @media screen and (max-width: ${size.mobile}) {
        padding: 6px 0px;
        font-size: 12px;
      }
      :first-child {
        flex-grow: 1;
        border-radius: 8px;
        background: #3c3c3f;
      }
      :last-child {
        flex-grow: 2;
        border-radius: 8px;
      }
    }
  }
`;
