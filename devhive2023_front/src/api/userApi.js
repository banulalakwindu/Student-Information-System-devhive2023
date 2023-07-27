import api from './api';

export const login = async (email,password) => {
    try {
        const response = await api.post('user/login', {email, password});
        if (response.data.token) {
            // Store the token directly without stringifying it
            localStorage.setItem('token', JSON.stringify(response.data.token));

        }
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
};

export const user = async () => {
    try {
        const response = await api.get('user');
        return response.data;
    }catch (error) {
        console.log(error);
    }
};
export const getResults = async (code) => {
    try {
        const response = await api.get(`/user/results/${code}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getSemestersWithResults = async () => {
    try {
        const response = await api.get('/user/results');
        return response.data;
    } catch (error) {
        console.log(error);
    }
  };

export const regCourseInSemester = async (semester) => {
    try {
        const response = await api.get(`/user/results/viwe/${semester}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}; 

export const logout = async () => {
    try {
        const response = await api.post('/user/logout');
        localStorage.removeItem('token');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updatePassword = async (passwordData) => {
    try {
        const response = await api.post('/user/updatePassword', passwordData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const register = async (registerData) => {
    try {
        const response = await api.get('/user/register/semester');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const courseSem = async (semester) => {
    try {
        const response = await api.get(`/user/register/semester/${semester}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const courseDetails = async (courseCode) => {
    try {
        const response = await api.get(`/user/register/course/${courseCode}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const preRequest = async (code) => {
    try {
        const response = await api.post(`/user/register/preReqCourse/${code}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const reAttempt = async () => {
    try {
        const response = await api.get('/user/reattempt');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}