import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './meme.css';
// import memesData from "../../memesData";


export default function Meme(){

    const[meme,setMeme]=useState({
     topText:"",
     bottomText:"",
     randomImage:"https://i.imgflip.com/3i7p.jpg"
    })
       
    // const[allMemeImages,setAllMemeImages]=useState(memesData)
    // const[memeImage,setMemeImage]=useState("https://i.imgflip.com/3i7p.jpg");

    const[allMemes,setAllMemes]=useState([])

    function getMemeImage(){
        //    const memesArray=allMemeImages.data.memes
           const randomnumber=Math.floor(Math.random()*allMemes.length);
           const url=allMemes[randomnumber].url
           setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
           }))
        }

    function handleChange(event){
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    useEffect(()=>{
            fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])





return(
<div>
    <main>
   
    <div className="form">
        <div className="input-container">
        <input  onChange={handleChange} className="form-input" type="text"  placeholder="Top text"
         name="topText" 
         value={meme.topText}
        />
        <input  onChange={handleChange} className="form-input" type="text"  placeholder="Bottom text"
         name="bottomText"
         value={meme.bottomText}
         />
        </div>
        <button  onClick={getMemeImage}  className="form-button"> Create your meme </button>
    </div>
    <div className="image-container">
    <img src={meme.randomImage} alt="meme" className="meme-image"></img>
    <h1 className="image-topText">{meme.topText}</h1>
    <h1 className="image-bottomText">{meme.bottomText}</h1>

    </div>
    </main>

</div>
    )
    
}