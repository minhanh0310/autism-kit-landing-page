import React, { useState } from 'react';
import { assessmentTests } from '../data/assessmentData';

const AssessmentSection = () => {
  // State quản lý: Đang ở màn hình chọn test (null) hay đang làm test cụ thể ('level1', 'level2'...)
  const [activeTestId, setActiveTestId] = useState(null); 
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  // Lấy dữ liệu bài test đang chọn
  const activeTest = activeTestId ? assessmentTests[activeTestId] : null;

  // Hàm chọn bài test
  const startTest = (testId) => {
    setActiveTestId(testId);
    setAnswers({});
    setIsCompleted(false);
    setResultMessage('');
  };

  // Hàm quay lại màn hình chọn
  const resetSelection = () => {
    setActiveTestId(null);
    setAnswers({});
    setIsCompleted(false);
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: parseInt(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalQuestions = activeTest.questions.length;
    const answeredCount = Object.keys(answers).length;

    if (answeredCount < totalQuestions) {
      alert(`Vui lòng trả lời đủ ${totalQuestions} câu hỏi.`);
      return;
    }

    // Tính điểm trung bình (Thang 1-3)
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    const averageScore = totalScore / totalQuestions;

    // Logic đưa ra lời khuyên dựa trên điểm
    // Điểm < 2.2: Có vấn đề -> Gợi ý Kit tương ứng
    // Điểm >= 2.2: Tốt -> Khen ngợi
    if (averageScore < 2.2) {
        setResultMessage(activeTest.recommendation.low);
    } else {
        setResultMessage(activeTest.recommendation.high);
    }

    setIsCompleted(true);
  };

  // Màn hình 1: Danh sách các bài Test
  const renderTestSelection = () => (
    <div className="test-selection-grid">
        {Object.keys(assessmentTests).map((key) => {
            const test = assessmentTests[key];
            return (
                <div key={key} className="test-card-intro">
                    <h3>{test.title}</h3>
                    <p>{test.description}</p>
                    <button onClick={() => startTest(key)} className="btn-start-test">
                        Bắt Đầu Test Này
                    </button>
                </div>
            )
        })}
    </div>
  );

  // Màn hình 2: Form làm bài test
  const renderQuestions = () => (
    <div className="active-test-container">
        <button onClick={resetSelection} className="btn-back">← Chọn bài test khác</button>
        <h3 className="active-test-title">{activeTest.title}</h3>
        
        <form onSubmit={handleSubmit} className="assessment-form">
            {activeTest.questions.map(q => (
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
                        />
                        {option.text}
                    </label>
                    ))}
                </div>
                </div>
            ))}
            <button type="submit" className="cta-button-submit">XEM KẾT QUẢ</button>
        </form>
    </div>
  );

  // Màn hình 3: Kết quả
  const renderResult = () => (
    <div className="results-box">
        <h3 className="results-title">Kết Quả Đánh Giá</h3>
        <div className="results-recommendation">
            {resultMessage}
        </div>
        <div className="result-actions">
            <a href="#product" className="cta-button-view-kit">Xem Bộ Kit Phù Hợp</a>
            <button onClick={resetSelection} className="btn-retry">Làm bài test khác</button>
        </div>
    </div>
  );

  return (
    <section id="test" className="assessment-section">
      <div className="assessment-content">
        <h2 className="assessment-title">Đánh Giá Nhu Cầu Can Thiệp</h2>
        
        {!activeTestId && renderTestSelection()}
        {activeTestId && !isCompleted && renderQuestions()}
        {activeTestId && isCompleted && renderResult()}
        
      </div>
    </section>
  );
};

export default AssessmentSection;