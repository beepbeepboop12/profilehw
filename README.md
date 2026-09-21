# 강다현 자기소개 페이지

## 프로젝트 소개
강다현을 소개하는 정적 웹페이지입니다. FastAPI로 만든 백엔드 API를 호출해서
상단 제목을 서버가 내려주는 메시지로 채우고, 다크모드 토글도 지원합니다.

## 주요 구성
- `index.html` – 페이지 구조
- `style.css` – 스타일 (다크모드 포함)
- `script.js` – 백엔드 API(`GET /`) 호출 및 다크모드 토글
- `assets/moon-rabbit.svg` – 프로필 일러스트
- `main.py` – FastAPI 백엔드 (`/`, `/health` 엔드포인트, CORS 설정)
- `requirements.txt` – 백엔드 의존성

## 배포 주소
백엔드 API: https://profilehw.onrender.com/
