import Image from 'next/image';
import React, { memo, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  LinkContainer,
  ImageContainer,
  LinkDetailContainer,
  LinkDetailTitle,
  LinkDetailDescription,
  LinkDetailSetting,
  LinkDetailSettingDate,
  LinkDetailSettingOption,
  EtcButton,
  LinkEtcContainer,
  LinkEtcButtonContainer,
  LinkEtcButton,
  LinkEtcXButton,
} from './GemLink.style';
import LinkCopy from 'components/LinkCopy';
import Axios from 'utils/Axios';

interface GemLinkProps {
  title: string;
  description: string;
  memos: string;
  url: string;
  imageUrl: string;
  createDate: string;
  isFavorites: boolean;
  id: number;
  getLink?: () => void;
}
function GemLink({
  title,
  description,
  memos,
  url,
  imageUrl,
  createDate,
  isFavorites,
  id,
  getLink,
}: GemLinkProps) {
  const [isCopy, setIsCopy] = useState(false);

  const [isBookMark, setIsBookMark] = useState(isFavorites);
  const [isEtcCon, setIsEtcCon] = useState(false);

  const copyToClipboard = (val: string) => {
    const element = document.createElement('textarea');
    element.value = val;
    element.setAttribute('readonly', '');
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    document.body.appendChild(element);
    element.select();
    const returnValue = document.execCommand('copy');
    document.body.removeChild(element);

    if (!returnValue) {
      console.log('복사하기가 실패했습니다');
    }
    setIsCopy(true);

    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };

  console.log('imageUrl');
  console.log(imageUrl);

  const handleFavorite = async () => {
    try {
      await Axios(`/api/v1/links/${id}`, {
        method: 'patch',
        data: { isFavorites: !isFavorites },
      });
      setIsBookMark(!isBookMark);
    } catch (error: any) {
      console.log('링크 좋아요 에러가 발생했습니다');
      console.log(error);
    }
  };

  const handleLinkDelete = async () => {
    try {
      await Axios(`/api/v1/links`, {
        method: 'delete',
        data: {
          ids: [id],
        },
      });
      setIsBookMark(!isBookMark);
      getLink?.();
    } catch (error: any) {
      console.log('링크 삭제 에러가 발생했습니다');
      console.log(error);
    }
  };

  const handleEtcButton = () => {
    setIsEtcCon(!isEtcCon);
  };

  useEffect(() => {}, [isFavorites]);
  return (
    <LinkContainer>
      <ImageContainer>
        <Link href={url || 'https://www.naver.com'}>
          <a target="_blank">
            <img
              alt="link-image"
              src={imageUrl || '/images/link-default-image.svg'}
              width={320}
              height={180}
            />
          </a>
        </Link>
      </ImageContainer>
      <LinkDetailContainer>
        <LinkDetailTitle>
          <Link href={url || 'https://www.naver.com'}>
            <a target="_blank">
              {title ||
                '반가워요 다이아 키퍼님반가워요 다이아 키퍼님 반가워요 다이아 키퍼님 반가워요 다이아 키퍼님 반가워요 다이아 키퍼님'}
            </a>
          </Link>
        </LinkDetailTitle>
        <LinkDetailDescription>
          <Link href={url || 'https://www.naver.com'}>
            <a target="_blank">
              {description ||
                '설명설명설명설명설명설명설명설명 설명설명 설명설명 설명설명 설명설명설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명'}
            </a>
          </Link>
        </LinkDetailDescription>
        <LinkDetailSetting>
          <LinkDetailSettingDate>
            {createDate || '22.07.13'}
          </LinkDetailSettingDate>
          <LinkDetailSettingOption>
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
          </LinkDetailSettingOption>
        </LinkDetailSetting>
      </LinkDetailContainer>
      {isEtcCon && (
        <LinkEtcContainer>
          <LinkEtcButtonContainer>
            <LinkEtcButton
              src="/images/icons/link-memo-icon.svg"
              alt="memo-img"
            />
            <span>메모</span>
          </LinkEtcButtonContainer>
          <LinkEtcButtonContainer>
            <LinkEtcButton
              src="/images/icons/link-gemboxplus-icon.svg"
              alt="memo-img"
            />
            <span>잼박스 추가</span>
          </LinkEtcButtonContainer>
          <LinkEtcButtonContainer>
            <LinkEtcButton
              src="/images/icons/link-gemboxchange-icon.svg"
              alt="memo-img"
            />
            <span>잼박스 변경</span>
          </LinkEtcButtonContainer>
          <LinkEtcButtonContainer>
            <LinkEtcButton
              src="/images/icons/link-trash-icon.svg"
              alt="memo-img"
              onClick={handleLinkDelete}
            />
            <span>삭제</span>
          </LinkEtcButtonContainer>
          <LinkEtcXButton
            src="/images/icons/link-x.svg"
            alt="memo-img"
            onClick={() => setIsEtcCon(false)}
          />
        </LinkEtcContainer>
      )}
      {isCopy && <LinkCopy />}
    </LinkContainer>
  );
}

export default memo(GemLink);
