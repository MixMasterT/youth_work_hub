import React from 'react';
import LoginBoxContainer from './login_box/login_box_container';
import Testimonials from './logo';

const MissionStatement = () => (
  <div className="mission-statement">
    <h3>Getting Jobs Done Within the Community</h3>
    <p>Non Profit organization. Please support! Much love in 2017...</p>
  </div>
);

const Testimonials = (testimonialArray) => {
  { testimonialArray.map((tes) => (
    <div className="testmimonial">
      <h4>{tes.title}</h4>
      <img src={tes.picture_url} />
      <p>{tes.text}</p>
    </div>
  )}
};

const HomePage = () => (
  <body>
    <Logo />
    <div>
      <MissionStatement />
      <Tagline />
    </div>
    <LoginBoxContainer />
  </body>
);

export default HomePage;
