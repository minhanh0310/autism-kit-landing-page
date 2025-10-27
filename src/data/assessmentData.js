export const assessmentQuestions = [
    {
        id: 1,
        question: "1. Con bạn có thường sử dụng cử chỉ, ánh mắt để truyền đạt mong muốn không?",
        options: [
            { text: "Thường xuyên", value: 3 },
            { text: "Thỉnh thoảng", value: 2 },
            { text: "Hiếm khi hoặc không bao giờ", value: 1 }
        ],
        type: 'Social'
    },
    {
        id: 2,
        question: "2. Con bạn phản ứng thế nào với các cảm giác mạnh (âm thanh lớn, vải thô ráp)?",
        options: [
            { text: "Thường xuyên khó chịu, che tai", value: 1 }, 
            { text: "Thích thú, tìm kiếm kích thích mạnh", value: 2 }, 
            { text: "Phản ứng bình thường", value: 3 }
        ],
        type: 'Sensory'
    },
    {
        id: 3,
        question: "3. Khả năng tập trung vào một hoạt động có cấu trúc là bao lâu?",
        options: [
            { text: "Dưới 2 phút", value: 1 },
            { text: "Từ 2 đến 5 phút", value: 2 },
            { text: "Hơn 5 phút", value: 3 }
        ],
        type: 'Focus'
    },
    {
        id: 4,
        question: "4. Khi buồn bã hoặc tức giận, con bạn có thể làm gì để tự trấn tĩnh lại?",
        options: [
            { text: "Tự ôm mình/dùng đồ chơi bóp (điều chỉnh tích cực)", value: 3 },
            { text: "Khóc/la hét cho đến khi có được thứ mình muốn", value: 1 },
            { text: "Đánh, cắn, hoặc húc đầu vào đồ vật", value: 1 }
        ],
        type: 'Emotional'
    },
];

export const results = {
    highSocial: "Social Interaction Kit và Video Hướng Dẫn Tương Tác là ưu tiên hàng đầu!",
    highSensory: "Sensory Kit và Emotional Regulation Kit sẽ giúp con điều chỉnh cảm xúc tốt hơn.",
    default: "Dựa trên đánh giá, Gói Premium Toàn Diện là lựa chọn tốt nhất để tối ưu phát triển.",
    cta: "HOÀN THÀNH ĐÁNH GIÁ - XEM GỢI Ý KIT CỦA BẠN",
};