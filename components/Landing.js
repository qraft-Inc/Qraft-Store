import Head from 'next/head';
export default function Landing() {
      return (
        <div>
       
       
          {/* Add your site or application content here */}
          <header className="header sticky-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="left">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="logo">
                          <h2>Qraft Store</h2>
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder="Book a local artist" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <i className="fas fa-search" aria-hidden="true" />
                          <div className="input-group-append">
                            <button className="search btn btn-outline-secondary" type="button">Search</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right">
                    <nav className="header-right-menu">
                      <ul>
                        <li><a className="active" href="#">Qraft Store Pro</a></li>
                        <li><a href="#"><i className="fas fa-flag-usa" />English</a></li>
                        <li><a href="#">Become a Seller</a></li>
                        <li><a href="#">Sing In</a></li>
                        <li><a className="join" href="#">join</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <nav className="header-bottom-menu">
                <ul>
                  <li><a href="#">Music &amp; Dance</a></li>
                  <li><a href="#">Photography</a></li>
                  <li><a href="#">Painting &amp; Drawing</a></li>
                  <li><a href="#">Literature &amp; Poetry</a></li>
                  <li><a href="#">Videography</a></li>
                </ul>
              </nav>
            </div>
          </header>
          <section className="slider">
            <div className="container">      
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider-left">
                    <h2>Book an independent local artist</h2>
                    <div className="input-group mb-3">
                      <input type="text" className="slider-input form-control" placeholder="Try poet " aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <i className="fas fa-search" aria-hidden="true" />
                      <div className="input-group-append">
                        <button className="search btn btn-outline-secondary" type="button">Search</button>
                      </div>
                    </div>
                    <nav className="slider-left-menu">
                      <ul>
                        <li>Popular :</li>
                        <li><a href="#">Live Band</a></li>
                        <li><a href="#">Soul Singer</a></li>
                        <li><a href="#">Photographer</a></li>
                        <li><a href="#">Painting &amp; Drawing</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="slider-right">
                    <img src="back2.png" alt="" />
                    <div className="star">
                      <span><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></span>
                      <p>Mathew, writer and proofreader</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recangle">
              </div>
            </div>
          </section>
          <section className="slider-bottom text-center">
            <div className="container">
              <nav className="slider-bottom-menu">
                <ul>
                  <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.a1eeefc.png" alt="" /></li>
                  <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png" alt="" /></li>
                  <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/mit.50c4381.png" alt="" /></li>
                  <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png" alt="" /></li>
                  <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png" alt="" /></li>
                  <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/intuit.6e468f0.png" alt="" /></li>
                  <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png" alt="" /></li>
                </ul>
              </nav>
            </div>
          </section>
          <section className="service">
            <div className="container-fluid">
              <div className="service-cont">
                <h2>Popular Gigs</h2>
              </div>
              <div className="service-boxes ml-3">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <article className="s-b-x-cont">
                        <p>Build Your Brand</p>
                        <h4>Logo Design</h4>
                      </article>
                      <picture className="service-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_250,dpr_1.0/general_assets/logged_out_homepage/assets/sub_category/logodesign@2x.jpg" alt="" />
                      </picture>
                      <article className="s-b-x-cont-2">
                        <p>Customize your site</p>
                        <h4>Wordpress</h4>
                      </article>
                      <picture className="service-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_250,dpr_1.0/general_assets/logged_out_homepage/assets/sub_category/wordpress@2x.jpg" alt="" />
                      </picture>
                      <article className="s-b-x-cont-3">
                        <p>Share your message</p>
                        <h4>Voice Over</h4>
                      </article>
                      <picture className="service-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_250,dpr_1.0/general_assets/logged_out_homepage/assets/sub_category/voiceover@2x.jpg" alt="" />
                      </picture>
                      <article className="s-b-x-cont-4">
                        <p>Engage your audience</p>
                        <h4>Whiteboard</h4>
                      </article>
                      <picture className="service-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_250,dpr_1.0/general_assets/logged_out_homepage/assets/sub_category/whiteboard@2x.jpg" alt="" />
                      </picture>
                      <article className="s-b-x-cont-5">
                        <p>Reach more customers</p>
                        <h4>Social Media</h4>
                      </article>
                      <picture className="service-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_250,dpr_1.0/general_assets/logged_out_homepage/assets/sub_category/social@2x.jpg" alt="" />
                      </picture>
                    </div>
                    <div className="carousel-item">
                      <article className="s-b-x-cont">
                        <p>Unlock growth online</p>
                        <h4>seo</h4>
                      </article>
                      <picture className="service-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_250,dpr_1.0/general_assets/logged_out_homepage/assets/sub_category/seo@2x.jpg" alt="" />
                      </picture>
                      <article className="s-b-x-cont-2">
                        <p>Color your dreams</p>
                        <h4>IIIustration</h4>
                      </article>
                      <picture className="service-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_250,dpr_1.0/general_assets/logged_out_homepage/assets/sub_category/illustration2x.jpg" alt="" />
                      </picture>
                      <article className="s-b-x-cont-3">
                        <p>Go global</p>
                        <h4>Translation</h4>
                      </article>
                      <picture className="service-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_250,dpr_1.0/general_assets/logged_out_homepage/assets/sub_category/translation2x.jpg" alt="" />
                      </picture>
                      <article className="s-b-x-cont-4">
                        <p>Learn your business</p>
                        <h4>Data entry</h4>
                      </article>
                      <picture className="service-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_250,dpr_1.0/general_assets/logged_out_homepage/assets/sub_category/data-entry2x.jpg" alt="" />
                      </picture>
                      <article className="s-b-x-cont-5">
                        <p>Showcase your story</p>
                        <h4>Book covers</h4>
                      </article>
                      <picture className="service-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_250,dpr_1.0/general_assets/logged_out_homepage/assets/sub_category/books2x.jpg" alt="" />
                      </picture>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>        
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>  
            </div>
          </section>
          <section className="work">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="work-left">
                    <div className="part">
                      <h2>Get work done faster, with confidence</h2>
                      <span><i className="far fa-check-circle mr-2" />Payment protection, guaranteed</span>
                      <p>Payment is released to the freelancer once you’re pleased and approve <br /> the work you get.</p>
                    </div>
                    <div className="part">
                      <span><i className="far fa-check-circle mr-2" />Payment protection, guaranteed</span>
                      <p>Payment is released to the freelancer once you’re pleased and approve <br /> the work you get.</p>
                    </div>
                    <div className="part">
                      <span><i className="far fa-check-circle mr-2" />Payment protection, guaranteed</span>
                      <p>Payment is released to the freelancer once you’re pleased and approve <br /> the work you get.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="work-right">
                    <picture className="work-right-img">
                      <img style={{width: '650px'}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/general_assets/logged_out_homepage/assets/selling_proposition/1400-selling-proposition-2x.png" alt="" />
                    </picture>
                    <article className="video-play">
                      <span><i className="fas fa-play" /></span>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="market">
            <article className="market-content">
              <h4>Explore the marketplace</h4>
            </article>
            <div className="market-boxes text-center">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="market-box">
                      <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
                      <h5 />
                      <p>Graphics &amp; Design</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="market-box">
                      <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg" alt="" />
                      <h5 />
                      <p>Digital Marketing</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="market-box">
                      <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg" alt="" />
                      <h5 />
                      <p>Writing &amp; Translation</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="market-box">
                      <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg" alt="" />
                      <h5 />
                      <p>Video &amp; Animation</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="market-box">
                      <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg" alt="" />
                      <h5 />
                      <p>Music &amp; Audio</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="market-box">
                      <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg" alt="" />
                      <h5 />
                      <p>Programming &amp; Tech</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="market-box">
                      <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg" alt="" />
                      <h5 />
                      <p>Business</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="market-box">
                      <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg" alt="" />
                      <h5 />
                      <p>Lifestyle</p>
                    </div>
                  </div>
                </div>
              </div>   
            </div>
          </section>
          <section className="project">
            <article className="project-content">
              <h2>Get inspired with projects made by our freelancers</h2>
            </article>
            <div className="container-fluid">
              <div className="project-boxes">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="project-box">
                      <picture className="p-b-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/general_assets/logged_out_homepage/assets/made_on_fiverr/carmelacaldart0.jpg" alt="" />
                      </picture>
                      <article className="p-b-cont">
                        <span><a href="#"><img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/bc8d9342a981e3e7f42c4c3e15b30e7d-1555596582200/4754a943-ba33-4953-b84a-033fd3d36350.jpg" alt="" />IIIustration <p>camelacaldarto</p></a></span>
                      </article>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="project-box">
                      <picture className="p-b-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/general_assets/logged_out_homepage/assets/made_on_fiverr/spickex.jpg" alt="" />
                      </picture>
                      <article className="p-b-cont">
                        <span><a href="#"><img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/22711136/original/fiverr_profile.jpg" alt="" />Flyer Design <p>by spickex</p></a></span>
                      </article>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="project-box">
                      <picture className="p-b-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/general_assets/logged_out_homepage/assets/made_on_fiverr/artsi3d.png" alt="" />
                      </picture>
                      <article className="p-b-cont">
                        <span><a href="#"><img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a832de173d05a95cd49903ba5b7dad13-1533185904165/f601e668-0887-4bf6-be52-ff28be45a1e3.jpg" alt="" />3 d Models &amp; Product Design <p>by artsi3d</p></a></span>
                      </article>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="project-box">
                      <picture className="p-b-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/general_assets/logged_out_homepage/assets/made_on_fiverr/dvincentgomes.jpg" alt="" />
                      </picture>
                      <article className="p-b-cont">
                        <span><a href="#"><img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/01b6ce5dc58e320d3e1e27d9c6a10143-1556123965312/c675e6f4-303e-4fab-9854-314669dda095.jpg" alt="" />IIIustration <p>dvincentgomes</p></a></span>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testi">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="work-right">
                    <picture className="work-right-img">
                      <img style={{width: '650px'}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/general_assets/logged_out_homepage/assets/testimonials/1440-haerfest-2x.jpg" alt="" />
                    </picture>
                    <article className="video-play">
                      <span><i className="fas fa-play" /></span>
                    </article>
                  </div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className="testi-right">
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptate corporis maiores, quaerat voluptatibus vitae provident veniam <br /> cumque voluptates dolorum voluptas! Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. Ullam sint sapiente <br /> nesciunt eos vel eligendi in minus aliquid <br /> laboriosam deleniti?"</p>
                    <h5>Tim and Dan Joo, Co-funders</h5>
                    <span>HERFEST</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="fiver-pro">
            <div className="container-fluid">
              <div className="pro-img">
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/general_assets/logged_out_homepage/assets/pro/pro_banner_1400px-2x.jpg" alt="" />
              </div>
              <div className="pro-content">
                <h4>Try Qraft Store pro</h4>
                <h2>Unrivaled experts, trusted by the world's <br /> biggest brands</h2>
                <a href="#">Explore Pro Gigs</a>
              </div>
            </div>
          </section>
          <section className="tools">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="work-left">
                    <div className="part">
                      <h2>Give your brand the right tools</h2>
                      <span><i className="far fa-check-circle mr-2" />Full transparency</span>
                      <p>A new shared dashboard allows you to track your team's activity, so that <br /> everyone is always in sync.</p>
                    </div>
                    <div className="part">
                      <span><i className="far fa-check-circle mr-2" />VIP customer support</span>
                      <p>Quick response time and upgraded support solutions will help you to get <br /> what you need, when you need it.</p>
                    </div>
                    <div className="part">
                      <span><i className="far fa-check-circle mr-2" />Improved billing options</span>
                      <p>One team - one payment method. You can now add a card on file that every <br /> team member can use.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tools-right">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/general_assets/logged_out_homepage/assets/business_tools/ipadX2.gif" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="guide">
            <div className="container-fluid">
              <h2>Qraft Store guides</h2>
              <div className="row">
                <div className="guide-boxes">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="guide-box">
                        <div className="g-b-img">
                          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/general_assets/logged_out_homepage/assets/fiverr_guides/1440-create-website-2x.jpg" alt="" />
                        </div>
                        <div className="g-b-cont">
                          <h4>Start an online business and work from home</h4>
                          <p>A complete guide to starting a small business online</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="guide-box">
                        <div className="g-b-img">
                          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/general_assets/logged_out_homepage/assets/fiverr_guides/1440-digital-marketing-2x.jpg" alt="" />
                        </div>
                        <div className="g-b-cont">
                          <h4>Digital marketing made easy</h4>
                          <p>A practical guide to understand what is digital marketing</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="guide-box">
                        <div className="g-b-img">
                          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/general_assets/logged_out_homepage/assets/fiverr_guides/1440-strong-brand-2x.jpg" alt="" />
                        </div>
                        <div className="g-b-cont">
                          <h4>Create a logo for your business</h4>
                          <p>A step-by-step guide to create a memorable business logo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="get-start">
            <div className="container-fluid">
              <div className="start-img">
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/general_assets/logged_out_homepage/assets/signup/1440-cta2x.jpg" alt="" />
              </div>
              <div className="get-start-cont text-center">
                <h3>Book independent artists for your brand today</h3>
                <p>We've got you covered for all your brand needs</p>
                <a href="#">Get Started</a>
              </div>
            </div>
          </section>
          <footer className="footer-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="f-t-left">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="f-r-box">
                          <h4>Categories</h4>
                          <nav>
                            <ul>
                              <li><a href="#">Graphics &amp; Design</a></li>
                              <li><a href="#">Digital Marketing</a></li>
                              <li><a href="#">Writing &amp; Translation</a></li>
                              <li><a href="#">Video &amp; Animation</a></li>
                              <li><a href="#">Music &amp; Audio</a></li>
                              <li><a href="#">Programming &amp; Tech</a></li>
                              <li><a href="#">Business</a></li>
                              <li><a href="#">Lifestyle</a></li>
                              <li><a href="#">Sitemap</a></li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="f-r-box">
                          <h4>About</h4>
                          <nav>
                            <ul>
                              <li><a href="#">Careers</a></li>
                              <li><a href="#">Press &amp; News</a></li>
                              <li><a href="#">Partnerships</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                              <li><a href="#">Terms of Service</a></li>
                              <li><a href="#">Intellectual Property Claims</a></li>
                              <li><a href="#">Investor Relations</a></li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="f-r-box">
                          <h4>Support</h4>
                          <nav>
                            <ul>
                              <li><a href="#">Help &amp; Support</a></li>
                              <li><a href="#">Trust &amp; Safety</a></li>
                              <li><a href="#">Selling on Fiverr</a></li>
                              <li><a href="#">Buying on Fiverr</a></li>                 
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="f-t-right">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="f-r-box">
                          <h4>Community</h4>
                          <nav>
                            <ul>
                              <li><a href="#">Events</a></li>
                              <li><a href="#">Blog</a></li>
                              <li><a href="#">Forum</a></li>
                              <li><a href="#">Community Standards</a></li>                 
                              <li><a href="#">Podcast</a></li>                 
                              <li><a href="#">Affiliates</a></li>                 
                              <li><a href="#">PodInvite a Friendcast</a></li>                 
                              <li><a href="#">Become a Seller</a></li>                 
                              <li><a href="#">Fiverr Elevate <br /> <small>Exclusive Benefits</small></a></li>                                 
                            </ul>
                          </nav>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="f-r-box">
                          <h4>More From Qraft Store</h4>
                          <nav>
                            <ul>
                              <li><a href="#">Qraft Store Pro</a></li>
                              <li><a href="#">Qraft Store Studios</a></li>
                              <li><a href="#">Qraft Store Logo Maker</a></li>
                              <li><a href="#">Qraft Store Guides</a></li>                 
                              <li><a href="#">Get Inspired</a></li>                 
                              <li><a href="#">ClearVoice <br />
                                  <small>Content Marketing</small> </a></li>                 
                              <li><a href="#">AND CO <br />
                                  <small>Invoice Software</small> </a></li>                 
                              <li><a href="#">Learn <br />
                                  <small>Online Courses</small> </a></li>                                                                      
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <footer className="footer-bottom">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="f-b-left">
                    <p><span>Qraft Store</span>© Qraft Store. 2022</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="f-b-right">
                    <nav>
                      <ul>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                        <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                        <li><a href="#"><span><i className="fas fa-globe" /></span>English</a></li>
                        <li><a href="#">$USD</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* Google Analytics: change UA-XXXXX-Y to be your site's ID. */}
        </div>
      );
    }
  ;

