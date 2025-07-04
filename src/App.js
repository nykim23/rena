import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main'

import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

import Header from './components/section/Header'
// import Main from './components/section/Main'
import Footer from './components/section/Footer'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
            
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/today" element={<Today />} />
                    <Route path="/developer" element={<Developer />} />
                    <Route path="/webd" element={<Webd />} />
                    <Route path="/website" element={<Website />} />
                    <Route path="/gsap" element={<Gsap />} />
                    <Route path="/port" element={<Port />} />
                    <Route path="/youtube" element={<Youtube />} />
                    <Route path='/channel/:channelId' element={<Channel />} />
                    <Route path='/video/:videoId' element={<Video />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path="*" element={<Not />} />
                </Routes>
            
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
}

export default App;