import './card.css'
import './modal.css'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';

const Card = ({data}) => {

    console.log(data)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (

        <div className="card-container">
            {/* <div className="card-save">
                <div className='card-save-int'>
                    <FolderOpenIcon fontSize='small'/><button>save</button>
                </div>
            </div>  */}
            <img className="card-image"  src={data.urls.regular} alt="card-image" onClick={toggleModal}/>
            <div className='card-details'>
                <div className='card-user'>
                    <p className='card-title'>{data.alt_description}</p>
                    <p className='card-author'>{data.user.username}</p>
                </div>
                <p className='card-like'><ThumbUpAltIcon fontSize='small'/>{data.likes}</p>
                <p className='card-view'><RemoveRedEyeIcon fontSize='small'/>{data.user.total_likes}</p>
            </div>



            {isModalOpen && <div className="modal">
                <span className="close" onClick={toggleModal}>X</span>
                <img className="modal-content"  src={data.urls.regular}/>
                <div className='modal-caption'>{data.alt_description}</div>
                <div className='modal-author'>{data.user.username}</div>
            </div>}
        </div>
    )
}

export default Card
