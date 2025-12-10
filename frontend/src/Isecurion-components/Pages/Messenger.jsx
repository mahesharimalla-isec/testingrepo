import React, { useEffect, useRef, useState } from 'react';
import IsecNavbar from './IsecNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './pages-css/Messenger.css';
import { AiOutlineSend } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setFetchedMessage } from '../../REDUX_ISECURION/fetchmessage/fetchmessageAction';
import messageimage from "../../Assests/message.png";
import { useAuth } from '../../Context/UserContext';
import { io } from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';

function Messanger({ setStatus }) {
    const [clientName, setClientName] = useState([]);
    const [openMessage, setOpenMessage] = useState(false);
    const [openHomePage, setOpenHomePage] = useState(true);
    const [selectedClient, setSelectedClient] = useState(null);

    const mainChatRef = useRef(null);
    const messageEndRef = useRef(null);

    const [message, setMessage] = useState('');
    const [hideSendButton, setHideSendButton] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredClients, setFilteredClients] = useState([]);
    const [latestMessageTime, setLatestMessageTime] = useState({});

    const { emailVer, logout } = useAuth()

    const fetchedMessage = useSelector((state) => state.fetchMessage.fetchedMessage);
    const dispatch = useDispatch();


    const handleMessageBox = (client) => {
        setSelectedClient(client);
        setOpenMessage(true);
        setOpenHomePage(false);
        setMessage('');
    };

    const handleTextareaChange = (e) => {
        setMessage(e.target.value);
        setHideSendButton(e.target.value.trim() === '');
    };

    function escapeHtml(html) {
        return html.replace(/[&<>]/g, function (tag) {
            const charsToReplace = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
            };
            return charsToReplace[tag] || tag;
        });
    }

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
        filterClients(e.target.value);
    };

    const filterClients = (query) => {
        const filtered = clientName.filter(
            (client) =>
                client.name.toLowerCase().includes(query.toLowerCase()) || client.email.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredClients(filtered);
    };

    const insertNewline = () => {
        const textarea = document.getElementById("textarea");
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = textarea.value;
        const newValue = value.substring(0, start) + "\n" + value.substring(end);
        setMessage(newValue);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
    };

    const formatTime = (date) => {
        const options = {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        return date.toLocaleTimeString('en-IN', options);
    };

    const handleMessage = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://18.207.195.77:5050/sendusermessage', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({
                    message,
                    client: selectedClient.email
                })
            });

            if (response.ok) {
                setMessage('')
                setHideSendButton(true);
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
            console.log(error);
        }
    };

    const fetchClients = async () => {
        try {
            const response = await fetch("http://18.207.195.77:5050/fetchclientuser", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include'
            });
            const emails = await response.json();
            setFilteredClients(emails);
            setClientName(emails)
        } catch (error) {
            console.log(error);
        }
    };

    const fetchMessages = async () => {
        try {
            const response = await fetch(`http://18.207.195.77:5050/fetchusermessages?client=${selectedClient.email}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include'
            });
            if (response.ok) {
                const messageData = await response.json();
                dispatch(setFetchedMessage(messageData));
                messageEndRef.current?.scrollIntoView({ behavior: "instant" });
            } else if (response.status === 404) {
                dispatch(setFetchedMessage([]));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!emailVer.endsWith('@isecurion.com')) {
            logout()
            return;
        }
        fetchClients();
        if (selectedClient) {
            fetchMessages();
            const socket = io('http://18.207.195.77:5050')
            socket.on('usermessage', () => {
                fetchMessages()
            });

            return () => {
                socket.disconnect();
            };
        }
    }, [selectedClient]);

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "instant" });
    }, [fetchedMessage]);

    return (
        <div className='chat_container'>
            <div className='statusnavbar' data-testid='IsecurionNavbar'>
                <IsecNavbar />
            </div>

            <div className='wrap_isecurion_chat'>
                <div className='wrap_list'>
                    <div className='isecurion'>
                        <h1 data-testid="username">Messenger</h1>
                    </div>
                    <div className='search-box'>
                        <button className='btn-search' data-testid="searchButton">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <input type='text' data-testid="searchInput" className='input-search' placeholder='Type to Search...' onChange={handleSearchInputChange} value={searchQuery} />
                    </div>

                    <div className='client_list'>
                        <p>All chats</p>
                        {filteredClients.length === 0 ? (
                            <div>
                                <p>Clients not found</p>
                            </div>
                        ) : (
                            filteredClients.map((client, index) => (
                                <div className={selectedClient && selectedClient.email === client.email ? 'profile highlighted' : 'profile'} key={index} onClick={() => handleMessageBox(client)}>
                                    <h4>{client.name.charAt(0).toUpperCase()}</h4>
                                    <p>{client.name}</p>
                                    <h5>{client.email}</h5>
                                    <h3>{latestMessageTime[client.email] ? formatTime(new Date(latestMessageTime[client.email].seconds * 1000)) : ''}</h3>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {openMessage && selectedClient ? (
                    <div className='wrap_chat'>
                        <div className='client_inbox'>
                            <div className='clint_chat_name'>
                                <h4>{selectedClient.name.charAt(0).toUpperCase()}</h4>
                                <h1>{selectedClient.email.charAt(0).toUpperCase() + selectedClient.email.slice(1)}</h1>
                            </div>
                        </div>
                        <div className='main_chat' ref={mainChatRef} id='element' style={{ backgroundImage: `url(${messageimage})`, backgroundSize: "400px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                            {fetchedMessage.length === 0 ? (
                                <div className='empty_chat_message'>
                                    <h1>Nothing's being discussed right now</h1>
                                </div>
                            ) : (
                                fetchedMessage.map((msg, index) => (
                                    <div className={msg.to === 'Isecurion' ? 'message-right' : 'message-left'} key={index}>
                                        <div>
                                            <div className='wrap-data'>
                                                <div className='time_username'>
                                                    <h5>{msg ? msg.user : ''}</h5>
                                                </div>
                                                <p dangerouslySetInnerHTML={{ __html: escapeHtml(msg.message).replace(/\n/g, '<br>') }}></p>
                                            </div>
                                            <h6>{formatTime(new Date(msg.time))}</h6>
                                        </div>
                                    </div>
                                ))
                            )}
                            <div ref={messageEndRef} />
                        </div>
                        <div className='chat_options'>
                            <textarea
                                id="textarea"
                                type='text'
                                placeholder={selectedClient ? `Message ${selectedClient.email}` : 'Message'}
                                value={message}
                                onChange={handleTextareaChange}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && e.shiftKey) {
                                        e.preventDefault();
                                        insertNewline();
                                    } else if (e.key === 'Enter') {
                                        if (message.trim() !== '') {
                                            handleMessage(e);
                                        }
                                        e.target.blur();
                                    }
                                }}
                            />
                            {!hideSendButton && (
                                <button onClick={handleMessage}>
                                    <AiOutlineSend />
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>

            {/* <ToastContainer /> */}
        </div>
    );
}

export default Messanger;
