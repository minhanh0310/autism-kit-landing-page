import React from 'react';

const VideoPopup = ({ videoId, onClose }) => {
    if (!videoId) return null;

    return (
        <div className="video-modal-overlay" onClick={onClose}>
            <div className="video-modal-content" onClick={e => e.stopPropagation()}>
                <button className="video-modal-close" onClick={onClose}>&times;</button>
                <div className="video-iframe-wrapper">
                    <iframe 
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoPopup;