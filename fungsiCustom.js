// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const getSecondWord = dataObject => {
  const parsedData = JSON.parse(dataObject);
  
  if (parsedData.message != undefined) {
      const word = parsedData.message.split(" ");
      return word[1];
  } else if (parsedData[0].message != undefined) {
      const word = parsedData[0].message.split(" ");
      return word[1];
  } else if (parsedData[0].data.message != undefined) {
      const word = parsedData[0].data.message.split(" ");
      return word[1];
  }
};

const bacaData = (fnCallback) => {
  const result = [];

  fs.readFile(file1, 'utf8', (error, dataYangDibaca) => {
      if (error) error;
      const secondWord = getSecondWord(dataYangDibaca);
      result.push(secondWord);

      fs.readFile(file2, 'utf8', (error, dataYangDibaca) => {
          if (error) error;
          const secondWord = getSecondWord(dataYangDibaca);
          result.push(secondWord);
  
          fs.readFile(file3, 'utf8', (error, dataYangDibaca) => {
              if (error) error;
              const secondWord = getSecondWord(dataYangDibaca);
              result.push(secondWord);
      
              fnCallback(null, result);        
          });
      });
  });
};

function fnCallback(file1, file2, file3) {
  let arrFile = [file1, file2, file3];
  for (let e of arrFile){
    return e;
  }
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
