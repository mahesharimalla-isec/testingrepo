import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserContext = createContext();

export const UserAuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [emailVer, setEmailVer] = useState('');


    const checkAuth = async () => {
        try {
            const response = await axios.get('http://18.207.195.77:5050/verifyToken', { withCredentials: true });

            if (response.status === 200 && response.data.token) {
                setIsAuthenticated(true);
                setUser(response.data.name);
                setEmailVer(response.data.email)

            } else {
                setIsAuthenticated(false);
                setUser(null);
                logout()
            }
        } catch (error) {
            console.error('Error during token verification:', error);
            setIsAuthenticated(false);
            setUser(null);
            logout()
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        checkAuth();
    }, []);


    const login = async (email, password) => {
        try {
            const response = await axios.post('http://18.207.195.77:5050/login', { email, password }, { withCredentials: true });
            if(response.data.token){
                setIsAuthenticated(true);
                setUser(response.data.name);
                setEmailVer(response.data.email)
                checkAuth()
            }
            return response

        } catch (error) {

            toast.error(error.response.data.message, {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: false,
            });

            console.error('Login failed:', error.response.status);
            throw error
        }
    };

    const logout = async () => {
        try {
            const response =await axios.post('http://18.207.195.77:5050/logout', {}, { withCredentials: true });
            setIsAuthenticated(false);
            setUser(null);
            toast.success(response.data.message, {
                position: "top-center",
                autoClose: 3000,
                pauseOnHover: false,
            });

        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <UserContext.Provider value={{ isAuthenticated, user, loading, login, logout, emailVer }}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);
