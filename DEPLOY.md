# 배포 가이드 (ZIN 머니)

이 사이트는 AstroWind(MIT, `LICENSE.md` 참고) 기반의 정적 사이트이고, GitHub Pages로 무료 배포합니다.

## GitHub Pages 설정 (처음 한 번)

1. 저장소 Settings → Pages → Source 를 **GitHub Actions** 로 바꿉니다.
2. 같은 화면의 Custom domain 에 `money.zinnote.kr` 을 입력하고 저장합니다. 인증서가 발급되면 **Enforce HTTPS** 를 켭니다.
3. 가비아 DNS 관리에서 레코드를 추가합니다: 호스트 `money`, 타입 `CNAME`, 값 `seungzin35.github.io.`

## 자동 배포

- `main` 브랜치에 푸시하면 바로 배포됩니다.
- 매일 오전 9시 5분(한국 시간)에도 자동 배포해서, 발행일이 된 예약 글을 공개합니다.
- 워크플로가 빌드할 때 `src/config.yaml` 의 `site`/`base` 를 Pages 주소에 맞게 바꿉니다.

## 애드센스

- `src/layouts/Layout.astro` 에 ZIN 노트와 같은 게시자 ID의 광고 코드가 들어 있습니다.
- `ads.txt` 는 루트 도메인(`zinnote.kr/ads.txt`)에 있으면 됩니다.
