import Image from 'next/image';
import Link from 'next/link';
import React, { memo } from 'react';
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
  FirstLinkTitle,
  FirstLinkImage,
} from './FirstLink.style';

interface IFirstLink {
  name: string;
  handleModal: (boo: boolean) => void;
}
function FirstLink({ name, handleModal }: IFirstLink) {
  return (
    <>
      <LinkContainer>
        <ImageContainer>
          <Link href="https://shimmer-columnist-0d7.notion.site/ff6fa58f7f6b4f7589cf2f4f74e88ea8">
            <a target="_blank">
              <Image
                alt="link-image"
                src="/images/link-welcome.png"
                width={320}
                height={180}
              />
            </a>
          </Link>
        </ImageContainer>
        <LinkDetailContainer>
          <Link href="https://shimmer-columnist-0d7.notion.site/ff6fa58f7f6b4f7589cf2f4f74e88ea8">
            <a target="_blank">
              <LinkDetailTitle>반가워요 {name} 키퍼님</LinkDetailTitle>
            </a>
          </Link>
          <Link href="https://shimmer-columnist-0d7.notion.site/ff6fa58f7f6b4f7589cf2f4f74e88ea8">
            <a target="_blank">
              <LinkDetailDescription>
                링크잼 크루의 열렬한 환영인사와 사용가이드를 만나보세요{' '}
              </LinkDetailDescription>
            </a>
          </Link>

          <LinkDetailSetting>
            <LinkDetailSettingDate>23.02.08</LinkDetailSettingDate>
            <LinkDetailSettingOption>
              <Image
                alt="link-image"
                src="/images/icons/link-star.svg"
                width={17}
                height={16}
              />
              <Image
                alt="link-image"
                src="/images/icons/link-sharing.svg"
                width={15.79}
                height={15.82}
              />
              <EtcButton>•••</EtcButton>
            </LinkDetailSettingOption>
          </LinkDetailSetting>
        </LinkDetailContainer>
      </LinkContainer>
      <LinkContainer>
        <FirstLinkTitle>
          {name} 키퍼님의
          <br />첫 링크를 저장해 주세요
        </FirstLinkTitle>
        <FirstLinkImage onClick={() => handleModal(true)}>
          <Image
            alt="link-image"
            src="/images/link-plus.svg"
            width={100}
            height={100}
          />
        </FirstLinkImage>
      </LinkContainer>
    </>
  );
}

export default memo(FirstLink);
