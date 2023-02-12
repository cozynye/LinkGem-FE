import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { isMmVisible } from 'store/store';
import styled from 'styled-components';
import { size } from 'styles/variable';
import useLogin from 'utils/useLogin';

export const BottomBar = () => {
  const { pathname } = useRouter();
  const setIsMmVisible = useSetRecoilState(isMmVisible);
  const hasScolledY = () => {};
  useEffect(() => {
    hasScolledY();
  }, []);

  return (
    <>
      {useLogin() ? (
        <BotoomBarContainer>
          <div className="bottom-link">
            <div
              className="link-add"
              onClick={() => {
                setIsMmVisible(true);
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.875"
                  y1="10.833"
                  x2="18.5365"
                  y2="10.833"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="10.2187"
                  y1="19.418"
                  x2="10.2187"
                  y2="2.00026"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="bottom-bar">
            <div className="item-list">
              <Link href="/">
                <div className={`item ${pathname === '/' ? 'active' : ''}`}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1750_2402)">
                      <path
                        d="M13 19.0003H19V9.97827L12 4.53427L5 9.97827V19.0003H11V13.0003H13V19.0003ZM21 20.0003C21 20.2655 20.8946 20.5198 20.7071 20.7074C20.5196 20.8949 20.2652 21.0003 20 21.0003H4C3.73478 21.0003 3.48043 20.8949 3.29289 20.7074C3.10536 20.5198 3 20.2655 3 20.0003V9.49027C2.99989 9.33788 3.03462 9.18749 3.10152 9.05057C3.16841 8.91365 3.26572 8.79384 3.386 8.70027L11.386 2.47827C11.5615 2.34172 11.7776 2.26758 12 2.26758C12.2224 2.26758 12.4385 2.34172 12.614 2.47827L20.614 8.70027C20.7343 8.79384 20.8316 8.91365 20.8985 9.05057C20.9654 9.18749 21.0001 9.33788 21 9.49027V20.0003Z"
                        fill="#CECECE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1750_2402">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Home</span>
                </div>
              </Link>
              <Link href="/gembox">
                <div
                  className={`item ${pathname === '/gembox' ? 'active' : ''}`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_1750_2371" fill="white">
                      <rect x="3" y="3" width="18" height="18" rx="1" />
                    </mask>
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="1"
                      stroke="#CECECE"
                      strokeWidth="4"
                      mask="url(#path-1-inside-1_1750_2371)"
                    />
                    <path
                      d="M12.0479 7L13.3378 10.4945L16.9841 11.9363L13.3378 13.378L12.0479 17.0961L10.8338 13.2262L7.11159 11.9363L10.8338 10.4945L12.0479 7Z"
                      fill="#CECECE"
                    />
                  </svg>

                  <span> My Gem Box</span>
                </div>
              </Link>
              <Link href="/setting">
                <div
                  className={`item ${pathname === '/setting' ? 'active' : ''}`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      fill="#CECECE"
                      className="circle1"
                    />
                    <path
                      d="M12 14C8.48797 14 5.74684 15.9272 5.13031 17.4127C4.97895 17.7774 5.11606 18.1775 5.38691 18.4648C6.18108 19.3072 8.24416 21 12 21C15.7558 21 17.8189 19.3072 18.6131 18.4648C18.8839 18.1775 19.021 17.7774 18.8697 17.4127C18.2532 15.9272 15.512 14 12 14Z"
                      fill="#CECECE"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      transform="rotate(90 12 12)"
                      stroke="#CECECE"
                      strokeWidth="2"
                      className="circle2"
                    />
                  </svg>
                  <span>Setting</span>
                </div>
              </Link>
            </div>
          </div>
        </BotoomBarContainer>
      ) : null}
    </>
  );
};

const BotoomBarContainer = styled.div`
  display: none;

  @media screen and (max-width: ${size.tabletS}) {
    display: block;
  }

  .bottom-link {
    position: fixed;
    bottom: 80px;
    right: 24px;
    z-index: 100;

    .link-add {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #5200ff;

      cursor: pointer;
    }
  }
  .bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 56px;
    border-top: 1px solid #cecece;
    background: #ffffff;
    z-index: 100;
  }

  .item-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;

    .item {
      cursor: pointer;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;

        color: #cecece;
      }
    }

    .active {
      background: #f7f2ff;

      span {
        color: #0f0223;
      }

      rect,
      .circle1,
      .circle2 {
        stroke: #0f0223;
      }
      path,
      .circle1 {
        fill: #0f0223;
      }
    }
  }
`;
