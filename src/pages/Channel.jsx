import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../util/api';


import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch';

import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from 'react-icons/ci';
import { CiRead } from 'react-icons/ci';



const Channel = () => {


    const { channelId } = useParams();
    const [ channelDetail, setChannelDetail ] = useState();
    const [ channelVideo, setChannelVideo ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ nextPageToken, setNextPageToken ] = useState(null);



    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date`);
                setChannelVideo(videosData?.items);
                setNextPageToken(videosData?.nextPageToken);

            } catch (error) {
                console.error('Error fetching data', error);
            }finally {
                setLoading(false);
            }
        };
        fetchResults();
    }, [channelId]);


    const loadMoreVideos = async () => {
        if(nextPageToken) {
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken`);
            setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
            setNextPageToken(videosData?.nextPageToken);
        
        }
    }


    const channelPageClass = loading ? 'isLoading':'isLoaded';



    // useEffect(() => {
    //     const fetchResults = async () => {
    //         const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
    //         setChannelDetail(data.items[0]);
    //     };
    //     fetchResults();
    // }, [channelId]);

    return (
        <Main
        title="유투브 채널"
        description="유투브 채널페이지">


            <section id='channel' className={channelPageClass}>

            {channelDetail && (
                <div className='channel__inner'>
                    <div className='channel__header' style={{ backgroundImage:`url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                        <div className='circle'>
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                        </div>
                    </div>
                    <div className='channel__info'>
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <div className='desc'>{channelDetail.snippet.description}</div>
                        <div className='info'>
                            <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                            <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                            <span><CiRead />{channelDetail.statistics.viewCount}</span>
                        </div>
                    </div>


                    <div className='channel__video video__inner search'>
                        <VideoSearch video={channelVideo} />
                    </div>

                    <div className='channel__more'>
                        {nextPageToken && <button onClick={loadMoreVideos}>더보기</button>}
                    </div>
                </div>
            )}
            </section>
        </Main>
    )
}

export default Channel;