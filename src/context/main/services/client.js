const axios = require('axios');

const getResponse = async function (data) {
    const response = await axios.post('/api', data);

    return response.data;
}

module.exports = {
    getProcessState: async function () {
        return await getResponse({method: 'getProcessState'});
    },
    startProcess: async function (url, categoryId, imagesPath) {
        const params = [url, categoryId, imagesPath];

        return await getResponse({method: 'startProcess', params: params});
    },
};