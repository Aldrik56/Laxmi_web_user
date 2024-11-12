import Image from 'next/image'
import React, { useState,useEffect } from 'react';
import {ChatBubble} from '../../elements/icon';
import useTranslation from 'next-translate/useTranslation';

// elements
import {InputChat} from '../../elements/form';
import {Edit} from '../../elements/icon'

const Chat = () => {
    const {t} = useTranslation("home")

    const [form,setForm] = useState({})
    const [error,setError] = useState({})
    const [isShow,setIsShow] = useState(false)
    
    useEffect(() => {
        if(isShow){
            var elem = document.getElementById('chat-container-scroll');
            elem.scrollTop = elem.scrollHeight;      
        }
    },[form,isShow]); 
    const handleChange = e => {
        const {value,id} = e.target
        setForm({
            ...form,
            [id] : value
        })
    }
    const handleSubmit = e => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            alert('Terkirim')
            var chatText = document.getElementById('chat-text');
            chatText.value = ''
        }
    }
    return (
        <>
            <div 
                onClick={() => setIsShow(!isShow)}
                className="chat d-flex justify-content-center align-items-center text-white chat-home">
                {
                    isShow ?
                    <span>X</span> :
                    <ChatBubble />
                }
            </div>
            {
                isShow ?
                <div className="chat-container chat-container-home">
                    <div className="d-flex flex-row">
                        <Image
                            width={54}
                            height={46} 
                            src="/img/logo.png"
                            alt="laxmi" />    
                        <div className="profile">
                            <p className="mb-0">Laxmi Tailor</p> 
                            <p className="mb-0">ACTIVE NOW</p>                                   
                        </div>        
                    </div>
                    <div className="chat-container-scroll" id="chat-container-scroll">
                        <div className="row mx-0 px-0">
                            <div className="col-10 desc desc-user">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </div>
                            <div className="col-2 d-flex justify-content-center align-items-center">
                                <Image
                                    width={32}
                                    height={32} 
                                    src="/img/icon/account_circle.svg"
                                    alt="laxmi" /> 
                            </div>
                        </div>
                        <div className="row  mx-0 px-0">
                        <div className="col-2 d-flex justify-content-center align-items-center">
                                <Image
                                    width={32}
                                    height={32} 
                                    src="/img/logo.png"
                                    alt="laxmi" /> 
                            </div>
                            <div className="col-10  desc desc-admin">
                            How can we help you?
                            </div>
                        </div>
                        <div className="row mx-0 px-0">
                            <div className="col-10 desc desc-user">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </div>
                            <div className="col-2 d-flex justify-content-center align-items-center">
                                <Image
                                    width={32}
                                    height={32} 
                                    src="/img/icon/account_circle.svg"
                                    alt="laxmi" /> 
                            </div>
                        </div>
                        <div className="row  mx-0 px-0">
                        <div className="col-2 d-flex justify-content-center align-items-center">
                                <Image
                                    width={32}
                                    height={32} 
                                    src="/img/logo.png"
                                    alt="laxmi" /> 
                            </div>
                            <div className="col-10  desc desc-admin">
                            How can we help you?
                            </div>
                        </div>                    
                    </div>
                    <form className="mt-4">
                        <InputChat 
                            id="chat-text"
                            type="text"
                            value={form.chatText}
                            error={error.chatText}
                            label="Text"
                            onKeyUp={handleSubmit}
                            onChange={handleChange}
                        />
                    </form>
                </div> : null
            }
            <div className="popop-custom d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <p className="title mb-0">{t("CUSTOM SUIT")}</p>
                    <p className="price mb-0">$ 0,00</p>
                </div>
                <button className="btn btn-primary "><span><Edit color="white" /></span> {t("DESIGN NOW")}</button>                
            </div>
        </>
    )
}

export default Chat ;