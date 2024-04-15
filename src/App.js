import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Images } from './pages/Images';
import { LatestNews } from './pages/LatestNews';
import { Contact } from './pages/Contact';
import { Videos } from './pages/Videos';
import { Blogs } from './pages/Blogs';
import { Donation } from './pages/Donation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Images />} path='/images' />
        <Route element={<Videos />} path='/videos' />
        <Route element={<LatestNews />} path='/latest-news' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Blogs />} path='/blogs' />
        <Route element={<Donation />} path='/donation' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
