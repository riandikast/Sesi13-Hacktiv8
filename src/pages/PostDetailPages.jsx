import React from "react";
import NavBar from "../component/Navbar";
import PostDetail from "../component/body/detail/PostDetail";
import ApiService from "../component/network/ApiService";

function PostDetailPages() {
  const { data } = ApiService();
  return (
    <>
      <NavBar></NavBar>

      <PostDetail></PostDetail>
    </>
  );
}

export default PostDetailPages;
