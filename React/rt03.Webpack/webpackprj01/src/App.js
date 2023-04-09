import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App({ ...props }) {
  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <div>
      <Header></Header>
      <section id="page1" data-role="page">
        <div class="content" data-role="content">
          컨텐츠
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App; // React.memo(App); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
