

import React, { useContext } from 'react';
import "../Main/Main.css";
import { assets } from '../../Assets/assets';
import { Context } from '../../Context/Context';

function Main() {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, error } = useContext(Context);

    return (
        <div className='main'>
            <div className='nav'>
                <p>PK Chatbot</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p><span>Hello Guys</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p> Suggest some tourist place in kerala</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept:olympics </p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : error ? (
                                <p className='error-message'>{error}</p>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}
                <div className="main-bottom">
                    <div className="searchbox">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder='Enter a prompt here'
                        />
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                    </div>
                    <p className="bottom-info">
                        This ai can display info,including about people so double check the response.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;