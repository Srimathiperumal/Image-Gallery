import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from "./components/app";
const root = ReactDOM.createRoot(document.getElementById('root'))

const gallerys = [
  {
    img:"/assest/images/one.jpeg",
    petname:"SleepingDog"
  },
  {
    img:'/assest/images/two.jpg',
    petname:"BigDog"
  },
  {
    img:'/assest/images/three.jpeg',
    petname:"SittingDog"
  },
  {
    img:'/assest/images/four.jpg',
    petname:"BlackDog"
  },
  {
    img:'/assest/images/five.jpeg',
    petname:"SmallDog"
  },
  {
    img:'/assest/images/six.jpeg',
    petname:"EyePinkDog"
  },
  {
    img:'/assest/images/seven.jpeg',
    petname:"BigEyeDog"
  },
  {
    img:"/assest/images/eight.jpg",
    petname:"TongueOutDog"
  }
]
root.render(

    
  <div class="first" >
      {
          gallerys.map(function(item){
              return<App  class="two" img ={item.img} petname={item.petname}></App>
          })
           }
  </div>
)
 





