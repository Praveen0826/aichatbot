import React, { useContext, useState } from 'react'
import { assets } from '../../Assets/assets'
import "../Sidebar/Sidebar.css"
import { Context } from '../../Context/Context';

function Sidebar() {

    const [extended, setextended] = useState(false);
    const { newchat, onSent, prevPrompt, setRecentPrompt } = useContext(Context)

    const loadprompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    return (
        <div className='sidebar'>

            {/* newchat */}
            <div className='top'>
                <img onClick={() => setextended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />

                <div onClick={() => newchat()} className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New chat </p> : null}
                </div>

                {/* recent */}
                {extended ?

                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {prevPrompt.map((item, index) => {
                            return (
                                <div onClick={() => loadprompt(item)} className='recent-entry'>
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0, 18)} ...</p>


                                </div>

                            )
                        })}




                    </div> : null
                }

            </div>

            {/* bottom */}

            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}

                </div>

                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon} alt="" />

                    {extended ? <p>Activity</p> : null}

                </div>

                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} alt="" />

                    {extended ? <p>Setting</p> : null}

                </div>


            </div>

        </div>


    )
}

export default Sidebar