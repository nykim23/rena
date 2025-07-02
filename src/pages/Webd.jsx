import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { webdText } from '../data/webd'

const Webd = () => {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    },[]);


    const webdPageClass = loading ? 'isLoading' : 'isLoaded';
    
    return (
        <Main>
            <section id='webdPage' className={webdPageClass}>
                <div className="video__inner">
                    <VideoCards videos={webdText} />
                </div>
            </section>
        </Main>
    )
}
    
export default Webd;