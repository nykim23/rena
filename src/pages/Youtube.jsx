import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'


import VideoCards from '../components/videos/VideoCard'
import { youtubeText } from '../data/youtube'

const Youtube = () => {


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);


    const youtubePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main>
            <section id="youtubePage" className={youtubePageClass}>
                <h2>나만의 유투브 사이트 만들기!!!!!!!</h2>
                <div className="video__inner">
                    <VideoCards videos={youtubeText} />
                </div>
            </section>
        </Main>
    )
}
    
export default Youtube;