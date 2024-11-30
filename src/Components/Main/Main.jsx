 import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/Context'
const Main = () => {

    const [onSent, recentprompt,showresult,loading,resultData,setInput,input] = useContext(Context)
  return (
 <>
 <div className="main">
    <div className="nav">
        <p>
            Gemini
        </p>
        <img src={assets.user_icon} alt="" />
    </div>
    <div className="main-continer">
        {!showresult? <>
            <div className="greet">
            <p>
                <span>Hello, Dev.</span>
                <p> How can I help today?</p>
            </p>
        </div>
       
       
        <div className="cards">
        <div className="card">
                <p>Suggest beautiful place to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautiful place to see on an upcoming road trip</p>
                <img src={assets.code_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautiful place to see on an upcoming road trip</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautiful place to see on an upcoming road trip</p>
                <img src={assets.message_icon} alt="" />
            </div>
        </div>
        
        </> : <div className='result'>
                 <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                 <p>{recentprompt}</p>
                 </div>
                 <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                 </div>
            </div>}
      
         <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt here' />
               <div>
               <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
               </div>
            </div>
            <p className="bottom-info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ipsum ullam ea magnam! Iusto, sint.
         </p>
         </div>
       
    </div>
    
 </div>
 
 
 
 </>  )
}

export default Main