import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <section class="blog">
      <h2>Latest Blog</h2>
      <div class="blog-container">
        <div class="blog-card">
          <img src="blog1.jpg" alt="Blog Image" />
          <div class="content">
            <p class="date">20 January, 2023</p>
            <h3>Become a UX/UI Designer With Career Foundry.</h3>
            <a href="#">Read More →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
