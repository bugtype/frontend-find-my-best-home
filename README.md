### Flow

`View => Hooks => Service`

![](docs/frontend-flow.png)

### 명령어

```
npm run start

# build
npm run build

# test
npm run test
```

### TODO

- 이슈 트랙킹 추가
  - 자동으로 커밋에 표시되게 [PR-43] XX기능추가
- 허스키 추가
  - push 할 때, test 및 eslint code 검사하도록
- GithubAction , Jenkins 셋팅
- 추후에는 Apollo를 연결 해야한다.

### 주의!

- Frontend에는 비지니스 로직이 없어야 한다.

- Store를 사용하고 싶을때는 SessionStorage, LocalStorage를 이용하도록 한다.
