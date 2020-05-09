const keys = require('config.js');

let OcrClient = require('baidu-aip-sdk').ocr;


const app = new ocr.AipOcr({
     apiKey: API_KEY
});

exports.main = async (event, context) => {

       // 设置APPID/AK/SK
     
       let ID = args.App_ID;
     
       let KEY = args.API_Key;
     
       let SECRET = args.Secret_Key;
     
       // 新建一个对象，保存一个对象调用服务接口
     
       let client = new AipOcrClient(ID, KEY, SECRET;
     
       let fileID = event.fileID;
     
       let res = await cloud.downloadFile({
     
         fileID: fileID,
     
       })

       let image = res.fileContent.toString("base64");

  // 调用通用文字识别, 图片参数为远程url图片

  return client.generalBasic(image);

  //console.log(result);

  // .then(function (result) {

  //  let result = JSON.stringify(result);

  //  return result;

  // })

}

const handleApiCall = (req, res) => {
     app.models
       .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
       .then(data => {
         res.json(data);
       })
       .catch(err => res.status(400).json('unable to work with API'))
   }