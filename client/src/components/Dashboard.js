import React from "react";
import "../styles/_resources.scss";
import "@fortawesome/fontawesome-free/js/all.js";

function Dashboard() {
  return (
    <div id="dashboard">
      <div style={{ marginBottom: 1 + "em" }}></div>
      <div class="main-container">
        <div class="heading">
          <h1 class="heading__title">Welcome back to JobMaps</h1>
          <p class="heading__credits">
            <a
              class="heading__link"
              target="_blank"
              href="https://dribbble.com/sl"
            >
              View your job searching journey.
            </a>
          </p>
        </div>
        <div class="cards">
          <div class="card card-1">
            <div class="card__icon">
              <i class="fas fa-paper-plane"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-map-marker-alt"></i>
            </p>
            <h2 class="card__title">View applications.</h2>
            <p class="card__apply">
              <a class="card__link" href="./applications">
                Apply for positions <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-2">
            <div class="card__icon">
              <i class="fas fa-clock"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-map-marker-alt"></i>
            </p>
            <h2 class="card__title">See your scheduled interviews.</h2>
            <p class="card__apply">
              <a class="card__link" href="./calendar">
                View calendar <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-3">
            <div class="card__icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-map-marker-alt"></i>
            </p>
            <h2 class="card__title">Understand how you are performing.</h2>
            <p class="card__apply">
              <a class="card__link" href="#">
                See analytics <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-4">
            <div class="card__icon">
              <i class="fas fa-chalkboard-teacher"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-map-marker-alt"></i>
            </p>
            <h2 class="card__title">
              Prepare for interviews or learn new skills through projects.
            </h2>
            <p class="card__apply">
              <a class="card__link" href="./resources">
                Use resources <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
