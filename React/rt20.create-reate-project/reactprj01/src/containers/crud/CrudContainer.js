import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import CrudInput from './CrudInput';
import CrudList from './CrudList';

const StyledCrudContainer = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  .strong {
    color: red;
    font-weight: bold;
    font-size: 1.2em;
  }
  label {
    display: inline-block;
    width: 80px;
  }
  #app > div {
    margin: 5px 0;
  }
`;

// const {...props} = props;
function CrudContainer({ ...props }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [변수명, set변수명] = useState('기본값'); // 상태값이 기본타입인 경우
  const [state, setState] = useState({ id: 0, name: '', age: 0 }); // 상태값이 참조타입 경우

  // ref 만들기.
  // const refInput = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('CrudContainer >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('CrudContainer >> componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('CrudContainer >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  const callback = useCallback(
    (param) => {
      // state 변경
    },
    [
      /* 연관배열: 콜백 메서드에서 변경하고자 하는 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledCrudContainer>
      <div id="app">
        <h1>Creat Read Update Delete</h1>
        <div>
          <div>
            <label htmlFor="">Name : </label>
            <input type="text" name="name" placeholder="이름을 입력하세요" />
          </div>
          <div>
            <label htmlFor="">Power : </label>
            <input type="number" name="power" placeholder="숫자를 입력하세요" />
          </div>
          <button type="button">Add</button>
        </div>
        <hr />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>POWER</th>
              <th>CRUD</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td>1</td>
              <td>슈퍼맨</td>
              <td>100</td>
              <td>
                <button type="button">Del</button>
                <button type="button">Power Up</button>
                <button type="button">Power Down</button>
                <button type="button">Edit</button>
              </td>
            </tr>
            <tr className="strong">
              <td>2</td>
              <td>아쿠아맨</td>
              <td>300</td>
              <td>
                <button type="button">Del</button>
                <button type="button">Power Up</button>
                <button type="button">Power Down</button>
                <button type="button">Edit</button>
              </td>
            </tr>
            <tr className="strong">
              <td>3</td>
              <td>스파이더맨</td>
              <td>500</td>
              <td>
                <button type="button">Del</button>
                <button type="button">Power Up</button>
                <button type="button">Power Down</button>
                <button type="button">Edit</button>
              </td>
            </tr>
            <tr className="strong">
              <td>4</td>
              <td>배트맨</td>
              <td>30</td>
              <td>
                <button type="button">Del</button>
                <button type="button">Power Up</button>
                <button type="button">Power Down</button>
                <button type="button">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledCrudContainer>
  );
}

CrudContainer.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
CrudContainer.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default CrudContainer; // React.memo(CrudContainer); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
