import { atom } from 'recoil';
import { v1 } from 'uuid';

const loginState = atom({
  key: 'loginState',
  default: false,
});

const modalState = atom({
  key: 'modalState',
  default: false,
});

const joinState = atom({
  key: 'joinState',
  default: {
    accessToken: '',
    job: '',
    year: '',
    nickname: '',
    userPhase: '',
  },
});

const copyState = atom({
  key: 'copyState',
  default: true,
});

export const accessToken = atom({
  key: 'accessToken',
  default: '',
});

export default copyState;

const userInfo = atom({
  key: 'userInfo',
  default: {
    accessToken: '',
    id: 0,
    nickname: '',
    refreshToken: '',
    loginEmail: '',
    mailEmail: '',
    name: '',
    userPhase: '',
    jobName: '',
    profileImageUrl: '',
  },
});

export const boxNameState = atom({
  key: `boxNameState/${v1()}`,
  default: '전체',
});

export const gemboxRefetch = atom({
  key: `gemboxRefetch/${v1()}`,
  default: false,
});

const recentLinkState = atom({
  key: 'recentLink',
  default: [],
});

const linkSaveState = atom({
  key: 'linkSaveState',
  default: {
    isSuccess: false,
    isVisible: false,
  },
});
export const isMmVisible = atom({
  key: 'isMmVisible',
  default: false,
});

export const isAddGembox = atom({
  key: 'isAddGembox',
  default: false,
});

export {
  loginState,
  joinState,
  modalState,
  userInfo,
  recentLinkState,
  linkSaveState,
};
