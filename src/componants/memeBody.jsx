import image from "./../../assets/download.png"
import React from "react"

export default function MemeBody() {
    const [memeArr,setmemeArr] = React.useState([])
    const [meme,setMeme] = React.useState({
        upperText : "upperText",
        lowerText : "lowerText",
        imageUrl : image
    })
 
    function handleText(event) {
        const {value,name} = event.currentTarget
        setMeme ((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
    }

        React.useEffect(()=>{
             async function bringData(){
                const result = await fetch("https://api.imgflip.com/get_memes")
                let response = await result.json()
               
                setmemeArr(
                     response.data.memes 
                )
             }
             bringData()
        },[])    
   

        function handleNewImage () {
              let randomIndex = Math.floor(Math.random() * memeArr.length)
              setMeme((prev)=>({...prev,imageUrl : memeArr[randomIndex].url}))
        }

    return (
        <section>
            <div className="inputsHolder">
                <input type="text" placeholder="upper text" name="upperText" onChange={handleText} value={meme.upperText}/>
                <input type="text" placeholder="lower text" name="lowerText" onChange={handleText} value={meme.lowerText}/>
            </div>
            <button type="button" onClick={handleNewImage}>click me to get a new image</button>
            <div className="imageHolder">
                <img src={meme.imageUrl} alt="Meme"/>
                <span className="upperImageText">{meme.upperText}</span>
                <span className="lowerImageText">{meme.lowerText}</span>
            </div>
        </section>
    )
}