import Link from 'components/Link';
import React, { memo, useEffect, useState } from 'react';
import Axios from 'utils/Axios';
import {
  GemCrewPickContainer,
  GemCrewPickTitle,
  GemCrewPickDescription,
  GemCrewPickOption,
  GemCrewPickBox,
} from './GemCrewPick.style';

interface IGemCrewPick {
  copyToClipboard: (url: string) => void;
  getLink: () => void;
}

interface IGemCreLink {
  id: number;
  url: string;
  title: string;
  description: string;
  imageUrl: string;
  siteName: string;
  createDate: string;
  updateDate: string;
}

function GemCrewPick({ copyToClipboard, getLink }: IGemCrewPick) {
  const [gemcrewLink, setGemcrewLink] = useState<IGemCreLink[]>([]);
  const getGemCrewLink: () => void = async () => {
    console.log('중요');
    try {
      const response = await Axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/common-links`,
        method: 'get',
        params: {
          page: 0,
          size: 4,
        },
      });

      const contents = await response?.data?.result?.contents;
      setGemcrewLink(contents);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGemCrewLink();
  }, []);

  console.log('gemcrewLink');
  console.log(gemcrewLink);
  return (
    <GemCrewPickContainer>
      <GemCrewPickTitle>잼크루 PICK</GemCrewPickTitle>
      <GemCrewPickDescription>
        딱 24시간만 공유되는 잼크루들의 관심링크!
      </GemCrewPickDescription>
      <GemCrewPickBox>
        <GemCrewPickOption>
          {gemcrewLink.map((item, index) => (
            <Link
              key={item.id}
              title={item.title}
              description={item.description}
              memo={''}
              url={item.url}
              imageUrl={item.imageUrl}
              gemcrew="잼크루 bom's pick"
              isFavorites={false}
              id={item.id}
              copyToClipboard={copyToClipboard}
              gemGrewItem={true}
              createDate="1"
              getLink={getLink}
            />
          ))}
        </GemCrewPickOption>
      </GemCrewPickBox>
    </GemCrewPickContainer>
  );
}

export default memo(GemCrewPick);

// const list = [
//   {
//     id: 1,
//     title: 'Vite에 관한 내용',
//     description:
//       '이번 글은 Vite에 관한 내용입니다. 최근 Svelte와 관련한 사내 발표 내용 중 다들 재미있어 했던 Vite에 관한 이야기를 블로그 형식으로 각색하여 다시 정리해보았습니다.',
//     memos: '메모',
//     url: 'https://velog.io/@teo/vite',
//     imageUrl:
//       'https://velog.velcdn.com/images/teo/post/fca299b5-7618-4bc2-8591-cb7df9fe60df/image.png',
//     gemcrew: "잼크루 bom's pick",
//   },
//   {
//     id: 2,
//     title: 'Prettier ESLint 쓰는사람 주목!!',
//     description:
//       '여러분 ESLint와 Prettier 아시나요? 이는 강력한 도구로 코드의 일관성을 지켜주는 코드컨벤션입니다.',
//     memos: '메모',
//     url: 'https://velog.io/@lokijoji2/ESLint%EB%9E%91-Prettier-%EC%93%B0%EA%B8%B0-%EA%B7%80%EC%B0%AE%EC%9C%BC%EB%A9%B4-%EC%9D%B4%EA%B1%B0-%EC%8D%A8-cak7e4uo',
//     imageUrl:
//       'https://velog.velcdn.com/images/lokijoji2/post/b3e61804-e1f9-4804-99c1-e45b03bf38a4/image.gif',
//     gemcrew: "잼크루 bom's pick",
//   },
//   {
//     id: 3,
//     title: 'React + Ionic으로 iOS, 안드 앱을 만든 후기',
//     description:
//       '리액트로 만들어진 서비스를 앱으로 어떻게 만들지... 새로 만들긴 싫은데.. 이런 생각을 하다가 가능한 방법을 모색했습니다. 바로 떠오른 방법은 React Native였습니다. 저는 React Native에 대해서 많이 들어봤지만, 사용해 본적은 없었습니다. 지금 상황에서 React Native로 만들려면 React Native의 TextView, View로 감싸서 새롭게 개발을 해야 하며 관리 포인트가 꽤 늘어난다고 생각 하여 포기했습니다. 무엇보다 웹을 좋아하고 웹 베이스로 만들고 싶었고, 최적화 등도 웹 측면에서 해결해보고 싶었습니다.',
//     memos: '메모',
//     url: 'https://velog.io/@tmmoond8/React-Ionic%EC%9C%BC%EB%A1%9C-iOS-%EC%95%88%EB%93%9C-%EC%95%B1%EC%9D%84-%EB%A7%8C%EB%93%A0-%ED%9B%84%EA%B8%B0',
//     imageUrl:
//       'https://user-images.githubusercontent.com/11402468/180954960-02bdf638-7ca2-4ede-9e85-7f9f2b5afa25.png',
//     gemcrew: "잼크루 bom's pick",
//   },
//   {
//     id: 4,
//     title: '낡은 코드를 뜯어고쳐봅시다.',
//     description:
//       '동기화봇은 구글 캘린더와 노션을 동기화하는 서비스인 Calendar2notion에서 동기화를 진행해주는 핵심 프로그램의 이름입니다. 서비스 그 자체라는 중요도에 비해 아직도 자바스크립트로 작성되어 있을 정도로 굉장히 구식입니다.',
//     memos: '메모',
//     url: 'https://velog.io/@phw3071/%EB%82%A1%EC%9D%80-%EC%BD%94%EB%93%9C-%EB%9C%AF%EC%96%B4%EA%B3%A0%EC%B9%98%EA%B8%B0-1',
//     imageUrl:
//       'https://velog.velcdn.com/images/phw3071/post/ecc52f1b-829c-4c59-83c3-f8f470550c2b/image.gif',
//     gemcrew: "잼크루 bom's pick",
//   },
// ];
