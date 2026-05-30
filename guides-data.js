// ========================================================
// ★★★★★ 이 파일만 수정하세요 ★★★★★
//
// 왜 이 파일만 만져야 하나요?
// 
// - guides-data.js → "가이드 내용(데이터)"만 들어있는 파일
// - index.html     → "사이트 전체를 만드는 코드"가 들어있는 파일
//
// index.html을 잘못 건드리면 사이트가 아예 안 열릴 수 있어요.
// 그래서 가이드 추가/수정은 **무조건 이 파일(guides-data.js)에서만** 하세요.
//
// 이 파일은 그냥 "가이드 목록"이 쭉 나열된 메모장 같은 거라고 생각하면 됩니다.
// ========================================================

const guides = [
  // ====================================================
  // === 기본 시스템 ===
  // ====================================================
  {
    id: 1,
    category: "기본",
    title: "행동 게이지(턴) 시스템",
    desc: "행동 게이지가 어떻게 차는지, 속도(스피드)세팅의 중요성.",
    content: `
      <h3>행동 게이지란?</h3>
      <p>캐릭터가 언제 행동할 수 있는지를 결정하는 게이지입니다.</p>
      
      <h3>중요 포인트</h3>
      <ul>
        <li>스피드(속도)가 높을수록 게이지가 빠르게 찹니다.</li>
        <li>같은 스피드라도 '행동 게이지 보너스' 효과가 있으면 더 빨라집니다.</li>
        <li>적의 약점을 격파하면 적의 행동 게이지가 감소합니다.</li>
      </ul>
      
      <p><strong>실전 팁:</strong> 서포터는 보통 메인 딜러보다 스피드를 높게 맞추는 경우가 많습니다. 예시 문장입니다
      자료 수정중</p>
    `
  },
  {
    id: 2,
    category: "기본",
    title: "비술이란",
    desc: "비술이 정확히 무엇인지, 언제 써야 하는지, 필드에서 어떻게 활용하는지 정리.",
    buildImage: "images/guides/bisul.jpg",
    content: `
      <p>비술은 필드에서 사용할 수 있는 특수 스킬입니다. 대부분의 캐릭터가 가지고 있으며, 상황에 따라 매우 강력하다.
      <해당 사진은 참고용이며, 최신화가 되어있지 않습니다.></p>
      
      <h3>비술 종류</h3>
      <ul>
        <li>전투 진입 전 이득을 보는 비술</li>
        <li>필드 이동/탐색에 유리한 비술</li>
        <li>특정 적에게 강한 비술</li>
      </ul>
    `
  },
  {
    id: 3,
    category: "기본",
    title: "속성 시스템",
    desc: "보스의 최우선 취약 약점.",
    content: "내용 작성 예정"
  },
  {
    id: 6,
    category: "기본",
    title: "약점격파&슈퍼격파 시스템",
    desc: "약점 격파의 특징과 격파파티의 구조성",
    content: "내용 작성 예정"
  },
  // ====================================================
  // === 파밍 & 진행 ===
  // ====================================================
  {
  id: 4,
  category: "파밍",
  title: "맵 성옥 파밍을 위한 지도",
  desc: "아잉 행시는 상자와 퍼즐위치를 알고싶어용!",
  buildImage: "images/guides/hangsi-1.gif",
  content: `
    <p>
      <a href="https://act.hoyolab.com/sr/app/interactive-map/index.html?hyl_presentation_style=fullscreen&lang=ko-kr&plat_type=pc"
         target="_blank"
         style="color:#7dd3fc;">
        스타레일 지도 바로가기
      </a>
    </p>
    <h3>사용 방법</h3>
      <ul>
        <li>원하는 지역으로 변경</li>
        <li>장소를 선택</li>
        <li>필요없는것들은 체크 해제</li>
        <li>맵에 퍼즐 위치나 전리품 상자의 위치가 표기됨</li>
        <li>먹었다면 획득 체크를 하여 숨김처리를 한다.</li>
      </ul>
  `
},
  {
    id: 5,
    category: "파밍",
    title: "유물작 그게 뭐야?",
    desc: "졸라 생각중.",
    content: "내용 작성 예정"
  },

  // ====================================================
  // === 미디어 데이터 (정리된 버전) ===
  // ====================================================

  // ==================== 게임 시작 전 ====================
  {
    id: 200,
    category: "미디어",
    mediaGroup: "게임 시작 전",
    title: "OP : 성간여행",
    youtubeId: "T-4PPgv1sKg",
    desc: ""
  },
  {
    id: 201,
    category: "미디어",
    mediaGroup: "게임 시작 전",
    title: "별무리 기행 : 별하늘 우화 1",
    youtubeId: "eLWgEmiiPPE",
    desc: ""
  },

  // ==================== 선주 나부 클리어 후 ====================
  {
    id: 202,
    category: "미디어",
    mediaGroup: "선주 나부 클리어 후",
    title: "별무리 기행 : 선주통감 천궁의 7대장군",
    youtubeId: "vH70I2vYtkI",
    desc: ""
  },
  {
    id: 203,
    category: "미디어",
    mediaGroup: "선주 나부 클리어 후",
    title: "별무리 기행 : 선주 통감 5룡의 원정",
    youtubeId: "JSc3ncN_dL8",
    desc: ""
  },
  {
    id: 204,
    category: "미디어",
    mediaGroup: "선주 나부 클리어 후",
    title: "단편 애니메이션 : 섬광",
    youtubeId: "NoUiU43jHac",
    desc: ""
  },
  {
    id: 205,
    category: "미디어",
    mediaGroup: "선주 나부 클리어 후",
    title: "단편 애니메이션 : 현황",
    youtubeId: "kBgF6BqfTMc",
    desc: ""
  },
  {
    id: 206,
    category: "미디어",
    mediaGroup: "선주 나부 클리어 후",
    title: "별무리 기행 : 예페라 반란 : 제 47장",
    youtubeId: "pgKhECnAL-c",
    desc: ""
  },
  {
    id: 207,
    category: "미디어",
    mediaGroup: "선주 나부 클리어 후",
    title: "EP : 수룡음",
    youtubeId: "ikHgznmsci8",
    desc: ""
  },

  // ==================== 동행임무 흔적을 남기지 않은 구름 클리어 후 ====================
  {
    id: 208,
    category: "미디어",
    mediaGroup: "동행임무 흔적을 남기지 않은 구름 클리어 후",
    title: "별무리 기행 : 운기군 무술 경전 설검",
    youtubeId: "VJt66mXk5b4",
    desc: ""
  },

  // ==================== 개척후문 겨울꿈에서 깨어난 순간 클리어 후 ====================
  {
    id: 209,
    category: "미디어",
    mediaGroup: "개척후문 겨울꿈에서 깨어난 순간 클리어 후",
    title: "별무리 기행 : 스타피스 안내: 선발, 계획과 기회",
    youtubeId: "gMlzmFoculY",
    desc: ""
  },

  // ==================== 개척후문 호재지이 클리어 후 ====================
  {
    id: 210,
    category: "미디어",
    mediaGroup: "개척후문 호재지이 클리어 후",
    title: "별무리 기행 : 유원복마기",
    youtubeId: "MDCGYZmAP48",
    desc: ""
  },

  // ==================== 개척후문 인간과 신의 면류관 클리어 후 ====================
  {
    id: 211,
    category: "미디어",
    mediaGroup: "개척후문 인간과 신의 면류관 클리어 후",
    title: "별무리 기행 : 완매",
    youtubeId: "mHDO9BZKyMc",
    desc: ""
  },
  {
    id: 212,
    category: "미디어",
    mediaGroup: "개척후문 인간과 신의 면류관 클리어 후",
    title: "별무리 기행 : 영원한 불길의 밤: S#33",
    youtubeId: "F4LvWr2x9M4",
    desc: ""
  },

  // ==================== 페나코니 진입 전 ====================
  {
    id: 213,
    category: "미디어",
    mediaGroup: "페나코니 진입 전",
    title: "OP : WHITE NIGHT",
    youtubeId: "9ixmwNCbo1c",
    desc: ""
  },
  {
    id: 214,
    category: "미디어",
    mediaGroup: "페나코니 진입 전",
    title: "별무리 기행 : 옛 꿈의 추억",
    youtubeId: "GhYdAWOG_QE",
    desc: ""
  },

  // ==================== 페나코니 1막 음항과 분고 클리어 후 ====================
  {
    id: 215,
    category: "미디어",
    mediaGroup: "페나코니 1막 음항과 분고 클리어 후",
    title: "별무리 기행 : <<스파클>> : 무대 뒤에서",
    youtubeId: "UFhiHqs4L0U",
    desc: ""
  },
  {
    id: 216,
    category: "미디어",
    mediaGroup: "페나코니 1막 음항과 분고 클리어 후",
    title: "단편 애니메이션 : 영겁의 춤",
    youtubeId: "gD091h77N50",
    desc: ""
  },
  {
    id: 217,
    category: "미디어",
    mediaGroup: "페나코니 1막 음항과 분고 클리어 후",
    title: "별무리 기행 : 허담 단칼에 끊어낸 부세",
    youtubeId: "d5p7FPzPSR0",
    desc: ""
  },

  // ==================== 페나코니 2막 비둘기 속의 고양이 클리어 후 ====================
  {
    id: 218,
    category: "미디어",
    mediaGroup: "페나코니 2막 비둘기 속의 고양이 클리어 후",
    title: "EP : 애타는 한 가슴을 달랠 수 있다면",
    youtubeId: "NHDiAdp13Hg",
    desc: ""
  },
  {
    id: 219,
    category: "미디어",
    mediaGroup: "페나코니 2막 비둘기 속의 고양이 클리어 후",
    title: "별을 누빈 순간 : 언제나 불공평한 운명, 하지만...",
    youtubeId: "i-6rbZrd0XM",
    desc: ""
  },
  {
    id: 220,
    category: "미디어",
    mediaGroup: "페나코니 2막 비둘기 속의 고양이 클리어 후",
    title: "별을 누빈 순간 : 논제로섬 게임",
    youtubeId: "eRHRrb5xBIM",
    desc: ""
  },
  {
    id: 221,
    category: "미디어",
    mediaGroup: "페나코니 2막 비둘기 속의 고양이 클리어 후",
    title: "별무리 기행 : 만약 한 쌍의 날개가 있다면",
    youtubeId: "WctNTA5chC4",
    desc: ""
  },

  // ==================== 페나코니 3막 우리들의 시대에 클리어 후 ====================
  {
    id: 222,
    category: "미디어",
    mediaGroup: "페나코니 3막 우리들의 시대에 클리어 후",
    title: "EP : 희망은 날개 달린 것",
    youtubeId: "r0dvrhPK66U",
    desc: ""
  },

  // ==================== 페나코니 4막 안녕, 페나코니 클리어 후 ====================
  {
    id: 223,
    category: "미디어",
    mediaGroup: "페나코니 4막 안녕, 페나코니 클리어 후",
    title: "좋은꿈 커튼콜 : 타탈로브가 당신에게 표하는 경의",
    youtubeId: "VPkA8Pe5oFs",
    desc: ""
  },
  {
    id: 224,
    category: "미디어",
    mediaGroup: "페나코니 4막 안녕, 페나코니 클리어 후",
    title: "별무리 기행 : 지금 이 순간, 같은 별하늘 아래",
    youtubeId: "KFOEuMlIYQE",
    desc: ""
  },
  {
    id: 225,
    category: "미디어",
    mediaGroup: "페나코니 4막 안녕, 페나코니 클리어 후",
    title: "단편 애니메이션 : 그라모스의 잔화",
    youtubeId: "ryyd59vD-bg",
    desc: ""
  },
  {
    id: 226,
    category: "미디어",
    mediaGroup: "페나코니 4막 안녕, 페나코니 클리어 후",
    title: "별을 누빈 순간 : 보나제이드 전당포",
    youtubeId: "8DcjSY9hp3I",
    desc: ""
  },
  {
    id: 227,
    category: "미디어",
    mediaGroup: "페나코니 4막 안녕, 페나코니 클리어 후",
    title: "별무리 기행 : 스톤하트 맹세 반지 저울의 양 끝",
    youtubeId: "vhIsH-RjAUw",
    desc: ""
  },

  // ==================== 개척후문 청천 위 교차하는 칼끝 상 클리어 후 ====================
  {
    id: 228,
    category: "미디어",
    mediaGroup: "개척후문 청천 위 교차하는 칼끝 상 클리어 후",
    title: "별무리 기행 : 날씨가 건조할 땐 화로를 조심해",
    youtubeId: "WIzJzHKRVUA",
    desc: ""
  },
  {
    id: 229,
    category: "미디어",
    mediaGroup: "개척후문 청천 위 교차하는 칼끝 상 클리어 후",
    title: "별무리 기행 : 길을 잃고 표류하는",
    youtubeId: "UP1avkczR9A",
    desc: ""
  },
  {
    id: 230,
    category: "미디어",
    mediaGroup: "개척후문 청천 위 교차하는 칼끝 상 클리어 후",
    title: "별무리 기행 : 날아가는 화살은 별을 좆고",
    youtubeId: "OIK4mMENyAg",
    desc: ""
  },

  // ==================== 개척후문 청천 위 교차하는 칼끝 하 클리어 후 ====================
  {
    id: 231,
    category: "미디어",
    mediaGroup: "개척후문 청천 위 교차하는 칼끝 하 클리어 후",
    title: "단편 애니메이션 : 여유롭고 편안하게",
    youtubeId: "Dq6KHznQJbk",
    desc: ""
  },

  // ==================== 개척임무 여덟째 날에 오르는 여정 클리어 후 ====================
  {
    id: 232,
    category: "미디어",
    mediaGroup: "개척임무 여덟째 날에 오르는 여정 클리어 후",
    title: "별무리 기행 : 태양이 진 후",
    youtubeId: "iiVp2IxlcSM",
    desc: ""
  },
  {
    id: 233,
    category: "미디어",
    mediaGroup: "개척임무 여덟째 날에 오르는 여정 클리어 후",
    title: "별무리 기행 : 한낱 뜬구름이 아닌",
    youtubeId: "aj68EDetXvQ",
    desc: ""
  },

  // ==================== 앰포리어스 진입 전 ====================
  {
    id: 234,
    category: "미디어",
    mediaGroup: "앰포리어스 진입 전",
    title: "OP : Nameless Faces",
    youtubeId: "c56iDq4t-Qk",
    desc: ""
  },
  {
    id: 235,
    category: "미디어",
    mediaGroup: "앰포리어스 진입 전",
    title: "황금의 서사시 : 앰포리어스 영웅기",
    youtubeId: "wAuJYQYJRew",
    desc: ""
  },
  {
    id: 236,
    category: "미디어",
    mediaGroup: "앰포리어스 진입 전",
    title: "태초의 송가 : 티탄과 지상의 만방에 관하여",
    youtubeId: "bGRmo-hi7nQ",
    desc: ""
  },
  {
    id: 237,
    category: "미디어",
    mediaGroup: "앰포리어스 진입 전",
    title: "신화의 시작 : 신들의 침묵의 노래",
    youtubeId: "0pKs7pkZVEI",
    desc: ""
  },
  {
    id: 238,
    category: "미디어",
    mediaGroup: "앰포리어스 진입 전",
    title: "별무리 기행 : 수수께끼처럼 침묵하는 뭇별",
    youtubeId: "uWQ3sgqzpdM",
    desc: ""
  },
  {
    id: 239,
    category: "미디어",
    mediaGroup: "앰포리어스 진입 전",
    title: "단편 애니메이션 : 더 헤 르 타 의 마 법 주 방",
    youtubeId: "zJQJY1I9xZM",
    desc: ""
  },

  // ==================== 앰포리어스 1막 불을 쫒는 낙목의 영웅기 클리어 후 ====================
  {
    id: 240,
    category: "미디어",
    mediaGroup: "앰포리어스 1막 불을 쫒는 낙목의 영웅기 클리어 후",
    title: "황금의 서사시 : 운명의 첫 번째 새벽",
    youtubeId: "m8ajSbDtGOA",
    desc: ""
  },

  // ==================== 앰포리어스 2막 문의 시작, 왕좌의 종말 클리어 후 ====================
  {
    id: 241,
    category: "미디어",
    mediaGroup: "앰포리어스 2막 문의 시작, 왕좌의 종말 클리어 후",
    title: "황금의 서사시 : 밤에서 깨어나는 생명",
    youtubeId: "KUyabPTv34U",
    desc: ""
  },

  // ==================== 앰포리어스 3막 안식의 땅의 꽃밭을 지나 클리어 후 ====================
  {
    id: 242,
    category: "미디어",
    mediaGroup: "앰포리어스 3막 안식의 땅의 꽃밭을 지나 클리어 후",
    title: "단편 애니메이션 : 안식의 긴 밤",
    youtubeId: "a43T8AybcEo",
    desc: ""
  },

  // ==================== 앰포리어스 4막 여명이 틀 무렵의 추락 클리어 후 ====================
  {
    id: 243,
    category: "미디어",
    mediaGroup: "앰포리어스 4막 여명이 틀 무렵의 추락 클리어 후",
    title: "EP : 동트기 전",
    youtubeId: "pod2uhS6cFM",
    desc: ""
  },
  {
    id: 244,
    category: "미디어",
    mediaGroup: "앰포리어스 4막 여명이 틀 무렵의 추락 클리어 후",
    title: "별무리 기행 : 별하늘 우화 2",
    youtubeId: "qs2t1G_2_C0",
    desc: ""
  },

  // ==================== 앰포리어스 5막 태양이 파멸로 향하기에 클리어 후 ====================
  {
    id: 245,
    category: "미디어",
    mediaGroup: "앰포리어스 5막 태양이 파멸로 향하기에 클리어 후",
    title: "단편 애니메이션 : 들어라! 신성한 산봉우리에서 울리는 환희를",
    youtubeId: "hmMvV28RTmE",
    desc: ""
  },
  {
    id: 246,
    category: "미디어",
    mediaGroup: "앰포리어스 5막 태양이 파멸로 향하기에 클리어 후",
    title: "MV : 타오르는 태양의 불꽃",
    youtubeId: "cxCYWbF7vEw",
    desc: ""
  },
  {
    id: 247,
    category: "미디어",
    mediaGroup: "앰포리어스 5막 태양이 파멸로 향하기에 클리어 후",
    title: "별을 누빈 순간 : 아침 해의 운명",
    youtubeId: "UM7fQOBXY9g",
    desc: ""
  },
  {
    id: 248,
    category: "미디어",
    mediaGroup: "앰포리어스 5막 태양이 파멸로 향하기에 클리어 후",
    title: "구세 PV : 개촥자",
    youtubeId: "hs0U_C5gJSc",
    desc: ""
  },

  // ==================== 앰포리어스 6막 영웅은 죽기 전에 클리어 후 ====================
  {
    id: 249,
    category: "미디어",
    mediaGroup: "앰포리어스 6막 영웅은 죽기 전에 클리어 후",
    title: "별무리 기행 PV: 「사랑하는 Mar. 7th」",
    youtubeId: "UJubmWaGacs",
    desc: ""
  },

  // ==================== 앰포리어스 7막 긴 밤 속에 다시 대지로 클리어 후 ====================
  {
    id: 250,
    category: "미디어",
    mediaGroup: "앰포리어스 7막 긴 밤 속에 다시 대지로 클리어 후",
    title: "단편 애니메이션: 「고된 여정」",
    youtubeId: "JsTGPjvtNV0",
    desc: ""
  },
  {
    id: 251,
    category: "미디어",
    mediaGroup: "앰포리어스 7막 긴 밤 속에 다시 대지로 클리어 후",
    title: "별무리 기행 PV: 「앰포리어스 영웅기」",
    youtubeId: "rmd5awd5dBc",
    desc: ""
  },
  {
    id: 252,
    category: "미디어",
    mediaGroup: "앰포리어스 7막 긴 밤 속에 다시 대지로 클리어 후",
    title: "계속 구축되는 허상 | 마메라 모험기 |",
    youtubeId: "V2N8S4tcfd0",
    desc: ""
  },
  {
    id: 253,
    category: "미디어",
    mediaGroup: "앰포리어스 7막 긴 밤 속에 다시 대지로 클리어 후",
    title: "야간 찻간 | 단항의 독자적인 물리치료",
    youtubeId: "YBW7QJe65ZE",
    desc: ""
  },
  {
    id: 254,
    category: "미디어",
    mediaGroup: "앰포리어스 7막 긴 밤 속에 다시 대지로 클리어 후",
    title: "별무리 기행 PV: 「이야기의 밖: S#8」",
    youtubeId: "6GS1oxfdXWQ",
    desc: ""
  },
  {
    id: 255,
    category: "미디어",
    mediaGroup: "앰포리어스 7막 긴 밤 속에 다시 대지로 클리어 후",
    title: "황금의 서사시 PV: 「안녕, 키레네」",
    youtubeId: "F9xaErk304U",
    desc: ""
  },
  {
    id: 256,
    category: "미디어",
    mediaGroup: "앰포리어스 7막 긴 밤 속에 다시 대지로 클리어 후",
    title: "「가장 긴 밤」 | 앰포리어스 카운트다운",
    youtubeId: "ELD2rVWAbMA",
    desc: ""
  },

  // ==================== 앰포리어스 8막 어제의 내일이 되어 클리어 후 ====================
  {
    id: 257,
    category: "미디어",
    mediaGroup: "앰포리어스 8막 어제의 내일이 되어 클리어 후",
    title: "단편 애니메이션: 「안녕, 세상아!」",
    youtubeId: "hgTscLO7odo",
    desc: ""
  },
  {
    id: 258,
    category: "미디어",
    mediaGroup: "앰포리어스 8막 어제의 내일이 되어 클리어 후",
    title: "「가장 긴 밤」 | 키레네의 잠들기 전 이야기",
    youtubeId: "kOrGRgYTp6g",
    desc: ""
  },

  // ==================== 이상낙원 진입 전 ====================
  {
    id: 259,
    category: "미디어",
    mediaGroup: "이상낙원 진입 전",
    title: "즐거운 순회공연 PV",
    youtubeId: "fvJR2GfKURI",
    desc: ""
  },
  {
    id: 260,
    category: "미디어",
    mediaGroup: "이상낙원 진입 전",
    title: "별무리 기행 PV: 「스타피스의 제안: 반파멸동맹」",
    youtubeId: "877rHk9qhEM",
    desc: ""
  },

  // ==================== 이상낙원 1막 낙원에 오신 걸 환영합니다 클리어 후 ====================
  {
    id: 261,
    category: "미디어",
    mediaGroup: "이상낙원 1막 낙원에 오신 걸 환영합니다 클리어 후",
    title: "아하 추천 | 환월 게임 승자 하이라이트——",
    youtubeId: "1HEQe0g8VvY",
    desc: ""
  },
  {
    id: 262,
    category: "미디어",
    mediaGroup: "이상낙원 1막 낙원에 오신 걸 환영합니다 클리어 후",
    title: "아하 추천 | 아하를 찾아서 스페셜 프로그램 ——",
    youtubeId: "1aQ2oKFOP2A",
    desc: ""
  },

  // ====================================================
  // === 캐릭터 & 팀 ===
  // ====================================================
  {
    id: 7,
    category: "캐릭터",
    title: "기억파티",
    desc: "기억파티",
    content: "내용 작성 예정"
  },
  {
    id: 8,
    category: "캐릭터",
    title: "환락팟",
    desc: "환락 마약 헤응",
    content: "내용 작성 예정"
  },

  // ====================================================
  // === 세팅 ===
  // ====================================================
  {
  id: 9,
  category: "세팅",
  title: "에바네시아",
  desc: "유물, 광추 추천 (이미지 가이드)",
  buildImage: "images/builds/ebanesia.jpg",
  content: "출시 기점의 파티 추천입니다."
 },
  {
    id: 10,
    category: "세팅",
    title: "효광",
    desc: "유물, 광추 추천 (이미지 가이드)",
  buildImage: "images/builds/yaoguang.jpg",
  content: "출시 기점의 파티 추천입니다."
  }
];

// 이 아래는 절대 지우지 마세요
// (index.html에서 이 데이터를 불러옵니다)
