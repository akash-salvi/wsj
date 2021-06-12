import {
  Container,
  Button,
  Collapse,
  Row,
  Col,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container fluid className="body">
      <div className="top_bar">
        <p>
          <span
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            style={{fontSize:"13px",fontWeight:"500"}}
          >
            <span className="dropButton">Dow Jones, a News Corp company <span aria-label="increase">▼</span></span>
          </span>
          <Collapse in={open}>
            <div id="example-collapse-text" className="details">
              <Row className="rowstyle">
                <Col xs={3} style={{fontSize:"12px"}}>
                  News Corp is a global, diversified media and information services company focused on creating and distributing authoritative and engaging content and other products and services.
                </Col>
                <Col xs={5}>

                <h5 style={{fontSize:"15px"}}>Dow Jones</h5>
                    <Row>
                      <Col>
                      <ul className="items">
                          <li role="none"><a role="menuitem" href="https://www.barrons.com">Barron's</a></li>
                          <li role="none"><a role="menuitem" href="http://bigcharts.marketwatch.com">BigCharts</a></li>
                          <li role="none"><a role="menuitem" href="https://newscorp.com/business/dow-jones/">Dow Jones Businesses</a></li>
                          <li role="none"><a role="menuitem" href="https://www.dowjones.com/">Dow Jones Newswires</a></li>
                          <li role="none"><a role="menuitem"
                                  href="https://global.factiva.com/factivalogin/login.asp?productname=global">Factiva</a></li>
                          <li role="none"><a role="menuitem" href="https://www.fnlondon.com/">Financial News</a></li>
                          <li role="none"><a role="menuitem" href="https://www.mansionglobal.com/">Mansion Global</a></li>
                          <li role="none"><a role="menuitem" href="https://www.marketwatch.com">MarketWatch</a></li>
                      </ul>
                      </Col>
                      <Col>
                      <ul class="style--hat-col--30JPtQ4p ">
                          <li role="none"><a role="menuitem" href="https://www.getnewsmart.com/">Newsmart</a></li>
                          <li role="none"><a role="menuitem" href="https://newsplus.wsj.com">NewsPlus</a></li>
                          <li role="none"><a role="menuitem" href="https://djlogin.dowjones.com/login.asp?productname=rnc">Risk &amp;
                                  Compliance</a></li>
                          <li role="none"><a role="menuitem" href="https://conferences.wsj.com/">WSJ Live</a></li>
                          <li role="none"><a role="menuitem" href="https://www.wsj.com/pro/centralbanking">WSJ Pro</a></li>
                          <li role="none"><a role="menuitem" href="https://www.wsj.com/video/">WSJ Video</a></li>
                          <li role="none"><a role="menuitem" href="https://www.wsj.com">WSJ.com</a></li>
                      </ul>
                      </Col>
                    </Row>
                </Col>
                <Col xs={5}>
                
                </Col>
              </Row>
            </div>            
          </Collapse>
        </p>
        <p style={{fontSize:"13px",fontWeight:"500",paddingTop:"3px"}}>
          <a href="https://www.wsj.com/about-us?mod=wsjcorphat">About WSJ</a>
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
              <span>-0/32  Yield</span>
              <span>1.443%</span>
              <span aria-label="increase">▲</span>
          </a>
        </p>
        <p className="next_bar_p">
          <a href="https://www.wsj.com/market-data/quotes/futures/US/Crude Oil - Electronic?mod=mdstrip">
              <span>Crude Oil</span>
              <span>70.43  </span>
              <span style={{color:"#ff352d"}}>0.20% </span>
              <span aria-label="increase" style={{color:"#ff352d"}}>▼</span>
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
        <div style={{height:"75px"}}>
          <h1 className="heading">
            <a href="https://www.wsj.com/?mod=wsjheader_logo"></a>
          </h1>
        </div>
        <div className="links">
            <div className="links_items">
              <a href="https://subscribe.wsj.com/hpheaderlink" rel="nofollow" style={{borderRight:"1px solid #ccc"}}>Subscribe</a>
              <a href="https://accounts.wsj.com/login?target=https%3A%2F%2Fwww.wsj.com%2F">Sign In</a>
            </div>
        </div>        
      </div>
    
      <div className="subtitle">
        <div>
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
        <div>
          <a href="https://www.wsj.com/digital-print-edition?mod=wsjheader">Print Edition</a>
        </div>
        <div>
          <a href="https://www.wsj.com/video?mod=wsjheader">Video</a>
        </div>
        <div>
          <a href="https://www.wsj.com/podcasts?mod=wsjheader">Podcasts</a>
        </div>
        <div style={{border:"0px",color:"#0274B6"}}>
          <a href="https://www.wsj.com/news/latest-headlines?mod=wsjheader">Latest Headlines</a>
        </div>
      </div>
    
      <div className="bottom_bar">
          <div>
            Home
          </div>
          <div>
            World
          </div>
          <div>
            U.S.
          </div>
          <div>
            Politics
          </div>
          <div>
            Economy
          </div>
          <div>
            Business
          </div>
          <div>
            Tech
          </div>
          <div>
            Markets
          </div>
          <div>
            Opinion
          </div>
          <div>
            Life & Arts
          </div>
          <div>
            Real Estate
          </div>
          <div>
            WSJ.Magazine
          </div>
          <div>
            Sports
          </div>
      </div>
      <hr />
    </Container>
  );
};

export default Navbar;
