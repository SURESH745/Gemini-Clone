import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import './main.css';
import { Context } from '../../context/context';

const Mains = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);


    const handleSuggestionClick = (suggestion) => {
        setInput(suggestion);
        onSent(suggestion);
    };

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => handleSuggestionClick("Suggest beautiful places to see on an upcoming road trip")}>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleSuggestionClick("Briefly summarize this concept: urban planning")}>
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleSuggestionClick("Brainstorm team bonding activities for our work retreat")}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleSuggestionClick("Improve the readability of the following code")}>
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder='Enter a prompt here'
                        />
                        <div className="icons">
                            <div className="tooltip-container">
                                <img src={assets.gallery_icon} alt="Upload Image" />
                                <span className="tooltip">Disabled</span>
                            </div>
                            <div className="tooltip-container">
                                <img src={assets.mic_icon} alt="Record Voice" />
                                <span className="tooltip">Disabled</span>
                            </div>
                            {input && (
                                <img onClick={() => onSent(input)} src={assets.send_icon} alt="Send" />
                            )}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses.<span className='masudhan'>Suresh Gongali</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mains;
