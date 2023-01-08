import styled from 'styled-components';
import { size } from 'styles/variable';
export const AlarmModalWrapper = styled.div<{ isAlarmModal: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: 50px;
  right: 5px;
  width: 440px;
  max-height: 540px;
  padding-top: 24px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background: #ffffff;
  z-index: 1;
  /* shadow */
  color: black;
  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
  border-radius: 8px;
  animation: 0.7s ${(props) => (props.isAlarmModal ? 'showUp' : 'showOut')};
  @media screen and (max-width: ${size.tabletS}) {
    top: 30px;
  }
  @media screen and (max-width: ${size.mobile}) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0px;
    padding-top: 0px;
  }
  @keyframes showUp {
    0% {
      transform: translate(0, -10px);
    }
    100% {
      transform: translate(0, 0px);
    }
  }
  @keyframes showOut {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
      display: none;
    }
  }
  .alarm-content {
    height: 100%;
    .alarm-header {
      position: relative;
      .alarm-type {
        display: flex;
        gap: 6px;
        padding: 0px 24px;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
        button {
          padding: 8px 16px;
          border-radius: 4px;
          border: 1px solid #e0e0e0;
          background-color: #ffffff;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: -0.02em;
          color: #616163;
          white-space: nowrap;
          &.active {
            background: #5200ff;
            font-weight: 500;
            color: #ffffff;
          }
        }
        @media screen and (max-width: ${size.mobile}) {
          display: none;
        }
      }
      .mobile-alarm {
        display: none;
        gap: 4px;
        align-items: center;
        padding: 18px 20px;
        @media screen and (max-width: ${size.mobile}) {
          display: flex;
        }
        button {
          display: flex;
          align-items: center;
          background: none;
          border: none;
        }
      }
    }
    .alarm-isRead-type {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 0px 20px;
      margin-top: 16px;
      @media screen and (max-width: ${size.mobile}) {
        display: none;
      }
      button {
        background-color: transparent;
        border: none;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: -0.02em;
        color: #1a1b1d;
        &.active {
          font-weight: 500;
          text-decoration-line: underline;
          color: #5200ff;
        }
      }
    }
    .alarm-list {
      margin-top: 16px;
      @media screen and (max-width: ${size.mobile}) {
        margin-top: 0px;
      }
    }
  }
`;
export const AlarmItem = styled.div<{ isRead: boolean }>`
  position: relative;
  padding: 20px 32px;
  border-top: 1px solid #e0dee6;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  background-color: ${({ isRead }) => (isRead ? '#FFFFFF' : '#F3EDFF')};
  color: #1a1b1d;
  cursor: pointer;
  @media screen and (max-width: ${size.mobile}) {
    padding: 20px 28px;
  }
  .delete-alarm {
    position: absolute;
    top: 22px;
    right: 32px;
    background: none;
    border: none;
  }
  .alram-type {
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #8e8e8e;
  }
  .alarm-content {
    margin-top: 4px;
    font-size: 14px;
    line-height: 21px;
    /* or 150% */
    letter-spacing: -0.02em;
    mark {
      background-color: transparent;
      font-weight: 700;
    }
  }
  .alarm-link-btn {
    margin-top: 12px;
    padding: 8px 16px;
    background: #5200ff;
    border-radius: 4px;
    border: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #ffffff;
    :hover {
      font-weight: 500;
      background: #29115b;
    }
  }
`;
