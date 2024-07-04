// import cellImage from "../assets/images/cellImage.jpg";
// import '../styles/custom.css';
// import battery from "../../src/assets/icons/battery.png";
// import display from "../../src/assets/icons/display.png";
// import performance from "../../src/assets/icons/performance.png";
// import camera from "../../src/assets/icons/camera.png";
// import os from "../../src/assets/icons/os.png";
// import verification from "../assets/icons/check-mark.png";
// import logo from "../assets/icons/logo.png";

// const CellDetails = () => {
//   return (
//     <section className="container border border-secondary-subtle bg-white mt-4 rounded custom-width">
//       <div className='row'>
//         <div className='col-lg-2 pt-2 text-center'>
//           <div className="text-center">
//             <img src={cellImage} alt="Tecno CAMON 30 PREMIER" className="camon-image "/>
//           </div>
//           <h2 className="mt-4 text-center">Tecno</h2>
//           <h3 className="mt-4 text-center">CAMON 30 PREMIER</h3>
//         </div>

//         <div className="col-lg-10">
//           <div className="container-fluid p-0">
//             <div className="row no-gutters mt-2">
//               {[
//                 { img: performance, title: "Performance", text: ["Mediatek Dimensity 8200 Ultimate (4 nm)", "Ram: 12 / 512GB Built-in, 12GB RAM (+12GB Extended RAM) GB"] },
//                 { img: display, title: "Display", text: ["162.7 x 76.2 x 7.9 mm", "1264 x 2780 Pixels (~451 PPI)", "FPS: 120 Hz"] },
//                 { img: camera, title: "Camera", text: ["Back - 50MP: Quad-LED flash,HDR, Panorma", "Front - 50MP: Dual-LED flashHDR"] },
//                 { img: battery, title: "Battery", text: ["Capacity : 5000 mah", "(Non removable), 5000 mAh", "12GB Ram"] }
//               ].map((item, index) => (
//                 <div className="col-lg-3 col-md-3 col-12 d-flex" key={index}>
//                   <div className="card flex-fill text-center border border-dark-subtle">
//                     <div className="d-flex justify-content-center align-items-center mt-2">
//                       <img src={item.img} alt={item.title} className="image" />
//                     </div>
//                     <h4>{item.title}</h4>
//                     {item.text.map((line, i) => <p className="card-text" key={i}>{line}</p>)}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="container-fluid p-0">
//             <div className="row no-gutters">
//               {[
//                 { img: os, text: "Android 14 OS" },
//                 { title: "Price", text: "Rs. 159000" },
//                 { title: "Released on", text: "1st May, 2024" },
//                 { title: "63%", text: "184967 hits" },
//                 { title: "Reviews", text: "No User Review. Write a Review" },
//                 { title: "Powered by", text: "Mediatek Dimensity 8200 Ultimate (4 nm)", colorClass: 'powered' }
//               ].map((item, index) => (
//                 <div className="col-lg-2 col-md-4 col-sm-4 col-12 d-flex" key={index}>
//                   <div className="flex-fill text-center speciality">
//                     <div className="d-flex justify-content-center align-items-center mt-2">
//                       {item.img && <img src={item.img} alt={item.text} className="image" />}
//                       {item.title && <h4>{item.title}</h4>}
//                     </div>
//                     <div className="card-body">
//                       <p className="card-text mt-2">{item.text}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="container-fluid p-0">
//             <div className="row">
//               <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-between align-items-center">
//                 <div className="d-flex mt-4 gap-4">
//                   {[
//                     { link: "https://www.youtube.com/@MobileMateio", icon: "youtube", color: 'red' },
//                     { link: "https://web.facebook.com/MobileMate.io?_rdc=1&_rdr", icon: "facebook", color: '' },
//                     { link: "https://www.tiktok.com/@mobilemate.io?is_from_webapp=1&sender_device=pc", icon: "tiktok", color: 'black' },
//                     { link: "https://www.instagram.com/mobilemate.io/", icon: "instagram", colorClass: 'gradient-text' },
//                     { link: "https://www.linkedin.com/company/mobilemateio/", icon: "linkedin", color: '#0077B5' }
//                   ].map((item, index) => (
//                     <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
//                       <i className={`fab fa-${item.icon} fa-2x ${item.colorClass ? item.colorClass : ''}`} style={item.color ? { color: item.color } : {}}></i>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-12 text-end">
//                 <img src={verification} alt="Verified" className="checked-img" />
//                 <h5>Verified By:</h5>
//                 <img src={logo} alt="Logo" className="w-50 h-50" />
//               </div>
//             </div>
//           </div>
//           <p className="mt-md-2"><span className="fw-bold">Disclaimer: </span>We cannot guarantee that the information on this page is 100% correct.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CellDetails;


import cellImage from "../assets/images/cellImage.jpg";
import '../styles/custom.css';
import battery from "../../src/assets/icons/battery.png";
import display from "../../src/assets/icons/display.png";
import performance from "../../src/assets/icons/performance.png";
import camera from "../../src/assets/icons/camera.png";
import os from "../../src/assets/icons/os.png";
import verification from "../assets/icons/check-mark.png";
import logo from "../assets/icons/logo.png";

const CellDetails = () => {
  return (
    <section className="container border border-secondary-subtle bg-white mt-4 rounded custom-width">
      <div className='row'>
        <div className='col-lg-2 pt-2 text-center'>
          <div className="text-center">
            <img src={cellImage} alt="Tecno CAMON 30 PREMIER" className="camon-image" />
          </div>
          <h2 className="mt-2 text-center">Tecno</h2>
          <h3 className="mt-2 text-center">CAMON 30 PREMIER</h3>
        </div>

        <div className="col-lg-10">
          <div className="container-fluid p-0">
            <div className="row no-gutters mt-2">
              {[
                { img: performance, title: "Performance", text: ["Mediatek Dimensity 8200 Ultimate (4 nm)", "Ram: 12 / 512GB Built-in, 12GB RAM (+12GB Extended RAM) GB"] },
                { img: display, title: "Display", text: ["162.7 x 76.2 x 7.9 mm", "1264 x 2780 Pixels (~451 PPI)", "FPS: 120 Hz"] },
                { img: camera, title: "Camera", text: ["Back - 50MP: Quad-LED flash,HDR, Panorma", "Front - 50MP: Dual-LED flashHDR"] },
                { img: battery, title: "Battery", text: ["Capacity : 5000 mah", "(Non removable), 5000 mAh", "12GB Ram"] }
              ].map((item, index) => (
                <div className="col-lg-3 col-md-3 col-12 d-flex" key={index}>
                  <div className="card flex-fill text-center border border-dark-subtle">
                    <div className="d-flex justify-content-center align-items-center mt-2">
                      <img src={item.img} alt={item.title} className="image" />
                    </div>
                    <h4>{item.title}</h4>
                    {item.text.map((line, i) => <p className="card-text" key={i}>{line}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="container-fluid p-0">
            <div className="row no-gutters">
              {[
                { img: os, text: "Android 14 OS" },
                { title: "Price", text: "Rs. 159000" },
                { title: "Released on", text: "1st May, 2024" },
                { title: "63%", text: "184967 hits" },
                { title: "Reviews", text: "No User Review. Write a Review" },
                { title: "Powered by", text: "Mediatek Dimensity 8200 Ultimate (4 nm)", colorClass: 'powered' }
              ].map((item, index) => (
                <div className="col-lg-2 col-md-4 col-sm-4 col-12 d-flex" key={index}>
                  <div className={`flex-fill text-center speciality ${item.colorClass || ''}`}>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                      {item.img && <img src={item.img} alt={item.text} className="image" />}
                      {item.title && <h4>{item.title}</h4>}
                    </div>
                    <div className="card-body">
                      <p className="card-text mt-2">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="container-fluid p-0">
            <div className="row no-gutters">
              {[
                { img: os, text: "Android 14 OS" },
                { title: "Price", text: "Rs. 159000" },
                { title: "Released on", text: "1st May, 2024" },
                { title: "63%", text: "184967 hits" },
                { title: "Reviews", text: "No User Review. Write a Review" },
                { title: "Powered by", text: "Mediatek Dimensity 8200 Ultimate (4 nm)", colorClass: 'powered' }
              ].map((item, index) => (
                <div className="col-lg-2 col-md-4 col-sm-4 col-12 d-flex" key={index}>
                  <div className={`flex-fill text-center speciality ${item.colorClass || ''}`}>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                      {item.img && <img src={item.img} alt={item.text} className="image" />}
                      {item.title && <h4>{item.title}</h4>}
                    </div>
                    <div className={`card-body ${item.title === "Powered by" ? "text-bg" : ""}`}>
                      <p className="card-text mt-2">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-between align-items-center">
                <div className="d-flex mt-4 gap-4">
                  {[
                    { link: "https://www.youtube.com/@MobileMateio", icon: "youtube", color: 'red' },
                    { link: "https://web.facebook.com/MobileMate.io?_rdc=1&_rdr", icon: "facebook", color: '' },
                    { link: "https://www.tiktok.com/@mobilemate.io?is_from_webapp=1&sender_device=pc", icon: "tiktok", color: 'black' },
                    { link: "https://www.instagram.com/mobilemate.io/", icon: "instagram", colorClass: 'gradient-text' },
                    { link: "https://www.linkedin.com/company/mobilemateio/", icon: "linkedin", color: '#0077B5' }
                  ].map((item, index) => (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
                      <i className={`fab fa-${item.icon} fa-2x ${item.colorClass ? item.colorClass : ''}`} style={item.color ? { color: item.color } : {}}></i>
                    </a>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 text-end">
                <img src={verification} alt="Verified" className="checked-img" />
                <h5>Verified By:</h5>
                <img src={logo} alt="Logo" className="w-50 h-50" />
              </div>
            </div>
          </div>
          <p className="mt-md-2"><span className="fw-bold">Disclaimer: </span>We cannot guarantee that the information on this page is 100% correct.</p>
        </div>
      </div>
    </section>
  );
};

export default CellDetails;
