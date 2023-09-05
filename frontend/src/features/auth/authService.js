import axios from 'axios';

// For now set PI_URL manually, later have to check proxy & env
const API_URL = 'https://goal-setter-app-zo5r.onrender.com/api/users/';

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// Logout user
const logout = () => {
    localStorage.removeItem('user'); // simple way for now
}

const authService = {
    register, login, logout
}

export default authService;