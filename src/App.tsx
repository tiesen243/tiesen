import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'

import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PostDetail from './pages/PostDetail'
import Projects from './pages/Projects'

const App = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mb-10 select-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
