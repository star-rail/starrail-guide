# GitHub Pages 배포 가이드

이 폴더를 GitHub Pages로 배포하는 가장 쉬운 방법입니다.

## 1. GitHub 저장소 만들기

1. https://github.com/new 접속
2. Repository name: `starrail-guide` (추천)
3. Public으로 만들기
4. "Add a README file"은 **체크하지 마세요** (이미 우리가 README.md를 만들었음)
5. Create repository 클릭

## 2. 파일 업로드

두 가지 방법이 있습니다:

### 방법 A: GitHub 웹에서 직접 업로드 (초보 추천)
1. 만든 저장소 페이지로 이동
2. "uploading an existing file" 클릭
3. 이 폴더 안의 **모든 파일**을 드래그해서 업로드하세요:
   - index.html
   - guides-data.js          ← 중요! 이 파일도 꼭 올려야 함
   - HOW_TO_EDIT.md
   - README.md
   - DEPLOY.md
   - (나중에 images 폴더도 같이)

### 방법 B: Git 명령어 사용
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/너의아이디/starrail-guide.git
git push -u origin main
```

## 3. GitHub Pages 활성화

1. 저장소 페이지 상단 메뉴에서 **Settings** 클릭
2. 왼쪽 메뉴에서 **Pages** 클릭
3. "Build and deployment" 섹션에서:
   - Source → **Deploy from a branch** 선택
   - Branch → **main**
   - Folder → **/ (root)**
4. Save 클릭

## 4. 확인

몇 분 기다리면 아래 주소로 사이트가 열립니다:

```
https://너의아이디.github.io/starrail-guide/
```

## 이미지 넣는 법 (중요!)

1. `images` 폴더를 만들고 사진을 넣음
2. GitHub에 업로드
3. index.html에서 이미지 경로를 아래처럼 수정:

```js
image: "images/행동게이지_설명.png"
```

또는 외부 이미지 호스팅(Imgur 등)을 사용해도 됩니다.

## 업데이트 방법

나중에 가이드를 수정하거나 추가하고 싶다면:

1. GitHub 저장소 페이지에서 `guides-data.js` 파일을 클릭
2. 연필 아이콘(✏️)을 눌러서 수정
3. 아래에 "Commit changes" 버튼으로 저장

또는 로컬에서 수정한 뒤 다시 업로드해도 됩니다.

변경 사항은 보통 1~2분 안에 반영됩니다.
