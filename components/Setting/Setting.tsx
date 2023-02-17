import SettingDropDown from 'components/atom/DropDown/SettingDropDown';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  EtcContainer,
  InfoBox,
  SettingBasicInfo,
  SettingButton,
  SettingButtonContontainer,
  SettingCategory,
  SettingContainer,
  SettingDisabledInfo,
  SettingImage,
  SettingImageBox,
  SettingImageHover,
  SettingInfoContainer,
  SettingLineBox,
  SettingTitle,
  ErrorMessage,
  SettingNinkName,
  SettingAuthEmail,
  ButtonBox,
  LinkSaveButton,
  EmailAuthBox,
} from 'components/Setting/Setting.style';
import Axios from 'utils/Axios';
import MuiDialog from 'components/atom/Dialog/MuiDialog';
import useLogin from 'utils/useLogin';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { joinState, userInfo } from 'store/store';
import Modal from 'components/common/Modal/SettingModal';
import { FormType, UserInfoType } from './setting.type';

export default function Setting() {
  const router = useRouter();

  // const isLogin = useLogin();
  const [form, setForm] = useState<FormType>({
    nickName: '',
    jobName: '',
    careerYear: 0,
    email: '',
    name: '',
  });
  const [user, setUser] = useState<UserInfoType>({
    careerYear: 0,
    job: '',
    loginEmail: '',
    mailEmail: '',
    name: '',
    nickname: '',
    profileImageUrl: '',
    userId: 0,
  });
  const [authEmail, setAuthEmail] = useState('');
  const [file, setFile] = useState<File>();
  const [imgUrl, setImgUrl] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDropDownList, setIsDropDownList] = useState(false);
  const setUserInfoState = useSetRecoilState(userInfo);
  const resetJoinState = useResetRecoilState(joinState);
  const [authEmailMessage, setAuthEmailMessage] = useState({
    isMessage: false,
    message: '',
  });
  const [isWithdrawalModal, setIsWithdrawalModal] = useState(false);
  const [isClickedEmailBtn, setIsClickedEmailBtn] = useState(false);
  const handleWithdrawalModal = () => {
    setIsWithdrawalModal(!isWithdrawalModal);
  };

  const [dialogContext, setDialogContext] = useState({
    handleDialog() {},
    title: '',
    context: '',
    isOpen: false,
  });
  const [isAuthEmailModal, setIsAuthEmailModal] = useState(false);
  const [isErrorNickName, setIsErrorNickName] = useState({
    error: false,
    message:
      '* 한글, 영문, 숫자로만 가능합니다. 특수문자 및 이모지는 사용이 안됩니다.',
  });

  const nickNameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    if (!nickNameRegex.test(e.target.value)) {
      setIsErrorNickName({
        message:
          '* 한글, 영문, 숫자로만 가능합니다. 특수문자 및 이모지는 사용이 안됩니다.',
        error: true,
      });
    } else {
      setIsErrorNickName({ ...isErrorNickName, error: false });
    }
  };

  const handleInputChange = useCallback(
    (e) => {
      const { value } = e.target;

      setAuthEmail(value);
    },
    [authEmail]
  );

  const handleLogout = () => {
    localStorage.clear();
    resetJoinState();
    router.push('/');
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
      setImgUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = () => {
    inputRef.current?.click();
  };

  const handleDialog = () => {
    setDialogContext({ ...dialogContext, isOpen: false });
  };

  const handleDefaultUserSetting = () => {
    const auth = JSON.parse(localStorage.getItem('auth') as string);
    setForm({
      name: auth?.name,
      nickName: auth?.nickname,
      email: auth?.loginEmail,
      jobName: auth?.jobName,
      careerYear: auth?.careerYear,
    });
    setAuthEmail(auth?.mailEmail);
  };

  const handleUserSetting = async () => {
    try {
      const auth = JSON.parse(localStorage.getItem('auth') as string);
      await Axios(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/settingUserInfo`,
        {
          method: 'post',
          data: {
            profileImage: file || '',
            nickName: form?.nickName,
            jobName: form.jobName,
            careerYear:
              typeof form.careerYear === 'string'
                ? form.careerYear.split('년')[0]
                : form.careerYear,
          },
          fileUpload: true,
        }
      );
      const _auth = {
        ...auth,
        jobName: form.jobName,
        careerYear:
          typeof form.careerYear === 'string'
            ? Number(form.careerYear.split('년')[0])
            : form.careerYear,
        nickname: form.nickName,
      };
      setUserInfoState(_auth);
      localStorage.setItem('auth', JSON.stringify(_auth));
      setDialogContext({
        handleDialog,
        title: '회원 정보',
        context: '회원 정보를 수정 했습니다.',
        isOpen: true,
      });
      useLogin();
    } catch (error: any) {
      console.error(error);
      if (error.response.data.code === 'USER_NICKNAME_ALREADY_EXIST') {
        setIsErrorNickName({
          error: true,
          message: '이미 있는 닉네임입니다',
        });
      } else {
        setDialogContext({
          handleDialog,
          title: '회원 정보 수정 실패',
          context: '에러가 발생했습니다.',
          isOpen: true,
        });
      }
    }
  };

  const handleAuthEmail = async () => {
    const regexEmail =
      /* eslint-disable-next-line */
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!regexEmail.test(authEmail)) {
      console.log('이메일을 형식에 맞게 입력해주세요');
      setAuthEmailMessage({
        isMessage: true,
        message: '이메일을 형식에 맞게 입력해주세요',
      });
      return null;
    } else {
      setAuthEmailMessage({
        isMessage: false,
        message: '',
      });
      setIsAuthEmailModal((prev) => !prev);
      // setIsClickedEmailBtn(true);
    }
    try {
      await Axios(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/mail/send?emailAddress=${authEmail}`,
        {
          method: 'post',
        }
      );
    } catch (e: any) {
      console.error(e);
      setAuthEmailMessage({
        isMessage: false,
        message: e,
      });
    }
  };

  const handleDropDownList = () => {
    setIsDropDownList(!isDropDownList);
  };

  const handleAuthEmailModal = async () => {
    try {
      const response = await Axios(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/mail/confirm?emailAddress=${authEmail}`,
        {
          method: 'get',
        }
      );
      const result = await response?.data?.result;
      if (result.auth === true) {
        console.log('인증이 완료 되었습니다');
        const response = await Axios(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/info`,
          {
            method: 'get',
          }
        );
        const result = await response?.data?.result;
        setUser(result);
        setIsAuthEmailModal((prev) => !prev);
        setAuthEmail(result.mailEmail);
        return;
      }
      if (result.auth === false) {
        setAuthEmailMessage({
          isMessage: true,
          message: '인증이 완료되지 않았습니다. 다시 인증을 진행해주세요',
        });
        throw new Error('인증에 실패했습니다.');
      } else {
        throw new Error('이메일 인증하는데 오류가 발생했습니다.');
      }
    } catch (e: any) {
      console.error(e);
    }
    setIsAuthEmailModal((prev) => !prev);
  };

  const getUserInfo = async () => {
    const response = await Axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/info`,
      {
        method: 'get',
      }
    );
    const result = await response?.data?.result;
    setUser(result);
  };

  useEffect(() => {
    setForm({
      name: user?.name,
      nickName: user?.nickname,
      email: user?.loginEmail,
      jobName: user?.job,
      careerYear: user?.careerYear,
    });

    setAuthEmail(user?.mailEmail);
    setImgUrl(user?.profileImageUrl);
    if (user?.mailEmail) setIsClickedEmailBtn(true);
  }, [user]);
  useEffect(() => {
    getUserInfo();
    const auth = JSON.parse(localStorage.getItem('auth') as string);
    // if (!isLogin) router.push('/');
    console.log('!!!!!!');
    console.log(auth?.careerYear);
  }, []);

  return (
    <>
      <SettingContainer>
        <SettingInfoContainer>
          <SettingTitle>
            <h3>설정</h3>
            <p>개인 정보 관리와 맞춤 정보 설정을 할 수 있어요</p>
          </SettingTitle>
          <SettingBasicInfo>
            <p>기본 정보</p>
            <hr />
            <SettingLineBox>
              <SettingCategory>프로필 사진</SettingCategory>
              <SettingImageBox>
                <SettingImage src={imgUrl} alt="setting-image" />
                <SettingImageHover onClick={uploadImage}>
                  <div>
                    <img
                      src={'images/icons/setting-image-icon.svg'}
                      alt="setting-image"
                    />
                  </div>
                  <img src={imgUrl || 'images/test.jpeg'} alt="setting-image" />
                </SettingImageHover>
                <input
                  id="input-file"
                  type="file"
                  accept="image/png, image/jpg"
                  onChange={handleChangeFile}
                  ref={inputRef}
                  hidden
                />
              </SettingImageBox>
            </SettingLineBox>
            <SettingLineBox>
              <SettingCategory>로그인 계정</SettingCategory>
              <SettingDisabledInfo type="none">
                <img
                  src="images/icons/setting-naver-logo.svg"
                  alt="naver-logo"
                />
                <span>{form.email}</span>
              </SettingDisabledInfo>
            </SettingLineBox>
            <SettingLineBox>
              <SettingCategory>이름</SettingCategory>
              <SettingDisabledInfo type="none">{form.name}</SettingDisabledInfo>
            </SettingLineBox>
            <SettingLineBox>
              <SettingCategory>닉네임</SettingCategory>
              <SettingNinkName
                type="text"
                value={form.nickName}
                id="nickName"
                onChange={handleChangeNickname}
                isErrorNickName={isErrorNickName.error}
              />
              {form?.nickName?.length > 0 && isErrorNickName.error && (
                <ErrorMessage isErrorNickName={isErrorNickName.error}>
                  {isErrorNickName.message}
                </ErrorMessage>
              )}
            </SettingLineBox>
            <SettingLineBox>
              <SettingCategory>이메일</SettingCategory>

              <EmailAuthBox>
                <div className="email-box">
                  <SettingAuthEmail
                    type="text"
                    value={authEmail || ''}
                    isDisabled={isClickedEmailBtn}
                    id="authEmail"
                    onChange={handleInputChange}
                    placeholder="이메일 인증을 통해 다양한 혜택을 받아보세요."
                    disabled={isClickedEmailBtn}
                  />
                  {authEmail
                    ? isClickedEmailBtn && (
                        <div className="imageBox">
                          <img
                            src="images/icons/email-auth-success-icon.svg"
                            alt="email-auth-success"
                          />
                        </div>
                      )
                    : authEmailMessage.isMessage && (
                        <div className="imageBox">
                          <img
                            src="images/icons/email-auth-false-icon.svg"
                            alt="email-auth-false"
                          />
                        </div>
                      )}
                </div>

                {!isClickedEmailBtn ? (
                  <SettingButton
                    bgColor="#5200FF"
                    color="#ffffff"
                    onClick={() => {
                      handleAuthEmail();
                    }}
                    width="120px"
                  >
                    {user.mailEmail ? '재인증' : '인증'}
                  </SettingButton>
                ) : (
                  <SettingButton
                    bgColor="#3C3C3F"
                    color="#ffffff"
                    onClick={() => {
                      setIsClickedEmailBtn((prev) => !prev);
                    }}
                    width="172px"
                  >
                    이메일 주소 변경
                  </SettingButton>
                )}
                {authEmailMessage.isMessage && (
                  <ErrorMessage isErrorNickName={authEmailMessage.isMessage}>
                    {authEmailMessage.message}
                  </ErrorMessage>
                )}
              </EmailAuthBox>
            </SettingLineBox>
          </SettingBasicInfo>
          <SettingBasicInfo>
            <p>키퍼님의 맞춤 정보</p>
            <SettingLineBox>
              <SettingCategory>직업</SettingCategory>
              <SettingDropDown
                dropDownList={jobInfo.defaultCategory}
                isModal={isDropDownList}
                handleModal={handleDropDownList}
                info={form.jobName}
                type="jobName"
                setForm={setForm}
                form={form}
              />
            </SettingLineBox>
            <SettingLineBox>
              <SettingCategory>총 경력</SettingCategory>
              <SettingDropDown
                dropDownList={['1년', '2년', '3년', '4년', '5년 이상']}
                isModal={isDropDownList}
                handleModal={handleDropDownList}
                info={form.careerYear}
                setForm={setForm}
                type="careerYear"
                form={form}
              />
            </SettingLineBox>
            <SettingLineBox>
              <SettingCategory>관심 카테고리</SettingCategory>
              <SettingDisabledInfo type="ready">
                아직 준비중이에요. 잠시만 기다려주세요.
              </SettingDisabledInfo>
            </SettingLineBox>
            <InfoBox>
              링크잼에서 제공하는 맞춤 링크의 기본 데이터로 활용됩니다
            </InfoBox>
          </SettingBasicInfo>
        </SettingInfoContainer>
        <SettingButtonContontainer>
          {/* 텍스트 컬러 수정해야함 */}
          <SettingButton
            bgColor="#3C3C3F"
            color="#CECECE"
            onClick={handleDefaultUserSetting}
            width="140px"
          >
            취소
          </SettingButton>
          <SettingButton
            bgColor="#5200FF"
            color="#ffffff"
            onClick={handleUserSetting}
            width="140px"
          >
            저장
          </SettingButton>
        </SettingButtonContontainer>
        <EtcContainer>
          {/* <a
            href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=GaA68400epOsIRyJ4C3r&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}oauth/naver/withdrawal`}
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          > */}
          <span onClick={handleWithdrawalModal}>회원탈퇴</span>
          {/* </a> */}

          <span onClick={handleLogout}>로그아웃</span>
        </EtcContainer>
        {dialogContext.isOpen && <MuiDialog dialogContext={dialogContext} />}
      </SettingContainer>
      {isWithdrawalModal && (
        <Modal
          visible={isWithdrawalModal}
          handleModal={handleWithdrawalModal}
          isType
        >
          <>
            <div className="description">
              <h2>정말 탈퇴하시겠어요?</h2>
              <p>
                탈퇴하시면 회원님의 모든 정보와 활동기록이 삭제돼요.
                <br />
                삭제된 정보는 복구할 수 없어요.
              </p>
            </div>

            <ButtonBox>
              <LinkSaveButton
                color="#616163"
                bgColor="#FFFFFF"
                onClick={handleWithdrawalModal}
                dif={'1'}
                width="122px"
                height="42px"
              >
                다시 생각할게요
              </LinkSaveButton>
              <LinkSaveButton
                bgColor="#5200FF"
                color="#FFFFFF"
                width="122px"
                height="42px"
              >
                <a
                  href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=GaA68400epOsIRyJ4C3r&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}oauth/naver/withdrawal`}
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  네, 탈퇴할게요
                </a>
              </LinkSaveButton>
            </ButtonBox>
          </>
        </Modal>
      )}
      {isAuthEmailModal && (
        <Modal
          visible={isAuthEmailModal}
          handleModal={() => {
            setIsAuthEmailModal((prev) => !prev);
          }}
          isType={false}
        >
          <>
            <div className="description">
              <h2>
                {user?.mailEmail ? '새로운 이메일로 인증' : '이메일 인증'}
              </h2>
              <p>
                {user?.mailEmail ? (
                  <>
                    <p>적어주신 새로운 이메일로 인증 메일을 전송하였습니다.</p>
                    <p>
                      새로운 이메일로 인증하지 않았을 시 기존 이메일 주소가
                      유지됩니다.
                    </p>
                    <p>
                      <span className="bold">
                        <span className="violet">이메일 인증 완료 후 </span>아래
                        이메일 인증완료 버튼을 눌러주세요.
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <p>적어주신 이메일로 인증 메일을 전송하였습니다.</p>
                    <p>
                      <span className="bold">
                        <span className="violet">이메일 인증 완료 후 </span>아래
                        이메일 인증완료 버튼을 눌러주세요.
                      </span>
                    </p>
                  </>
                )}
              </p>
            </div>
            {/* <h2>{user?.mailEmail ? '새로운 이메일로 인증' : '이메일 인증'}</h2> */}
            {/* <LinkTextContainer>
              {user?.mailEmail ? (
                <>
                  <p>적어주신 새로운 이메일로 인증 메일을 전송하였습니다.</p>
                  <p>
                    새로운 이메일로 인증하지 않았을 시 기존 이메일 주소가
                    유지됩니다.
                  </p>
                  <p>
                    <span className="violet">이메일 인증 완료 후 </span>
                    <span className="bold">
                      아래 이메일 인증완료 버튼을 눌러주세요.
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <p>적어주신 이메일로 인증 메일을 전송하였습니다.</p>
                  <p>
                    <span className="violet">이메일 인증 완료 후 </span>
                    <span className="bold">
                      아래 이메일 인증완료 버튼을 눌러주세요.
                    </span>
                  </p>
                </>
              )}
            </LinkTextContainer> */}
            <ButtonBox>
              <LinkSaveButton
                color="#616163"
                bgColor="#FFFFFF"
                onClick={() => setIsAuthEmailModal(false)}
                dif={'1'}
                width="91px"
                height="42px"
              >
                취소
              </LinkSaveButton>
              <LinkSaveButton
                width="91px"
                height="42px"
                bgColor="#5200FF"
                color="#FFFFFF"
                onClick={handleAuthEmailModal}
              >
                인증완료
              </LinkSaveButton>
            </ButtonBox>
          </>
        </Modal>
      )}
    </>
  );
}

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
    '하시는 일을 입력해 주세요',
  ],
};
