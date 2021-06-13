import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./Info.css";

const Info = () => {
  const [top, setTop] = useState([]);
  const [world, setWorld] = useState([]);
  const [business, setBusiness] = useState([]);
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=de95fc5c82514c03946ecff59ef6068f"
    )
    .then((res) => {
      setTop(res.data.articles)
    })
    .catch((error) => {
      console.error(error);
    });

    axios.get(
      "https://newsapi.org/v2/everything?q=world&apiKey=de95fc5c82514c03946ecff59ef6068f"
    )
    .then((res) => {
      setWorld(res.data.articles)
    })
    .catch((error) => {
      console.error(error);
    });

    axios.get(
      "https://newsapi.org/v2/everything?q=recommendation&apiKey=de95fc5c82514c03946ecff59ef6068f"
    )
    .then((res) => {
      setRecommendation(res.data.articles)
    })
    .catch((error) => {
      console.error(error);
    });

    var j = 0;
    for (var i = 0; i < top.length; i++) {
      if (top[i].description === null || top[i].description === undefined) {
        top.splice(i, 1);
        j--;
        i--;
      }

      console.log(top[i].description);

      j++;
      if (j === 6) {
        break;
      }
    }

    j = 0;
    for (i = 0; i < world.length; i++) {
      if (world[i].description === null || world[i].description === undefined) {
        world.splice(i, 1);
        j--;
      }

      j++;
      if (j === 6) {
        break;
      }
    }
  }, []);

  return (
    <Fragment>
      <hr className="info_hr" />
      <div className="news_wrap">
        <div className="title_details">
          {top.map((top_news, i) => {
            if (i >= 0 && i < 5) {
              return (
                <Fragment key={i}>
                  <div className="titlenews">
                    <p className="news_title">
                      <a href={top_news.url}>{top_news.title}</a>
                    </p>
                    <p className="news_desc">
                      {top_news.description.slice(0, 100) + "..."}
                    </p>

                    <p className="time">{top_news.publishedAt}</p>
                    <hr />
                  </div>
                </Fragment>
              );
            }
            if (i===5) {
              return (
                <Fragment key={i}>
                  <div className="titlenews">
                    <p className="news_title">
                      <a href={top_news.url}>{top_news.title}</a>
                    </p>
                    <p className="news_desc">
                      {top_news.description.slice(0, 100) + "..."}
                    </p>

                    <p className="time">{top_news.publishedAt}</p>
                  </div>
                </Fragment>
              );
            }

          })}
        </div>
        <div className="image_news">
          <div>
            {top.map((world_news, i) => {
              if (i === 1) {
                return (
                  <Fragment key={i}>
                    <div className="first_news">
                      <img
                        src={world_news.urlToImage}
                        alt="news_image"
                        width="100%"
                        height="auto"
                      ></img>
                      <p className="news_title">
                        <a href={world_news.url}>
                          {world_news.title.slice(0, 50) + "..."}
                        </a>
                      </p>
                      <p className="news_desc">
                        {world_news.description.slice(0, 200) + "..."}
                      </p>

                      <p className="time">{world_news.publishedAt}</p>

                      <hr />
                    </div>
                  </Fragment>
                );
              }
            })}
          </div>

          <div className="img_details">
            {top.map((world_news, i) => {
              if (i >= 2 && i < 4) {
                return (
                  <Fragment key={i}>
                    <div className="worldnews">
                      <img
                        src={world_news.urlToImage}
                        alt="news_image"
                        width="300px"
                        height="200px"
                      ></img>
                      <p className="news_title">
                        <a href={world_news.url}>
                          {world_news.title.slice(0, 50) + "..."}
                        </a>
                      </p>
                      <p className="news_desc">
                        {world_news.description.slice(0, 100) + "..."}
                      </p>

                      <p className="time">{world_news.publishedAt}</p>

                      <hr />
                    </div>
                  </Fragment>
                );
              }
              if (i === 5 || i=== 4) {
                return (
                  <Fragment key={i}>
                    <div className="worldnews">
                      <img
                        src={world_news.urlToImage}
                        alt="news_image"
                        width="300px"
                        height="200px"
                      ></img>
                      <p className="news_title">
                        <a href={world_news.url}>
                          {world_news.title.slice(0, 50) + "..."}
                        </a>
                      </p>
                      <p className="news_desc">
                        {world_news.description.slice(0, 100) + "..."}
                      </p>

                      <p className="time">{world_news.publishedAt}</p>

                    </div>
                  </Fragment>
                );
              }
            })}
          </div>
        </div>

        <div className="recom_details">
          <span className="r_heading">Recommendation</span>
          {recommendation.map((r_news, i) => {
            if (i >= 0 && i <= 3) {
              return (
                <Fragment key={i}>
                  <div className="recomnews">
                    <p className="recom_title">
                      <a href={r_news.url}>{r_news.title}</a>
                    </p>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                      <p className="recom_author">
                        {r_news.author}
                      </p>

                      <p className="recom_time">{r_news.publishedAt}</p>
                    </div>
                    
                    <hr />
                  </div>
                </Fragment>
              );
            }
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Info;
