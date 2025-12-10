import React, { useEffect, useRef, useState } from 'react'
import ClientNavbar from './ClientNavbar'
import { AiOutlineSend } from "react-icons/ai";
import './Page-css/Client_Messenger.css'
import { useDispatch, useSelector } from 'react-redux';
import { setFetchedMessage } from '../../REDUX_CLIENT/fetchMessages/fetchClientMsgAction';
import { useNavigate } from 'react-router-dom';
import messageimage from "../../Assests/message.png"
import { io } from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../Context/UserContext';

function Client_Messenger() {

  const navigate = useNavigate('')

  const { user, emailVer, logout } = useAuth()

  const [message, setMessage] = useState([])
  const [error, setError] = useState('')
  const [hideSendButton, setHideSendButton] = useState(true)

  const mainChatRef = useRef(null)

  const messageRef = useRef(null)

  const fetchedMessage = useSelector((state) => state.fetchedMessage.fetchedMessage)

  const dispatch = useDispatch()
  // const [fetchedMessage, setFetchedMessage] = useState([])

  const handleTextAreChange = (e) => {
    setMessage(e.target.value)
    if (e.target.value.trim() !== "") {
      setHideSendButton(false)
    } else {
      setHideSendButton(true)
    }
  }

  const addMessage = async () => {
    try {
      const response = await fetch('http://18.207.195.77:5050/sendclientmessage', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
          message,
        })
      })
      console.log(response)
      if (response.ok) {
        setHideSendButton(true);
        setMessage('')
        const textarea = document.getElementById("textarea");
        textarea.focus()
        mainChatRef.current.scrollTop = mainChatRef.current.scrollHeight;
      } else {
        const errorData = await response.json()
        toast.error(errorData.message, {
          position: "top-right",
          autoClose: 3000,
          pauseOnHover: false,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchClientMessage = async () => {
    try {
      const response = await fetch('http://18.207.195.77:5050/fetchclientmessages', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include'
      })
      const messagedata = await response.json()
      console.log(messagedata)
      const textarea = document.getElementById("textarea");
      textarea.focus()
      dispatch(setFetchedMessage(messagedata))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (emailVer.endsWith('@isecurion.com')) {
      logout()
      return;
    }
    fetchClientMessage()
    const socket = io('http://18.207.195.77:5050')
    socket.on('clientmessage', () => {
      fetchClientMessage()
    });
    return () => {
      socket.disconnect();
    };
  }, [])

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "instant" });
  }, [fetchClientMessage]);

  const formatTime = (date) => {
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleTimeString('en-IN', options);
  };

  function escapeHtml(html) {
    return html.replace(/[&<>]/g, function (tag) {
      var charsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
      };
      return charsToReplace[tag] || tag;
    });
  }

  const insertNewLine = () => {
    const textarea = document.getElementById("textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const newValue = value.substring(0, start) + "\n" + value.substring(end)
    setMessage(newValue)
    textarea.selectionStart = textarea.selectionEnd = start + 1;
  }

  return (
    <div className='chat_container_client'>
      <div className="client_navbar_messenger" data-testid='clientNavbar'>
        <ClientNavbar />
      </div>

      <div className='wrap_client_chat' >

        <div className='isecurion_inbox'>
          <div className='isecurion_chat_name'>
            <h4>I</h4>
            <h1>ISECURION</h1>
          </div>
        </div>


        <div className='client_main_chat' ref={mainChatRef} style={{ backgroundImage: `url(${messageimage})`, backgroundSize: "400px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
          {fetchedMessage.length > 0 ? (
            fetchedMessage.map((msg, index) => (
              <div key={index} className={msg.to == "Isecurion" ? "client_message-left" : "isecurion_message-right"}>
                <div>
                  <div className='isecurion_wrap-data'>
                    <p dangerouslySetInnerHTML={{ __html: escapeHtml(msg.message).replace(/\n/g, '<br>') }}></p>
                  </div>
                  <div className='isecurion_time_username'>
                    <h6>{formatTime(new Date(msg.time))}</h6>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='empty_chat_message'>

              <h1>Nothing's being discussed right now</h1>
            </div>
          )
          }

          <div ref={messageRef} />
        </div>

        <div className='client_chat_options'>
          <textarea
            id='textarea'
            data-testid="textarea"
            type='text'
            placeholder='Message ISECURION'
            value={message}
            onChange={handleTextAreChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.shiftKey) {
                e.preventDefault()
                insertNewLine()
              } else if (e.key === "Enter") {
                if (message.trim() !== '') {
                  addMessage(e)
                }
                e.target.blur()
              }

            }}
          />

          {!hideSendButton && (
            <button onClick={addMessage}><AiOutlineSend /></button>
          )}
        </div>
      </div>

      <div>
        {error && (
          <div className='client_message_error'>
            <p>{error}</p>
          </div>
        )}
      </div>
      {/* <ToastContainer /> */}
    </div>
  )
}

export default Client_Messenger
