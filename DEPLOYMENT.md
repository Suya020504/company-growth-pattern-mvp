# Deployment Notes

## GitHub Pages

1. GitHub에 새 저장소를 만든다.
2. 이 폴더(`portfolio/mvp`)를 저장소 루트로 push한다.
3. Repository Settings에서 Pages source를 `main` branch `/root`로 설정한다.

## Vercel

1. Vercel에서 GitHub 저장소를 import한다.
2. Framework Preset은 `Other` 또는 `Static`으로 둔다.
3. Build Command는 비워 둔다.
4. Output Directory는 비워 둔다.
5. 배포 후 `/index.html` 또는 루트 URL로 접속한다.

## 배포 전 확인

- `index.html`이 루트에 있는지 확인
- `dashboard.html`이 루트에 있는지 확인
- `capstone_final_presentation.html`이 루트에 있는지 확인
- `data/companies_v2.js`, `data/external_industry_benchmarks.js`, `data/public_company_examples.js`가 함께 올라갔는지 확인
- 메인 홈에서 `MVP 데모 보기`가 `dashboard.html`로 이동하는지 확인
- 대시보드 화면에서 `기업 탐색`, `산업군 근거`, `스타트업 예시` 3개 탭이 모두 동작하는지 확인
- 상단 `분석 발표` 버튼이 발표용 HTML로 이동하는지 확인
