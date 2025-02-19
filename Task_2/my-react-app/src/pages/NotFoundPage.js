import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NotFound from '../components/NotFound/NotFound';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="notfound-page">
      <Header />
      <main>
        <NotFound />
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
