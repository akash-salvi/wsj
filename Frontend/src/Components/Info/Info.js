import React from "react";
import axios from "axios";

const Info = () => {
  axios.get(
    "https://newsapi.org/v2/everything?q=ai&apiKey=de95fc5c82514c03946ecff59ef6068f"
  ).then((res)=>{
        console.log(res)
  }).catch((error)=>{
      console.error(error)
  });

  return <div>Info</div>;
};

export default Info;
