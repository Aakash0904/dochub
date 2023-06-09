import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpecialityList from "../../components/common/SpecialityList";
import LocationList from "../../components/common/LocationList";
// import Header from "../../components/common/Header";
// import logo from "../../assets/images/main_logo.png";
import banner from "../../assets/Images/banner.png";

import cir1 from "../../assets/Images/circle-1.png";
// import arrow1 from "../../assets/images/arro.svg";
// import arrow2 from "../../assets/images/line-02.png";
import cir2 from "../../assets/Images/circle-2.png";
import cir3 from "../../assets/Images/circle-3.png";

import sec_bg from "../../assets/Images/section-bg.png";
import doc from "../../assets/Images/img-bg.png";
import doc_bg from "../../assets/Images/img-01-bg.jpg";
// import LocationList from "../../components/common/LocationList";

const Home = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: "Ahmedabad",
    speciality: "Oncology",
  });

  const handleChange = (e) => {
    setSearchData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSearch = () => {
    console.log("console_check", searchData);
    navigate("/conList", {
      state: {
        loc: searchData?.location,
        speciality: searchData?.speciality,
      },
    });
  };
  return (
    <body>
      {/* {console.log(props?.data)} */}
      <section className="i">
        <div className="onimg">
          <img src={banner} className="img-fluid" />
          <h1>
            We Care<br></br>
            <span></span>
          </h1>
        </div>
      </section>
      <div className="no-gutters justify-content-center search container">
        <div className="row   ">
          <div className="col-lg-5 home_speciality ">
            <SpecialityList handleChange={handleChange} />
          </div>
          <div className="col-lg-5">
            <LocationList handleChange={handleChange} />
          </div>
          {/* <div className="col-2 ">
          <button>search</button>
        </div> */}
          <div className="col-lg-2">
            <div className="srch">
              <a role="button" onClick={handleSearch}>
                <i className="fa fa-search"></i>
              </a>
            </div>{" "}
          </div>
        </div>
      </div>
      {/* <div className="name">
          <SpecialityList handleChange={handleChange} />
        </div>
        <div className="loc">
          <LocationList handleChange={handleChange} />
        </div> */}
      {/* <div className="srch">
          <a role="button" onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </a>
        </div> */}
      {/* </div> */}
      <section className="container third">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center one_click">
            <h2 className="h2">
              {" "}
              Bring Care to Your<br></br>
              <span>Home With One Click</span>
            </h2>
            <img src={sec_bg} className="p_bg" />
            <p>
              Lorem ipsum dolor amet consectetur adipisicing elitiuim sete
              eiusmod tempor incididunt ut labore etnalom dolore magn aiqua
              udiminimate veniam quis norud exercitation ullamco laboris nisi
              aliquip commodo consequat duis aute irure dolor in reprehenderit.
            </p>
            <div className="click_abt align-items-center">
              <a href="./about">About us</a>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={doc} className="img_bg" />
            <img src={doc_bg} className="fr_img img-fluid" />
          </div>
        </div>
      </section>
      <div className="container works text-center">
        <h2>
          We Made It Simple
          <br />
          <span>How It Works</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          voluptate, ipsam corrupti sunt sit nisi inventore magni mollitia ea
          cupiditate atque cum distinctio maxime quod dolorem nesciunt nostrum,
          est dolor?
        </p>
        <div className="row step d-flex">
          <div className=" col ">
            <img src={cir1} className="step_img" />
            {/* <img src={arrow1} className="arrow_1" /> */}
          </div>
          <div className=" col ">
            <img src={cir2} className="step_img" />
          </div>
          <div className="col ">
            {/* <img src={arrow2} className="arrow_2" /> */}
            <img src={cir3} className="step_img" />
          </div>
        </div>
      </div>
    </body>
  );
};
export default Home;
