import { useState } from "react";
import styled from "@emotion/styled";

export const TheHeader = ({ setTitle, setError }) => {
  const [query, setQuery] = useState("");

  async function handleSearch() {
    setError("");
    setTitle("검색 결과");
  }

  async function showPopular() {
    setError("");
  }

  return (
    <Header>
      <Title>MovieFinder</Title>
      <SearchControls>
        <SearchInput
          placeholder="영화 제목을 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <SearchButton onClick={() => handleSearch()}>검색</SearchButton>
        <PopularToggle onClick={showPopular}>인기 영화</PopularToggle>
      </SearchControls>
    </Header>
  );
};

const Header = styled.header`
  height: 8vh;
  background-color: #252525;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 20px;
`;

const SearchControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PopularToggle = styled.div`
  margin-left: 12px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ddd;
`;

const SearchButton = styled.button`
  padding: 12px 14px;
  background: #e50914;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
