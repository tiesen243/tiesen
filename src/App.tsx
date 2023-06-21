import React from 'react'

import { Routes, Route } from 'react-router-dom'

import './css/App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import PostDetail from './pages/PostDetail'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
