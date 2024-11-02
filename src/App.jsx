// 컴포넌트를 조합하는 메인 컴포넌트
// App.js에서 UserList와 UserDetail 컴포넌트를 조합해 메인 화면을 구성합니다.
import React, { useState } from 'react';
import List from './component/List';
import Detail from './component/Detail';
import style from './css/App.module.css'


function App() {// App 컴포넌트는 사용자 선택에 따라 UserDetail에서 선택된 사용자의 정보를 보여줍니다.

  const [selectedUserId, setSelectedUserId] = useState(null); // selectedUserId 상태: 사용자가 선택한 사용자의 ID를 저장하는 상태입니다. 




  return (/* UserList와 Detail 컴포넌트 렌더링: UserList는 사용자 목록을 보여주고, 항목을 클릭하면 selectedUserId가 업데이트됩니다. */
    <div className="App">
      <h1 className={style.title}>User Management</h1>
      <List onUserClick={setSelectedUserId} 
      />{/*  UserList에서 onUserClick 이벤트가 발생하면 setSelectedUserId를 호출하여 선택된 ID를 설정합니다. */}

      {selectedUserId && <Detail userId={selectedUserId} />} {/* 선택된 사용자 ID를 UserDetail 컴포넌트에 전달 */}
    </div>
  );
}

export default App;