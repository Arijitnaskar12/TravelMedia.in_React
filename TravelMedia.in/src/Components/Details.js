import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectedCard } from '../redux/actions/selectedCard';
const Details = (props) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  let[buttonClass1,setButtonState1]=useState('changed');
  let[buttonClass2,setButtonState2]=useState('default');
  const obj=useSelector(state=>state.card);
  const {data}=useSelector(state=>state.fetched);
  console.log(obj);
  function handleclickChange1(){
    setButtonState1(buttonClass1==='default'?'changed':'default')
    setButtonState2('default');
  }
  function handleclickChange2(){
    setButtonState2(buttonClass2==='default'?'changed':'default');
    setButtonState1('default');
  }
  return (
    <div className='detailsContainer'>
    <h1>Post Number #{obj.id}</h1>
    <div className='showingDiv'>
           <img src={`https://picsum.photos/200?random=${obj.id}`} alt="Image"/>
           <div className='btnContainer'>
           <button onClick={handleclickChange1} className={buttonClass1}>Details</button>
           <button onClick={handleclickChange2} className={buttonClass2}>User Info</button>
         </div>
           <div>
            {
              buttonClass1==='changed' &&(
                <p className='msgbody'>{obj.body}</p>
              )|| buttonClass2==='changed' &&(
                <p className='msgbody'>Post Was Posted By {obj.userId}.</p>
              )
            }
           </div>
    </div>
    <div>
            <h1>More Posts</h1>
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
    </div>
          
    </div>
  )
}

export default Details;
