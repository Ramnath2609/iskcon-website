import axios from "axios";
import { useState, useEffect } from "react";
import { BlogTile } from "../components/BlogTile";

export function BlogsContainer() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://api.navayogendraswami.com/api/blogs")
      .then((res) => {
        console.log(res);
        setBlogs(res.data.data)
      })
  }, []);

  return (
    <>
      {blogs.map((blog) => <BlogTile key={blog.id} data={blog.attributes} />)}
    </>
  )
}