import api from './api';

export const login = async (data) => {
    try {
        const response = await api.post('user/login', data);
        return response.data;
    }
    catch (error) {
        console.log(error);s
    }
};

export const getResults = async (code) => {
    try {
        const response = await api.get(`results/${code}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getSemestersWithResults = async () => {
    try {
        const response = await api.get('/results');
        return response.data;
    } catch (error) {
        console.log(error);
    }
  };

export const regCourseInSemester = async (semester) => {
    try {
        const response = await api.get(`/results/viwe/${semester}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}; 

export const logout = async () => {
    try {
        const response = await api.post('/logout');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updatePassword = async (passwordData) => {
    try {
        const response = await api.post('/updatePassword', passwordData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

