import {
  Container,
  Button,
  Collapse,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container fluid className="nav_body">
      <div className="top_bar">
        <p>
          <span
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <span className="first_dropButton">
              Dow Jones, a News Corp company{" "}
              <span aria-label="increase">▼</span>
            </span>
          </span>
          <Collapse in={open}>
            <div id="example-collapse-text" className="details">
              <Row className="rowstyle">
                <Col xs={3} style={{ fontSize: "12px" }}>
                  News Corp is a global, diversified media and information
                  services company focused on creating and distributing
                  authoritative and engaging content and other products and
                  services.
                </Col>
                <Col xs={5}>
                  <h5 style={{ fontSize: "15px" }}>Dow Jones</h5>
                  <Row>
                    <Col>
                      <ul className="items">
                        <li role="none">
                          <a role="menuitem" href="https://www.barrons.com">
                            Barron's
                          </a>
                        </li>
                        <li role="none">
                          <a
                            role="menuitem"
                            href="http://bigcharts.marketwatch.com"
                          >
                            BigCharts
                          </a>
                        </li>
                        <li role="none">
                          <a
                            role="menuitem"
                            href="https://newscorp.com/business/dow-jones/"
                          >
                            Dow Jones Businesses
                          </a>
                        </li>
                        <li role="none">
                          <a role="menuitem" href="https://www.dowjones.com/">
                            Dow Jones Newswires
                          </a>
                        </li>
                        <li role="none">
                          <a
                            role="menuitem"
                            href="https://global.factiva.com/factivalogin/login.asp?productname=global"
                          >
                            Factiva
                          </a>
                        </li>
                        <li role="none">
                          <a role="menuitem" href="https://www.fnlondon.com/">
                            Financial News
                          </a>
                        </li>
                        <li role="none">
                          <a
                            role="menuitem"
                            href="https://www.mansionglobal.com/"
                          >
                            Mansion Global
                          </a>
                        </li>
                        <li role="none">
                          <a role="menuitem" href="https://www.marketwatch.com">
                            MarketWatch
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col>
                      <ul class="items">
                        <li role="none">
                          <a
                            role="menuitem"
                            href="https://www.getnewsmart.com/"
                          >
                            Newsmart
                          </a>
                        </li>
                        <li role="none">
                          <a role="menuitem" href="https://newsplus.wsj.com">
                            NewsPlus
                          </a>
                        </li>
                        <li role="none">
                          <a
                            role="menuitem"
                            href="https://djlogin.dowjones.com/login.asp?productname=rnc"
                          >
                            Risk &amp; Compliance
                          </a>
                        </li>
                        <li role="none">
                          <a
                            role="menuitem"
                            href="https://conferences.wsj.com/"
                          >
                            WSJ Live
                          </a>
                        </li>
                        <li role="none">
                          <a
                            role="menuitem"
                            href="https://www.wsj.com/pro/centralbanking"
                          >
                            WSJ Pro
                          </a>
                        </li>
                        <li role="none">
                          <a role="menuitem" href="https://www.wsj.com/video/">
                            WSJ Video
                          </a>
                        </li>
                        <li role="none">
                          <a role="menuitem" href="https://www.wsj.com">
                            WSJ.com
                          </a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
                <Col xs={5}></Col>
              </Row>
            </div>
          </Collapse>
        </p>
        <p>
          <a
            href="https://www.wsj.com/about-us?mod=wsjcorphat"
            style={{ fontSize: "12px", fontWeight: "500", paddingTop: "3px" }}
          >
            About WSJ
          </a>
        </p>
      </div>

      <div className="next_bar">
        <p className="next_bar_p">
          <a href="https://www.wsj.com/market-data/quotes/futures/US/DJIA Futures?mod=mdstrip">
            <span>DJIA Futures</span>
            <span>34427 </span>
            <span>0.21%</span>
            <span aria-label="increase">▲</span>
          </a>
        </p>
        <p className="next_bar_p">
          <a href="https://www.wsj.com/market-data/quotes/futures/US/SP 500 Futures?mod=mdstrip">
            <span>S&amp;P 500 F</span>
            <span>4235.25 </span>
            <span>0.15%</span>
            <span aria-label="increase">▲</span>
          </a>
        </p>
        <p className="next_bar_p">
          <a href="https://www.wsj.com/market-data/quotes/index/XX/SXXP?mod=mdstrip">
            <span>Stoxx 600</span>
            <span>457.10 </span>
            <span>0.56% </span>
            <span aria-label="increase">▲</span>
          </a>
        </p>
        <p className="next_bar_p">
          <a href="https://www.wsj.com/market-data/quotes/bond/BX/TMUBMUSD10Y?mod=mdstrip">
            <span>U.S. 10 Yr</span>
            <span>-0/32 Yield</span>
            <span>1.443%</span>
            <span aria-label="increase">▲</span>
          </a>
        </p>
        <p className="next_bar_p">
          <a href="https://www.wsj.com/market-data/quotes/futures/US/Crude Oil - Electronic?mod=mdstrip">
            <span>Crude Oil</span>
            <span>70.43 </span>
            <span style={{ color: "#ff352d" }}>0.20% </span>
            <span aria-label="increase" style={{ color: "#ff352d" }}>
              ▼
            </span>
          </a>
        </p>
        <p className="next_bar_p">
          <a href="https://www.wsj.com/market-data/quotes/fx/EURUSD?mod=mdstrip">
            <span>Euro</span>
            <span>1.2130 </span>
            <span>0.38%</span>
            <span aria-label="increase">▲</span>
          </a>
        </p>
      </div>

      <div className="title">
        <div style={{ height: "75px" }}>
          <h1 className="heading">
            <a href="https://www.wsj.com/?mod=wsjheader_logo"></a>
          </h1>
        </div>
        <div className="links">
          <div className="links_items">
            <a
              href="https://subscribe.wsj.com/hpheaderlink"
              rel="nofollow"
              style={{ borderRight: "1px solid #ccc" }}
            >
              Subscribe
            </a>
            <a href="https://accounts.wsj.com/login?target=https%3A%2F%2Fwww.wsj.com%2F">
              Sign In
            </a>
          </div>
        </div>
      </div>

      <div className="subtitle">
        <div className="border_box">
          <Dropdown style={{ height: "12px" }}>
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
        <div>
          <a href="https://www.wsj.com/digital-print-edition?mod=wsjheader">
            Print Edition
          </a>
        </div>
        <div>
          <a href="https://www.wsj.com/video?mod=wsjheader">Video</a>
        </div>
        <div>
          <a href="https://www.wsj.com/podcasts?mod=wsjheader">Podcasts</a>
        </div>
        <div style={{ border: "0px", color: "#0274B6" }}>
          <a href="https://www.wsj.com/news/latest-headlines?mod=wsjheader">
            Latest Headlines
          </a>
        </div>
      </div>

      <div className="bottom_bar_loc">
        <div className="bottom_bar">
          <div className="home_link">Home</div>
          <div className="bottom_bar_box">
            <div className="bottom_bar_name">World</div>
            <div className="bottom_bar_content">
              <div className="bottom_bar_content_inner">
                <div className="bottom_bar_lists">
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li>Regions</li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/africa-news?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Africa
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/asia-news?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Asia
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/canada-news?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Canada
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/china-news?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            China
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/europe-news?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Europe
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/latin-america-news?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Latin America
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/middle-east-news?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Middle East
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Sections
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/economy?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Economy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box last_one">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          More
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/video/browse/news/world-news?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            World Video
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_bar_box">
            <div className="bottom_bar_name">U.S.</div>
            <div className="bottom_bar_content">
              <div className="bottom_bar_content_inner">
                <div className="bottom_bar_lists">
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Sections
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/economy?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Economy
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/law-legal?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Law
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/us/greater-new-york?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            New York
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/politics?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Politics
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box last_one">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          More
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/noted?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            WSJ Noted.
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/video/browse/news/us-news?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            U.S. Video
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/podcasts/latest/wsj-whats-news?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            What's News Podcast
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_bar_box">
            <div className="bottom_bar_name">Politics</div>
            <div className="bottom_bar_content">
              <div className="bottom_bar_content_inner">
                <div className="bottom_bar_lists">
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Sections
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/capital-journal?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Capital Journal
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          More
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/video/browse/news/politics-and-campaign?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Politics Video
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box last_one">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Columns
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/gerald-f-seib?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Gerald Seib
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://blogs.wsj.com/washwire/?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Washington Wire
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_bar_box">
            <div className="bottom_bar_name">Economy</div>
            <div className="bottom_bar_content">
              <div className="bottom_bar_content_inner">
                <div className="bottom_bar_lists">
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          WSJ Pro
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/bankruptcy?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Bankruptcy
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/centralbanking?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Central Banking
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/privateequity?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Private Equity
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/strategic-intelligence?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Strategic Intelligence
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/venturecapital?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Venture Capital
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          More
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/graphics/econsurvey/?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Economic Forecasting Survey
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/video/browse/business/economy?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Economy Video
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box last_one">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Sections
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/capital-journal?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Capital Account
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_bar_box">
            <div className="bottom_bar_name">Business</div>
            <div className="bottom_bar_content">
              <div className="bottom_bar_content_inner">
                <div className="bottom_bar_lists">
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="none"
                        >
                          Sections
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/management?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Management
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/tech/future-of-everything?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            The Future of Everything
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/obituaries?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Obituaries
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/technology?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Tech/WSJ.D
                          </a>
                        </li>
                      </ul>

                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="none"
                        >
                          Industries
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/defense-aerospace?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Aerospace &amp; Defense
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/transportation?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Autos &amp; Transportation
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/markets/real-estate-commercial?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Commercial Real Estate
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/consumer-products?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Consumer Products
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/energy-oil-gas?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Energy
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/small-business-marketing?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Entrepreneurship
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/financial-services?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Financial Services
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/food-tobacco?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Food &amp; Services
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/health-industry?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Health Care
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="none"
                        ></li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/hotels-casinos?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Hospitality
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/law-legal?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Law
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/industrial-services?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Manufacturing
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/media-marketing?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Media &amp; Marketing
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/natural-resources?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Natural Resources
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/business/retail-industry?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Retail
                          </a>
                        </li>
                      </ul>

                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="none"
                        >
                          C-Suite
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/cfo-journal?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            CFO Journal
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/cio-journal?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            CIO Journal
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/cmo-today?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            CMO Today
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/logistics-report?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Logistics Report
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/risk-compliance-journal?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Risk &amp; Compliance
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/experience-report?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            The Experience Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box last_one">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="none"
                        >
                          Columns
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/heard-on-the-street?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Heard on the Street
                          </a>
                        </li>
                      </ul>

                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="none"
                        >
                          WSJ Pro
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/artificial-intelligence?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Artificial Intelligence
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/bankruptcy?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Bankruptcy
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/centralbanking?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Central Banking
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/cybersecurity?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Cybersecurity
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/privateequity?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Private Equity
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/strategic-intelligence?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Strategic Intelligence
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/sustainable-business?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Sustainable Business
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/pro/venturecapital?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Venture Capital
                          </a>
                        </li>
                      </ul>

                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="none"
                        >
                          More
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/video/browse/business?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Business Video
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/latest/journalreport?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Journal Report
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/podcasts/latest/wsj-whats-news?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Business Podcast
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_bar_box">
            <div className="bottom_bar_name">Tech</div>
            <div className="bottom_bar_content">
              <div className="bottom_bar_content_inner">
                <div className="bottom_bar_lists">
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Sections
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/cio-journal?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            CIO Journal
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/tech/future-of-everything?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            The Future of Everything
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Columns
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/christopher-mims?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Christopher Mims
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/joanna-stern?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Joanna Stern
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/julie-jargon?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Julie Jargon
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/nicole-nguyen?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Nicole Nguyen
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box last_one">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          More
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/video/browse/tech?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Tech Video
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/podcasts/latest/wsj-tech-news-briefing?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Tech Podcast
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_bar_box">
            <div className="bottom_bar_name">Markets</div>
            <div className="bottom_bar_content">
              <div className="bottom_bar_content_inner">
                <div className="bottom_bar_lists">
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Sections
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/markets/bonds?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Bonds
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/markets/real-estate-commercial?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Commercial Real Estate
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/markets/oil-gold-commodities-futures?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Commodities &amp; Futures
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/markets/stocks?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Stocks
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/personal-finance?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Personal Finance
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/questions/money?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            WSJ Money
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/streetwise?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Streetwise
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/the-intelligent-investor?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Intelligent Investor
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Columns
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/heard-on-the-street?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Heard on the Street
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/greg-ip?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Greg Ip
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/jason-zweig?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Jason Zweig
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/laura-saunders?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Laura Saunders
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/james-mackintosh?page=23?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            James Mackintosh
                          </a>
                        </li>
                      </ul>

                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Market Data
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/market-data?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Market Data Home
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/market-data/stocks?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            U.S. Stocks
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/market-data/currencies?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Currencies
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/market-data/quotes/company-list/?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Companies
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/market-data/commodities?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Commodities
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/market-data/bonds?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Bonds &amp; Rates
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/market-data/mutualfunds-etfs?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Mutual Funds &amp; ETFs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box last_one">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          More
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/cfo-journal?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            CFO Journal
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/video/browse/business/markets?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Markets Video
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/podcasts/latest/wsj-your-money-matters?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Your Money Briefing Podcast
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/podcasts/latest/wsj-secrets-of-wealthy-women?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Secrets of Wealthy Women Podcast
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_bar_box">
            <div className="bottom_bar_name">Opinion</div>
            <div className="bottom_bar_content">
              <div className="bottom_bar_content_inner">
                <div className="bottom_bar_lists">
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Columnists
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="/news/author/7836?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Gerard Baker
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/sadanand-dhume?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Sadanand Dhume
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/james-freeman?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            James Freeman
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/william-a-galston?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            William A. Galston
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/daniel-henninger?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Daniel Henninger
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/holman-w-jenkinsjr?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Holman W. Jenkins
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/andy-kessler?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Andy Kessler
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/william-mcgurn?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            William McGurn
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/walter-russell-mead?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Walter Russell Mead
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/peggy-noonan?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Peggy Noonan
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/mary-anastasia-ogrady?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Mary Anastasia O'Grady
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/jason-l-riley?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Jason Riley
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/joseph-c-sternberg?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Joseph Sternberg
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/kimberley-a-strassel?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Kimberley A. Strassel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Reviews
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/bookshelf?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Books
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/film-review?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Film
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/television-review?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Television
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/theater-review?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Theater
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/art-review?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Art
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/masterpiece?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Masterpiece Series
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/music-review?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Music
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/dance-review?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Dance
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/opera-review?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Opera
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/exhibition-review?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Exhibition
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/cultural-commentary?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Cultural Commentary
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box last_one">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          More
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/review-outlook-u-s?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Editorials
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/commentary-u-s?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Commentary
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/future-view?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Future View
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/letters?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Letters to the Editor
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/the-saturday-interview?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            The Weekend Interview
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/podcasts/latest/wsj-opinion-potomac-watch?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Potomac Watch Podcast
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/podcasts/latest/wsj-opinion-foreign-edition?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Foreign Edition Podcast
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/video/browse/opinion?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Opinion Video
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/notable-quotable?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Notable &amp; Quotable
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_bar_box">
            <div className="bottom_bar_name">Life & Arts</div>
            <div className="bottom_bar_content">
              <div className="bottom_bar_content_inner">
                <div className="bottom_bar_lists">
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Sections
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/life-arts/arts?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Arts
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/life-arts/books?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Books
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/life-arts/automotive?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Cars
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/life-arts/food-cooking-drink?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Food &amp; Drink
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/life-arts/health-wellness?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Health
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/life-arts/ideas?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Ideas
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/science?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Science
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/life-arts/fashion?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Style &amp; Fashion
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/life-arts/travel?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Travel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box last_one">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          More
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/magazine?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            WSJ. Magazine
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/recipes?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            WSJ Recipes
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/puzzles?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            WSJ Puzzles
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/tech/future-of-everything?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            The Future of Everything
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/video/browse/life-culture?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Life Video
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/video/browse/life-culture/arts-and-entertainment?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Arts Video
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_bar_box">
            <div className="bottom_bar_name">Real Estate</div>
            <div className="bottom_bar_content">
              <div className="bottom_bar_content_inner">
                <div className="bottom_bar_lists">
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Sections
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/markets/real-estate-commercial?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Commercial Real Estate
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/houseoftheday?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            House of the Day
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box last_one">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          More
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/video/subject/mansion?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Real Estate Video
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_bar_box">
            <div className="bottom_bar_name">WSJ.Magazine</div>
            <div className="bottom_bar_content">
              <div className="bottom_bar_content_inner">
                <div className="bottom_bar_lists">
                  <div className="border_box last_one">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Sections
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/magazine/fashion?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Fashion
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/magazine/art-design?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Art &amp; Design
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/magazine/travel?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Travel
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/magazine/food?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Food
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/magazine/culture?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Culture
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_bar_box">
            <div className="bottom_bar_name">Sports</div>
            <div className="bottom_bar_content">
              <div className="bottom_bar_content_inner">
                <div className="bottom_bar_lists">
                  <div className="border_box">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Columns
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/author/jason-gay?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            Jason Gay
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border_box last_one">
                    <div className="bottom_bar_list">
                      <ul className="items">
                        <li
                          class="style--subsection-label--W2bDSJ7F"
                          role="presentation"
                          aria-hidden="true"
                        >
                          Sections
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/mlb?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            MLB
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/nba?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            NBA
                          </a>
                        </li>
                        <li
                          class="style--subsection-item--2nhXkq4_"
                          role="none"
                        >
                          <a
                            href="https://www.wsj.com/news/types/nfl?mod=nav_top_subsection"
                            role="menuitem"
                          >
                            NFL
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="nav_hr" />
    </Container>
  );
};

export default Navbar;
