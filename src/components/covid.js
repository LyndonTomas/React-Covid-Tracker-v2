import React from "react";
import "./covid.css";
import { useEffect, useState } from "react";

const Covid = () => {
  const [actualData, setCountryInfo] = useState({});
  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://disease.sh/v3/covid-19/countries/philippines"
      );
      const actualData = await res.json();
      setCountryInfo(actualData);

      //   console.log(actualData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div>
      <center>
        <h4>🔴 LIVE</h4>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      </center>
      <ul>
        {/* per li is a "card" */}
        {/* country */}
        <li className="card">
          <div className="card__main">
            <center>
              <div className="card__inner">
                <p className="card__name">
                  <span>COUNTRY NAME</span>
                </p>
                <p className="card__total card__small">{actualData.country}</p>
                <img
                  alt="PH flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1280px-Flag_of_the_Philippines.svg.png"
                />
              </div>
            </center>
          </div>
        </li>

        {/* critical */}
        <li className="card">
          <div className="card__main">
            <center>
              <div className="card__inner">
                <p className="card__name">
                  <span>Critical</span>
                </p>
                <p className="card__total card__small">
                  Current Critical&nbsp; <strong>{actualData.critical}</strong>
                </p>
              </div>
            </center>
          </div>
        </li>

        {/* Active */}
        <li className="card">
          <div className="card__main">
            <center>
              <div className="card__inner">
                <p className="card__name">
                  <span>Active</span>
                </p>
                <p className="card__total card__small">
                  Active Cases&nbsp; <strong>{actualData.active}</strong>
                </p>
              </div>
            </center>
          </div>
        </li>

        {/* Cases */}
        <li className="card">
          <div className="card__main">
            <center>
              <div className="card__inner">
                <p className="card__name">
                  <span>Cases</span>
                </p>
                <p className="card__total card__small">
                  Total Cases&nbsp; <strong>{actualData.cases}</strong>
                </p>
                <p className="card__total card__small">
                  New Cases Today&nbsp;
                  <strong>{actualData.todayCases}</strong>
                </p>
              </div>
            </center>
          </div>
        </li>

        {/* Recovered */}
        <li className="card">
          <div className="card__main">
            <center>
              <div className="card__inner">
                <p className="card__name">
                  <span>Recovered</span>
                </p>
                <p className="card__total card__small">
                  Total Recovered&nbsp; <strong>{actualData.recovered}</strong>
                </p>
                <p className="card__total card__small">
                  Recovered Today&nbsp;
                  <strong>{actualData.todayRecovered}</strong>
                </p>
              </div>
            </center>
          </div>
        </li>

        {/* Death */}
        <li className="card">
          <div className="card__main">
            <center>
              <div className="card__inner">
                <p className="card__name">
                  <span>Deaths</span>
                </p>
                <p className="card__total card__small">
                  Total Deaths&nbsp; <strong>{actualData.deaths}</strong>
                </p>
                <p className="card__total card__small">
                  Deaths Today&nbsp;
                  <strong>{actualData.todayDeaths}</strong>
                </p>
              </div>
            </center>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Covid;
