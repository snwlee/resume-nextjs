import { ISkill } from '../component/skill/ISkill';

const backendDevelopment: ISkill.Skill = {
  category: 'Backend Development',
  items: [
    { title: 'Java 21을 활용한 백엔드 개발에 능숙합니다.' },
    { title: 'HIWARE 솔루션 JDK 8에서 JDK 21로 마이그레이션 경험을 보유하고 있습니다.' },
    { title: 'Spring Boot 프레임워크를 사용한 RESTful API 개발 경험이 있습니다.' },
    { title: 'MyBatis와 JPA를 활용한 데이터베이스 연동 작업을 할 수 있습니다.' },
  ],
};

const devOpsContainerization: ISkill.Skill = {
  category: 'DevOps & Containerization',
  items: [
    { title: 'K8s와 Docker 기반으로 구성된 HIWARE 솔루션의 컨테이너 환경 유지보수 경험' },
    { title: 'Kubernetes 클러스터 내 마이크로서비스 배포 및 관리 업무 수행' },
    { title: 'Docker 컨테이너 기반 애플리케이션 운영 및 트러블슈팅 경험' },
    { title: 'CKA(Certified Kubernetes Administrator) 자격증 취득을 위한 심화 학습 진행 중' },
  ],
};

const cloudInfrastructure: ISkill.Skill = {
  category: 'Cloud & Infrastructure',
  items: [
    { title: 'AWS 클라우드 서비스를 활용한 인프라 구축 및 관리 경험' },
    { title: 'AWS EC2, S3, RDS 등 핵심 서비스 운영 경험' },
    { title: 'SAA(Solutions Architect Associate) 자격증 취득을 위한 학습 진행 중' },
  ],
};

const integrationMessaging: ISkill.Skill = {
  category: 'Integration & Messaging',
  items: [
    { title: 'IBM MQ를 활용한 메시지 큐 시스템 구축 및 운영' },
    { title: 'UDP 통신을 통한 실시간 데이터 전송 구현' },
    { title: '다양한 시스템 간 REST API 연동 개발' },
    { title: '파일 기반 데이터 연동 및 배치 처리 시스템 구현' },
  ],
};

const authenticationSecurity: ISkill.Skill = {
  category: 'Authentication & Security',
  items: [
    { title: 'SAML 2.0 프로토콜을 활용한 SSO(Single Sign-On) 시스템 구현' },
    { title: 'Okta, OneLogin 등 다양한 IdP와의 SAML 연동 경험' },
    { title: 'LDAP를 통한 디렉토리 서비스 연동 및 사용자 인증 구현' },
    { title: 'SLS/SLO를 통한 통합 로그아웃 플로우 설계 및 구현' },
  ],
};

const databaseManagement: ISkill.Skill = {
  category: 'Database Management',
  items: [
    { title: 'Oracle, MSSQL, PostgreSQL, MySQL, MariaDB 등 다양한 RDBMS 연동 경험' },
    { title: 'MyBatis와 JPA를 활용한 ORM 기반 데이터 액세스 레이어 구현' },
    { title: '대용량 데이터 처리를 위한 배치 시스템 설계 및 최적화' },
    { title: '데이터베이스 스키마 설계 및 쿼리 성능 튜닝' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    backendDevelopment,
    devOpsContainerization,
    cloudInfrastructure,
    integrationMessaging,
    authenticationSecurity,
    databaseManagement,
  ],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
