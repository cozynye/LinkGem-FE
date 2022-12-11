import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import * as S from '../gembox.styles';
import { IPropsGemboxModal } from './gemboxModal.types';
import { renderComponents } from 'utils/commons';

const GemboxModal = (props: IPropsGemboxModal) => {
  console.log('props!!!!!!!!!');
  console.log(props);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Box sx={S.style}>
          {/* <img
            src="/icons/closeIcon.jpg"
            style={{
              width: '24px',
              height: '24px',
              position: 'absolute',
              top: 28,
              right: 28,
            }}
            onClick={props.onClose}
          /> */}
          <S.GemboxWrapper>
            {props.title && <S.ModalTitle>{props.title}</S.ModalTitle>}
            <S.RenderBox>{renderComponents(props.Component)}</S.RenderBox>
          </S.GemboxWrapper>
        </Box>
      </Fade>
    </Modal>
  );
};

export default GemboxModal;
