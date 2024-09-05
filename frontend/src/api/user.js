import api from './index';

const getUserData = () => {
    return api.get(`/dashboard`);
};

const updateInstagram = () => {
    return api.put('/update-instagram');
};

const updateBio = () => {
    return api.put('/update-bio')
}   

const updateSkills = () => {
    return api.put('/update-skills')
}


export { getUserData, updateInstagram, updateBio, updateSkills };
