import { AlarmItem, AlarmModalWrapper } from './AlarmModal.style';
import React, { useEffect, useRef, useState } from 'react';
import Axios from 'utils/Axios';
import { ALARM_TYPE } from 'constants/AlarmType.constant';
import { IAlarmHeadType, IAlarmType } from 'types/Alarm.type';
interface IAlarmModal {
  isAlarmModal: boolean;
  setIsAlarmModal: (e: boolean) => void;
}
export default function AlarmModal({
  setIsAlarmModal,
  isAlarmModal,
}: IAlarmModal) {
  const alarmRef = useRef<any>(null);
  const [alarmType, setAlarmType] = useState([]);
  const [alarmList, setAlarmList] = useState([]);
  const [params, setParams] = useState<{
    isRead: boolean | undefined;
    type: string | undefined;
  }>({
    isRead: undefined,
    type: undefined,
  });
  const handleClickOutside = (event: any) => {
    if (alarmRef && !alarmRef.current.contains(event.target)) {
      setIsAlarmModal(false);
    } else {
      setIsAlarmModal(true);
    }
  };
  const getAlarmType = async () => {
    try {
      const response = await Axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/notifications/types`,
        method: 'get',
      });
      const contents = await response?.data?.result;
      setAlarmType(contents);
    } catch (error: any) {
      console.error(error);
    }
  };
  const getAlarmList = async () => {
    try {
      const response = await Axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/notifications`,
        method: 'get',
        params,
      });
      const contents = await response?.data?.result?.contents;
      setAlarmList(contents);
    } catch (error: any) {
      console.error(error);
    }
  };
  const handleReadAlarm = async (notificationId: number) => {
    try {
      await Axios(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/notifications/${notificationId}/is-read`,
        {
          method: 'patch',
          // data: { isFavorites: !isFavorites },
        }
      );
      getAlarmList();
    } catch (error: any) {
      console.error(error);
    }
  };
  const deleteAlarm = async (notificationId: number) => {
    try {
      await Axios(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/notifications/${notificationId}`,
        {
          method: 'delete',
          // data: { isFavorites: !isFavorites },
        }
      );
      getAlarmList();
    } catch (error: any) {
      console.error(error);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  useEffect(() => {
    getAlarmType();
    getAlarmList();
  }, []);
  useEffect(() => {
    getAlarmList();
  }, [params]);
  return (
    <AlarmModalWrapper isAlarmModal={isAlarmModal}>
      <div className="alarm-content" ref={alarmRef}>
        <div className="alarm-header">
          <div className="alarm-type">
            <button
              className={`${params.type === undefined && 'active'}`}
              onClick={() => {
                setParams({ isRead: undefined, type: undefined });
              }}
            >
              전체
            </button>
            {alarmType.map((item: IAlarmHeadType) => (
              <button
                key={item.type}
                className={`${params.type === item.type && 'active'}`}
                onClick={() => {
                  setParams({ ...params, type: item.type });
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="mobile-alarm">
            <button onClick={() => setIsAlarmModal(false)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="#1A1B1D"
                />
              </svg>
            </button>
            알림
          </div>
        </div>
        <div className="alarm-isRead-type">
          <button
            className={`${params.isRead === undefined && 'active'}`}
            onClick={() => {
              setParams({ ...params, isRead: undefined });
            }}
          >
            전체보기
          </button>
          <button
            className={`${params.isRead === false && 'active'}`}
            onClick={() => {
              setParams({ ...params, isRead: false });
            }}
          >
            안읽은 알림
          </button>
        </div>
        <div className="alarm-list">
          {alarmList.map((item: IAlarmType) => (
            <AlarmItem
              key={item.id}
              isRead={item.isRead}
              onClick={() => handleReadAlarm(item.id)}
            >
              <button
                className="delete-alarm"
                onClick={() => deleteAlarm(item.id)}
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 5.16688L10.6669 0.5L12 1.83312L7.33312 6.5L12 11.1669L10.6669 12.5L6 7.83312L1.33312 12.5L0 11.1669L4.66688 6.5L0 1.83312L1.33312 0.5L6 5.16688Z"
                    fill="#616163"
                  />
                </svg>
              </button>
              <div className="alram-type">{`${ALARM_TYPE[item.type]} ∙ ${
                item.pastDay
              }`}</div>
              <div
                className="alarm-content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
              {item.button.buttonAction === 'MOVE_LINK' && (
                <button
                  className="alarm-link-btn"
                  onClick={() =>
                    window.open(
                      item.button.buttonValue.includes('https://')
                        ? item.button.buttonValue
                        : `https://${item.button.buttonValue}`,
                      '_blank'
                    )
                  }
                >
                  {item.button.buttonText}
                </button>
              )}
            </AlarmItem>
          ))}
        </div>
      </div>
    </AlarmModalWrapper>
  );
}
