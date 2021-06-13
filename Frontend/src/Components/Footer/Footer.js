import React, { Fragment } from "react";
import "./Footer.css";
import {Dropdown} from 'react-bootstrap'
import google_img from '../../images/google.png'
import app_img from '../../images/app.png'

const Footer = () => {
  return (
    <div id="main_footer">
        <div className="footer_bar">
            <div className="footer_title">
            <a href="https://www.wsj.com/?mod=wsjheader_logo"></a>
            </div>
            <div className="footer_subtitle">
                <Dropdown style={{height:"12px"}}> 
                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                        English Edition
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#">English</Dropdown.Item>
                    <Dropdown.Item href="#">中文 (Chinese)</Dropdown.Item>
                    <Dropdown.Item href="#">日本語 (Japanese)</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>     
            </div>
            <div className="footer_links">
                <div className="footer_links_items">
                <a href="https://subscribe.wsj.com/hpheaderlink" rel="nofollow">Subscribe Now</a>
                <a href="https://accounts.wsj.com/login?target=https%3A%2F%2Fwww.wsj.com%2F">Sign In</a>
                </div>
            </div> 
        </div>
        
        <div className="footer_lists">
            <div>
                <div className="footer_list">                    
                    <ul className="items">
                    <li class="style--link-item--2QGPfq6e">
                        WSJ Membership
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsjplus.com/?mod=wsjfooter">
                        WSJ+ Membership Benefits
                        </a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://subscribe.wsj.com/membership">Subscription Options</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a
                        href="https://subscription.wsj.com/wsj-com-wall-street-journal/?mod=wsjfooter"
                        >Why Subscribe?</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.subscription.wsj.com/corporate/?mod=wsjfooter"
                        >Corporate Subscriptions</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://education.wsj.com/?mod=wsjfooter">Professor Journal</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://education.wsj.com/students/?mod=wsjfooter"
                        >Student Journal</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://highschool.wsj.com/?mod=wsjfooter"
                        >WSJ High School Program</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://amenity.wsj.com/?mod=wsjfooter">WSJ Amenity Program</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://publiclibrary.wsj.com/?mod=wsjfooter"
                        >Public Library Program</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://conferences.wsj.com/?mod=wsjfooter">WSJ Live</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="footer_list">                    
                    <ul className="items">
                    <li class="style--link-item--2QGPfq6e">
                        Customer Service
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://customercenter.wsj.com/home">Customer Center</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://customercenter.wsj.com/contact">Contact Us</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="footer_list">                    
                <ul className="items">
                    <li class="style--link-item--2QGPfq6e">
                        Tools & Features
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsj.com/newsletters/?mod=wsjfooter"
                        >Emails &amp; Alerts</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsj.com/news/how-to-guides?mod=wsjfooter">Guides</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsj.com/topics?mod=wsjfooter">Topics</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsj.com/watchlist/news?mod=wsjfooter">My News</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsj.com/news/rss-news-and-feeds?mod=wsjfooter"
                        >RSS Feeds</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsj.com/video?mod=wsjfooter">Video Center</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsj.com/watchlist/?mod=wsjfooter">Watchlist</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsj.com/podcasts?mod=wsjfooter">Podcasts</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="footer_list">                    
                <ul className="items">
                    <li class="style--link-item--2QGPfq6e">
                        Ads
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsjmediakit.com">Advertise</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://classifieds.wsj.com/advertise/real-estate-commercial/"
                        >Commercial Real Estate Ads</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://classifieds.wsj.com">Place a Classified Ad</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://classifieds.wsj.com/ad/Business-For-Sale-Ads"
                        >Sell Your Business</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://classifieds.wsj.com/advertise/real-estate-residential/"
                        >Sell Your Home</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://classifieds.wsj.com/advertise/careers/"
                        >Recruitment &amp; Career Ads</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsj.com/coupons">Coupons</a>
                    </li>
                    </ul> 
                </div>
            </div>
            <div>
                <div className="footer_list">                    
                <ul className="items">
                    <li class="style--link-item--2QGPfq6e">
                        More
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsj.com/about-us?mod=wsjfooter">About Us</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://commercialpartnerships.wsj.com/?mod=CP_PRT_BRD_FTR"
                        >Commercial Partnerships</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://wsj.com/partner">Content Partnerships</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsj.com/news/column/Corrections?mod=wsjfooter"
                        >Corrections</a
                        >
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://wsj.jobs">Jobs at WSJ</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.wsj.com/news/archive/?mod=wsjfooter">News Archive</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://customercenter.wsj.com/register">Register for Free</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://www.djreprints.com">Reprints</a>
                    </li>
                    <li class="style--link-item--2QGPfq6e">
                        <a href="https://wsjshop.com/?mod=wsjfooter">Buy Issues</a>
                    </li>
                    </ul>    
                </div>
            </div>
        </div>
        <div className="footer_icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fas fa-podcast"></i>
            <i className="fab fa-snapchat-ghost"></i>
            <div className="google_play"></div>
            <div className="app_store"></div>
        </div>
        <div className="product_sector">

        </div>
    </div>
  );
};

export default Footer;
