import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../../styles/profile.css";


const Profile=()=>{
    const {id}=useParams();
    const [profile,setProfile]=useState(null);
    const [videos,setVideos]=useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/food-partner/${id}`,{withCredentials:true})
        .then((res)=>{
            setProfile(res.data.foodPartner);
            setVideos(res.data.foodPartner.foodItems);
        })
        .catch((err)=>{
            console.log('Error fetching food partner:', err);
        })
    },[id])
    return(
        <main className='profile-page'>
          <section className='profile-header'>
             <div className='profile-meta'>
                 <img className="profile-avatar" src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='profile-info'>
                    <h1 className='profile-pill profile-buisness' title='Buisness name'>{profile?.name}</h1>
                    <p className='profile-pill profile-buisness' title='Address'>{profile?.address}</p>
                </div>
             </div>
             <div className='profile-stat' role='list' aria-label='Stats'>
                <div className='profile-stat' role='listitem'>
                    <span className="profile-stat-label">Total Meals</span>
                    <span className="profile-stat-value">13</span>
                </div>
                <div className='profile-stat' role='listitem'>
                    <span className="profile-stat-label">customer served</span>
                    <span className="profile-stat-value">15k</span>
                </div>
             </div>
          </section>
          <hr  className='profile-sep'/>
          <section>
            {videos.map((v)=>{
                <div key={v._id} className='profile-grid-item'>
                    <video className='profile-grid-video' src={v.video} muted style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
            })}
          </section>
        </main>
    )
}

export default Profile;