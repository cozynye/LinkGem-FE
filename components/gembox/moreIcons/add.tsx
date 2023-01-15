import GemboxModal from '../modal';
import { useQuery } from 'utils/useQuery';
import * as S from '../gembox.styles';
import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMutation } from 'utils/useMutation';
import { useRecoilState } from 'recoil';
import { gemboxRefetch } from 'store/store';
import { IAddIconProps } from './gemboxIcon.types';

const AddIcon = (props: IAddIconProps) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [linkIds, setLinkIds] = useState([props.el?.id]);

  const [, setBoxRefetch] = useRecoilState(gemboxRefetch);

  const [createGembox] = useMutation('post');

  const { data } = useQuery('links', {
    isDefault: true,
  });
  const boxCount = useQuery('gemboxes').data?.totalCount;

  const onClickLink = (id: number) => () => {
    if (linkIds.includes(id)) {
      setLinkIds([...linkIds.filter((el) => el !== id)]);
    } else {
      setLinkIds([...linkIds, id]);
    }
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const openCreate = () => {
    if (boxCount === 8) {
      alert('잼박스를 더 이상 추가할 수 없습니다.');
      return;
    }
    props.setOpen(true);
  };

  const regex = /^[ㄱ-ㅎ\s|가-힣|a-z|A-Z|0-9|]+$/;

  const onClickSubmit = async () => {
    console.log('linkIds');
    console.log(linkIds);
    if (name.length <= 0) {
      setError('잼박스 이름을 설정해주세요.');
      return;
    } else if (name.length > 8) {
      setError('잼박스 이름은 최대 8글자까지 만들 수 있습니다.');
      return;
    } else if (!regex.test(name)) {
      setError('잼박스 이름은 한글, 숫자, 영문으로만 작성 가능합니다.');
      return;
    } else {
      setError('');
    }
    await createGembox('gemboxes', {
      linkIds,
      name,
    });
    props.setOpen(false);
    props.refetch();
    setBoxRefetch(true);
  };


  return (
    <>
      <S.MoreItem onClick={openCreate}>
        <S.AddIcon /> 잼박스추가
      </S.MoreItem>
      <GemboxModal
        open={props.open}
        setOpen={props.setOpen}
        onClose={() => {
          props.setOpen(false);
          setName('');
        }}
        title="잼박스 추가"
        Component={
          <form target="iframe">
            <iframe name="iframe" src="" style={{ display: 'none' }}></iframe>
            <S.CreateWrapper>
              <S.WriteList>
                <S.GemModalText>잼박스 이름</S.GemModalText>
                <S.GemModalInput
                  type="text"
                  placeholder="링크와 관련된 이름을 지어주세요."
                  onChange={onChangeName}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      onClickSubmit();
                    }
                  }}
                  error={error}
                  style={
                    name && !error
                      ? { border: '1px solid #1a1b1d', color: '#1a1b1d' }
                      : {}
                  }
                />
                <S.ErrorMessage>{error}</S.ErrorMessage>
              </S.WriteList>
              <S.WriteList>
                <S.GemModalText>잼박스 추가</S.GemModalText>
                <S.GemLinkWrapper>
                  {props.el && (
                    <S.LinkItem onClick={onClickLink(props.el?.id)}>
                      <S.CheckBox isChecked={true}>
                        <S.CheckIcon color="blue" />
                      </S.CheckBox>
                      <S.DataTitle>{props.el?.title}</S.DataTitle>
                    </S.LinkItem>
                  )}
                  {data?.contents
                    .filter((el: any) => {
                      return el?.id !== props.el?.id;
                    })
                    .map((el: any) => (
                      <S.LinkItem key={uuidv4()} onClick={onClickLink(el.id)}>
                        <S.CheckBox isChecked={linkIds.includes(el.id)}>
                          <S.CheckIcon color="blue" />
                        </S.CheckBox>
                        <S.DataTitle>{el.title || el.url}</S.DataTitle>
                      </S.LinkItem>
                    ))}
                </S.GemLinkWrapper>
              </S.WriteList>
              <S.MemoFooter>
                {/* <S.GemBoxButton
                  style={{ padding: '18px 32px' }}
                  onClick={onClickSubmit}
                >
                  저장
                </S.GemBoxButton> */}
                <S.GemButton
                  color="#616163"
                  bgColor="#FFFFFF"
                  dif={'1'}
                  onClick={() => props.setOpen(false)}
                >
                  취소
                </S.GemButton>
                <S.GemButton
                  bgColor="#5200FF"
                  color="#FFFFFF"
                  onClick={onClickSubmit}
                >
                  저장
                </S.GemButton>
              </S.MemoFooter>
            </S.CreateWrapper>
          </form>
        }
      />
    </>
  );
};

export default AddIcon;
