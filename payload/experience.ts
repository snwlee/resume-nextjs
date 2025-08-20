import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '넷앤드',
      positions: [
        {
          title: 'Backend Developer',
          startedAt: '2023-06',
          descriptions: [
            '넷앤드 HIWARE 6 - 인사 연동: 넷앤드 HIWARE 6의 인사 정보를 연동하기 위해 사용하는 배치 프로젝트를 만들고 유지보수하고 있습니다.',
            'Spring Batch 마이그레이션',
            'Future -> CompletableFuture 클래스 리팩터링',
            'Spring Okta 연동 기능',
            '다양한 인사연동 방식 구현: LDAP, REST API, Okta, 데이터베이스(Oracle, MSSQL, PostgreSQL, MySQL, MariaDB), File, MQ, UDP 연동',
            '넷앤드 HIWARE 6 - SSO 연동: 넷앤드 HIWARE 6에 로그인하기 위해 사용되는 SSO 프로젝트를 만들고 유지보수 하고 있습니다.',
            'Okta SAML 프로토콜을 활용한 SSO 인증 시스템 구현',
            'OneLogin IdP와의 SAML 연동을 통한 사용자 인증 플로우 개발',
            '다중 IdP 지원을 위한 SAML 메타데이터 관리 시스템 구축',
            'SLS(Single Logout Service) 및 SLO(Single Logout)를 통한 Okta IdP와 HIWARE SP 간 세션 파기 로직 구현',
            '넷앤드 HIWARE 6 - 알림 연동: 넷앤드 HIWARE 6의 알림을 연동하기 위해 사용되는 프로젝트를 만들고 유지보수 하고 있습니다.',
            'Slack, Kakao Talk, Email, SMS, MQ, UDP등 여러 방식의 알람 연동 개발',
            '고객사 사내 메신저 시스템과의 REST API 통신을 통한 알림 연동 구현',
          ],
          skillKeywords: ['Spring Boot', 'Spring Batch', 'Spring Okta', 'Okta SAML', 'OneLogin', 'IBM MQ', 'UDP'],
        },
      ],
    },
    {
      title: '제네웰',
      positions: [
        {
          title: '연구개발',
          startedAt: '2021-03',
          endedAt: '2021-09',
          descriptions: [
            'UDI 시스템 관리: 의료기기 통합 정보인 UDI 추적 관리 시스템을 관리 했습니다.',
            'UDI 추적 관리 시스템 관리',
            '연구원 보조 업무',
            '약품 재고 관리',
          ],
          skillKeywords: [],
        },
      ],
    },
  ],
};

export default experience;
