import { IEditBoxProps } from './gemboxModal.types';
import { ChangeEvent, useState } from 'react';
import { useMutation } from 'utils/useMutation';
import { useQuery } from 'utils/useQuery';
import * as S from '../gembox.styles';
import { LinkSaveButton } from 'components/Setting/Setting.style';

const EditBox = (props: IEditBoxProps) => {
  const { data } = useQuery(`gemboxes/${props.selectedId}`);
  const [editBox] = useMutation('patch');

  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClickEdit = async () => {
    if (name.length <= 0) {
      setError('잼박스 이름을 설정해주세요.');
      return;
    } else if (name.length >= 8) {
      setError('잼박스 이름은 최대 8글자까지 만들 수 있습니다.');
      return;
    } else if (!regex.test(name)) {
      setError('잼박스 이름은 한글, 숫자, 영문으로만 작성 가능합니다.');
      return;
    } else {
      setError('');
    }
    await editBox(`gemboxes/${props.selectedId}`, {
      id: props.selectedId,
      name,
    });
    props.setIsEdit(false);
    props.refetch();
  };

  return (
    <S.WriteWrapper>
      <S.WriteList>
        <S.GemModalText>현재 잼박스</S.GemModalText>
        <S.GemModalInput
          type="text"
          defaultValue={data?.name}
          disabled={props.isEdit}
        />
      </S.WriteList>
      <S.WriteList>
        <S.GemModalText>수정할 잼박스 이름</S.GemModalText>
        <S.GemModalInput
          type="text"
          placeholder="수정할 잼박스 이름을 적어주세요"
          onChange={onChangeName}
          error={error}
          style={
            name && !error
              ? { border: '1px solid #1a1b1d', color: '#1a1b1d' }
              : {}
          }
        />
        <S.ErrorMessage>{error}</S.ErrorMessage>
      </S.WriteList>
      <S.ButtonWrapper>
        <LinkSaveButton
          color="#616163"
          bgColor="#FFFFFF"
          onClick={() => props.setIsDelete(false)}
          dif={'1'}
          width="66px"
          height="34px"
        >
          다시 생각할게요
        </LinkSaveButton>
        <LinkSaveButton
          bgColor="#5200FF"
          color="#FFFFFF"
          width="66px"
          height="34px"
          onClick={onClickEdit}
        >
          저장
        </LinkSaveButton>
      </S.ButtonWrapper>
      <S.GemBoxButton
        style={{ width: '97px', height: '55px', padding: '16px 32px' }}
        onClick={onClickEdit}
      >
        저장
      </S.GemBoxButton>
    </S.WriteWrapper>
  );
};

export default EditBox;
