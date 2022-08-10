import React, {useState} from 'react';

const FileUploadDeprecated = () => {
    const [baseImage, setBaseImage] = useState('');


    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file)
        setBaseImage(base64)
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };



  return (
    <>
        
        <h2>tirar archivos acá</h2>
        <div>
            <input type="file" onChange={(e) => {uploadImage(e);}} onDrop={(e) => {uploadImage(e);}}/>
            <img src={baseImage} height="200px"/>;
        </div>
    </>
  )
}

export default FileUploadDeprecated


