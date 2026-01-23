import React from 'react';

const VideoSection = () => {
  // Thay thế ID video youtube của bạn vào đây
  // Ví dụ link là: https://www.youtube.com/watch?v=LXb3EKWsInQ
  // Thì ID là: LXb3EKWsInQ
  const youtubeVideoId = "PHzrVZqguCk"; 

  return (
    <section id="video" className="video-section">
      <div className="video-container">
        <h2 className="section-heading">
           Hướng Dẫn Can Thiệp Đúng Cách
        </h2>
        <p className="video-intro">
            Xem video hướng dẫn thực tế để hiểu rõ cách sử dụng bộ Kit hiệu quả nhất cho con bạn.
        </p>
        
        <div className="video-wrapper">
          <iframe 
            src={`https://www.youtube.com/embed/${youtubeVideoId}`} 
            title="Video hướng dẫn AutismKit" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-cta">
             <p>Bạn muốn xem trọn bộ khóa học video?</p>
             <a href="#pricing" className="cta-button-secondary">Đăng Ký Gói Premium Ngay</a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;