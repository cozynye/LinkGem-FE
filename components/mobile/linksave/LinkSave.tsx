import { ChangeEvent, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  gemboxRefetch,
  isMmVisible,
  linkSaveState,
  recentLinkState,
} from 'store/store';
import Axios from 'utils/Axios';
import { LinkSaveWrapper } from './LinkSave.style';

const LinkSave = () => {
  const setIsMmVisible = useSetRecoilState(isMmVisible);
  const [, setLinkSaveBar] = useRecoilState(linkSaveState);
  const [urlText, setUrlText] = useState('');
  const setRecentLink = useSetRecoilState(recentLinkState);
  const setBoxRefetch = useSetRecoilState(gemboxRefetch);

  const handleInputUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUrlText(e.target.value);
  };

  const handleLinkSave = async () => {
    console.log('여기여기222');
    try {
      await Axios('/api/v1/links', {
        method: 'post',
        data: {
          url: urlText.includes('https://')
            ? urlText
            : urlText.includes('http://')
            ? `https://${urlText.split('http://')[1]}`
            : `https://${urlText}`,
        },
      });

      setUrlText('');
      getLink();
      setIsMmVisible(false);
      setBoxRefetch((prev) => !prev);
      setLinkSaveBar({ isVisible: true, isSuccess: true });
    } catch (error) {
      console.error(error);
      setLinkSaveBar({ isVisible: true, isSuccess: false });
    }
    setTimeout(() => {
      // setIsVisibleMessage(false);
      setLinkSaveBar({ isVisible: false, isSuccess: false });
    }, 3000);
  };

  const getLink: () => void = async () => {
    try {
      const response = await Axios({
        url: '/api/v1/links',
        method: 'get',
        params: {
          page: 0,
          size: 8,
        },
      });
      const contents = await response?.data?.result?.contents;
      setRecentLink(contents);
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <LinkSaveWrapper>
      <div className="link-save-wrapper">
        <h3>링크저장</h3>
        <div className="link-url">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.496 13.6V20.512H13.312V13.6H19.808V10.912H13.312V4H10.496V10.912H4V13.6H10.496Z"
              fill="#616163"
            />
          </svg>

          <input
            placeholder="https://..."
            onChange={handleInputUrl}
            value={urlText}
          />
        </div>
        <div className="btn-group">
          <button className="cancel-btn" onClick={() => setIsMmVisible(false)}>
            취소
          </button>
          <button className="save-btn" onClick={() => handleLinkSave()}>
            저장
          </button>
        </div>
      </div>
    </LinkSaveWrapper>
  );
};

export default LinkSave;
