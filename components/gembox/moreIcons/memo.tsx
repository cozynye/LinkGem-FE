import * as S from '../gembox.styles';
import GemboxModal from '../modal';
import { useMutation } from 'utils/useMutation';
import { ChangeEvent, useState } from 'react';
// import { DeleteOutlined } from '@ant-design/icons';
import { IMemoIconProps } from './gemboxIcon.types';

const MemoIcon = (props: IMemoIconProps) => {
  const [memo, setMemo] = useState('');
  const [isMemoDelete, setIsMemoDelete] = useState(false);

  const [updateMemo] = useMutation('patch');

  const onChangeMemo = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
  };

  const onClickMemo = async () => {
    console.log('memo');
    console.log(memo);
    await updateMemo(`links/${props.el.id}`, {
      id: props.el.id,
      memo: memo || '',
    });
    props.setOpen(false);
    setIsMemoDelete(false);
    props.refetch();
  };
  console.log('memo');
  console.log(memo);
  return (
    <>
      <S.MoreItem onClick={() => props.setOpen(true)}>
        <S.MemoIcon
          src="/icons/memoIcon.jpg"
          style={{ width: '32px', height: '32px', padding: 0 }}
        />{' '}
        메모
      </S.MoreItem>
      <GemboxModal
        onClose={() => {
          props.onClose && props.onClose();
          setIsMemoDelete(false);
        }}
        open={props.open}
        setOpen={props.setOpen}
        title={!isMemoDelete && '잼키퍼 메모장'}
        Component={
          isMemoDelete ? (
            <S.MemoDeleteWrapper>
              <S.DeleteTitle>정말 메모를 삭제할까요?</S.DeleteTitle>
              <div>
                <S.DeleteText>삭제한 메모는 복구 할 수 없어요</S.DeleteText>
              </div>
              <S.ButtonWrapper>
                <S.GemBoxButton
                  onClick={() => setIsMemoDelete(false)}
                  style={{ padding: '2vh 1.2vw', backgroundColor: '#0F0223' }}
                >
                  다시 생각 해볼게요
                </S.GemBoxButton>
                <S.GemBoxButton
                  onClick={onClickMemo}
                  style={{ padding: '2vh 1.2vw' }}
                >
                  네, 삭제할게요
                </S.GemBoxButton>
              </S.ButtonWrapper>
            </S.MemoDeleteWrapper>
          ) : (
            <S.MemoWrapper>
              <S.MemoArea
                onChange={onChangeMemo}
                defaultValue={props.el?.memo !== '' ? props.el.memo : ''}
                placeholder="링크와 관련된 메모를 입력해 보세요."
              ></S.MemoArea>
              <S.MemoFooter>
                {/* <DeleteOutlined
                  style={{ fontSize: '36px' }}
                  onClick={() => setIsMemoDelete(true)}
                /> */}
                <S.GemButton
                  color="#616163"
                  bgColor="#FFFFFF"
                  dif={'1'}
                  onClick={() => setIsMemoDelete(true)}
                >
                  취소
                </S.GemButton>
                <S.GemButton
                  bgColor="#5200FF"
                  color="#FFFFFF"
                  onClick={onClickMemo}
                >
                  저장
                </S.GemButton>
              </S.MemoFooter>
            </S.MemoWrapper>
          )
        }
      />
    </>
  );
};

export default MemoIcon;
