import React, { memo, useEffect, useState } from 'react';
import Link from 'components/Link';
import FirstLink from 'components/Link/FirstLink';
// import { useRouter } from 'next/router';
import {
  RecentSaveLinkContainer,
  RecentSaveLinkTitle,
  RecentSaveLinkOption,
  RecentSaveLinkTitleOption,
  RecentSaveLinkWholeSeries,
  RecentLinkBox,
} from './RecentSaveLink.style';
import { useRecoilValue } from 'recoil';
import { userInfo } from 'store/store';
import { IRecentSaveProps } from 'types/Link.types';
import { useRouter } from 'next/router';
import Axios from 'utils/Axios';

interface IUserInfo {
  id: number;
  title: string;
  description: string;
  memo: string;
  url: string;
  imageUrl: string;
  createDate: string;
  favorites: boolean;
  siteName: string;
  gemBoxId: string;
}

function RecentSaveLink({
  recentLink,
  getLink,
  copyToClipboard,
  handleModal,
}: IRecentSaveProps) {
  const user = useRecoilValue(userInfo);
  const router = useRouter();
  const [isFirstSaveLink, setIsFirstSaveLink] = useState(false);

  const getUserInfo = async () => {
    const response = await Axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/info`,
      {
        method: 'get',
      }
    );
    const result = await response?.data?.result;
    setIsFirstSaveLink(result.isSavedFirstLink);
  };

  const handleGoGembox = () => {
    router.push('/gembox');
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <RecentSaveLinkContainer>
      <RecentLinkBox>
        <RecentSaveLinkTitleOption>
          <RecentSaveLinkTitle>최근 저장한 링크</RecentSaveLinkTitle>
          <RecentSaveLinkWholeSeries onClick={handleGoGembox}>
            전체보기
          </RecentSaveLinkWholeSeries>
        </RecentSaveLinkTitleOption>
        <RecentSaveLinkOption>
          {recentLink.length > 0 &&
            recentLink
              .slice(0, 4)
              .map((link: IUserInfo) => (
                <Link
                  key={link?.id}
                  title={link?.title}
                  description={link?.description}
                  memo={link?.memo}
                  url={link?.url}
                  imageUrl={link?.imageUrl}
                  createDate={link?.createDate}
                  isFavorites={link?.favorites}
                  id={link?.id}
                  getLink={getLink}
                  copyToClipboard={copyToClipboard}
                  siteName={link?.siteName}
                  gemBoxId={link?.gemBoxId}
                />
              ))}
          {recentLink.length < 1 && !isFirstSaveLink && (
            <FirstLink name={user?.nickname} handleModal={handleModal} />
          )}
        </RecentSaveLinkOption>
      </RecentLinkBox>
    </RecentSaveLinkContainer>
  );
}

export default memo(RecentSaveLink);
