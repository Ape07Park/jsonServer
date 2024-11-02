import React, { useState } from 'react';

// 검색어 입력
function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSearchClick = () => {
    onSearch(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={handleSearchClick}>검색</button>
    </div>
  );
}

export default SearchBar;
