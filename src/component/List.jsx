import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import styles from '../css/UserList.module.css'; // css 폴더 내의 CSS 모듈 import
import SearchBar from "./SearchBar";

function List({ onUserClick }) {
  const [photos, setPhotos] = useState([]); // 사용자 상태 정의: 사용자 리스트 저장
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 정의
  const [filteredPhotos, setFilteredPhotos] = useState([]); // 필터링된 사진 리스트 저장
  const [error, setError] = useState(null);

  useEffect(() => { 
    // 컴포넌트가 처음 렌더링될 때 한 번 실행되어 axios로 API(https://jsonplaceholder.typicode.com/photos)에서 사용자 목록을 가져옵니다. 
    axiosInstance.get('/photo')
      .then(response => {
        setPhotos(response.data);
        setFilteredPhotos(response.data); // 초기에는 모든 사진을 표시
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    // 에러 상태를 컴포넌트의 반환값으로 처리
     throw error;
  }

  // 검색어를 설정하고 필터링을 수행하는 함수
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = photos.filter(photo =>
      photo.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPhotos(filtered);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} /> {/* 검색바 컴포넌트 추가 */}
      <h2 className={styles.title}>Photo List</h2>
      <ul>
        {filteredPhotos.map(photo => (
          <li
            key={photo.id}
            onClick={() => onUserClick(photo.id)}
            className={styles.listItem}
          >
            <p>ID: {photo.id}</p>
            <p>Title: {photo.title}</p>
            <p>URL: <a href={photo.url} target="_blank" rel="noopener noreferrer">{photo.url}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
