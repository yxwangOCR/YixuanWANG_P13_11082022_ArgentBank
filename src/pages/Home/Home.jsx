import React from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Data from "../../data/data";
import "./Home.css";

function Home() {
  return (
    <main className="main-container">
      <Hero />
      <div className="features-container">
        {Data.map((data) => {
          return (
            <Features
              key={data.id}
              icon={data.icon}
              title={data.title}
              content={data.content}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Home;
