import React from "react";
import './Page.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navber from '../navBar/navBar';

function Page() {
  return (
    <>
    <Navber />
     <div className='container-fluid'>
    
      <section className='hero'>
        <section>
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products </h1>
        <p className="save">Save more with coupons & up to 70% off!</p>
        <button>Shop Now</button>
        </section>
        <img src={require('../images/IMG-20230713-WA0025.jpg')} alt="" />
      </section>
    <section id="feature" className="section-p1">
      <div className="fe-box">
        <img src={require('../feature/freeShipping.png')} alt="shipping" />
        <h6>Free Shipping</h6>
      </div>

      <div className="fe-box">
        <img src={require('../feature/online-order.jpg')} alt="order" />
        <h6>Online Order</h6>
      </div>
      <div className="fe-box">
        <img src={require('../feature/rx-contact.jpg')} alt="rx" />
        <h6>Contact Pharmacist</h6>
      </div>
      <div className="fe-box">
        <img src={require('../feature/promotion.jpg')} alt="promtion" />
        <h6>Promotion</h6>
      </div>
      <div className="fe-box">
        <img src={require('../feature/happy-sell.jpg')} alt="sell" />
        <h6>Happy Sell</h6>
      </div>
      <div className="fe-box">
        <img src={require('../feature/support.png')} alt="support" />
        <h6>F24/7 Support</h6>
      </div>
    </section>
    <section id="product1" className="scetion-p1">
      <h2>Featured Products</h2>
      <p>Special Hair Skin & Nials Beauty Supplement</p>
      <div className="pro-container">
        <div className="pro">
          <img src={require('../images/active.jpg')} alt="active" />
          <div className="des">
            <span>reviveactive</span>
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
          <a  href="#">
          <i className="bi bi-cart4  cart"></i>
          </a>
        </div>
        <div className="pro">
         <img src={require('../images/booster.jpg')} alt="booster" />
          <div className="des">
            <span>reviveactive</span>
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
          <a  href="#">
          <i className="bi bi-cart4  cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={require('../images/nails.jpg')} alt="nail"/>
          <div className="des">
            <span>reviveactive</span>
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
          <a  href="#">
          <i className="bi bi-cart4  cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={require('../images/immum.jpg')} alt="immun" />
          <div className="des">
            <span>reviveactive</span>
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
          <a  href="#">
          <i className="bi bi-cart4  cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={require('../images/naturesbounty-newlook-group.png')} alt="group" />
          <div className="des">
            <span>reviveactive</span>
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
          <a  href="#">
          <i className="bi bi-cart4  cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={require('../images/neocello.jpg')} alt="neocell" />
          <div className="des">
            <span>reviveactive</span>
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
          <a  href="#">
          <i className="bi bi-cart4  cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={require('../images/IMG-20240422-WA0007.jpg')} alt="WA007" />
          <div className="des">
            <span>reviveactive</span>
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
          <a  href="#">
          <i className="bi bi-cart4  cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={require('../images/IMG-20230713-WA0028.jpg')} alt="WA0028" />
          <div className="des">
            <span>reviveactive</span>
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
          <a  href="#">
          <i className="bi bi-cart4  cart"></i>
          </a>
        </div>
      </div>
      
      
    </section>

    <section>
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require('../images/IMG-20230713-WA0023.jpg')} className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src={require('../images/durex.jpg')} className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src={require('../images/IMG-20230713-WA0024.jpg')} className="d-block w-100" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </section>




     <section id="banner" className="section-m1">
      <h4>Consulting Services</h4>
      <h2>Up to <span>70% off</span> - All Consultaion & Supplement</h2>
      <button>Explore More</button>
     </section>
</div>

</>
  );
}

export default Page;
