import styled from 'styled-components';
import { size } from 'styles/variable';

export const DropDownContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
  margin: 0 auto;

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
  }
`;

export const DropDownHeader = styled.div`
  position: relative;
  width: 400px;
  height: 56px;
  background: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* transition: 0.5ms; */
  border-radius: 8px;

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
  }
  &:hover {
    transition: 0.5s;
    cursor: pointer;
  }
`;

export const DropDownListContainer = styled.div`
  width: 400px;
  position: absolute;
  margin-top: 12px;
  overflow: hidden;

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
  }
`;

export const DropDownList = styled.ul`
  height: 300px;
  padding-top: 12px;
  background: white;
  box-sizing: border-box;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  border-top: 1px solid #000;
  /* transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s,
    z-index 0s linear 0.01s; */
  border-radius: 8px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
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

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
  }
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
  font-size: 20px;
  text-indent: 20px;
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;

export const ImageButton = styled.img`
  position: absolute;
  right: 15px;
  width: 15px;
  height: 15px;
  &:hover {
    cursor: pointer;
  }
`;
export const DropDownHeaderText = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: 400;
  text-indent: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
