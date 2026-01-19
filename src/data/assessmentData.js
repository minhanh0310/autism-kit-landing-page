// src/data/assessmentData.js

export const assessmentTests = {
    level1: {
        id: 'lv1',
        title: "Level 1: Đánh Giá Giác Quan (Nền Tảng)",
        description: "Kiểm tra mức độ nhạy cảm của trẻ với âm thanh, ánh sáng và xúc giác.",
        questions: [
            {
                id: 101,
                question: "Con phản ứng thế nào khi nghe tiếng máy sấy, máy hút bụi hoặc tiếng ồn lớn?",
                options: [
                    { text: "Bịt tai, la hét hoặc trốn đi (Quá nhạy cảm)", value: 1 },
                    { text: "Thích thú, ghé sát tai vào nghe (Tìm kiếm cảm giác)", value: 2 },
                    { text: "Không để ý hoặc phản ứng bình thường", value: 3 }
                ]
            },
            {
                id: 102,
                question: "Con có kén chọn quần áo (không thích vải thô, mác áo) không?",
                options: [
                    { text: "Rất khó chịu, thường xuyên cởi ra ngay", value: 1 },
                    { text: "Thỉnh thoảng mới khó chịu", value: 2 },
                    { text: "Mặc gì cũng được", value: 3 }
                ]
            },
            {
                id: 103,
                question: "Con có hay đi nhón chân (đi bằng mũi chân) không?",
                options: [
                    { text: "Thường xuyên, gần như cả ngày", value: 1 },
                    { text: "Thỉnh thoảng khi phấn khích", value: 2 },
                    { text: "Đi lại bình thường bằng cả bàn chân", value: 3 }
                ]
            },
            {
                id: 104,
                question: "Con có thích nhìn các vật quay tròn (quạt trần, bánh xe) trong thời gian dài không?",
                options: [
                    { text: "Rất thích, nhìn mê mẩn không gọi được", value: 1 },
                    { text: "Có nhìn một lúc rồi thôi", value: 2 },
                    { text: "Không quan tâm lắm", value: 3 }
                ]
            },
            {
                id: 105,
                question: "Con ăn uống thế nào?",
                options: [
                    { text: "Rất kén ăn, chỉ ăn một vài món quen thuộc (nhạy cảm vị giác/cấu trúc)", value: 1 },
                    { text: "Ăn được đa dạng nhưng hơi chậm", value: 2 },
                    { text: "Ăn uống tốt, dễ tính", value: 3 }
                ]
            }
        ],
        recommendation: {
            low: "Trẻ có dấu hiệu Rối loạn xử lý giác quan. Ưu tiên dùng **Sensory Kit** để điều hòa hệ thần kinh trước.",
            high: "Giác quan của trẻ khá ổn định. Bạn có thể chuyển sang bài test Level 2."
        }
    },
    level2: {
        id: 'lv2',
        title: "Level 2: Tương Tác Xã Hội (Phát Triển)",
        description: "Đánh giá khả năng giao tiếp mắt, chơi đùa và kết nối với người khác.",
        questions: [
            {
                id: 201,
                question: "Khi bạn gọi tên, con có quay lại nhìn ngay không?",
                options: [
                    { text: "Hiếm khi hoặc không bao giờ (như bị điếc)", value: 1 },
                    { text: "Lúc có lúc không, phải gọi to nhiều lần", value: 2 },
                    { text: "Thường quay lại ngay và nhìn vào mắt", value: 3 }
                ]
            },
            {
                id: 202,
                question: "Con có biết dùng ngón tay trỏ để chỉ vào thứ mình muốn không?",
                options: [
                    { text: "Không, thường kéo tay người lớn đặt lên đồ vật", value: 1 },
                    { text: "Chỉ dùng cả bàn tay vẫy vẫy", value: 2 },
                    { text: "Biết dùng ngón trỏ chỉ rõ ràng", value: 3 }
                ]
            },
            {
                id: 203,
                question: "Con có biết chơi giả vờ không (ví dụ: cho búp bê ăn, giả làm bác sĩ)?",
                options: [
                    { text: "Không, chỉ xếp đồ chơi thành hàng hoặc quay bánh xe", value: 1 },
                    { text: "Bắt chước được vài hành động đơn giản", value: 2 },
                    { text: "Chơi giả vờ phong phú, có cốt truyện", value: 3 }
                ]
            },
            {
                id: 204,
                question: "Con có mang đồ chơi đến khoe với ba mẹ không?",
                options: [
                    { text: "Không bao giờ, thích chơi một mình", value: 1 },
                    { text: "Thỉnh thoảng khi cần giúp đỡ mới đưa", value: 2 },
                    { text: "Thường xuyên khoe và muốn ba mẹ chơi cùng", value: 3 }
                ]
            },
            {
                id: 205,
                question: "Con có bắt chước hành động của bạn (vỗ tay, bai bai, hôn gió) không?",
                options: [
                    { text: "Rất khó khăn hoặc không làm", value: 1 },
                    { text: "Làm được nếu được nhắc nhở", value: 2 },
                    { text: "Bắt chước nhanh và tự nhiên", value: 3 }
                ]
            }
        ],
        recommendation: {
            low: "Kỹ năng xã hội còn hạn chế. **Social Interaction Kit** là công cụ cần thiết nhất lúc này.",
            high: "Tương tác khá tốt! Hãy kiểm tra tiếp Level 3 về cảm xúc."
        }
    },
    level3: {
        id: 'lv3',
        title: "Level 3: Cảm Xúc & Hành Vi (Nâng Cao)",
        description: "Đánh giá khả năng nhận biết và kiểm soát cảm xúc khi gặp khó khăn.",
        questions: [
            {
                id: 301,
                question: "Khi không đạt được ý muốn, con thường phản ứng thế nào?",
                options: [
                    { text: "La hét, đập đầu, ăn vạ dữ dội (Meltdown)", value: 1 },
                    { text: "Khóc lóc nhưng dỗ dành được", value: 2 },
                    { text: "Biết tỏ thái độ không vui nhưng không quá khích", value: 3 }
                ]
            },
            {
                id: 302,
                question: "Con có nhận biết được cảm xúc của người khác (vui, buồn, giận) không?",
                options: [
                    { text: "Không quan tâm hoặc cười khi người khác khóc", value: 1 },
                    { text: "Có vẻ hiểu nhưng không biết cách phản ứng", value: 2 },
                    { text: "Biết an ủi hoặc hỏi han", value: 3 }
                ]
            },
            {
                id: 303,
                question: "Con có gặp khó khăn khi thay đổi lịch trình sinh hoạt không?",
                options: [
                    { text: "Rất hoảng loạn nếu đi đường khác hoặc đổi giờ ăn", value: 1 },
                    { text: "Hơi khó chịu nhưng chấp nhận được", value: 2 },
                    { text: "Thích nghi tốt với thay đổi", value: 3 }
                ]
            },
            {
                id: 304,
                question: "Con có hay tự làm đau bản thân (cắn tay, đập đầu) khi stress không?",
                options: [
                    { text: "Thường xuyên xảy ra", value: 1 },
                    { text: "Hiếm khi", value: 2 },
                    { text: "Không bao giờ", value: 3 }
                ]
            },
            {
                id: 305,
                question: "Con có biết chờ đợi đến lượt mình (turn-taking) không?",
                options: [
                    { text: "Không, luôn tranh giành hoặc chen ngang", value: 1 },
                    { text: "Cần nhắc nhở nhiều lần", value: 2 },
                    { text: "Biết xếp hàng và chờ đợi", value: 3 }
                ]
            }
        ],
        recommendation: {
            low: "Trẻ gặp khó khăn lớn trong điều tiết cảm xúc. **Emotional Regulation Kit** sẽ giúp con bình tĩnh hơn.",
            high: "Tuyệt vời! Con có trí tuệ cảm xúc tốt. Hãy duy trì bằng các hoạt động nâng cao."
        }
    }
};