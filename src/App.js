import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Today from './pages/Today';
import Developer from './pages/Developer';
import Webd from './pages/Webd';
import Website from './pages/Website';
import Gsap from './pages/Gsap';
import Port from './pages/Port';
import Youtube from './pages/Youtube';
import Channel from './pages/Channel';
import Video from './pages/Video';
import Search from './pages/Search';
import Not from './pages/Not';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <h1>React App</h1>
        <nav style={{ marginBottom: '20px' }}>
          <a href="/" style={{ marginRight: '10px' }}>Home</a>
          <a href="/today" style={{ marginRight: '10px' }}>Today</a>
          <a href="/developer" style={{ marginRight: '10px' }}>Developer</a>
          <a href="/webd" style={{ marginRight: '10px' }}>Webd</a>
          <a href="/website" style={{ marginRight: '10px' }}>Website</a>
          <a href="/gsap" style={{ marginRight: '10px' }}>Gsap</a>
          <a href="/port" style={{ marginRight: '10px' }}>Port</a>
          <a href="/youtube" style={{ marginRight: '10px' }}>Youtube</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/webd" element={<Webd />} />
          <Route path="/website" element={<Website />} />
          <Route path="/gsap" element={<Gsap />} />
          <Route path="/port" element={<Port />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/video/:videoId" element={<Video />} />
          <Route path="/search/:searchId" element={<Search />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;