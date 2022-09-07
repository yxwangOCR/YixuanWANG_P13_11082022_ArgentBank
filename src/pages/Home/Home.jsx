import React from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Contents from "../../data/contents";
import "./Home.css";

function Home() {
  return (
    <main className="home-page-container">
      <Hero />
      <div className="features-container">
        {Contents.map((content) => {
          return (
            <Features
              key={content.id}
              icon={content.icon}
              title={content.title}
              content={content.content}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Home;
