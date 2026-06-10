window.PUBLIC_COMPANY_EXAMPLES = [
  {
    "id": "STARTUP_KARROT",
    "name": "당근마켓(Karrot)",
    "ticker": "비상장",
    "industry": "이커머스",
    "industryGroup": "이커머스·물류·푸드테크·게임",
    "investmentStage": "Series C",
    "countryDisplay": "대한민국",
    "exampleType": "스타트업/벤처",
    "successScore": 0.5562,
    "score100": 55.6,
    "scoreLabel": "성장기업 패턴 유사도",
    "scorePercentile": 74.6,
    "scorePercentileLabel": "MVP test 기준 상위 25.4%",
    "grade": "B",
    "modelConfidence": "낮음",
    "dataReliability": "낮음",
    "overallConfidence": "주의",
    "riskFlags": [
      "결측치 적음",
      "외삽 위험 높음",
      "모델 확신도 낮음",
      "공개자료 예시 매칭"
    ],
    "warningMessage": "공개자료 기반 예시 행은 train/test의 익명 기업 데이터와 구조가 달라 참고용으로만 해석해야 합니다.",
    "topClassProbability": 0.1851,
    "top2ProbabilityGap": 0.0284,
    "entropy": 2.0501,
    "confidenceScore": 0.0141,
    "oodDistance": 1.3964,
    "missingCount": 0,
    "sourceCoverage": "보통",
    "sources": [
      {
        "label": "Seoul Economic Daily Karrot FY2025",
        "url": "https://en.sedaily.com/finance/2026/03/27/karrot-posts-record-146-billion-won-operating-profit-up-481",
        "note": "2025년 매출 2,707억원과 영업이익 흑자 전환 흐름 확인."
      },
      {
        "label": "BusinessKorea Karrot user/revenue",
        "url": "https://www.businesskorea.co.kr/news/articleView.html?idxno=238538",
        "note": "2024년 매출, 누적 가입자 4,300만명, WAU 1,400만명 확인."
      },
      {
        "label": "TechCrunch Karrot funding/valuation",
        "url": "https://techcrunch.com/2021/08/17/south-korean-online-secondhand-marketplace-danggeun-market-raises-162m-at-a-2-7b-valuation/",
        "note": "Series D, 누적 투자금 2.05억 달러, 기업가치 27억 달러 확인."
      },
      {
        "label": "PitchBook Karrot profile",
        "url": "https://pitchbook.com/profiles/company/182509-30",
        "note": "직원 수 공개 프로필 참고."
      }
    ],
    "dataNotes": [
      "Series D 투자단계는 DACON 컬럼 체계에 직접 없으므로 가장 가까운 Series C로 매핑했다.",
      "2025년 매출 2,707억원, 누적 가입자 4,300만명을 각각 연매출과 고객수 proxy로 사용했다.",
      "총 투자금 2,665억원과 기업가치 351백억원은 공개 USD 금액을 1달러=1,300원으로 단순 환산했다.",
      "직원 수는 PitchBook 공개 프로필의 headcount를 사용했으므로 보통 수준의 근거로 표시했다."
    ],
    "inputColumns": {
      "설립연도": 2015,
      "국가": "CT001",
      "분야": "이커머스",
      "투자단계": "Series C",
      "직원 수": 536,
      "인수여부": "No",
      "상장여부": "No",
      "고객수(백만명)": 43.0,
      "총 투자금(억원)": 2665.0,
      "연매출(억원)": 2707.0,
      "SNS 팔로워 수(백만명)": null,
      "기업가치(백억원)": 351
    },
    "reasons": [
      "스타트업/벤처의 공개자료를 DACON 컬럼 단위로 변환해 모델 입력값을 만들었습니다.",
      "공개자료와 직접 대응되지 않는 컬럼은 임의로 채우지 않고 결측으로 두어 모델의 중앙값 대체 규칙을 적용했습니다.",
      "공개자료 기반 변환값 일부가 원본 익명 데이터의 분포와 달라 외삽 위험이 높습니다."
    ],
    "matchedCompanies": [
      {
        "id": "TEST_1426",
        "rank": 450,
        "score100": 55.6,
        "grade": "B",
        "overallConfidence": "보통",
        "industryGroup": "이커머스·물류·푸드테크·게임",
        "scoreGap": 0.0
      },
      {
        "id": "TEST_0163",
        "rank": 452,
        "score100": 55.6,
        "grade": "B",
        "overallConfidence": "높음",
        "industryGroup": "이커머스·물류·푸드테크·게임",
        "scoreGap": 0.0
      },
      {
        "id": "TEST_1037",
        "rank": 449,
        "score100": 55.6,
        "grade": "B",
        "overallConfidence": "낮음",
        "industryGroup": "이커머스·물류·푸드테크·게임",
        "scoreGap": 0.0
      }
    ]
  },
  {
    "id": "STARTUP_HYPERCONNECT",
    "name": "하이퍼커넥트(Hyperconnect)",
    "ticker": "인수기업 / Match Group",
    "industry": "기술",
    "industryGroup": "AI·기술·핀테크·에듀테크",
    "investmentStage": "Series C",
    "countryDisplay": "대한민국",
    "exampleType": "스타트업/벤처",
    "successScore": 0.5395,
    "score100": 54.0,
    "scoreLabel": "성장기업 패턴 유사도",
    "scorePercentile": 56.1,
    "scorePercentileLabel": "MVP test 기준 상위 43.9%",
    "grade": "B",
    "modelConfidence": "낮음",
    "dataReliability": "낮음",
    "overallConfidence": "주의",
    "riskFlags": [
      "결측치 적음",
      "외삽 위험 높음",
      "모델 확신도 낮음",
      "공개자료 예시 매칭"
    ],
    "warningMessage": "공개자료 기반 예시 행은 train/test의 익명 기업 데이터와 구조가 달라 참고용으로만 해석해야 합니다.",
    "topClassProbability": 0.1557,
    "top2ProbabilityGap": 0.0082,
    "entropy": 2.0638,
    "confidenceScore": 0.0075,
    "oodDistance": 2.3696,
    "missingCount": 1,
    "sourceCoverage": "높음",
    "sources": [
      {
        "label": "Match Group Hyperconnect acquisition",
        "url": "https://mtch.com/single-news/529/",
        "note": "Match Group의 Hyperconnect 인수 발표와 인수 금액 확인."
      },
      {
        "label": "PR Newswire Hyperconnect profile",
        "url": "https://www.prnewswire.com/news-releases/match-group-to-acquire-hyperconnect-301225320.html",
        "note": "설립연도, 직원 수, 매출, Azar/Hakuna 다운로드 규모 확인."
      }
    ],
    "dataNotes": [
      "Azar와 Hakuna 다운로드 규모는 실제 유료 고객과 다르므로 고객수는 결측으로 처리했다.",
      "2020년 매출 2억 달러 이상은 1달러=1,300원 기준 2,600억원으로 환산했다.",
      "인수 금액 17.25억 달러는 기업가치 proxy로 사용해 224백억원으로 환산했다.",
      "총 투자금은 인수금액과 구분되는 누적 투자금 정보를 직접 확인하기 어려워 결측으로 처리했다."
    ],
    "inputColumns": {
      "설립연도": 2014,
      "국가": "CT001",
      "분야": "기술",
      "투자단계": "Series C",
      "직원 수": 400,
      "인수여부": "Yes",
      "상장여부": "No",
      "고객수(백만명)": null,
      "총 투자금(억원)": null,
      "연매출(억원)": 2600.0,
      "SNS 팔로워 수(백만명)": null,
      "기업가치(백억원)": 224
    },
    "reasons": [
      "스타트업/벤처의 공개자료를 DACON 컬럼 단위로 변환해 모델 입력값을 만들었습니다.",
      "공개자료와 직접 대응되지 않는 컬럼은 임의로 채우지 않고 결측으로 두어 모델의 중앙값 대체 규칙을 적용했습니다.",
      "공개자료 기반 변환값 일부가 원본 익명 데이터의 분포와 달라 외삽 위험이 높습니다."
    ],
    "matchedCompanies": [
      {
        "id": "TEST_1710",
        "rank": 748,
        "score100": 54.0,
        "grade": "B",
        "overallConfidence": "보통",
        "industryGroup": "AI·기술·핀테크·에듀테크",
        "scoreGap": 0.0
      },
      {
        "id": "TEST_1011",
        "rank": 755,
        "score100": 54.0,
        "grade": "B",
        "overallConfidence": "높음",
        "industryGroup": "AI·기술·핀테크·에듀테크",
        "scoreGap": 0.0
      },
      {
        "id": "TEST_1006",
        "rank": 766,
        "score100": 54.0,
        "grade": "B",
        "overallConfidence": "보통",
        "industryGroup": "AI·기술·핀테크·에듀테크",
        "scoreGap": 0.0
      }
    ]
  },
  {
    "id": "STARTUP_CLASS101",
    "name": "CLASS101",
    "ticker": "비상장",
    "industry": "에듀테크",
    "industryGroup": "AI·기술·핀테크·에듀테크",
    "investmentStage": "Series B",
    "countryDisplay": "대한민국",
    "exampleType": "스타트업/벤처",
    "successScore": 0.5352,
    "score100": 53.5,
    "scoreLabel": "성장기업 패턴 유사도",
    "scorePercentile": 51.5,
    "scorePercentileLabel": "MVP test 기준 상위 48.5%",
    "grade": "B",
    "modelConfidence": "낮음",
    "dataReliability": "보통",
    "overallConfidence": "낮음",
    "riskFlags": [
      "결측치 적음",
      "외삽 위험 보통",
      "모델 확신도 낮음",
      "공개자료 예시 매칭"
    ],
    "warningMessage": "공개자료 기반 예시 행은 train/test의 익명 기업 데이터와 구조가 달라 참고용으로만 해석해야 합니다.",
    "topClassProbability": 0.1717,
    "top2ProbabilityGap": 0.0339,
    "entropy": 2.0552,
    "confidenceScore": 0.0117,
    "oodDistance": 1.0743,
    "missingCount": 1,
    "sourceCoverage": "보통",
    "sources": [
      {
        "label": "TechCrunch CLASS101 Series B",
        "url": "https://techcrunch.com/2021/09/02/online-learning-platform-class-101-bags-26m-series-b-to-support-growth/",
        "note": "Series B, 설립연도, 직원 수, 등록 사용자 수 확인."
      },
      {
        "label": "WOWTALE CLASS101 bridge investment",
        "url": "https://en.wowtale.net/2025/02/04/229216/",
        "note": "2025년 누적 투자금 825억원, 클래스/크리에이터 규모, 흑자 전환 흐름 확인."
      }
    ],
    "dataNotes": [
      "2021년 기준 등록 사용자 300만명을 고객수 proxy로 사용했다.",
      "2025년 누적 투자금 825억원을 총 투자금으로 입력했다.",
      "연매출과 기업가치는 공개자료에서 DACON 컬럼과 직접 대응되는 값을 확인하기 어려워 결측으로 처리했다."
    ],
    "inputColumns": {
      "설립연도": 2018,
      "국가": "CT001",
      "분야": "에듀테크",
      "투자단계": "Series B",
      "직원 수": 350,
      "인수여부": "No",
      "상장여부": "No",
      "고객수(백만명)": 3.0,
      "총 투자금(억원)": 825.0,
      "연매출(억원)": null,
      "SNS 팔로워 수(백만명)": null,
      "기업가치(백억원)": null
    },
    "reasons": [
      "스타트업/벤처의 공개자료를 DACON 컬럼 단위로 변환해 모델 입력값을 만들었습니다.",
      "공개자료와 직접 대응되지 않는 컬럼은 임의로 채우지 않고 결측으로 두어 모델의 중앙값 대체 규칙을 적용했습니다.",
      "동일 산업군 test 기업 중 score100이 가까운 익명 기업을 비교 대상으로 매칭했습니다."
    ],
    "matchedCompanies": [
      {
        "id": "TEST_0253",
        "rank": 856,
        "score100": 53.5,
        "grade": "B",
        "overallConfidence": "보통",
        "industryGroup": "AI·기술·핀테크·에듀테크",
        "scoreGap": 0.0
      },
      {
        "id": "TEST_0000",
        "rank": 859,
        "score100": 53.5,
        "grade": "B",
        "overallConfidence": "보통",
        "industryGroup": "AI·기술·핀테크·에듀테크",
        "scoreGap": 0.0
      },
      {
        "id": "TEST_0447",
        "rank": 864,
        "score100": 53.5,
        "grade": "B",
        "overallConfidence": "보통",
        "industryGroup": "AI·기술·핀테크·에듀테크",
        "scoreGap": 0.0
      }
    ]
  },
  {
    "id": "PUB_NAVER_035420",
    "name": "NAVER",
    "ticker": "035420.KS",
    "industry": "기술",
    "industryGroup": "AI·기술·핀테크·에듀테크",
    "investmentStage": "IPO",
    "countryDisplay": "대한민국",
    "exampleType": "상장기업 비교군",
    "successScore": 0.5269,
    "score100": 52.7,
    "scoreLabel": "성장기업 패턴 유사도",
    "scorePercentile": 42.1,
    "scorePercentileLabel": "MVP test 기준 상위 57.9%",
    "grade": "C",
    "modelConfidence": "낮음",
    "dataReliability": "낮음",
    "overallConfidence": "주의",
    "riskFlags": [
      "결측치 적음",
      "외삽 위험 높음",
      "모델 확신도 낮음",
      "공개자료 예시 매칭"
    ],
    "warningMessage": "공개자료 기반 예시 행은 train/test의 익명 기업 데이터와 구조가 달라 참고용으로만 해석해야 합니다.",
    "topClassProbability": 0.1681,
    "top2ProbabilityGap": 0.0019,
    "entropy": 2.0469,
    "confidenceScore": 0.0157,
    "oodDistance": 2.86,
    "missingCount": 0,
    "sourceCoverage": "보통",
    "sources": [
      {
        "label": "NAVER 공식 홈페이지",
        "url": "https://www.navercorp.com/",
        "note": "서비스 이용자 5,400만+ 및 2024 통합보고서/IR 자료실 링크 확인."
      },
      {
        "label": "NAVER Q3 2025 press release",
        "url": "https://navercorp.com/en/media/pressReleasesDetail?seq=33533",
        "note": "2025년 분기 매출 및 사업부별 매출 구조 확인."
      },
      {
        "label": "Telecompaper FY2025 summary",
        "url": "https://www.telecompaper.com/news/naver-reports-double-digit-revenue-growth-in-fy25--1561487",
        "note": "2025년 연간 매출 약 12.03조원 참고."
      }
    ],
    "dataNotes": [
      "국가 코드는 원본 DACON 데이터가 비식별 코드라 CT001을 한국 proxy로 사용했다.",
      "총 투자금과 SNS 팔로워 수는 상장 대기업 공시와 직접 대응되지 않아 결측으로 처리했다.",
      "NAVER 서비스 이용자 수 5,400만+를 고객수 proxy로 사용했다."
    ],
    "inputColumns": {
      "설립연도": 1999,
      "국가": "CT001",
      "분야": "기술",
      "투자단계": "IPO",
      "직원 수": 4856,
      "인수여부": "No",
      "상장여부": "Yes",
      "고객수(백만명)": 54.0,
      "총 투자금(억원)": null,
      "연매출(억원)": 120300.0,
      "SNS 팔로워 수(백만명)": null,
      "기업가치(백억원)": "3500-4500"
    },
    "reasons": [
      "상장기업 비교군의 공개자료를 DACON 컬럼 단위로 변환해 모델 입력값을 만들었습니다.",
      "공개자료와 직접 대응되지 않는 컬럼은 임의로 채우지 않고 결측으로 두어 모델의 중앙값 대체 규칙을 적용했습니다.",
      "성숙 상장기업이라 매출·직원 수가 train 데이터 범위를 크게 벗어나 외삽 위험이 높습니다."
    ],
    "matchedCompanies": [
      {
        "id": "TEST_1517",
        "rank": 1017,
        "score100": 52.7,
        "grade": "C",
        "overallConfidence": "높음",
        "industryGroup": "AI·기술·핀테크·에듀테크",
        "scoreGap": 0.0
      },
      {
        "id": "TEST_1660",
        "rank": 1009,
        "score100": 52.7,
        "grade": "C",
        "overallConfidence": "낮음",
        "industryGroup": "AI·기술·핀테크·에듀테크",
        "scoreGap": 0.0
      },
      {
        "id": "TEST_1036",
        "rank": 1011,
        "score100": 52.7,
        "grade": "C",
        "overallConfidence": "낮음",
        "industryGroup": "AI·기술·핀테크·에듀테크",
        "scoreGap": 0.0
      }
    ]
  },
  {
    "id": "PUB_SAMSUNG_BIO_207940",
    "name": "삼성바이오로직스",
    "ticker": "207940.KS",
    "industry": "헬스케어",
    "industryGroup": "헬스케어·바이오",
    "investmentStage": "IPO",
    "countryDisplay": "대한민국",
    "exampleType": "상장기업 비교군",
    "successScore": 0.523,
    "score100": 52.3,
    "scoreLabel": "성장기업 패턴 유사도",
    "scorePercentile": 38.1,
    "scorePercentileLabel": "MVP test 기준 상위 61.9%",
    "grade": "C",
    "modelConfidence": "낮음",
    "dataReliability": "낮음",
    "overallConfidence": "주의",
    "riskFlags": [
      "결측치 적음",
      "외삽 위험 높음",
      "모델 확신도 낮음",
      "공개자료 예시 매칭"
    ],
    "warningMessage": "공개자료 기반 예시 행은 train/test의 익명 기업 데이터와 구조가 달라 참고용으로만 해석해야 합니다.",
    "topClassProbability": 0.1702,
    "top2ProbabilityGap": 0.0186,
    "entropy": 2.0554,
    "confidenceScore": 0.0115,
    "oodDistance": 3.2971,
    "missingCount": 1,
    "sourceCoverage": "높음",
    "sources": [
      {
        "label": "Samsung Biologics Fact Sheet",
        "url": "https://samsungbiologics.com/about/fact-sheet",
        "note": "임직원 5,800명+ 및 글로벌 고객 145+ 확인."
      },
      {
        "label": "Samsung Biologics FY2025 results",
        "url": "https://samsungbiologics.com/media/company-news/samsung-biologics-reports-fourth-quarter-and-fiscal-year-2025-financial-results",
        "note": "2025년 연간 매출 4,557십억원 확인."
      },
      {
        "label": "Samsung Biologics listing information",
        "url": "https://samsungbiologics.com/ir/stock-info/listing-information",
        "note": "상장일, 발행주식수, 티커 정보 확인."
      }
    ],
    "dataNotes": [
      "B2B CDMO 기업이라 고객수(백만명)는 일반 사용자 수와 직접 대응되지 않아 결측으로 처리했다.",
      "총 투자금과 SNS 팔로워 수는 공시 재무제표의 표준 항목이 아니라 결측으로 처리했다."
    ],
    "inputColumns": {
      "설립연도": 2011,
      "국가": "CT001",
      "분야": "헬스케어",
      "투자단계": "IPO",
      "직원 수": 5800,
      "인수여부": "No",
      "상장여부": "Yes",
      "고객수(백만명)": null,
      "총 투자금(억원)": null,
      "연매출(억원)": 45570.0,
      "SNS 팔로워 수(백만명)": null,
      "기업가치(백억원)": "6000이상"
    },
    "reasons": [
      "상장기업 비교군의 공개자료를 DACON 컬럼 단위로 변환해 모델 입력값을 만들었습니다.",
      "공개자료와 직접 대응되지 않는 컬럼은 임의로 채우지 않고 결측으로 두어 모델의 중앙값 대체 규칙을 적용했습니다.",
      "성숙 상장기업이라 매출·직원 수가 train 데이터 범위를 크게 벗어나 외삽 위험이 높습니다."
    ],
    "matchedCompanies": [
      {
        "id": "TEST_0597",
        "rank": 1078,
        "score100": 52.3,
        "grade": "C",
        "overallConfidence": "낮음",
        "industryGroup": "헬스케어·바이오",
        "scoreGap": 0.0
      },
      {
        "id": "TEST_0183",
        "rank": 1106,
        "score100": 52.2,
        "grade": "C",
        "overallConfidence": "낮음",
        "industryGroup": "헬스케어·바이오",
        "scoreGap": 0.1
      },
      {
        "id": "TEST_0475",
        "rank": 1062,
        "score100": 52.4,
        "grade": "C",
        "overallConfidence": "낮음",
        "industryGroup": "헬스케어·바이오",
        "scoreGap": 0.1
      }
    ]
  },
  {
    "id": "PUB_KEPCO_015760",
    "name": "한국전력공사",
    "ticker": "015760.KS / KEP",
    "industry": "에너지",
    "industryGroup": "에너지·ESG",
    "investmentStage": "IPO",
    "countryDisplay": "대한민국",
    "exampleType": "상장기업 비교군",
    "successScore": 0.5197,
    "score100": 52.0,
    "scoreLabel": "성장기업 패턴 유사도",
    "scorePercentile": 35.2,
    "scorePercentileLabel": "MVP test 기준 상위 64.8%",
    "grade": "C",
    "modelConfidence": "낮음",
    "dataReliability": "낮음",
    "overallConfidence": "주의",
    "riskFlags": [
      "결측치 적음",
      "외삽 위험 높음",
      "모델 확신도 낮음",
      "공개자료 예시 매칭"
    ],
    "warningMessage": "공개자료 기반 예시 행은 train/test의 익명 기업 데이터와 구조가 달라 참고용으로만 해석해야 합니다.",
    "topClassProbability": 0.1775,
    "top2ProbabilityGap": 0.0331,
    "entropy": 2.0587,
    "confidenceScore": 0.01,
    "oodDistance": 4.1742,
    "missingCount": 0,
    "sourceCoverage": "보통",
    "sources": [
      {
        "label": "KEPCO official homepage",
        "url": "https://www.kepco.co.kr/eng/index.do",
        "note": "사업영역, FY2024 실적 보도, IR/SEC filing 연결 확인."
      },
      {
        "label": "KEPCO SEC filing summary",
        "url": "https://www.stocktitan.net/sec-filings/KEP/6-k-korea-electric-power-corp-current-report-foreign-issuer-6c407ca0da14.html",
        "note": "2025년 매출 97,429,346백만원 참고."
      },
      {
        "label": "World Benchmarking Alliance KEPCO footprint",
        "url": "https://www.worldbenchmarkingalliance.org/company/korea-electric-power-corporation",
        "note": "직원 48,440명, 고객 2,500만명 참고."
      }
    ],
    "dataNotes": [
      "성숙 공기업이라 설립연도, 직원 수, 매출이 train 데이터 범위를 크게 벗어난다.",
      "고객수는 전력 고객 2,500만명을 백만명 단위로 변환했다.",
      "총 투자금과 SNS 팔로워 수는 DACON 컬럼 정의와 직접 대응되지 않아 결측으로 처리했다."
    ],
    "inputColumns": {
      "설립연도": 1961,
      "국가": "CT001",
      "분야": "에너지",
      "투자단계": "IPO",
      "직원 수": 48440,
      "인수여부": "No",
      "상장여부": "Yes",
      "고객수(백만명)": 25.0,
      "총 투자금(억원)": null,
      "연매출(억원)": 974293.0,
      "SNS 팔로워 수(백만명)": null,
      "기업가치(백억원)": "1500-2500"
    },
    "reasons": [
      "상장기업 비교군의 공개자료를 DACON 컬럼 단위로 변환해 모델 입력값을 만들었습니다.",
      "공개자료와 직접 대응되지 않는 컬럼은 임의로 채우지 않고 결측으로 두어 모델의 중앙값 대체 규칙을 적용했습니다.",
      "성숙 상장기업이라 매출·직원 수가 train 데이터 범위를 크게 벗어나 외삽 위험이 높습니다.",
      "에너지·ESG 세그먼트는 내부 검증 RMSE가 가장 낮아 참고 설명력이 상대적으로 높았습니다."
    ],
    "matchedCompanies": [
      {
        "id": "TEST_1089",
        "rank": 1123,
        "score100": 52.0,
        "grade": "C",
        "overallConfidence": "보통",
        "industryGroup": "에너지·ESG",
        "scoreGap": 0.0
      },
      {
        "id": "TEST_1181",
        "rank": 1162,
        "score100": 51.8,
        "grade": "C",
        "overallConfidence": "높음",
        "industryGroup": "에너지·ESG",
        "scoreGap": 0.2
      },
      {
        "id": "TEST_1559",
        "rank": 1100,
        "score100": 52.2,
        "grade": "C",
        "overallConfidence": "낮음",
        "industryGroup": "에너지·ESG",
        "scoreGap": 0.2
      }
    ]
  },
  {
    "id": "PUB_CJ_LOGISTICS_000120",
    "name": "CJ대한통운",
    "ticker": "000120.KS",
    "industry": "물류",
    "industryGroup": "이커머스·물류·푸드테크·게임",
    "investmentStage": "IPO",
    "countryDisplay": "대한민국",
    "exampleType": "상장기업 비교군",
    "successScore": 0.5172,
    "score100": 51.7,
    "scoreLabel": "성장기업 패턴 유사도",
    "scorePercentile": 33.8,
    "scorePercentileLabel": "MVP test 기준 상위 66.2%",
    "grade": "C",
    "modelConfidence": "낮음",
    "dataReliability": "낮음",
    "overallConfidence": "주의",
    "riskFlags": [
      "결측치 적음",
      "외삽 위험 높음",
      "모델 확신도 낮음",
      "공개자료 예시 매칭"
    ],
    "warningMessage": "공개자료 기반 예시 행은 train/test의 익명 기업 데이터와 구조가 달라 참고용으로만 해석해야 합니다.",
    "topClassProbability": 0.16,
    "top2ProbabilityGap": 0.0042,
    "entropy": 2.0612,
    "confidenceScore": 0.0088,
    "oodDistance": 4.4711,
    "missingCount": 1,
    "sourceCoverage": "보통",
    "sources": [
      {
        "label": "CJ Logistics IR resources",
        "url": "https://www.cjlogistics.com/en/investment/ir-data",
        "note": "공식 IR 자료 및 상장회사 정보 확인."
      },
      {
        "label": "StockAnalysis CJ Logistics revenue",
        "url": "https://stockanalysis.com/quote/krx/000120/revenue/",
        "note": "2025년 매출 12.28조원, 직원 6,735명, 시가총액 1.61조원 참고."
      }
    ],
    "dataNotes": [
      "상장 물류기업이라 투자단계는 IPO로 맞췄다.",
      "기업가치는 공개 시가총액 1.61조원을 백억원 단위로 변환해 161로 입력했다.",
      "총 투자금, 고객수, SNS 팔로워 수는 DACON 스타트업형 컬럼과 직접 대응되지 않아 결측으로 처리했다."
    ],
    "inputColumns": {
      "설립연도": 1930,
      "국가": "CT001",
      "분야": "물류",
      "투자단계": "IPO",
      "직원 수": 6735,
      "인수여부": "No",
      "상장여부": "Yes",
      "고객수(백만명)": null,
      "총 투자금(억원)": null,
      "연매출(억원)": 122800.0,
      "SNS 팔로워 수(백만명)": null,
      "기업가치(백억원)": 161
    },
    "reasons": [
      "상장기업 비교군의 공개자료를 DACON 컬럼 단위로 변환해 모델 입력값을 만들었습니다.",
      "공개자료와 직접 대응되지 않는 컬럼은 임의로 채우지 않고 결측으로 두어 모델의 중앙값 대체 규칙을 적용했습니다.",
      "성숙 상장기업이라 매출·직원 수가 train 데이터 범위를 크게 벗어나 외삽 위험이 높습니다."
    ],
    "matchedCompanies": [
      {
        "id": "TEST_1611",
        "rank": 1180,
        "score100": 51.7,
        "grade": "C",
        "overallConfidence": "높음",
        "industryGroup": "이커머스·물류·푸드테크·게임",
        "scoreGap": 0.0
      },
      {
        "id": "TEST_0960",
        "rank": 1173,
        "score100": 51.7,
        "grade": "C",
        "overallConfidence": "낮음",
        "industryGroup": "이커머스·물류·푸드테크·게임",
        "scoreGap": 0.0
      },
      {
        "id": "TEST_0312",
        "rank": 1183,
        "score100": 51.7,
        "grade": "C",
        "overallConfidence": "낮음",
        "industryGroup": "이커머스·물류·푸드테크·게임",
        "scoreGap": 0.0
      }
    ]
  }
];
