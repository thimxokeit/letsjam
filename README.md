# 🍊 JAM :: 째미난 밴드 라이프 커뮤니티

취미 밴드인을 위한 앱 **JAM**의 사전 출시 랜딩 페이지입니다.
밴드를 찾고, 멤버를 구하고, 다양한 세션 프로필을 둘러볼 수 있는 서비스를 소개하고, 출시 전 이메일 구독(오픈 알림 신청)을 받는 것을 목표로 합니다.

**🔗 Live Site:** https://thimxokeit.github.io/letsjam/
(커스텀 도메인 설정 시 `letsjam.work`)

---

## 📌 서비스 소개

| 항목 | 내용 |
|---|---|
| 서비스명 | JAM |
| 슬로건 | Chunky Buddy for your music! |
| 한 줄 소개 | 째미난 밴드 라이프 커뮤니티 — JAM에서 밴드를 찾고, 멤버를 구해보세요! |
| 출시(예정) | 2026년 4월 |
| 제작 | Sticky Studio (zig – 개발 · yoo – 디자인 · xoy – 기획) |

---

## ✨ 주요 기능 (랜딩 페이지)

- **Hero 섹션** — 로고와 앱 목업 이미지로 서비스 첫인상 전달
- **Benefits 섹션** — 🎵 밴드 들어가기 / 🎸 멤버 구하기 / 🎤 프로필 둘러보기, 3가지 핵심 기능 소개
- **세션 아이콘 무한 스크롤** — 보컬·드럼·베이스·기타·키보드 등 세션 아이콘을 가로로 무한 롤링 배너처럼 노출
- **오픈 알림(이메일 대기자 명단) 신청 폼**
  - 클라이언트 사이드 이메일 형식 검증
  - **Google Apps Script** 웹앱으로 `POST` 전송 → Google Sheet 등에 이메일 수집
  - 제출 중 버튼 비활성화 및 성공/실패 안내 메시지 처리
- **서브 페이지**
  - `/about/` — Sticky Studio 소개 (Mission · Vision · Team · Contact)
  - `/terms/` — 이용약관
  - `/privacy/` — 개인정보처리방침
  - `/community-policy/` — 커뮤니티 이용규칙
- **공통 헤더/푸터** — Jekyll `{% include %}`로 모든 페이지에서 로고 헤더, 회사 소개/SNS/약관/문의·버그 제보 링크가 담긴 푸터 재사용
- **Open Graph 메타태그** — 링크 공유 시 썸네일·설명 노출
- **Google Analytics (gtag.js)** 연동

---

## 🛠 기술 스택

- **Jekyll** — GitHub Pages 기본 빌드 엔진 (Liquid `{% include %}`로 헤더/푸터 재사용, 별도 플러그인·Gemfile 없이 GitHub Pages 표준 빌드로 동작)
- **HTML / CSS / Vanilla JavaScript** — 프론트엔드 프레임워크 없이 순수 코드로 구성
- **Pretendard** — 한글 웹폰트 (CDN)
- **Google Apps Script** — 서버 없이 이메일 대기자 명단을 수집하는 백엔드 역할 (webhook)
- **Google Analytics (gtag.js)** — 방문자 트래킹
- **GitHub Pages** — 정적 사이트 호스팅 / 배포

---

## 📁 파일 구조

```
letsjam/
├── _config.yml              # Jekyll 설정 (title, url, baseurl)
├── _includes/
│   ├── header.html          # 공통 헤더 (로고)
│   └── footer.html          # 공통 푸터 (회사/SNS/약관/문의 링크)
├── about/
│   └── index.html           # Sticky Studio 소개 페이지
├── terms/
│   └── index.html           # 이용약관
├── privacy/
│   └── index.html           # 개인정보처리방침
├── community-policy/
│   └── index.html           # 커뮤니티 이용규칙
├── assets/
│   ├── jam_logo.png
│   ├── jam_logo_small.png   # 파비콘용
│   ├── mobile_mockup.png    # 앱 미리보기 이미지
│   └── Sessions=*.png       # 세션(보컬/드럼/베이스 등) 아이콘 6종
├── index.html                # 메인 랜딩 페이지
├── style.css                  # 전체 스타일
└── README.md
```

> ℹ️ 저장소 루트에도 `jam_logo.png`, `jam_logo_small.png`, `mobile_mockup.png`가 중복으로 존재합니다. 실제 페이지들은 `assets/` 경로를 참조하므로, 루트의 파일은 정리 시 삭제해도 무방한지 확인해보세요.

---

## 🚀 실행 방법

이 프로젝트는 GitHub Pages 표준 Jekyll 빌드를 사용하므로, 별도의 커스텀 Gem 설치 없이 아래 방법으로 로컬 실행이 가능합니다.

```bash
# Jekyll & Bundler가 없다면 먼저 설치
gem install bundler jekyll

# 저장소 루트에서 로컬 서버 실행
jekyll serve

# 브라우저에서 확인
open http://localhost:4000
```

> `index.html`, `about/index.html` 등 상단에 있는 `---` `---` (front matter)는 Jekyll이 `{% include %}` 등 Liquid 태그를 처리하기 위해 필요합니다. 단순 정적 파일로 열면 include가 렌더링되지 않으니 반드시 Jekyll 서버를 통해 확인하세요.

### GitHub Pages 배포

1. `main` 브랜치에 푸시하면 GitHub Pages가 자동으로 Jekyll 빌드 후 배포합니다.
2. 저장소 **Settings → Pages**에서 배포 브랜치 및 커스텀 도메인(`letsjam.work`)을 설정할 수 있습니다.
   - 커스텀 도메인을 쓰려면 저장소 루트에 `CNAME` 파일(`letsjam.work` 내용)을 추가하고 DNS를 설정해야 합니다.
3. 배포 후 `https://thimxokeit.github.io/letsjam/` 로 접속 확인

---

## 🔧 커스터마이징 가이드

### 오픈 알림(이메일 수집) 엔드포인트 변경

`index.html` 하단 `<script>` 내부의 `SCRIPT_URL`을 본인의 Google Apps Script 웹앱 배포 URL로 교체하세요.

```javascript
const SCRIPT_URL =
  "https://script.google.com/macros/s/여기에_본인의_배포ID/exec";
```

> `no-cors` 모드로 요청을 보내기 때문에 클라이언트에서 실제 응답 성공 여부를 확인할 수 없습니다. 실패 케이스를 더 정확히 감지하려면 Apps Script에서 JSONP 등 CORS 허용 방식으로 응답을 반환하도록 변경하는 것을 고려해보세요.

### CTA 문구 / 출시일 변경

`index.html`의 `<section class="cta">` 내부 텍스트("2026년 4월, JAM이 출시됩니다!" 등)를 수정하세요. 베타 테스터 모집용 CTA 섹션은 현재 주석으로 남아있어, 필요 시 주석을 해제해 재사용할 수 있습니다.

### 팀/소개 정보 수정

`about/index.html`의 `TEAM` 섹션(`team-card`)과 `CONTACT` 이메일을 수정하세요.

### 색상 / 폰트 테마 변경

`style.css` 상단 CSS 변수(`:root`)를 수정하세요.

```css
:root {
  --orange: #fc5c2b;
  --yellow: #fff566;
  --black: #222;
  --gray: #a0a0a0;
  --light-orange: #fd9e81;
}
```

---

## 📄 라이선스

이 프로젝트는 Sticky Studio의 **JAM** 서비스 소개를 위해 제작되었습니다. 소스 재사용 전 제작팀에게 문의해주세요.
문의: jam.chunkybuddy@gmail.com
