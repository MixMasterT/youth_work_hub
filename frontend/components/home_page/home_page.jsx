import React from 'react';

const MissionStatement = () => (
  <div className="mission-statement">
    <h3>Getting Jobs Done Within the Community</h3>
    <p>Non Profit organization. Please support! Much love in 2017...</p>
  </div>
);


const Testimonials = () => {
  const testimons = [
    {title: "Great Experience",
      text: "WTF I put a string in here and it turned RED!",
      picture_url: "balbalbal"},

    {title: "Great Experience",
      text: "WTF I put a string in here and it turned RED!",
      picture_url: "balbalbal"},

    {title: "Great Experience",
      text: "WTF I put a string in here and it turned RED!",
      picture_url: "balbalbal"}
  ];
  return (
    <div className="testimonials">
      {testimons.map((tes, id) => (
        <div className="testmimonial"
             key={id}
        >
          <h4>{tes.title}</h4>
          <img  />
          <p>{tes.text}</p>
        </div>
      ))}
    </div>
  );
};

const HomePage = () => (
  <main className="home">
    <div>
      <MissionStatement />
      <Testimonials />
    </div>

  </main>
);

export default HomePage;
