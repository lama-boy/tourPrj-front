import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    date: string;
    onView: () => void;
    onEdit: () => void;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, date, onView, onEdit }) => {
  return (
    <div className="col">
        <a className="card shadow-sm border-0">
            <img
            src={imageUrl}
            className="card-img-top"
            style={{ height: '225px', width: '100%', objectFit: 'cover' }}
            />
            <div className="card-body">
                <p className="card-text text-start">{title}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group mt-4">
                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onView}>
                            View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onEdit} >
                            Edit
                        </button>
                    </div>
                    <small className="text-body-secondary mt-4">{date}</small>
                </div>
            </div>
        </a>
    </div>
  );
};

export default Card;