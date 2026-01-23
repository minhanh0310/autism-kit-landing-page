import React from 'react';

const TestimonialCard = ({ quote, name, title }) => (
    <div className="testimonial-card">
        <p className="testimonial-quote">"{quote}"</p>
        <p className="testimonial-name">{name}</p>
        <p className="testimonial-title">{title}</p>
    </div>
);

const TestimonialSection = () => {
  return (
    <section id="review" className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="section-heading">
           Giáo Viên Nói Gì?
        </h2>
        <div className="testimonial-grid">
            <TestimonialCard
                quote="Bộ Kit không chỉ là đồ chơi, mà là một công cụ trị liệu có cấu trúc. Video hướng dẫn giúp cha mẹ áp dụng đúng phương pháp can thiệp ngay tại nhà."
                name="Cô Hà My"
                title="Giáo viên Can thiệp Trẻ tự kỷ, 10 năm kinh nghiệm"
            />
            <TestimonialCard
                quote="Yếu tố an toàn và tính linh hoạt trong sử dụng của các Kit này vượt trội. Nó giải quyết được bài toán thiếu hướng dẫn chuyên môn đi kèm sản phẩm."
                name="Chuyên gia Tâm lý Trần Anh"
                title="Chuyên viên Trị liệu Ngôn ngữ & Tâm lý"
            />
        </div>
        <p className="testimonial-link-wrapper">
            <a href="#video" className="testimonial-link">Xem Video Hướng Dẫn Giới Thiệu Ngay →</a>
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;