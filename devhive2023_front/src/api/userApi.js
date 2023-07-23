import api from './api';

export const login = async (email,password) => {
    try {
        const response = await api.post('user/login', {email, password});
        if (response.data.token) {
            // Store the token directly without stringifying it
            localStorage.setItem('token', (response.data.token));

        }
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
};

// export const getResults = async (code) => {
//     try {
//         const response = await api.get(`/user/results/${code}`);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const getSemestersWithResults = async () => {
//     try {
//         const response = await api.get('/user/results');
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
//   };

// export const regCourseInSemester = async (semester) => {
//     try {
//         const response = await api.get(`/results/viwe/${semester}`);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }; 

// export const logout = async () => {
//     try {
//         const response = await api.post('/logout');
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const updatePassword = async (passwordData) => {
//     try {
//         const response = await api.post('/updatePassword', passwordData);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

