import styled from 'styled-components';
import { size } from 'styles/variable';

export const DropDownContainer = styled.div`
  position: relative;
  width: 520px;

  @media screen and (max-width: ${size.desktop}) {
    width: 80%;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
  }
`;

export const DropDownHeader = styled.div`
  width: 100%;
  height: 56px;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* transition: 0.5ms; */
  border: 1px solid #0f0223;
  border-radius: 8px;

  &:hover {
    transition: 0.5s;
    cursor: pointer;
  }
`;

export const DropDownListContainer = styled.div`
  width: 100%;
  position: absolute;
  margin-top: 12px;
  overflow: hidden;
  z-index: 20;
`;

export const DropDownList = styled.ul`
  width: 100%;
  height: 250px;
  padding-top: 12px;
  background: white;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  border: 1px solid #0f0223;
  border-radius: 16px;
`;

export const ListItem = styled.li`
  padding-top: 12px;
  padding-bottom: 12px;
  list-style: none;
  /* transition: 0.5s; */
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  text-indent: 20px;
  &:hover {
    color: #5200ff;
    background-color: #f3edff;
    /* transition: 0.3s; */
  }
`;

export const InputText = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 0 0 0;
  border: none;
  font-weight: 400;
  font-size: 16px;
  text-indent: 20px;
  border-radius: 16px;

  &:focus {
    outline: none;
  }
`;

export const ImageButton = styled.img`
  position: absolute;
  right: 15px;
  width: 15px;
  height: 7.5px;
  &:hover {
    cursor: pointer;
  }
`;
export const DropDownHeaderText = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: 400;
  text-indent: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;
`;
