import React, { useState } from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import VideoPlayer from "./components/VideoPlayer";

import "./App.css";

function App() {
  const [pageSlide, setPageSlide] = useState("first");

  return (
    <main>
      <Header pageSlide={pageSlide} />
      <nav>
        <div className="nav-links">
          <span
            className={pageSlide === "first" ? "current" : ""}
            onClick={() => setPageSlide("first")}
          />
          <span
            className={pageSlide === "second" ? "current" : ""}
            onClick={() => setPageSlide("second")}
          />
        </div>
      </nav>
      <section className="main-container">
        {pageSlide === "first" && (
          <div className="video-section fade-animation">
            <VideoPlayer />
          </div>
        )}
        {pageSlide === "second" && (
          <div className="carousel-section fade-animation">
            <Carousel />
          </div>
        )}
      </section>
      <div className="slide-footer">
        {pageSlide === "first" && (
          <button
            className="btn-next-page"
            onClick={() => setPageSlide("second")}
          />
        )}
      </div>
    </main>
  );
}

export default App;
