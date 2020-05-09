import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className="f3 db moon-gray dim">
                {`This Magic Brain detects faces in your pictures`}
            </p>
            <div className="center">
                <div className="form pa4 br3 shadow-5 center">
                <input className='f4 pa2 w-70 center' type="text" onChange = {onInputChange}/>
                <button className='w-30 grow f4 link ph3 pv2 dib moon-gray bg-purple' onClick={onSubmit}>Try me</button>
                </div>
            </div>
        </div>
    )
}


export default ImageLinkForm;