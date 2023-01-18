import React, { useEffect, useState, memo } from 'react';
import JoinDropDown from 'components/atom/DropDown/JoinDropDown';
import JoinButton from 'components/atom/Button/JoinButton';
import JoinProgressBar from 'components/atom/ProgressBar/JoinProgressBar';
import JoinTextInput from 'components/atom/TextInput/JoinTextInput';
import { JobInfoContainer, JobText } from './JobInfo.style';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { joinState, modalState } from 'store/store';
import axios from 'axios';

function JobInfo() {
  // eslint-disable-next-line no-use-before-define
  const [context, setContext] = useState<joinType>({
    titleText: '',
    width: '',
    stage: '',
    buttonText: '',
    buttonColor: '',
    defaultCategory: [],
  });
  const setIsOpenModal = useSetRecoilState(modalState);
  const [type, setType] = useState('');
  const [isButtonValueValid, setIsButtonValueValid] = useState(true);
  const joinUserInfo = useRecoilValue(joinState);
  const [isNickNameError, setIsNickNameError] = useState(false);

  const changeType = async () => {
    if (type === 'job') {
      if (!joinUserInfo.job) {
        alert('직업을 선택해주세요');
        return;
      }
      setType('year');
    } else if (type === 'year') {
      if (!joinUserInfo.year) {
        alert('연차를 선택해주세요');
        return;
      }
      setType('nickname');
    } else if (type === 'nickname') {
      if (!joinUserInfo.nickname) {
        alert('닉네임을 입력하세요');
        return;
      }
      try {
        const nickNameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
        if (!nickNameRegex.test(joinUserInfo.nickname)) {
          alert('닉네임을 수정해주세요.');
          return;
        }
        await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/addDetailInfo`,
          {
            careerYear: Number(joinUserInfo.year.split('년')[0]),
            jobName: joinUserInfo.job,
            userNickname: joinUserInfo.nickname,
          },
          {
            headers: {
              Authorization: joinUserInfo.accessToken,
            },
          }
        );
        setIsOpenModal(false);
        const _auth =
          localStorage.getItem('auth') &&
          JSON.parse(localStorage.getItem('auth') as string);
        _auth.userPhase = 'REGISTERED';
        _auth.careerYear = Number(joinUserInfo.year.split('년')[0]);
        _auth.jobName = joinUserInfo.job;
        _auth.nickname = joinUserInfo.nickname;
        localStorage.setItem('auth', JSON.stringify(_auth));
        window.location.href = '/';
      } catch (error: any) {
        if (error.response.data.code === 'USER_NICKNAME_ALREADY_EXIST') {
          console.error('닉네임 에러');
          setIsNickNameError(true);
        }
        console.error('에러가 발생했습니다', error);
      }
    }
  };

  const changeButtonColor = () => {
    setIsButtonValueValid(false);
  };

  const changeButtonColorGreenToGrey = () => {
    setIsButtonValueValid(true);
    setIsNickNameError(false);
  };

  useEffect(() => {
    if (type === '') {
      setType('job');
      setContext({ ...jobInfo });
    } else if (type === 'year') {
      setContext({ ...yearInfo });
    } else if (type === 'nickname') {
      setContext({ ...nickNameInfo });
    }
    setIsButtonValueValid(true);
    setIsNickNameError(false);
  }, [type]);

  return (
    <JobInfoContainer>
      <JoinProgressBar width={context.width} stage={context.stage} />
      <JobText>{context.titleText}</JobText>

      {(type === 'job' || type === 'year') && (
        <JoinDropDown
          dropDownList={context.defaultCategory}
          type={type}
          changeButtonColor={changeButtonColor}
        />
      )}
      {type === 'nickname' && (
        <JoinTextInput
          changeButtonColor={changeButtonColor}
          changeButtonColorGreenToGrey={changeButtonColorGreenToGrey}
          isNickNameError={isNickNameError}
        />
      )}
      <JoinButton
        type={type}
        onClick={changeType}
        backgroundColor={
          isButtonValueValid
            ? '#3C3C3F'
            : type === 'nickname'
            ? '#41FB6A'
            : '#41FB6A'
        }
        color={
          isButtonValueValid
            ? '#CECECE'
            : type === 'nickname'
            ? '#1A1B1D'
            : '#1A1B1D'
        }
        hoverColor={
          type === 'nickname' ? (joinUserInfo.nickname ? '#1CE047' : '') : ''
        }
        width="140px"
        height="56px"
        text={type === 'nickname' ? '링크잼 시작!' : '다음'}
        fontSize="24px"
      />
    </JobInfoContainer>
  );
}

export default memo(JobInfo);

type joinType = {
  titleText: string;
  width: string;
  stage: string;
  buttonText: string;
  buttonColor: string;
  defaultCategory?: string[];
};

const jobInfo: joinType = {
  titleText: '지금 어떤일을 하고 계신가요?',
  width: '50%',
  stage: '1',
  buttonText: '다음',
  buttonColor: '#3C3C3F',
  defaultCategory: [
    '서비스 기획',
    '콘텐츠 기획',
    'UX 디자이너',
    'GUI 디자이너',
    '편집 디자이너',
    '콘텐츠 디자이너',
    '디자이너',
    '백엔드 개발자',
    '앱개발자',
    '프론트 개발자',
    '웹 퍼블리셔',
    '마케팅',
    '사업운영',
    '회계',
    '경영',
    '인사',
    '직접 입력',
  ],
};

const yearInfo: joinType = {
  titleText: '얼마나 일하셨어요?',
  width: '50%',
  stage: '2',
  buttonText: '다음',
  buttonColor: '#3C3C3F',
  defaultCategory: ['1년 미만', '1년', '2년', '3년', '4년', '5년', '5년 이상'],
};

const nickNameInfo: joinType = {
  titleText: '닉네임을 만들어주세요',
  width: '100%',
  stage: '3',
  buttonText: '다음',
  buttonColor: '#3C3C3F',
};
