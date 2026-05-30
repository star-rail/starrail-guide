# 이미지 관리 가이드

## 현재 전략 (B 방향 기준)

- **지금 ~ 40장 정도**: 이 폴더 안에 직접 이미지를 넣어서 관리
- **40~50장 이상** 또는 관리가 귀찮아지기 시작하면: 
  - 새로 추가하는 이미지는 **ImgBB** 같은 외부 호스팅으로 이동
  - 기존 이미지는 천천히 마이그레이션

## 폴더 구조

```
images/
├── builds/          ← 캐릭터 세팅 이미지 (가장 많이 늘어날 폴더)
│   └── ebaneisa-v1.png
├── guides/          ← 일반 가이드용 이미지, 스크린샷 등
└── README.md
```

## 파일명 규칙 (권장)

- `캐릭터명-버전.png`
- 예시:
  - `ebaneisa-v1.png`
  - `silverwolf-v2.png`
  - `firefly-break-v1.png`

## 사용 예시 (guides-data.js)

```js
{
  id: 21,
  category: "세팅",
  title: "에바네시아 유물 · 광추 세팅",
  desc: "...",
  buildImage: "images/builds/ebaneisa-v1.png"
}
```

## 주의사항

- 큰 PNG 파일을 너무 많이 넣으면 Git 저장소가 무거워집니다.
- 나중에 ImgBB로 옮길 계획이라면, 파일명 규칙을 지금부터 잘 지켜주세요.
```

Now, update the main HOW_TO_EDIT.md or add a note in the index.html comment about the image strategy. But first, let's confirm the folder structure is visible.