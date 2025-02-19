import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import BlogList from "./components/BlogList";
import Pagination from "./components/Pagination";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import BlogDetail from "./components/BlogDetail/BlogDetail"; 

import postsData from "./data/posts.json"; 
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortType, setSortType] = useState("recent"); 
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedPost, setSelectedPost] = useState(null);

  const POSTS_PER_PAGE = 8;

  const categories = ["all", ...new Set(postsData.map((p) => p.category))];

  let filteredPosts = postsData.filter((post) => {
    if (selectedCategory === "all") return true;
    return post.category === selectedCategory;
  });

  filteredPosts = filteredPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortType === "recent") {
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortType === "alphabetical") {
    filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
  }

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const displayedPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortType]);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header />
      <Hero />

      {selectedPost && <BlogDetail post={selectedPost} />}

      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortType={sortType}
        setSortType={setSortType}
        categories={categories}
      />

      <BlogList
        posts={displayedPosts}
        onSelectPost={handleSelectPost} 
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <CTA />
      <Footer />
    </div>
  );
}

export default App;
