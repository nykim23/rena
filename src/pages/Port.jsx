import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { portfolioText } from '../data/portfolio'


const Port = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);


    const portPageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main>

            <section id="portPage" className={portPageClass}>
                <h2>나만의 포폴</h2>
                <div className='video__inner'>
                    <VideoCards videos={portfolioText} />
                </div>
            </section>
        </Main>
    )
}
    
export default Port;