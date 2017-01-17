import React from 'react';

const MissionStatement = () => (
  <div className="mission-statement">
    <h2>Become an Employer</h2>
    <h3>Help young people learn responsibility and get your jobs done in
      the process</h3>
    <p>
      Youth Work Hub is a non-profit organization dedicated to enhancing
      communities by hooking young people up with jobs that need to be
      completed in their communities.
    </p>
    <p>
      Our regular users are employers who hire young people from the
      community to do odd jobs. Join up to become an employer. You can
      post jobs that you need to get done, and let young people i
    </p>
    <p>
      Do you need someone to mow your lawn? How about getting a baby-sitter
      or a tutor for your children? Youth Work Hub makes it easy to find
      young people in your community who are willing to help.
    </p>
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
  <div className="home">
    <h1>Build Your Community</h1>
    <div>
      <MissionStatement />
      <Testimonials />
    </div>

  </div>
);

export default HomePage;
