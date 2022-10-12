import * as S from './gembox.styles';
import { onError } from 'utils/onError';
import { getDate } from 'utils/getDate';
import { EllipsisOutlined, StarOutlined, StarFilled } from '@ant-design/icons';
import { useState } from 'react';
import { gemboxRefetch } from 'store/store';
import { useRecoilState } from 'recoil';
import MemoIcon from './moreIcons/memo';
import AddIcon from './moreIcons/add';
import { useMutation } from 'utils/useMutation';
import { useQuery } from 'utils/useQuery';
import SelectBoxPage from '../atom/selectBox';
import { IPropsLinkCard } from './gembox.types';
import LinkOutlined from '../../public/icons/LinkOutlined.svg';

const LinkCard = (props: IPropsLinkCard) => {
  const [isMore, setIsMore] = useState<boolean>(false);
  const [memoOpen, setMemoOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [gembox, setGembox] = useState('');
  const [, setBoxRefetch] = useRecoilState(gemboxRefetch);

  const [isMemoView, setIsMemoView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const { data } = useQuery('gemboxes');

  const setClose = () => {
    setMemoOpen(false);
  };

  const boxName = useQuery(`gemboxes/${props.el?.gemBoxId}`, {
    id: props.el.gemboxId,
  }).data?.name;

  const [deleteLink] = useMutation('delete');
  const [changeGembox] = useMutation('patch');

  const onClickDelete = async () => {
    const ids = [props.el.id];

    await deleteLink('links', {
      ids,
    });
    setIsMore(false);
    props.setIsDelete(true);
    setBoxRefetch(true);
  };

  const handleChange = (event: { target: { value: string } }) => {
    setGembox(event.target.value);
  };

  const onClickChangeGembox = async () => {
    await changeGembox(`links/${props.el.id}`, {
      id: props.el.id,
      gemBoxId: gembox,
    });
    setIsMore(false);
    setIsEdit(false);
    setBoxRefetch(true);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <S.LinkBox isMore={isMore}>
          <a target="_blank" href={props.el?.url} rel="noreferrer">
            <S.LinkBoxImg
              onError={onError}
              src={props.el?.imageUrl}
              isMore={isMore}
            />
          </a>
          {isMore ? (
            <S.LinkBoxContents isMore={isMore}>
              <img
                src="/icons/closeIcon.jpg"
                style={{
                  width: '16px',
                  height: '16px',
                  position: 'absolute',
                  top: 16,
                  right: 24,
                }}
                onClick={() => {
                  setIsMore(false);
                  setIsEdit(false);
                }}
              />
              <S.MoreItems>
                <MemoIcon
                  el={props.el}
                  refetch={props.refetch}
                  open={memoOpen}
                  setOpen={setMemoOpen}
                  onClose={setClose}
                />
                <AddIcon
                  el={props.el}
                  refetch={props.refetch}
                  open={addOpen}
                  setOpen={setAddOpen}
                  onClose={setClose}
                />
                <S.MoreItem onClick={() => setIsEdit(true)}>
                  <S.ChangeIcon />
                  잼박스변경
                </S.MoreItem>
                <S.MoreItem>
                  <S.DeleteIcon
                    src="/icons/deleteIcon.jpg"
                    onClick={onClickDelete}
                  />{' '}
                  삭제
                </S.MoreItem>
              </S.MoreItems>
              {isEdit && (
                <S.Changebox>
                  <S.ChangeItem>
                    현재 잼박스
                    <S.ItemBox type="text" value={boxName || '기본'} disabled />
                  </S.ChangeItem>
                  <S.ChangeItem>
                    변경할 잼박스
                    <SelectBoxPage
                      selectList={data?.contents}
                      gembox={gembox}
                      handleChange={handleChange}
                    />
                  </S.ChangeItem>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      width: '100%',
                      height: '40px',
                    }}
                  >
                    <S.GemBoxButton
                      style={{
                        padding: '11px 27px',
                        fontSize: '14px',
                        borderRadius: '8px',
                        background: '#3C3C3F',
                      }}
                      onClick={() => setIsEdit(false)}
                    >
                      취소
                    </S.GemBoxButton>
                    <S.GemBoxButton
                      onClick={onClickChangeGembox}
                      style={{
                        padding: '11px 63px',
                        fontSize: '14px',
                        borderRadius: '8px',
                      }}
                    >
                      변경
                    </S.GemBoxButton>
                  </div>
                </S.Changebox>
              )}
            </S.LinkBoxContents>
          ) : (
            <S.LinkBoxContents>
              <a
                target="_blank"
                href={props.el?.url}
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <S.LinkBoxTitle>{props.el?.title}</S.LinkBoxTitle>
                <S.LinkBoxRemark>{props.el?.description}</S.LinkBoxRemark>
              </a>
              <S.LinkSubInfo>
                <S.LeftSubInfo>
                  <S.LinkDate>{getDate(props.el?.createDate)}</S.LinkDate>
                  {props.el?.memo !== '' && (
                    <S.MemoIcon
                      src="/icons/memoIcon.jpg"
                      onClick={() => setIsMemoView(true)}
                    />
                  )}
                </S.LeftSubInfo>
                <div>
                  {props.el?.favorites ? (
                    <StarFilled
                      style={{
                        fontSize: '17px',
                        marginRight: '12px',
                        cursor: 'pointer',
                      }}
                      color="#0F0223"
                      onClick={props.onClickPick(props.el)}
                    />
                  ) : (
                    <StarOutlined
                      style={{
                        fontSize: '17px',
                        marginRight: '12px',
                        cursor: 'pointer',
                      }}
                      color="#0F0223"
                      onClick={props.onClickPick(props.el)}
                    />
                  )}

                  <LinkOutlined
                    style={{
                      marginRight: '12px',
                      cursor: 'pointer',
                    }}
                    color="#0F0223"
                    onClick={props.onClickCopyLink(props.el?.url)}
                  />
                  <EllipsisOutlined
                    style={{
                      fontSize: '17px',
                      color: '#0F0223',
                      cursor: 'pointer',
                    }}
                    onClick={() => setIsMore(true)}
                  />
                </div>
              </S.LinkSubInfo>
            </S.LinkBoxContents>
          )}
        </S.LinkBox>
        {isMemoView && (
          <S.Memobox>
            <S.MemoText>{props.el?.memo}</S.MemoText>
            <S.MemoOption onClick={() => setMemoOpen(true)}>
              {props.el?.memo.length >= 215 ? '전체보기' : '수정'}
            </S.MemoOption>
            <S.MemoClose onClick={() => setIsMemoView(false)} />
          </S.Memobox>
        )}
      </div>
      <div style={{ display: 'none' }}>
        <MemoIcon
          el={props.el}
          refetch={props.refetch}
          open={memoOpen}
          setOpen={setMemoOpen}
          onClose={setClose}
        />
      </div>
    </>
  );
};

export default LinkCard;
