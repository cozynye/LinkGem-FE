import styled from 'styled-components';

interface JoinButtonContainerProps {
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  fontSize: string;
  hoverColor: string;
}
// eslint-disable-next-line import/prefer-default-export
export const JoinButtonContainer = styled.button<JoinButtonContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  border-radius: 100px;
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${(props) => props.hoverColor};
    transition: background-color 0.1s ease-in;
  }
`;
