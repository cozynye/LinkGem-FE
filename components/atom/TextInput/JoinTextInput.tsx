import React, { useEffect, useState } from 'react';
import { joinState } from 'store/store';
import { useSetRecoilState } from 'recoil';

import {
  JoinTextInputContainer,
  JoinTextInputTextContainer,
  JoinTextInputText,
  NickNameErrorMessage,
} from './JoinTextInput.style';

type JoinTextInputProps = {
  changeButtonColor: () => void;
  changeButtonColorGreenToGrey: () => void;
  isNickNameError: boolean;
};

function JoinTextInput({
  changeButtonColor,
  changeButtonColorGreenToGrey,
  isNickNameError,
}: JoinTextInputProps) {
  const [nickName, setNickName] = useState('');
  const [isErrorNickname, setIsErrorNickname] = useState(false);
  const setJoinInfo = useSetRecoilState(joinState);

  const nickNameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!nickNameRegex.test(value)) {
      setIsErrorNickname(true);
    } else {
      setIsErrorNickname(false);
    }
    setNickName(value);
    changeButtonColor();
  };
  useEffect(() => {
    setJoinInfo((prev) => ({ ...prev, nickname: nickName }));
    if (nickName.length === 0) changeButtonColorGreenToGrey();
  }, [nickName]);

  useEffect(() => {
    if (isNickNameError) setIsErrorNickname(true);
  }, [isNickNameError]);
  return (
    <JoinTextInputContainer>
      <JoinTextInputTextContainer>
        <JoinTextInputText
          placeholder="예) 링크잼 크루"
          onChange={handleChangeNickname}
          value={nickName}
          isErrorNickName={isErrorNickname}
        />
      </JoinTextInputTextContainer>
      {nickName.length > 0 && (
        <NickNameErrorMessage isErrorNickName={isErrorNickname}>
          {isNickNameError
            ? '이미 있는 닉네임입니다'
            : '* 한글, 영문, 숫자로만 가능합니다. 특수문자 및 이모지는 사용이 안됩니다.'}
        </NickNameErrorMessage>
      )}
    </JoinTextInputContainer>
  );
}

export default JoinTextInput;
