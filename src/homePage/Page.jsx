import React from "react";
import "./Page.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Page() {
  return (
    <>
      <div className="container-fluid">
        <section className="hero">
          <section className="trade">
            <h4>Trade-in-offer</h4>
            <h2>Super value deals</h2>
            <h1>On all products </h1>
            <p className="save">Save more with coupons & up to 70% off!</p>
            <button>Shop Now</button>
          </section>
          <img
            className="keep"
            src={require("../images/IMG-20230713-WA0025.jpg")}
            alt=""
          />
        </section>

        <section id="feature" className="section-p1">
          <div className="fe-box">
            <img src={require("../feature/freeShipping.png")} alt="shipping" />
            <h6>Free Shipping</h6>
          </div>

          <div className="fe-box">
            <img src={require("../feature/online-order.jpg")} alt="order" />
            <h6>Online Order</h6>
          </div>
          <div className="fe-box">
            <img src={require("../feature/rx-contact.jpg")} alt="rx" />
            <h6>Contact Pharmacist</h6>
          </div>
          <div className="fe-box">
            <img src={require("../feature/promotion.jpg")} alt="promotion" />
            <h6>Promotion</h6>
          </div>
          <div className="fe-box">
            <img src={require("../feature/happy-sell.jpg")} alt="sell" />
            <h6>Happy Sell</h6>
          </div>
          <div className="fe-box">
            <img src={require("../feature/support.png")} alt="support" />
            <h6>F24/7 Support</h6>
          </div>
        </section>

        <section id="product1" className="section-p1">
          <h2>Featured Products</h2>
          <p>Special Hair Skin & Nails Beauty Supplement</p>
          <div className="pro-container">
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="banner" className="section-m1">
          <h4>Consulting Services</h4>
          <h2>
            Up to <span>70% off</span> - All Consultaion & <span>5% off</span> -
            All Supplement
          </h2>
          <button className="normal">Explore More</button>
        </section>

        <section id="product1" className="section-p1">
          <h2>New Arrivals</h2>
          <p>Vitalbiotics Supplement for Men & Women</p>
          <div className="pro-container">
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
            <div className="pro">
              <img
                src="https://via.placeholder.com/150" // Placeholder image URL
                alt="Beauty complex"
              />
              <div className="des">
                <span>reviveActive</span>
                <h5>Beauty complex</h5>
                <div className="star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart4  cart"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="sm-banner" className="section-p1">
          <div className="banner-box">
            <h4>creazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>...g respect be the man of your dreams</span>
            <button className="white">Learn More</button>
          </div>
          <div className="banner-box banner-box2">
            <h4>creazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>...g respect be the man of your dreams</span>
            <button className="white">Learn More</button>
          </div>
        </section>
      </div>

      <section id="banner3" className="section-p1">
        <div className="banner-box banner-box3">
          <h2>creazy deals</h2>
          <h3>buy 1 get 1 free</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>creazy deals</h2>
          <h3>buy 1 get 1 free</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>creazy deals</h2>
          <h3>buy 1 get 1 free</h3>
        </div>
      </section>

      <section id="newsletter" className="section-p1 sm-banner ">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
          Get E-mail update about our latest supplement and <span>special offers.</span></p>
        </div>
        <div className="form">
          <input type="text" id="enter" placeholder="Your email address"/>
          <button>Sign Up</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img className="logo1" src={require('../navBar/logo-ski.jpg')} alt="logo" />
          <h4>Contact</h4>
          <p> <strong>Address:</strong>183A Akerele Extention, Shitta Surulere Lagos.</p>
          <p> <strong>Phone:</strong> +234 8057 510 404 / (+234) 8182179491 </p>
          <p> <strong>Hours:</strong> 8:00AM - 10:00PM, Mon - Sat , Sun 12:00PM - 10:00PM</p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter-x"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img  src={require("../images/apple-store.jpg")} alt="app store" />
            <img src={require("../feature/google-play.jpg")} alt="google play" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="https://via.placeholder.com/150" alt="paymet" />
        </div>
        <div className="copyright">
          <p>  <i class="bi bi-c-circle"></i>  2024, Dantech etc - React Ecommerce</p>
        </div>
      </footer>
      
    </>
  );
}

export default Page;
