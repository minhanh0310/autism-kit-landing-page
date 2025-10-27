import React, { useState } from 'react';
import { assessmentQuestions, results } from '../data/assessmentData';

const AssessmentSection = () => {
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [recommendation, setRecommendation] = useState('');

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = assessmentQuestions.length;

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answeredCount < totalQuestions) {
      alert(`Vui lòng trả lời đủ ${totalQuestions} câu hỏi trước khi xem kết quả.`);
      return;
    }

    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    
    // Logic mô phỏng đề xuất Kit
    if (totalScore < 7) {
      setRecommendation(results.highSensory); 
    } else if (totalScore < 10) {
      setRecommendation(results.highSocial);
    } else {
      setRecommendation(results.default);
    }

    setIsCompleted(true);
  };

  const renderQuestions = () => (
    <form onSubmit={handleSubmit} className="assessment-form">
      {assessmentQuestions.map(q => (
        <div key={q.id} className="question-box">
          <p className="question-text">{q.question}</p>
          <div className="options-group">
            {q.options.map((option, index) => (
              <label key={index} className="option-label">
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value={option.value}
                  checked={answers[q.id] === option.value}
                  onChange={() => handleAnswerChange(q.id, option.value)}
                  required
                />
                {option.text}
              </label>
            ))}
          </div>
        </div>
      ))}
      <p className="progress-text">Đã trả lời: {answeredCount}/{totalQuestions}</p>
      <button type="submit" className="cta-button-submit">
        XEM GỢI Ý KIT CHUYÊN BIỆT
      </button>
    </form>
  );

  const renderResults = () => (
    <div className="results-box">
      <h3 className="assessment-title">✅ CHÚC MỪNG! Đánh giá đã hoàn tất.</h3>
      <p className="results-recommendation">{recommendation}</p>
      <p className="results-note">Chúng tôi sẽ gửi báo cáo chi tiết và Video Hướng Dẫn miễn phí vào email của bạn.</p>
      <a href="#product" className="cta-button-view-kit">
        BƯỚC TIẾP THEO: XEM CHI TIẾT GÓI KIT CỦA BẠN →
      </a>
    </div>
  );

  return (
    <section id="test" className="assessment-section">
      <div className="assessment-content">
        <h2 className="assessment-title">
          {isCompleted ? results.cta : "Bài Test Đánh Giá Nhu Cầu Can Thiệp Của Con"}
        </h2>
        
        {isCompleted ? renderResults() : renderQuestions()}
        
      </div>
    </section>
  );
};

export default AssessmentSection;