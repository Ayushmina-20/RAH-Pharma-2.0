import React from 'react'
import '../styles/latest.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function latest() {
    return (
        <div className="latest">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7">
                        <div className="section-title pos-rel mb-75">
                            <div className="latest-text pos-rel">
                                <h1>Blogs & Newsletters</h1>
                                <h5>Get access to recent health related tips and precautions along with healthcare articles and medical journals. Everything at one place.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                        <div className="section-button text-right pt-80">
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="latest-news-box mb-30">
                            <div className="latest-news-thumb mb-35">
                            <img src={require('../img/rah-assets/Rectangle 607.png').default} alt=""/>
                            </div>
                            <div className="latest-news-content">
                                <div className="news-meta mb-10">
                                    <h3>DR. RHITU CHATTERJEE</h3>
                                </div>
                                <h2><a href="news-details.html">Why swat is a human superpower?</a></h2>
                                <p>Sweat is 99% water combined with a tiny amount of salt proteins carbohydrates and urea says the salt, proteins, carbohydrates...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="latest-news-box mb-30">
                            <div className="latest-news-thumb mb-35">
                                <img src={require('../img/rah-assets/Rectangle 708.png').default} alt=""/>
                            </div>
                            <div className="latest-news-content">
                                <div className="news-meta mb-10">
                                    <h3>DR. JON HAMILTON</h3>
                                </div>
                                <h2><a href="news-details.html">Alzeimer's Drugs comes with queries</a></h2>
                                <p>The Alzheimer's drug Aduhelm, doctors are still debating how, and whether, it should be used. Doctors say they have no plans to...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12">
                        <div className="recent-news-list mb-120">
                            <div className="latest-news-content singl-news news-border-bottom">
                                <h2><a href="news-details.html">COVID symptoms may linger in some patients.</a></h2>
                                <span className="meta-date"><i class="far fa-calendar"></i>23rd Jan 2019</span>
                                <span className="meta-date"><a href="#"><i class="far fa-comments"></i>33 Comments</a></span>
                            </div>
                            <div className="latest-news-content singl-news news-border-bottom">
                                <h2><a href="news-details.html">Proposed law would end health insurance</a></h2>
                                <span className="meta-date"><i class="far fa-calendar"></i>23rd Jan 2019</span>
                                <span className="meta-date"><a href="#"><i class="far fa-comments"></i>33 Comments</a></span>
                            </div>
                            <div className="latest-news-content singl-news ">
                                <h2><a href="news-details.html">Latest science shows about breakthrough</a></h2>
                                <span className="meta-date"><i class="far fa-calendar"></i>23rd Jan 2019</span>
                                <span className="meta-date"><a href="#"><i class="far fa-comments"></i>33 Comments</a></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <div className="mk-call-btn f-right mb-30">
                            <a data-animation="fadeInLeft" data-delay=".6s" href="contact.html" className="btn btn-icon btn-icon-green ml-0 make_call"><span><img src={require('../img/rah-assets/phonecall Green.png').default} alt="" /></span>make call</a>
                        </div> */}
        </div>
    )
}

export default latest
