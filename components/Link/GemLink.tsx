import Image from 'next/image';
import React, { memo, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  LinkContainer,
  ImageBox,
  LinkDetailBox,
  LinkDetailTitle,
  LinkDetailDescription,
  LinkDetailSetting,
  LinkDetailSettingDate,
  LinkDetailSettingOption,
  EtcButton,
  LinkEtcBox,
  LinkEtcXButton,
  GemCrewLink,
  MemoImage,
} from './GemLink.style';
import { getDate } from 'utils/getDate';
import MemoIcon from 'components/gembox/moreIcons/memo';
import AddIcon from 'components/gembox/moreIcons/add';

import Axios from 'utils/Axios';
import { useQuery } from 'utils/useQuery';
import {
  Changebox,
  ChangeIcon,
  ChangeItem,
  DeleteIcon,
  GemBoxButton,
  ItemBox,
  Memobox,
  MemoClose,
  MemoOption,
  MemoText,
  MoreItem,
} from 'components/gembox/gembox.styles';
import SelectBoxPage from '../atom/select';
import { useMutation } from 'utils/useMutation';
import { useRecoilState } from 'recoil';
import { gemboxRefetch, linkSaveState } from 'store/store';

interface GemLinkProps {
  title: string;
  description: string;
  memo: string;
  url: string;
  imageUrl: string;
  createDate: string;
  isFavorites: boolean;
  id: number;
  getLink: () => void;
  copyToClipboard: (url: string) => void;
  siteName?: string;
  gemGrewItem?: boolean | any;
  gemcrew?: string;
  gemBoxId?: string;
}
function GemLink({
  title,
  description,
  memo,
  url,
  imageUrl = '/images/test.jpeg',
  createDate,
  isFavorites,
  id,
  getLink,
  copyToClipboard,
  siteName,
  gemGrewItem,
  gemcrew,
  gemBoxId,
}: GemLinkProps) {
  const [isBookMark, setIsBookMark] = useState(isFavorites);
  const [isEtcCon, setIsEtcCon] = useState(false);
  const [memoOpen, setMemoOpen] = useState(false);
  const [isMemoView, setIsMemoView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [gembox, setGembox] = useState<any>(null);
  const [changeGembox] = useMutation('patch');
  // const [isMore, setIsMore] = useState<boolean>(false);
  const [, setBoxRefetch] = useRecoilState(gemboxRefetch);
  // const boxName = useQuery(`gemboxes/${gemBoxId || ''}`, {
  //   id: gemBoxId,
  // }).data?.name;
  const [boxName, setBoxName] = useState('');
  const { data } = useQuery('gemboxes');
  const [, setLinkSaveBar] = useRecoilState(linkSaveState);

  // const { data, refetch } = useQuery('links', params);

  const handleChange = (el: any) => () => {
    if (el.name === boxName) return;
    setGembox(el);
  };

  const onClickChangeGembox = async () => {
    await changeGembox(`links/${id}`, {
      id,
      gemBoxId: gembox.id,
    });
    // setIsMore(false);
    setIsEdit(false);
    setBoxRefetch(true);
    const response = await Axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/gemboxes/${gembox}`,
      {
        method: 'get',
        // params: {
        //   id: gemBoxId,
        // },
      }
    );
    setBoxName(response?.data?.result.name);
  };

  const setClose = () => {
    setMemoOpen(false);
  };

  const handleFavorite = async () => {
    try {
      await Axios(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/links/${id}`, {
        method: 'patch',
        data: { isFavorites: !isFavorites },
      });
      setIsBookMark(!isBookMark);
      getLink?.();
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleLinkDelete = async () => {
    try {
      await Axios(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/links`, {
        method: 'delete',
        data: {
          ids: [id],
        },
      });
      setIsBookMark(!isBookMark);
      getLink?.();
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleEtcButton = () => {
    getLink?.();
    setIsEtcCon(!isEtcCon);
  };

  const handleGetGemBoxName = async () => {
    if (gemBoxId) {
      const response = await Axios(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/gemboxes/${gemBoxId}`,
        {
          method: 'get',
          // params: {
          //   id: gemBoxId,
          // },
        }
      );
      setBoxName(response?.data?.result.name);
    }
  };

  const handleLinkSave = async () => {
    try {
      await Axios(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/links`, {
        method: 'post',
        data: {
          url,
        },
      });
      getLink?.();
      setLinkSaveBar({ isVisible: true, isSuccess: true });

      //   setBoxRefetch((prev) => !prev);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        // setIsVisibleMessage(false);
        setLinkSaveBar({ isVisible: false, isSuccess: false });
      }, 3000);
    }
  };

  useEffect(() => {
    handleGetGemBoxName();
  }, []);

  useEffect(() => {}, [isFavorites]);

  return (
    <LinkContainer>
      <ImageBox isEtcCon={isEtcCon}>
        <Link href={url || 'https://linkgem.co.kr/'}>
          <a target="_blank">
            <img
              alt="link-image"
              src={imageUrl || 'images/home-link-default.svg'}
            />
          </a>
        </Link>
      </ImageBox>
      <LinkDetailBox isEtcCon={isEtcCon}>
        <LinkDetailTitle>
          <Link href={url || 'https://linkgem.co.kr/'}>
            <a target="_blank">{title || siteName || url}</a>
          </Link>
        </LinkDetailTitle>
        <LinkDetailDescription>
          <Link href={url || 'https://linkgem.co.kr/'}>
            <a target="_blank">{description}</a>
          </Link>
        </LinkDetailDescription>
        <LinkDetailSetting gemGrewItem={gemGrewItem}>
          <div>
            <LinkDetailSettingDate>
              {gemGrewItem ? (
                <GemCrewLink>
                  <img
                    src="/images/icons/gemcrewpick-icon.svg"
                    alt="gemcrewpick-icon"
                  />
                  <p>{gemcrew}</p>
                </GemCrewLink>
              ) : (
                getDate(createDate)
              )}
            </LinkDetailSettingDate>
            {!gemGrewItem && memo !== '' && (
              <MemoImage
                src="/icons/memoIcon.jpg"
                onClick={() => setIsMemoView(true)}
              />
            )}
          </div>

          <LinkDetailSettingOption>
            {!gemGrewItem ? (
              <>
                <Image
                  alt="link-image"
                  src={
                    isBookMark
                      ? '/images/icons/link-star-black.svg'
                      : '/images/icons/link-star.svg'
                  }
                  width={17}
                  height={16}
                  defaultValue={url}
                  onClick={handleFavorite}
                />
                <Image
                  alt="link-image"
                  src="/images/icons/link-sharing.svg"
                  width={15.79}
                  height={15.82}
                  onClick={() => copyToClipboard(url)}
                />
                <EtcButton onClick={handleEtcButton}>•••</EtcButton>
              </>
            ) : (
              <div className="gemcrewpick-save-btn">
                <svg
                  onClick={() => handleLinkSave()}
                  width="18"
                  height="18"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.90001 11.172L9.90001 11.4135L10.0707 11.2427L16.071 5.24143L17.3436 6.514L9 14.8586L0.656401 6.51498L1.92903 5.24144L7.9293 11.2407L8.10001 11.4114L8.10001 11.17L8.10001 0.100001L9.90001 0.100001L9.90001 11.172ZM0.1 17.1L17.9 17.1L17.9 18.9L0.1 18.9L0.1 17.1Z"
                    fill="black"
                    stroke="white"
                    strokeWidth="0.2"
                  />
                </svg>
              </div>
            )}
          </LinkDetailSettingOption>
        </LinkDetailSetting>
      </LinkDetailBox>
      {isEtcCon && (
        <LinkEtcBox>
          <div className="etc-box">
            <MemoIcon
              el={{ memo, id }}
              refetch={getLink}
              open={memoOpen}
              setOpen={setMemoOpen}
              onClose={setClose}
            />
            <AddIcon
              el={{ id, title }}
              refetch={getLink}
              open={addOpen}
              setOpen={setAddOpen}
              onClose={setClose}
            />
            <MoreItem onClick={() => setIsEdit(true)}>
              <ChangeIcon />
              잼박스변경
            </MoreItem>
            <MoreItem>
              <DeleteIcon
                src="/icons/deleteIcon.jpg"
                onClick={handleLinkDelete}
              />{' '}
              삭제
            </MoreItem>

            <LinkEtcXButton
              src="/images/icons/link-x.svg"
              alt="memo-img"
              onClick={() => setIsEtcCon(false)}
            />
          </div>
        </LinkEtcBox>
      )}
      {isMemoView && (
        <Memobox>
          <MemoText>{memo}</MemoText>
          <MemoOption onClick={() => setMemoOpen(true)}>
            {memo.length >= 215 ? '전체보기' : '수정'}
          </MemoOption>
          <MemoClose onClick={() => setIsMemoView(false)} />
        </Memobox>
      )}
      <div style={{ display: 'none' }}>
        <MemoIcon
          el={{ memo, id }}
          refetch={getLink}
          open={memoOpen}
          setOpen={setMemoOpen}
          onClose={setClose}
        />
      </div>
      {isEdit && (
        <Changebox>
          <ChangeItem>
            현재 잼박스
            <ItemBox type="text" value={boxName || '기본'} disabled />
          </ChangeItem>
          <ChangeItem>
            변경할 잼박스
            <SelectBoxPage
              boxName={boxName}
              selectList={data?.contents}
              gembox={gembox}
              handleChange={handleChange}
            />
          </ChangeItem>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
              height: '40px',
            }}
          >
            <GemBoxButton
              style={{
                padding: '11px 27px',
                fontSize: '14px',
                borderRadius: '8px',
                background: '#3C3C3F',
              }}
              onClick={() => setIsEdit(false)}
            >
              취소
            </GemBoxButton>
            <GemBoxButton
              onClick={onClickChangeGembox}
              style={{
                padding: '11px 63px',
                fontSize: '14px',
                borderRadius: '8px',
              }}
            >
              변경
            </GemBoxButton>
          </div>
        </Changebox>
      )}
    </LinkContainer>
  );
}

export default memo(GemLink);
