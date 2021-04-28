const axios = require('axios');
const env = 'develop';
const apiUrl = `http://synyi-cdss-gateway-547-${env}.sy/api/authorization/authrize/login`;
const open = require('open');
const params = {
    clientId: "ea300691-ee44-4a9b-96ad-708f4d64339d",
    deptId: "123",
    deptName: "骨科",
    userId: "string",
    userName: "string",
    userRole: "doctor",
    visitNo: "0050F70896",
}
const baseUrl = 'http://scale-front-726-develop.sy';
const type = 'manual_score';
const scaleId = 'CA_Padua';
const scaleName = '123';
const performerId = '';
const guid = params.clientId;
const isIframe = true;
// @ts-ignore
axios.post(apiUrl, params).then((res) => {
    const { token } = res.data.data;
    const url = `${baseUrl}?token=${token}&` + 
    `type=${type}&` + 
    `scaleId=${scaleId}&` + 
    `scaleName=${scaleName}&` + 
    `performerId=${performerId}&` + 
    `guid=${guid}&` + `isIframe=${isIframe}`
    open(url)
}).catch((err) => {
    console.log('err:', err);
});