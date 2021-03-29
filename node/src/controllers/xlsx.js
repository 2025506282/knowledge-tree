var xlsx = require('node-xlsx').default;
const ejsexcel = require("ejsexcel");
const util = require("util");
const fs = require("fs");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
var path = require('path');
var STATIC_PATH = require('../const/config');
const xlsxController = {
    async transCheckBox(req, res, next) {
        const workSheetsFromFile = xlsx.parse(`${STATIC_PATH}/files/CA_MACE.xlsx`);
        let table = workSheetsFromFile[0].data;
        const header = table.splice(0, 1)[0];
        const activeIndexArr = [];
        const indexOne = header.findIndex((item) => item === '评估项');
        const indexTwo = header.findIndex((item) => item === '编码');
        const indexThree = header.findIndex((item) => item === '单项计分规则');
        const indexFour = header.findIndex((item) => item === '值(value）');
        activeIndexArr.push(indexOne);
        activeIndexArr.push(indexTwo);
        activeIndexArr.push(indexThree);
        activeIndexArr.push(indexFour);

        table = table.map((tr, index) => {
            // tr = tr.filter((td, index) => {
            //     if (activeIndexArr.includes(index)) {
            //         return td;
            //     };
            // })
            return tr;

        }).filter((tr) => tr);
        const exlBuf = await readFileAsync(`${STATIC_PATH}/files/CA_MACE.xlsx`);
        // const exlBuf2 = await ejsexcel.renderExcel(exlBuf, data, { cachePath: __dirname+"/cache/" });
        res.send(exlBuf);
        // res.send(table);
    },
    // 转化radio
    transXlsx(req, res, next) {
        const workSheetsFromFile = xlsx.parse(`${STATIC_PATH}/files/CA_FC.xlsx`);
        let table = workSheetsFromFile[0].data;
        const header = table.splice(0, 1)[0];
        const activeIndexArr = [];
        const indexOne = header.findIndex((item) => item === '评估项');
        const indexTwo = header.findIndex((item) => item === '编码');
        const indexThree = header.findIndex((item) => item === '单项计分规则');
        const indexFour = header.findIndex((item) => item === '值(value）');
        activeIndexArr.push(indexOne);
        activeIndexArr.push(indexTwo);
        activeIndexArr.push(indexThree);
        activeIndexArr.push(indexFour);

        table = table.map((tr, index) => {
            if (tr[3]) {
                tr = tr.filter((td, index) => {
                    if (tr[indexOne] && activeIndexArr.includes(index)) {
                        return td;
                    };
                })
                return tr;
            }
            return;

        }).filter((tr) => tr);
        const obj = {};
        const requireList = [];
        const score = {};
        table.map((tr) => {
            requireList.push(tr[1]);
            obj[tr[1]] = {
                type: 'string',
                title: tr[0],
                enum: [
                    { label: '能+1', value: 1 },
                    { label: '不能+0', value: 0 },
                ],
                ui: {
                    widget: 'radio',
                },
            },
                score[tr[1]] = {
                    0: 0,
                    1: 1
                }
        })
        res.send({
            properties: obj,
            required: requireList,
            score
        });
    }
}
module.exports = xlsxController;
