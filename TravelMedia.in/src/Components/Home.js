import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { handleFetching } from '../redux/actions/fetchAction';
import { selectedCard } from '../redux/actions/selectedCard';
import { useNavigate } from 'react-router-dom';
const Home = (props) => {
    const navigate=useNavigate();
    const {loading,data,error}=useSelector(state=>state.fetched);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(handleFetching());
    },[]);
  return (
    <div className='home-container'>
        <h2>Social Media For Travellers</h2>
        <input type='text' placeholder='Search here.....'/>
       {
       loading &&(
            <h1>Loading....</h1>
        ) ||
        data && (
            <div className='cardsContainer'>
            {
                data.map((curr,index)=>(
                <div className='cardContainer' key={curr.id} onClick={()=>{
                    props.setId(curr.id);
                    navigate(`/item/${curr.id}`);
                    dispatch(selectedCard(curr))}}>
                <img src={`https://picsum.photos/200?random=${curr.id}`}/>
                <h4>{curr.title.slice(0,10)}</h4>
                <div className='details'>
                <div className='body'>
                <p>{curr.body.slice(0,100)}</p>
                 <a href="#">Read more....</a>
                 </div>
                 <div className='arrowDiv'>
                 <i class="fa-solid fa-chevron-right"></i>
                 </div>
                 </div>
                </div>
        ))
        }
            </div>
        )
       }
        
    </div>
  )
}

export default Home;