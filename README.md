## 미리보기

<img src="docs/preview.gif" width="500"  />

## 목표

집, 자취 관련 커뮤니티 만들기

- 기능 ( R - 읽기, W - 쓰기)
  - [x] 로그인
  - [x] R 글 목록
  - [x] R 글 상세 보여주기
  - [ ] W 글 작성
  - [ ] W 댓글 기능
  - [ ] 기타
    - [ ] 조회수
    - [ ] 캐싱
- 디자인
  - UI
    - [ ] 글꼴
    - [ ] 게시글, 게시물 배치
    - [ ] 헤더, 풋터
    - [ ] 조회수 표시
  - UX
    - [ ] 현재 글 목록에서 `페이지 2` 에서 게시물 클릭시, 글 목록에서 `페이지 1` 로 보여준다.
    - [ ] 글 목록에서 `현재 게시글`이 어떤건 지 구별하지 못한다.

### Project Stack

- React
- Typescript
- Rxjs
- Axios
- Eslint
- Webpack
- TODO Apollo

### Project Flow

`View => Hooks => Service`

![](docs/frontend-flow.png)

### 명령어

```

# start
npm run start

# build
npm run build

# test
npm run test
```

### 개발 관련 TODO

- 이슈 트랙킹 추가
  - 자동으로 커밋에 표시되게 [PR-43] XX기능추가
- 허스키 추가
  - push 할 때, test 및 eslint code 검사하도록
- GithubAction , Jenkins 셋팅
- 추후에는 Apollo를 연결 해야한다.
