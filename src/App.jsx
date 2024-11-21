// 컴포넌트를 조합하는 메인 컴포넌트
// App.js에서 UserList와 UserDetail 컴포넌트를 조합해 메인 화면을 구성합니다.
import React, { useState } from 'react';

import { Outlet } from 'react-router-dom';


function App() {// App 컴포넌트는 사용자 선택에 따라 UserDetail에서 선택된 사용자의 정보를 보여줍니다.

  return (/* UserList와 Detail 컴포넌트 렌더링: UserList는 사용자 목록을 보여주고, 항목을 클릭하면 selectedUserId가 업데이트됩니다. */
    <>
       <Outlet />
    </>
  );
}

export default App;