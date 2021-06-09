# OAuth

최근의 많은 인터넷 서비스들이 서비스 중에서 사용자가 일부 필요한 것만 사용할 수 있게 하는 형태로 만들어지고 있다. 별도의 인증절차를 거치면 외부 서비스에서도 Facebook이나 트위터의 일부 기능을 사용할 수 있다. 이 방식에서 사용하는 인증 절차가 OAuth이다.

## OAuth의 간단한 역사

Google과 Yahoo! 등에서는 다른 애플리케이션에 사용자의 아이디와 암호가 노출되지 않도록 하면서 API 접근 위임(API Access Delegation)이 가능하도록 한 각각의 인증 방식을 개발하여 사용했다.

Google에서는 AuthSub, Yahoo!에서는 BBAuth라 불리는 인증방식을 개발해서 사용하고 있었는 데 인증방식들이 제각각이었기 때문에 여러 서비스들을 하나의 서비스에 적용하기 위해서는 복잡하고 어려웠다.

2006년 트위터의 개발자와 Gnolia의 개발자가 만나게 되면서 이러한 API 접근 위임 표준안인 OAuth에 대한 논의가 시작되었고 2007년 4월에 OAuth의 초안이 공유되었다. 2008년 IETF 모임에서 OAuth에 대한 논의가 있었고 2010년에 OAuth 1.0 프로토콜 표준안이 RFC5849로 발표되었다. 그리고 2012년에는 이를 개량한 OAuth2.0이 나와 RFC6749와 RFC6750로 등록되었다.

## OpenID와 OAuth의 차이점

OpenID와 OAuth 모두 인증을 위한 표준 프로토콜이고 HTTP를 사용한다는 점에서는 동일하지만 목적성에서 차이가 있다. OpenID는 인증(Authentication)이 주목적이지만 OAuth의 주목적은 허가(Authorization)이다.

OpenID는 OpenID를 사용하는 여러 서비스가 OpenID Provider에서 OpenID Provider에게 인증을 위임함으로써 사용자의 인증과정을 처리한다. OAuth에서도 인증과정이 있지만 근본적인 목적은 권한이 있는 사용자인지를 확인하는 것이다.

그렇기에 OpenID와 OAuth의 근본적인 목적은 다르다.

## OAuth Flow

1. 권한 부여 및 클라이언트 자격 증명 요청
   - 클라이언트 ⇒ 인증 서버
2. Access Token 및 Refresh Token 응답
   - 인증 서버 ⇒ 클라이언트
3. Access 토큰을 사용해서 API 요청
   - 클라이언트 ⇒ 리소스 서버
4. 보호된 리소스 혹은 오류 응답
   - 리소스 서버 ⇒ 클라이언트
5. 토큰 및 클라이언트 자격 증명 갱신
   - 클라이언트 ⇒ 인증 서버
6. 토큰 응답
   - 인증 서버 ⇒ 클라이언트

## OAuth 인증 방식의 종류

RFC 6749(OAuth 2.0 Framework)에서 소개된 인증 방식에는 크게 4가지가 존재함.

1. 권한 코드 승인(Authorization Code Grant Type)
2. 암시적 승인(Implicit Grant)
3. 리소스 소유자 비밀번호 자격 증명(Resource Owner Password Credentials Grant)
4. 클라이언트 자격 증명(Client Credentials Grant Type)
