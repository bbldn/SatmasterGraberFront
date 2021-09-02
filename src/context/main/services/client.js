const axios = require('axios');

module.exports = {
    getProcessState: async function () {
        return await axios.post('/api', {method: 'getProcessState'});
    },
    startProcess: async function (url, categoryId, imagesPath) {
        const params = [url, categoryId, imagesPath];

        return await axios.post('/api', {method: 'startProcess', params: params});
    },
};