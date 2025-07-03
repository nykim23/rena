import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'


import VideoSearch from '../components/videos/VideoSearch'
import { fetchFromAPI } from '../util/api'


const Search = () => {

    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken ] = useState(null);
    const [ loading, setLoading ] = useState(true);


    // useEffect(() => {
    //     fetch(
    //        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`, 
    //     )
    //     .then(response => response.json())
    //     .then(result => {
    //         console.log(result);
    //         setVideos(result.items)
    //     })
    //     .catch(error => console.log(error));
    //     }, [searchId]);


    // useEffect(() => {
    //     fetchFromAPI(`search?part=snippet&q=${searchId}`)
    //     .then((data) => setVideos(data.items))
    // }, [searchId]);


    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
        setLoading(true);
    }, [searchId]);



    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
        .then((data) => {
            setNextPageToken(data.nextPageToken);
            setVideos((prevVideos) => [...prevVideos, ...data.items]);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data', error);
            setLoading(false);
        });
    };



    const handleLoadMore = () => {
        if(nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    };

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';
    
    return (
        <Main title="유투브 검색">
            <section id="searchPage">
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>

                <div className='video__more'>
                    {nextPageToken && (
                        <button onClick={handleLoadMore}>more</button>
                    )}
                </div>
            </section>
        </Main>
    )
}
    
export default Search