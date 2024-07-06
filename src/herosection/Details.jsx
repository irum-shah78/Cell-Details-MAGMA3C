import React from 'react';
import cellImage from "../assets/images/cellImage.jpg";
import logo from "../assets/icons/logo.png";
import "../styles/custom.css";

const Details = () => {
  return (
    <>
      <div className="container mt-4 col-12 col-md-10 col-lg-8 border border-dark-subtle bg-white">
        <div className="row">
          {/* Image */}
          <h4 className="text-white p-2" style={{ background: '#1674BF' }}>Tecno CAMON 30 PREMIER</h4>
          <div className="col-12 col-md-4 col-lg-2 text-center">
            <img src={cellImage} alt="Tecno Camon" className="img-fluid custom-image" />
            <h4 className="fw-bold mt-2" style={{ color: '#8B0000' }}>Rs. 159,000</h4>
            <div className="d-flex justify-content-center align-items-center mt-2">
              <p className="mb-0 me-2">MORE IMAGES</p>
              <div className="rounded-circle bg-dark-subtle d-flex align-items-center justify-content-center" style={{ height: '28px', width: '28px', cursor: 'pointer' }}>
                <i className="fa-solid fa-arrow-right" style={{ color: '#000000' }}></i>
              </div>
            </div>
          </div>
          {/* Specifications */}
          <div className="col-12 col-md-8 col-lg-10">
            <h5 className="fw-bold">Key Specifications</h5>
            <hr />
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 mb-2 d-flex align-items-center">
                <i className="fas fa-mobile-alt me-3" style={{ color: 'gray', fontSize: '2rem' }}></i>
                <div className="d-flex flex-column">
                  <span className="fw-bold fs-5">162.7 x 76.2 x 7.9</span>
                  <span>1264 x 2780 Pixels</span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-2 d-flex align-items-center">
                <i className="fas fa-memory me-3" style={{ color: 'gray', fontSize: '2rem' }}></i>
                <div className="d-flex flex-column">
                  <span className="fw-bold fs-5">12GB</span>
                  <span>RAM</span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-2 d-flex align-items-center">
                <i className="fas fa-camera me-3" style={{ color: 'gray', fontSize: '2rem' }}></i>
                <div className="d-flex flex-column">
                  <span className="fw-bold fs-5">50MP+50MP</span>
                  <span>Camera</span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-2 d-flex align-items-center">
                <i className="fas fa-hdd me-3" style={{ color: 'gray', fontSize: '2rem' }}></i>
                <div className="d-flex flex-column">
                  <span className="fw-bold fs-5"> 512GB</span>
                  <span>Built-in Storage</span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-2 d-flex align-items-center">
                <i className="fas fa-camera-retro me-3" style={{ color: 'gray', fontSize: '2rem' }}></i>
                <div className="d-flex flex-column">
                  <span className="fw-bold fs-5">50MP</span>
                  <span>Front Camera</span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-2 d-flex align-items-center">
                <i className="fas fa-battery-full me-3" style={{ color: 'gray', fontSize: '2rem' }}></i>
                <div className="d-flex flex-column">
                  <span className="fw-bold fs-5" >5000 mAh</span>
                  <span>Battery</span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-2 d-flex align-items-center">
                <i className="fa-brands fa-android me-3" style={{ color: 'gray', fontSize: '2rem' }}></i>
                <div className="d-flex flex-column">
                  <span className="fw-bold fs-5">Android 14</span>
                  <span>OS</span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-2 d-flex align-items-center">
                <i className="fa-regular fa-calendar me-3" style={{ color: 'gray', fontSize: '2rem' }}></i>
                <div className="d-flex flex-column">
                  <span className="fw-bold fs-5">Release Date</span>
                  <span>1st May, 2024</span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-2 d-flex align-items-center">
                <i className="fa-solid fa-handshake me-3" style={{ color: 'gray', fontSize: '2rem' }}></i>
                <div className="d-flex flex-column">
                  <span className="fw-bold fs-5">Powered by</span>
                  <span>Mediatek Dimensity </span>
                  <span>8200 Ultimate (4 nm)</span>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="d-flex flex-column flex-md-row justify-content-between mt-2 gap-2">
              <button className="btn btn-outline-secondary mb-2 mb-md-0 w-100 w-md-25">
                <i className="fa-solid fa-circle-info icon-large"></i> MORE SPEC
              </button>
              <button className="btn text-white mb-2 mb-md-0 w-100 w-md-25" style={{ background: '#1674BF' }}>
                <i className="fa-solid fa-exchange-alt icon-large"></i> COMPARE
              </button>
              <button className="btn btn-outline-secondary w-100 w-md-25">
                <i className="fa-solid fa-play icon-large"></i> VIDEO REVIEWS
              </button>
            </div>
            {/* Social Media Links */}
            <div className="row d-flex mt-3">
              <div className="col-12 col-md-8 mb-2 d-flex align-items-center">
                <span className="me-2 fw-bold">Follow us:</span>
                <div className="d-flex align-items-center gap-4">
                  <a href="https://web.facebook.com/MobileMate.io?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook icon-hover facebook" style={{ fontSize: '1.5rem' }}></i>
                  </a>
                  <a href="https://www.youtube.com/@MobileMateio" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube icon-hover youtube" style={{ fontSize: '1.5rem' }}></i>
                  </a>
                  <a href="https://www.instagram.com/mobilemate.io/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram icon-hover instagram" style={{ fontSize: '1.5rem' }}></i>
                  </a>
                  <a href="https://www.linkedin.com/company/mobilemateio/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin icon-hover linkedin" style={{ fontSize: '1.5rem' }}></i>
                  </a>
                  <a href="https://www.tiktok.com/@mobilemate.io?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok icon-hover tiktok" style={{ fontSize: '1.5rem' }}></i>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-2 d-flex align-items-center">
                <div className="d-flex">
                  <span className="fw-bold fs-6">Verified by:</span>
                  <img src={logo} alt="logo" className="h-50 w-50 mt-1" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Details;
