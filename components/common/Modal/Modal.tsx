import React, { ReactNode, useEffect, useState } from 'react';
import {
  Background,
  ModalContainer,
  Title,
  CloseButton,
  Content,
} from './Modal.style';

interface ModalProps {
  /** 모달에 들어갈 컴포넌트 */
  visible: boolean;
  /** 닫기 버튼 혹은 백그라운드 클릭 시 실행할 함수 */
  handleCloseModal: () => void;
  children: ReactNode;
  setIsOpenModal: (any: boolean) => void;
}

export default function Modal({
  children,
  visible,
  handleCloseModal,
  setIsOpenModal,
}: ModalProps) {
  const [open, setOpen] = useState(false);
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
        <Title>
          <CloseButton type="button" onClick={handleCloseModal}>
            <img src="/images/setting-x.svg" alt="close" />
          </CloseButton>
        </Title>
        <Content>{children}</Content>
      </ModalContainer>
    </>
  );
}
