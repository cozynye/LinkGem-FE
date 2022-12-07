import { IDeleteBoxProps } from './gemboxModal.types';
import { useRecoilState } from 'recoil';
import { gemboxRefetch } from 'store/store';
import { useMutation } from 'utils/useMutation';
import * as S from '../gembox.styles';
import { LinkSaveButton } from 'components/Setting/Setting.style';

const DeleteBox = (props: IDeleteBoxProps) => {
  const [deleteBox] = useMutation('delete');
  const [, setBoxRefetch] = useRecoilState(gemboxRefetch);

  const onClickDelete = async () => {
    await deleteBox(`gemboxes/${props.selectedId}`, {
      id: props.selectedId,
    });
    props.setIsDelete(false);
    setBoxRefetch(true);
    props.refetch();
  };

  return (
    <S.DeleteWrapper>
      <div className="box">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#FFE0E0" />
          <path
            d="M15.52 18.96H17.44L17.86 10.78L17.96 8H15L15.1 10.78L15.52 18.96ZM15.04 23.48H17.96V20.64H15.04V23.48Z"
            fill="#FF3C3C"
          />
        </svg>
      </div>
      <S.DeleteTitle>정말 잼박스를 삭제할까요?</S.DeleteTitle>
      <div>
        <S.DeleteText>
          잼박스를 삭제하면 안에 보관된 링크도 함께 사라져요.
        </S.DeleteText>
      </div>
      <S.ButtonWrapper>
        <LinkSaveButton
          color="#616163"
          bgColor="#FFFFFF"
          onClick={() => props.setIsDelete(false)}
          dif={'1'}
          width="122px"
          height="42px"
        >
          다시 생각할게요
        </LinkSaveButton>
        <LinkSaveButton
          bgColor="#5200FF"
          color="#FFFFFF"
          width="122px"
          height="42px"
          onClick={onClickDelete}
        >
          네, 삭제할게요
        </LinkSaveButton>
        {/* <S.GemBoxButton
          onClick={() => props.setIsDelete(false)}
          style={{ padding: '16px 24px', backgroundColor: '#0F0223' }}
        >
          다시 생각해 볼게요.
        </S.GemBoxButton>
        <S.GemBoxButton
          onClick={onClickDelete}
          style={{ padding: '16px 24px' }}
        >
          네, 삭제할게요
        </S.GemBoxButton> */}
      </S.ButtonWrapper>
    </S.DeleteWrapper>
  );
};

export default DeleteBox;
