import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// 카테고리 목록, 보이는 건 한글, 값은 영어로 할당.
const categories = [
  { name: "all", text: "전체" },
  { name: "business", text: "제주시" },
  { name: "entertainment", text: "애월" },
  { name: "health", text: "한림" },
  { name: "science", text: "대정" },
  { name: "sports", text: "한경" },
  { name: "technology", text: "중문" },
  { name: "busanFood", text: "안덕" },
  { name: "busanWalking", text: "서귀포" },
  { name: "busanWalking", text: "성산" },
  { name: "busanWalking", text: "남원" },
  { name: "busanWalking", text: "조천" },
  { name: "busanWalking", text: "구좌" },
];
// css
const CategoriesBlockCss = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  margin: 0 auto;
  background-repeat-y: no-repeat;
  background-image: url("https://cdn.pixabay.com/animation/2022/08/06/07/15/07-15-09-226_512.gif");
  background-size: 10%;
  padding-top: 100px;
  @media screen and (max-width: 1000px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const CategoriesCss = styled(NavLink)`
  font-size: 1.5rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: #fff;
  padding: 0.5rem;

  &:hover {
    color: yellow;
  }

  &.active {
    font-weight: 600;
    border-top: 2px solid violet;
    border-bottom: 2px solid violet;
    color: #222;
    background-color: pink;
    &:hover {
      color: hotpink;
      font-weight: bold;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlockCss>
      {categories.map((c) => (
        <CategoriesCss
          key={c.name}
          // NavLink 변경 부분
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to={
            c.name === "all" ? "/newsPageTest/all" : `/newsPageTest/${c.name}`
          }
        >
          {c.text}
        </CategoriesCss>
      ))}
    </CategoriesBlockCss>
  );
};

export default Categories;