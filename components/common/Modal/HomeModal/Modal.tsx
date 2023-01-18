import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import {
  Background,
  ModalContainer,
  LinkTextContainer,
  LinkText,
  LinkSaveButton,
  Content,
} from './Modal.style';
import Axios from 'utils/Axios';

interface ModalProps {
  /** 모달에 들어갈 컴포넌트 */
  visible: boolean;
  /** 닫기 버튼 혹은 백그라운드 클릭 시 실행할 함수 */
  handleModal: () => void;
  setIsOpenModal: (any: boolean) => void;
}

export default function Modal({
  visible,
  handleModal,
  setIsOpenModal,
}: ModalProps) {
  const [open, setOpen] = useState(false);
  const [urlText, setUrlText] = useState('');

  const handleKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      onClickLinkSaveButton();
    }
  };

  const onClickLinkSaveButton = async () => {
    try {
      // const response =
      await Axios(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/links`, {
        method: 'post',
        data: {
          url: urlText.includes('https://') ? urlText : `https://${urlText}`,
        },
      });
      handleModal();
      // const saveLink = await response?.data?.result;
      // const _recentLink = recentLink.slice(0, 3);
      // setRecentLink([{ ...saveLink }, ..._recentLink]);
      // setIsSuccessLink(true);
      // setUrlText('');
    } catch (error) {
      // console.log('정보가 없습니다');
      // setIsSuccessLink(false);
    }
  };

  const handleInputUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUrlText(e.target.value);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (visible) {
      setOpen(true);
    } else {
      timeoutId = setTimeout(() => setOpen(false), 1500);
    }
    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible]);

  if (!open) {
    return null;
  }

  return (
    <>
      <Background visible={visible} onClick={() => setIsOpenModal(false)} />
      <ModalContainer visible={visible}>
        <Content>
          <h2>첫 링크를 저장해주세요.</h2>
          <LinkTextContainer>
            {/* <Image
              src="/images/icons/plus-icon.svg"
              alt="plus-icon"
              width={15}
              height={16}
            /> */}
            <LinkText
              placeholder="https://..."
              onChange={handleInputUrl}
              value={urlText}
              onKeyPress={handleKeyPress}
            />
          </LinkTextContainer>
          <div className="btn-group">
            <LinkSaveButton
              onClick={() => setIsOpenModal(false)}
              bgColor="#FFFFFF"
              color="#CECECE"
              dif={'1'}
            >
              취소
            </LinkSaveButton>
            <LinkSaveButton
              onClick={() => onClickLinkSaveButton()}
              bgColor="#5200FF"
              color="#ffffff"
            >
              저장
            </LinkSaveButton>
          </div>
        </Content>
      </ModalContainer>
    </>
  );
}
