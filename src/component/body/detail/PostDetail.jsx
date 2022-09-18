import React from "react";
import ApiService from "../../network/ApiService";
import { useParams } from "react-router-dom";



function PostDetail() {
  let params = useParams();
  const getAPI= ApiService()
  let data = getAPI.data && getAPI.data.find((element) => element.id === Number(params?.id));

  return (
    <>
      <div className=" block h-auto w-full  bg-github-darker-blue flex space-x-20 ">
        <div className="h-96 mb-96 mt-60 w-0"></div>
        <div className="text-white ml-4 mt-8">
        
            <tr>
              <div className=" px-1 py-3 text-white"> Title : {data && data.title}</div> 
             
              <div className=" px-1 py-3"> Desc : {data && data.body}</div>
            </tr>
   
        </div>
      </div>
    </>
  );
}

export default PostDetail;
