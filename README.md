# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




## 사용스택
- node.js를 설치하고 사용함
- react를 사용하여 사이트를 완성
- youTube Api를 이용하여 데이터를 가져옴
- rapidapi 를 이용하여 데이터를 가져옴
- netlify를 통해 사이트를 배포
- firebase를 통해 사이트를 배포
- vercel를 통해 사이트를 배포
- git을 사용하여 파일을 관리


#프로젝트 실행
- react를 설치
'npx create-react-app 프로젝트이름'
- react-router-dom 을 설치 'npm install react-router-dom'
- axios를 설치함 'npm install axios'
- react-icons을 설치 'npm install react-icons'
- react-player를 설치함 'npm install react-player'
- sass를 설치 'npm install sass'
- react-helmet-async를 설치 'npm install react-helmet-async'
- swiper를 설치 'npm install swiper'


#웹푠트
웹 페이지에서 특정 폰트를 서버에서 다운로드하여 사용할 수 있게해주는 기술
사용자 컴퓨터에 해당폰트가 없더라도 다운로드 받아서 사용할 수 있음
웹 폰트 포맷은 웹페이지에서 사용되는 폰트를 브라우저가 이해하고 렌더링할 수 있는 형식으로 변환하는 포맷.
웹 페이지에서 특정폰트를 사용하려면 해당폰트를 사용자의 브라우저로 전달해야하기 때문에 이러한 웹 폰트 포맷이 필요

- WOFF : 웹페이지에서 사용하기 최적화된 웹 폰트 포맷
압축률이 높아서 작은 파일 크기를 가지며, 빠른 로딩이 가능
- WOFF2 : WOFF의 업그레이드 버전, 더욱 효율적인 압축기술을 사용
- TTF/OTF 트루타입, 오픈타입 폰트의 확장자
원래는 인쇄용 개발
- EOT 웹페이지에서 사용하기 위해 개발된 폰트 포맷 중 하나


## 페이지 만들기
리액트 SPA
- 가상 DOM : 리액트는 가상 DOM을 사용하여 실제 DOM과 상호작용
- 컴포넌트 기반 아키텍처 : 리액트 애플리케이션은 작은 컴포넌트로 구성.
- 라우팅 : 리액트 SPA에서 일반적으로 브라우저의 URL을 사용하여 다른 뷰나 페이지 간에 전환할수 있음
이를 위해 리액트 라우팅 라이브러리, React Router와 같은 도구 활용
- 비동기 데이터 로딩 : SPA는 사용자 경험을 개선하기 위해 비동기적으로 데이터를 로드하고 UI를 업데이트 할 수 있다.
axios, fetch와 같은 API 호출을 지원하며, 상태 관리 라이브러리인 Redux나 MobX 와 함께 사용할수 있다.
- 상태관리 : 복잡한 SPA에서는 여러 컴포넌트 간에 상태를 효율적으로 관리해야함. 리액트에서는 컴포넌트 내부 상태뿐만 아니라, 전역상태를 관리하기 위해 Redux, MobX와 같은 상태 관리 라이브러리를 사용할 수 있다.
- Webpack 등 빌드 도구와의 통합 : 리액트 프로젝트는 보통 Babel, Webpack과 같은 도구를 사용하여 번들링하고 최적화함. 이를 통해 코드의 크기를 줄이고 성능을 향상시킬수 있다.

DOM 과 Virtual DOM
- DOM은 웹 페이지의 구조를 표현하는 트리구조
- HTML, XML, 또는 다른 마크업 언어로 작성된 문서를 구조적으로 표현함
- DOM은 웹페이지의 모든 요소와 요소 간의 관계를 표현. 각 HTML, 속성 텍스트내용 등이 DOM의 노드로 표현
-  실제 DOM은 웹 브라우저의 메모리에 생성되고 관리됨. 이는 웹 페이지의 현재 상태를 표현, Javascript를 통해 동적으로 조작할수 있다.
- DOM은 브라우저의 성능과 관련하여 주요한 역할을 함.
DOM 조작은 비용이 높을 수 있으며, 변경 사항을 즉시 실제 DOM에 반영하는 것은 효율적이지 않을수 있다.




Virtual DOM 
- 메모리에 존재하는 실제 DOM의 가상 표현.
- React와 같은 라이브러리 및 프레임워크에서 Virtual DOM을 사용하여 성능을 최적화함. 가상 DOM을 사용하여 UI업데이트를 관리하여, 변경사항을 효율적으로 처리함
- Virtual DOM은 업데이트 비용을 최소화하고 성능을 향상시킴
가상 DOM을 사용하면 실제 DOM을 직접 조작하는 대신 변경사항을 비교
- React와 같은 라이브러리와 프레임워크에서 Virtual DOM을 사용하여 UI업데이트를 관리하고 성능을 최적화하는데 활용됨


React 애플리케이션의 라우팅을 설정하고 관리하기 위해 React Router의 
BrowserRouter, Routes 및 Route 구성요소를 사용하는 기본 애플리케이션 구조를 정의

import React from 'react'; : 리액트 라이브러리를 불러옴
import { BrowserRouter, Routes, Route } from 'react-router-dom';
: React Router에서 BrowserRouter, Routes, Route 컴포넌트를 불러옴. 
이 컴포넌트들은 브라우저 라우팅을 설정하고 경로별로 컴포넌트를 매핑하는데 사용
라우팅 경로 및 컴포넌트 임포트 : 다양한 뷰 컴포넌트들을 해당경로에 연결하고, 이를 위해 각 컴포넌트들을 임포트함
- const App = () => : App이라는 이름의 함수형 컴포넌트를 정의함
이 컴포넌트는 라우팅 구성을 담당하고 있음
<BrowserRouter> : 리액트 라우터의 BrowserRouter컴포넌트로 감싸여 있음. 
이 컴포넌트는 브라우저의 주소 히스토리 API를 사용하여 라우팅을 관리함
<Routes> : BrowserRouter 내에서 사용되며, 다양한 경로에 대한 라우트 정보를 정의함
<Route path='/' element={<Home />} />
: 경로가 '/'인 경우, Home 컴포넌트를 렌더링함.
element prop을 사용하여 해당 경로에 대한 컴포넌트를 지정함
- 나머지 <Route> 컴포넌트도 동일한 방식으로 설정됨
/video/:videoId 경로는 Video컴포넌트

</Routes>: Routes 컴포넌트의 닫는 태그로 라우트 설정을 마무리함
export default App; : App 컴포넌트를 외부로 내보냄.











리액트 컴포넌트는 리액트 애플리케이션 구성요소, UI를 작은 단위로 분리하여 재사용 가능하고 모듈화된 코드로 관리할 수 있도록 도와주는 개념.
컴포넌트는 화면의 여러 부분을 독립적으로 생성하고 관리할 수 있도록 해주며, 각각 컴포넌트는 자체적인 상태와 속성을 가질수있다.


- 클래스 컴포넌트 : ES6 클래스를 확장하여 만는 컴포넌트 
클래스 컴포넌트는 라이프사이클 메서드를 사용할 수 있어서 컴포넌트의 생명주기 동안 다양한 동작을 처리할 수 있다. 클래스 컴포넌트는 주로 상태관리와 라이프사이클 이벤트 처리를 위해 사용


- JSX는 Javascript XML 약자로 리액트에서 UI를 작성하기 위한 문법확장임.
JSX를 사용하면 Javascript 코드 내부에서 HTML과 유사항 구문으로 UI요소를 작성할 수 있어, 가독성을 높이고 개발자들이 리액트 작성하기 쉬워짐..





# 페이지 SEO 작업
리액트 싱글 페이지로 구성되어 있기 때문에...SEO 노출에 약한편
 설명이나 타이틀 작업
 react-helmet-async 라이브러리가 설치되어 있어야함


 SEO "Search Engine Optimization" 검색 엔진 최적화
 SEO는 웹사이트나 웹페이지를 검색 엔진(Google, Bing, Yahoo) 에서 높은 순위로 표시되도록 최적화하는 프로세스와 전략
 이를 통해 웹사이트 검색결과 페이지(SERP)에서 높은 순위에 나타나고 더 많은 유기적 트래픽을 확보하려는 목적으로 사용
 

 # useEffect

 useEffect는 React함수 컴포넌트에서 비동기 작업을 수행하거나 부수 효과를 다룰때 사용되는 특별한 훅(Hook) 중 하나.주로 컴포넌트의 생명주기 메소드(예: componentDidMount, componentDidUpdate, componentWillUnmount)와 비슷한 역할을하여, 컴포넌트의 상태나 DOM 업데이트와 관련된 작업을 수행하는 데 사용

 - 부수효과 처리 : 비동기작업(데이터 가져오기, API 호출, 타이머 설정 등)을 수행
   컴포넌트의 렌더링과 독립적으로 처리

 - 상태 업데이트 : useState 훅을 사용하여 상태를 변경하고, 변경된 상태에 따른 추가적인 렌더링을 트리거함

 - DOM 조작 : 컴포넌트가 화면에 렌더링된 후에 DOM 요소를 조작하거나 이벤트 처리 등을 수행


 리액트 훅은 React버전 16.8 부터 소개된 기능,
 함수형 컴포넌트에서 상태와 다른 React 기능을 사용할 수 있게 해주는 API

 - useState :  상태관리 위해 사용. 함수형 컴포넌트 내에서 상태를 생성하고 업데이트 할 수 있게 해줌...
 const [count, setCount] = useState(0)
 count 현재 상태값이고 setCount는 상태를 업데이트 하는 함수

 - useEffect : 부수효과를 다루기 위해 사용
 컴포넌트가 마운트, 업데이트, 혹은 언마운트 될때 특정 작업(비동기작업, 상태 업데이트, DOM 조작)을 수행

 - useContext : 컨텍스트를 활용하여 컴포넌트 간에 상태를 공유
 React.createContext로 생성한 컨텍스트를 사용하여 값을 공유하거나 설정할 수 잇음

 - useReducer : 상태 업데이트를 다룰때 사용. 클래스 컴포넌트에서 setState 대신 사용할 수 있으며, 복잡한 상태관리에 유용

 - useRef : ref 객체를 생성하고 다룰때 사용. DOM 요소에 접근하거나 다른 목적으로 ref를 사용할 때 사용

 - useMemo 및 useCallback : 성능 최적화를 위해 사용.
  useMemo 계산 비용이 높은 값을 캐시하고, useCallback은 메모이제이션된 함수를 생성

  - Custom Hooks : 사용자 정의 훅을 생성하여 컴포넌트 간 코드 재사용을 간편하게 할 수 있다. 데이터 가져오기, 로컬 스토리지 액세스, 인증 등을 처리하는 훅을 만들수잇다. 



  - 이 컴포넌트의 목적은 검색 입력 필드를 제공하여 사용자가 입력하고 Enter키를 누르면 URL의 일부로 검색 키워드를 포함하는 새로운 URL로 이동하는 것. react-router-dom 라이브러리는 클라이언트 사이드 라우팅을 위해 사용되며, 페이지 전체 새로고침 없이 동적으로 URL을 변경할 수 있게해줌

  - useState를 사용하여 searchKeyword라는 상태 변수를 생성하고 초기값을 빈 문자열로 설정함 이 변수는 사용자가 입력한 검색어를 저장함

  - useNavigate 훅을 사용하여 navigate 함수를 가져옴
  React Router의 내비게이션을 처리하는데 사용됨

  - handleSearch 함수는 검색버튼을 클릭하거나 enter 키를 눌렀을때 호출


  - JSX 에서는 검색 UI를 렌더링함
  <input> 통해 검색어를 입력 onChange 이벤트 핸들러를 사용하여 입력된 검색어를 searchKeyword 상태로 업데이트함
  Enter키를 눌렀을때 검색을 실행하도록 onKeyDown 이벤트 핸들러를 설정

  - 검색 버튼을 클릭하거나 Enter 키를 누르면 handleSearch 함수가 호출되어 검색을 수행하고, 검색어는 초기화됨


  이 컴포넌트는 검색결과를 표시하는 페이지로, Youtube API를 사용하여 검색결과를 가져와 표시

  - useParams 훅을 사용하여 현재 경로에서 searchId 파라미터를 가져옴
  - useState를 사용하여 videos 라는 상태 변수를 생성하고 초기값을 빈 배열로 설정
  이 변수는 검색 결과로 받아온 비디오 목록을 저장함

  - useEffect 훅을 사용하여 컴포넌트가 마운트되거나 searchId 가 변경될때마다 유튜브 API를 호출하여 검색결과를 가져옴
  API호출에는 fetch 함수를 사용하며, 검색어와 API키를 쿼리 파라미터로 전달함
  API 응답을 JSON으로 파싱하고, 결과를 setVideos 함수를 사용하여 videos 상태변수에 저장함. API 호출 중에 발생할 수 잇는 오류도 처리함

  - JSX 에서는 Main 컴포넌트를 사용하여 페이지의 제목과 설명을 설정



  Rapid API 설정하기



Axios는 Javascript 및 Node.js에서 사용할 수 있는 라이브러리, HTTP 요청을 간단하게 만들고 처리하는데 도움을 주는 주요 목적
주로 클라이언트 측 및 서버 측 개발에서 사용됨

- 간단한 HTTP 요청 : Axios는 HTTP GET, POST, PUT, DELETE 등의 다양한 요청 메서드를 간편하게 만들어주며, 다른 HTTP 클라이언트보다 사용하기 쉽다.

- Promise 기반 : Axios는 Promise를 기반으로 동작하기 때문에 
- 요청 및 응답 인터셉터 : Axios는 요청과 응답을 인터셉트하여 필요한 처리수행
요청전에 인증 토큰을 추가하거나 응답을 처리하기 전에 데이터를 변환할수있다

- 자동 데이터 변환 : Axios는 JSON 데이터를 자동으로 JS객체로 변환해주거나 반대로 JS를 JSON 문자열로 변환해주는 기능 

- HTTP 요청의 취소 : Axios는 HTTP 요청을 중간에 취소할 수 있는 기능을 제공
불필요한 네트워크 요청을 방지

- 서버 및 브라우저 환경에서 사용 가능 : Axios는 브라우저와 Node.js 환경에서 모두 사용가능
클라이언트측 서버측 동일한 코드 사용가능

- 안전한 CSRF(Cross-Site Request Forgery) 보호 : Axios는 기본적으로 CSRF를 방어하기 위한 설정을 포함하고 있어, 보안적인 측면도





- nextPageToken 상태 변수 : nextPageToken 다음 페이지의 토큰을 저장. 이를 사용하여 API 호출시 다음 페이지의 결과를 가져옴.초기값은 null


- useEffect로 초기 검색 결과 초기화 : 검색어(searchId)가 변경될때마다 videos 상태와 nextPageToken 상태를 초기화


- fetchVideos 함수 : 검색결과를 가져오는 로직을 함수로 추상화함

- handleLoadMore 함수 : "더보기" 버튼 클릭시 호출되는 함수로, nextPageToken이 있을때만 추가 데이터를 로드함

- JSX에서 "더보기" 버튼 추가 : 검색 결과 아래에 더보기버튼 추가하고 
nextPageToken 이 존재할때만 이 버튼을 렌더링


    



