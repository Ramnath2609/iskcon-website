import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { BlogTile } from "../components/BlogTile";
import styled from "styled-components";
import Left from "../assets/CaretLeft.svg"
import Right from "../assets/CaretRight.svg"

const PaginationBlock = styled.div`
  width: max-content;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #EE7E52;
  border-radius: 8px;
  justify-content: flex-end;
`;

const Button = styled.button`
  background: none;
  cursor: pointer;
  padding: 8px 12px;
  border: none;
`;

const PaginationWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-right: 20px;
  justify-content: flex-end;
  width: 100%;
`;

const ColorText = styled.p`
  color: #EE7E52;
`;

export function BlogsContainer() {
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    axios.get(`https://api.navayogendraswami.com/api/blogs?pagination[page]=${pagination}&pagination[pageSize]=10`)
      .then((res) => {
        console.log(res);
        setBlogs(res.data.data);
        setMaxPage(res.data.meta.pagination.pageCount)
      })
  }, [pagination]);

  const onNextClick = useCallback(() => {
    if (pagination !== maxPage) {
      setPagination(pagination + 1)
    }
  }, [pagination, maxPage]);

  const onPrevClick = useCallback(() => {
    if (pagination !== 1) {
      setPagination(pagination - 1)
    }
  }, [pagination]);

  return (
    <>
      <PaginationWrapper>
        <PaginationBlock>
          <Button onClick={onPrevClick}>
            <img src={Left} alt="previous" />
          </Button>
          <ColorText>{pagination} of {maxPage}</ColorText>
          <Button onClick={onNextClick}>
            <img src={Right} alt="next" />
          </Button>
        </PaginationBlock>
      </PaginationWrapper>
      <div>
        {blogs.map((blog) => <BlogTile key={blog.id} data={blog.attributes} />)}
      </div>
    </>
  )
}