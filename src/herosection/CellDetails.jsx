import cellImage from "../assets/images/cellImage.jpg";
import '../styles/custom.css';
import battery from "../../src/assets/icons/battery.png"
import display from "../../src/assets/icons/display.png"
import performance from "../../src/assets/icons/performance.png"
import camera from "../../src/assets/icons/camera.png"
import os from "../../src/assets/icons/os.png"
import verification from "../assets/icons/check-mark.png"
import logo from "../assets/icons/logo.png"

const CellDetails = () => {
  return (
    <>
      <section className="container border border-secondary-subtle bg-white mt-4 rounded">
        <div className='row'>
          <div className='col-lg-2 pt-2'>
            <div className="text-center">
              <img src={cellImage} alt="..." />
              <h2 className="mt-4">Tecno</h2>
              <h3 className="mt-4">CAMON 30 PREMIER</h3>
            </div>
          </div>

          <div className="col-lg-10">
            <div className="container">
              <div className="row mt-2">
                <div className="col-lg-3 col-md-6 col-12 mt-md-4 mt-sm-2 d-flex">
                  <div className="card flex-fill text-center rounded border border-3 border-dark-subtle speciality">
                    <div className="d-flex justify-content-center align-items-center mt-4">
                      <img src={performance} alt="..." className="image" />
                    </div>
                    <div className="card-body" style={{ fontSize: '14px' }}>
                      <h4>Performance</h4>
                      <p className="card-text">Mediatek Dimensity 8200 Ultimate (4 nm)</p>
                      <p className="card-text">Ram: 12 / 512GB Built-in, 12GB RAM (+12GB Extended RAM) GB</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mt-md-4 mt-sm-4 d-flex">
                  <div className="card flex-fill text-center rounded border border-3 border-dark-subtle speciality">
                    <div className="d-flex justify-content-center align-items-center mt-4">
                      <img src={display} alt="..." className="image" />
                    </div>
                    <div className="card-body" style={{ fontSize: '14px' }}>
                      <h4>Display</h4>
                      <p className="card-text">162.7 x 76.2 x 7.9 mm</p>
                      <p className="card-text">1264 x 2780 Pixels (~451 PPI)</p>
                      <p className="card-text">FPS: 120 Hz</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mt-md-4 mt-sm-4 d-flex">
                  <div className="card flex-fill text-center rounded border border-3 border-dark-subtle speciality">
                    <div className="d-flex justify-content-center align-items-center mt-4">
                      <img src={camera} alt="..." className="image" />
                    </div>
                    <div className="card-body" style={{ fontSize: '14px' }}>
                      <h4>Camera</h4>
                      <p className="card-text">Back - 50px</p>
                      <p className="card-text">Front - 50px</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mt-md-4 mt-sm-4 d-flex">
                  <div className="card flex-fill text-center rounded border border-3 border-dark-subtle speciality">
                    <div className="d-flex justify-content-center align-items-center mt-4">
                      <img src={battery} alt="..." className="image" />
                    </div>
                    <div className="card-body" style={{ fontSize: '14px' }}>
                      <h4>Battery</h4>
                      <p className="card-text">Capacity : 5000 mah</p>
                      <p className="card-text">(Non removable), 5000 mAh</p>
                      <p className="card-text">12GB Ram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 mt-md-4 mt-sm-4 d-flex">
                  <div className="flex-fill text-center speciality">
                    <div className="d-flex justify-content-center align-items-center mt-2">
                      <img src={os} alt="..." className="image" />
                    </div>
                    <div className="card-body" style={{ fontSize: '14px' }}>
                      <p className="card-text mt-2 fs-6 fw-semibold">Android 14 OS</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 mt-md-4 mt-sm-4 d-flex">
                  <div className="flex-fill text-center speciality">
                    <div className="d-flex justify-content-center align-items-center mt-2">
                      <h4>Price</h4>
                    </div>
                    <div className="card-body" style={{ fontSize: '14px' }}>
                      <p className="card-text mt-2 fw-bold">Rs. 159000</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 mt-md-4 mt-sm-4 d-flex">
                  <div className="flex-fill text-center speciality">
                    <div className="d-flex justify-content-center align-items-center mt-2">
                      <h4>Released on</h4>
                    </div>
                    <div className="card-body" style={{ fontSize: '14px' }}>
                      <p className="card-text mt-2">1st May, 2024</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 mt-md-4 mt-sm-4 d-flex">
                  <div className="flex-fill text-center speciality">
                    <div className="d-flex justify-content-center align-items-center mt-2">
                      <h4>63%</h4>
                    </div>
                    <div className="card-body" style={{ fontSize: '14px' }}>
                      <p className="card-text mt-2">184967 hits</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 mt-md-4 mt-sm-4 d-flex">
                  <div className="flex-fill text-center speciality">
                    <div className="d-flex justify-content-center align-items-center mt-2">
                      <h4>Reviews</h4>
                    </div>
                    <div className="card-body" style={{ fontSize: '14px' }}>
                      <p className="card-text mt-2">No User Review. Write a Review</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 mt-md-4 d-flex">
                  <div className="flex-fill text-center speciality">
                    <div className="d-flex justify-content-center align-items-center mt-2">
                      <h4>Powered by</h4>
                    </div>
                    <div className="card-body" style={{ fontSize: '14px' }}>
                      <p className="powered text-center" style={{ border: '2px solid gray' }}>Mediatek Dimensity 8200 <br /> Ultimate (4 nm)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-between align-items-center">
                  <div className="d-flex mt-4 gap-4">
                    <a href="https://www.youtube.com/@MobileMateio" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube fa-2x" style={{ color: 'red' }}></i>
                    </a>
                    <a href="https://web.facebook.com/MobileMate.io?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="https://www.tiktok.com/@mobilemate.io?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-tiktok fa-2x" style={{ color: 'black' }}></i>
                    </a>
                    <a href="https://www.instagram.com/mobilemate.io/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram fa-2x gradient-text"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/mobilemateio/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin fa-2x" style={{ color: '#0077B5' }}></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 text-end">
                  <img src={verification} alt="..." className="checked-img" />
                  <h5>Verified By:</h5>
                  <img src={logo} alt="..." className="w-50 h-50" />
                </div>
              </div>
            </div>
            <p className="mt-md-2"><span className="fw-bold">Disclaimer: </span>We can not guarantee that the information on this page is 100% correct
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CellDetails;
