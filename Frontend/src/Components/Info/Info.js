import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./Info.css";

const Info = () => {
  const [top, setTop] = useState([]);
  const [world, setWorld] = useState([]);
  const [business, setBusiness] = useState([]);
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    // axios.get(
    //   "https://gnews.io/api/v4/top-headlines?country=us&token=6bbc393eac8f778d09466ac7ea915c56"
    // )
    // .then((res) => {
    //   setTop(res.data.articles)
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

    // axios.get(
    //   "https://gnews.io/api/v4/search?q=world&token=6bbc393eac8f778d09466ac7ea915c56"
    // )
    // .then((res) => {
    //   setWorld(res.data.articles)
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

    // axios.get(
    //   "https://gnews.io/api/v4/search?q=recommendation&token=6bbc393eac8f778d09466ac7ea915c56"
    // )
    // .then((res) => {
    //   setRecommendation(res.data.articles)
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

    // axios.get(
    //   "https://gnews.io/api/v4/top-headlines?country=us&topic=business&token=6bbc393eac8f778d09466ac7ea915c56"
    // )
    // .then((res) => {
    //   setBusiness(res.data.articles)
    //   console.log(res)
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

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

    j = 0;
    for (i = 0; i < business.length; i++) {
      if (business[i].description === null || business[i].description === undefined) {
        business.splice(i, 1);
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

        <div className="main_body">
          <div>
            <div className="news_wrap">
                <div className="title_details">
                  {top.map((top_news, i) => {
                    if (i == 0) {
                      return (
                        <Fragment key={i}>
                          <div className="titlenews">
                            <p className="news_title" style={{fontSize:"38px",lineHeight:"35px"}}>
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
                    if (i > 0 && i < 6) {
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
                    if (i===6) {
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
                  {world.map((world_news, i) => {
                    if (i === 1) {
                      return (
                        <Fragment key={i}>
                          <div className="first_news">
                            <img
                              src={world_news.image}
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
                              src={world_news.image}
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
                              src={world_news.image}
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
            </div>
            <hr className="inner_hr" />
            <span className="bus_title">BUSINESS & FINANCE</span>
            <div className="bus_news">
              <div className="bus_details1">
                {business.map((top_news, i) => {
                    if (i === 0) {
                      return (
                        <Fragment key={i}>
                          <div className="busnews1">
                            <img
                              src={top_news.image}
                              alt="news_image"
                              width="100%"
                              height="auto"
                            ></img>
                            <p className="bus_news_title">
                              <a href={top_news.url}>{top_news.title}</a>
                            </p>
                            <p className="bus_news_desc">
                              {top_news.description.slice(0, 100) + "..."}
                            </p>

                            <p className="time">{top_news.publishedAt}</p>
                          </div>
                        </Fragment>
                      );
                    }
                })}
              </div>
              <div className="bus_details2">
                {business.map((top_news, i) => {
                    if (i === 1) {
                      return (
                        <Fragment key={i}>
                          <div className="busnews">
                            <p className="bus_news_title">
                              <a href={top_news.url}>{top_news.title.slice(0, 50) + "..."}</a>
                            </p>
                            <div className="bus_desc_img2">
                              <p className="bus_news_desc">
                                {top_news.description.slice(0, 50) + "..."}
                              </p>
                              <img
                                src={top_news.image}
                                alt="news_image"
                                width="110px"
                                height="74px"
                              ></img>
                            </div>     
                            <p className="time">{top_news.publishedAt}</p>
                            <hr />
                          </div>
                        </Fragment>
                      );
                    }
                    if (i === 2) {
                      return (
                        <Fragment key={i}>
                          <div className="busnews">
                            <p className="bus_news_title">
                              <a href={top_news.url}>{top_news.title.slice(0, 50) + "..."}</a>
                            </p>
                            <div className="bus_desc_img2">
                              <p className="bus_news_desc">
                                {top_news.description.slice(0, 50) + "..."}
                              </p>
                              <img
                                src={top_news.image}
                                alt="news_image"
                                width="110px"
                                height="74px"
                              ></img>
                            </div>     
                            <p className="time">{top_news.publishedAt}</p>
                          </div>
                        </Fragment>
                      );
                    }
                })}
              </div>
              <div className="bus_details2">
                {business.map((top_news, i) => {
                    if (i === 3) {
                      return (
                        <Fragment key={i}>
                          <div className="busnews">
                            <p className="bus_news_title">
                              <a href={top_news.url}>{top_news.title.slice(0, 50) + "..."}</a>
                            </p>
                            <div className="bus_desc_img2">
                              <p className="bus_news_desc">
                                {top_news.description.slice(0, 50) + "..."}
                              </p>
                              <img
                                src={top_news.image}
                                alt="news_image"
                                width="110px"
                                height="74px"
                              ></img>
                            </div>     
                            <p className="time">{top_news.publishedAt}</p>
                            <hr />
                          </div>
                        </Fragment>
                      );
                    }
                    if (i === 4) {
                      return (
                        <Fragment key={i}>
                          <div className="busnews">
                            <p className="bus_news_title">
                              <a href={top_news.url}>{top_news.title.slice(0, 50) + "..."}</a>
                            </p>
                            <div className="bus_desc_img2">
                              <p className="bus_news_desc">
                                {top_news.description.slice(0, 50) + "..."}
                              </p>
                              <img
                                src={top_news.image}
                                alt="news_image"
                                width="110px"
                                height="74px"
                              ></img>
                            </div>     
                            <p className="time">{top_news.publishedAt}</p>
                          </div>
                        </Fragment>
                      );
                    }
                })}
              </div>
            </div>
          </div>
          <div className="short_section">
            <div className="recom_details">
                <span className="r_heading">Recommendation</span>
                {business.map((r_news, i) => {
                  if (i >= 5 && i <= 8) {
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
                          
                          <hr className="r_hr"/>
                        </div>
                      </Fragment>
                    );
                  }
                })}
              </div>
          
            <div className="opinion_details">
                <div className="opinion_heading">OPINION</div>
              
                {world.map((r_news, i) => {
                  if (i >= 5 && i <= 8) {
                    return (
                      <Fragment key={i}>
                        <div className="opinion_news">
                          <p className="recom_title">
                            <a href={r_news.url}>{r_news.title}</a>
                          </p>
                          <hr className="r_hr"/>
                        </div>
                      </Fragment>
                    );
                  }
                })}
              </div>
          
          </div>
        </div>

    </Fragment>
  );
};

export default Info;
