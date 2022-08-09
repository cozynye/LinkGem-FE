import axios from 'axios';
import { IPropsGemCard } from '../gembox.types';
import { ChangeEvent, useState } from 'react';
import { onErrorGembox } from 'utils/onError';
import * as S from '../gembox.styles';

export const GemCard = (props: IPropsGemCard) => {
  const [name, setName] = useState<string>('');

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // const onClickSubmit = async () => {
  //   try {
  //     const result = await axios.post('api/v1/gemboxes', {
  //       headers: {
  //         Authorization:
  //           'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
  //       },
  //       linkIds: [0],
  //       name,
  //     });
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onClickEdit = async () => {
    if (name.length >= 8 || name.length <= 0) {
      alert('잼박스 이름은 0자 이하, 8자 이상일 수 없습니다.');
      return;
    }
    try {
      await axios.patch(
        `api/v1/gemboxes/${props.selectedId}`,
        {
          id: props.selectedId,
          name,
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
          },
        }
      );
      alert('잼박스 이름이 수정되었습니다.');
      props.setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickDelete = async () => {
    try {
      await axios.delete(`api/v1/gemboxes/${props.selectedId}`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        params: {
          id: props.selectedId,
        },
      });
      alert('잼박스가 삭제되었습니다.');
      props.setIsDelete(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {props.isDelete && props.el.id === props.selectedId && (
        <S.DeleteWrapper>
          <S.DeleteTitle>정말 잼박스를 삭제할까요?</S.DeleteTitle>
          <div>
            <S.DeleteText>
              잼박스를 삭제하면 안에 보관된 링크도 함께 사라집니다.
            </S.DeleteText>
            <S.DeleteText style={{ fontWeight: 500 }}>
              삭제된 잼박스, 링크는 복구되지 않습니다.
            </S.DeleteText>
          </div>
          <S.ButtonWrapper>
            <S.GemBoxButton
              onClick={() => props.setIsDelete(false)}
              style={{ padding: '2vh 1.2vw', backgroundColor: '#0F0223' }}
            >
              다시 생각 할게요
            </S.GemBoxButton>
            <S.GemBoxButton
              onClick={onClickDelete}
              style={{ padding: '2vh 1.2vw' }}
            >
              네, 삭제할게요
            </S.GemBoxButton>
          </S.ButtonWrapper>
        </S.DeleteWrapper>
      )}
      {props.isEdit && props.el.id === props.selectedId && (
        <S.WriteWrapper>
          <S.WriteList>
            <S.GemModalText>현재 잼박스</S.GemModalText>
            <S.GemModalInput
              type="text"
              defaultValue={props.el.name}
              disabled={props.isEdit}
            />
          </S.WriteList>
          <S.WriteList>
            <S.GemModalText>수정할 잼박스 이름</S.GemModalText>
            <S.GemModalInput
              type="text"
              placeholder="수정할 잼박스 이름을 적어주세요"
              onChange={onChangeName}
            />
          </S.WriteList>
          <S.GemBoxButton onClick={onClickEdit}>저장</S.GemBoxButton>
        </S.WriteWrapper>
      )}
      {!props.isEdit && !props.isDelete && (
        <S.GemCard>
          <S.GemImg src={props.el?.imageUrl} onError={onErrorGembox} />
          <S.GemInfo>
            <S.GemName>{props.el?.name}</S.GemName>
            <div>
              <S.GemText onClick={props.openEdit(props.el.id)}>수정</S.GemText>
              <S.GemText onClick={props.openDelete(props.el.id)}>
                삭제
              </S.GemText>
            </div>
          </S.GemInfo>
        </S.GemCard>
      )}
    </>
  );
};

export default GemCard;
