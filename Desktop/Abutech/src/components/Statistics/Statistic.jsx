import React from "react";
import CountUp from "react-countup";
import "./statistic.css";

const Statistic = () => {
  return (
    <section>
      <div className="container">
        <div className="statistic-container">
          <div className="statistic-card">
            <div className="count">
              <CountUp start={0} end={40} duration={3} separator="," />
              <span>+</span>
            </div>
            
            <p className="malumot">Completed projects</p>
          </div>

          <div className="statistic-card">
            <div className="count">
              <CountUp start={0} end={10} duration={3} separator="," />
              <span>+</span>
            </div>
            <p className="malumot">Happy clients</p>
          </div>

          <div className="statistic-card">
            <div className="count">
              <CountUp start={0} end={30} duration={3} separator="," />
              <span>+</span>
            </div>
            <p className="malumot">Skilled professionals</p>
          </div>

          <div className="statistic-card">
            <div className="count">
              <CountUp start={0} end={1} duration={3} separator="," />
              <span>+</span>
            </div>
            <p className="malumot">Awards won</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Statistic;