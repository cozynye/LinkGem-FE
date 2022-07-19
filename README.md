## LinkGem

## 브랜치 명명 규칙

- jira 티켓을 feature 뒤에 작성합니다. `feature/LR-9`

## 머지 규칙

- `develop` 브랜치에 머지할 때는 상대방에게 `pr` 올리도록 합니다.
- `master` 브랜치로 머지할때는 꼭 `sqush merge` 합니다.
- 아래 커밋 컨벤션은 main 브랜치에 sqush merge로 넣을때만 지켜주시면 됩니다.

## 커밋컨벤션

### 기능

`feature: 로그인 추가`

### 버그 수정

`fix: 회원가입 로직 수정`

### 디펜던시 추가 및 수정

`chore: 스타일드컴포넌트 버전 수정`

### 테스트

`test: 단위테스트 추가`, `test: 네이버 로그인 기능 테스트`

## 컴포넌트 작성규칙

- 로직과 더미 컴포넌트는 훅스로 꼭 분리합니다. 아무리 간단한 컴포넌트여도 꼭 분리합니다. (간단한 컴포넌트는 귀찮다고 분리 안하면 이후 난장판이 되는 경우가 있습니다)
- 더미컴포넌트와 스타일 컴포넌트는 아무리 간단한 컴포넌트여도 꼭 분리합니다. 스타일 컴포넌트는 더미컴포넌트의 컴포넌트 명을 딴 이후 style을 붙여서 명명하고 확장자명은 ts입니다. `Example.style.ts`
- interface 또는 type은 해당 interface가 다른 컴포넌트에서도 사용할 가능성이 있다면 `Example.type.ts`와 같이 파일로 분리합니다.
