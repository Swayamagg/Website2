import React, { useEffect, useState } from 'react';
import ReelFeed from '../../components/ReelFeed';
import '../../styles/reels.css';
import axios from 'axios';

const Home=()=>{
    const[videos,setVideos]=useState([]);
    useEffect(()=>{
     axios.get("http://localhost:3000/api/food",{withCredentials:true})
     .then((res)=>{
        console.log(res.data);
        setVideos(res.data.foodItems);
     })
     .catch((err)=>{
        console.log("some error issue",err)
     })
    },[]);

    return(
       <ReelFeed items={videos} emptyMessage="No videos available."/>
   )
}

export default Home;