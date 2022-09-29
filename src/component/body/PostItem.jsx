import React from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../network/ApiService";

function PostItem() {
  const { data } = ApiService();
  // const navigation = useNavigate();

  return (
    <>
      <div className="block h-auto  bg-github-darker-blue flex space-x-20">
        <div className="h-96 mb-96 mt-60 w-0"></div>
        <div>
          <button disabled data-testid="button1" className="mt-4 bg-github-light-blue px-2 py-1 rounded-full">
            Button Buat Testing
          </button>
          <div className="text-white mt-2">
            {data?.map((post) => (
              <tr className="bg-github-blue-b ">
                <td className=" px-1 py-3"> Title : {post.title} </td>
              </tr>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PostItem;
