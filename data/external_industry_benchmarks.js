window.EXTERNAL_INDUSTRY_BENCHMARKS = {
  "meta": {
    "updatedAt": "2026-06-10",
    "basis": "test 기업은 익명 ID이므로 실제 공시 기업과 1:1 매칭하지 않고, 산업군 단위의 외부 공개자료 근거 레이어로만 사용한다.",
    "limitations": "아래 표는 모델 feature가 아니며 성공확률 예측 성능 계산에도 사용하지 않는다. OpenDART API Key 또는 KRX 다운로드 데이터가 연결되면 동일 구조에서 재무 지표 중앙값을 갱신할 수 있다.",
    "sources": [
      {
        "name": "OpenDART",
        "url": "https://engopendart.fss.or.kr/guide/main.do?apiGrpCd=DE003",
        "note": "상장법인 및 주요 외감기업의 정기보고서 재무제표 계정 정보를 API로 제공한다."
      },
      {
        "name": "KRX Information Data System",
        "url": "https://data.krx.co.kr/contents/MDC/MAIN/main/index.cmd?locale=en",
        "note": "상장기업, 업종 분류, PER/PBR/배당수익률 등 시장 지표를 제공한다."
      }
    ]
  },
  "rows": [
    {
      "industryGroup": "에너지·ESG",
      "testCount": 139,
      "aGradeCount": 21,
      "overallWarningCount": 9,
      "avgScore100": 52.5,
      "internalTrainSegmentCount": 396,
      "internalRmse": 0.2159,
      "internalMae": 0.1777,
      "internalR2": 0.0671,
      "internalReliability": "높음",
      "externalCoverage": "높음",
      "externalEvidenceLevel": "높음",
      "reason": "내부 세그먼트 RMSE가 가장 낮고, 에너지·ESG 관련 상장사는 OpenDART 정기보고서와 KRX 업종/시장 지표로 외부 벤치마크를 만들기 쉽다.",
      "availableMetrics": ["매출액", "영업이익", "자산총계", "부채총계", "PER/PBR", "배당수익률"],
      "representativeCompanies": ["한국전력공사", "SK이노베이션", "한화솔루션", "씨에스윈드"],
      "recommendedUse": "MVP에서 신뢰도가 높은 산업군 예시로 먼저 설명하기 적합하다."
    },
    {
      "industryGroup": "AI·기술·핀테크·에듀테크",
      "testCount": 568,
      "aGradeCount": 120,
      "overallWarningCount": 26,
      "avgScore100": 53.1,
      "internalTrainSegmentCount": 1453,
      "internalRmse": 0.2326,
      "internalMae": 0.192,
      "internalR2": 0.0351,
      "internalReliability": "보통",
      "externalCoverage": "중간",
      "externalEvidenceLevel": "보통",
      "reason": "표본 수는 충분하지만 AI·핀테크·에듀테크 스타트업은 비상장 기업이 많아 공시 기반 외부자료가 상장 대형사 위주로 편향될 수 있다.",
      "availableMetrics": ["매출액", "영업이익", "연구개발비", "자산총계", "PER/PBR"],
      "representativeCompanies": ["NAVER", "카카오", "삼성SDS", "더존비즈온"],
      "recommendedUse": "공시 기반 벤치마크는 가능하지만 스타트업 대표성 한계를 함께 표시한다."
    },
    {
      "industryGroup": "이커머스·물류·푸드테크·게임",
      "testCount": 559,
      "aGradeCount": 117,
      "overallWarningCount": 30,
      "avgScore100": 53.5,
      "internalTrainSegmentCount": 1354,
      "internalRmse": 0.2379,
      "internalMae": 0.1978,
      "internalR2": 0.0661,
      "internalReliability": "보통",
      "externalCoverage": "중간",
      "externalEvidenceLevel": "보통",
      "reason": "상장 물류·게임·식품 기업은 공시자료가 충분하지만, 이커머스/푸드테크 스타트업은 비상장 비중이 높아 직접 비교에는 제한이 있다.",
      "availableMetrics": ["매출액", "영업이익", "매출총이익", "자산총계", "PER/PBR"],
      "representativeCompanies": ["CJ대한통운", "엔씨소프트", "크래프톤", "오뚜기"],
      "recommendedUse": "산업군 내부 이질성이 크므로 세부 업종 필터와 함께 보는 것이 적합하다."
    },
    {
      "industryGroup": "헬스케어·바이오",
      "testCount": 135,
      "aGradeCount": 17,
      "overallWarningCount": 9,
      "avgScore100": 51.6,
      "internalTrainSegmentCount": 316,
      "internalRmse": 0.2396,
      "internalMae": 0.199,
      "internalR2": 0.022,
      "internalReliability": "보통",
      "externalCoverage": "중간",
      "externalEvidenceLevel": "보통",
      "reason": "상장 바이오 기업의 공시자료는 존재하지만 매출보다 연구개발 단계, 임상 파이프라인, 허가 이벤트의 영향이 커 재무제표만으로 설명하기 어렵다.",
      "availableMetrics": ["매출액", "영업이익", "연구개발비", "무형자산", "자산총계"],
      "representativeCompanies": ["삼성바이오로직스", "셀트리온", "유한양행", "한미약품"],
      "recommendedUse": "재무제표 외에 임상/허가/기술수출 이벤트 데이터가 추가될 때 신뢰도가 높아진다."
    },
    {
      "industryGroup": "Unknown",
      "testCount": 354,
      "aGradeCount": 85,
      "overallWarningCount": 102,
      "avgScore100": 54.0,
      "internalTrainSegmentCount": 857,
      "internalRmse": 0.2534,
      "internalMae": 0.2163,
      "internalR2": -0.043,
      "internalReliability": "낮음",
      "externalCoverage": "낮음",
      "externalEvidenceLevel": "낮음",
      "reason": "분야 정보가 없어 산업군 공시 벤치마크와 연결할 수 없고, 내부 세그먼트 RMSE도 가장 높다.",
      "availableMetrics": [],
      "representativeCompanies": [],
      "recommendedUse": "점수가 높더라도 산업군 비교 문구를 사용하지 않고 전체 데이터 기준으로만 해석한다."
    }
  ]
};

