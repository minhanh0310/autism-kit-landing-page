import imgSensory from '../assets/images/kit-sensory.png'; // Dùng tạm ảnh hero nếu chưa có ảnh kit riêng
import basicSensory from '../assets/images/kit-sensory.png'; // Dùng tạm ảnh hero nếu chưa có ảnh kit riêng
import standardSensory from '../assets/images/kit-standard-sensory.png'; // Dùng tạm ảnh hero nếu chưa có ảnh kit riêng   
import premiumSensory from '../assets/images/kit-premium-sensory.png'; // Dùng tạm ảnh hero nếu chưa có ảnh kit riêng   

import imgSocial from '../assets/images/kit-social.png'; // Dùng tạm ảnh hero nếu chưa có ảnh kit riêng
import basicSocial from '../assets/images/kit-social.png'; // Dùng tạm ảnh hero nếu chưa có ảnh kit riêng
import standardSocial from '../assets/images/kit-social.png'; // Dùng tạm ảnh hero nếu chưa có ảnh kit riêng
import premiumSocial from '../assets/images/kit-premium-social.png'; // Dùng tạm ảnh hero nếu chưa có ảnh kit riêng

import imgEmotional from '../assets/images/kit-emotional.png'; // Dùng tạm ảnh hero nếu chưa có ảnh kit riêng
import basicEmotional from '../assets/images/kit-emotional.png'; // Dùng tạm ảnh hero nếu chưa có ảnh kit riêng
import standardEmotional from '../assets/images/kit-standard-emotional.png'; // Dùng tạm ảnh hero nếu chưa có ảnh kit riêng
import premiumEmotional from '../assets/images/kit-premium-emotional.png'; // Dùng tạm ảnh hero nếu chưa có ảnh kit riêng


export const productKits = [
    {
        id: 'sensory',
        name: 'Sensory Kit',
        icon: '💡',
        color: '#ffdd71', 
        image: imgSensory,
        focus: 'Kích thích giác quan (xúc giác, thị giác, thính giác) giúp trẻ tăng tập trung.',
        videoLink: '#',
        videoId: 'PHzrVZqguCk',
        tiers: {
            basic: {
                name: "Basic Kit",
                image: basicSensory,
                price: "350.000₫",
                description: "Gói cơ bản gồm các đồ chơi vật lý giúp trẻ làm quen với các bài tập cảm giác đơn giản.",
                contents: [
                    'Bóng gai (Spiky Balls)',
                    'Túi cát cảm giác (Sensory Bags)',
                    'Hướng dẫn sử dụng (PDF)'
                ]
            },
            standard: {
                name: "Standard Bundle",
                image: standardSensory,
                price: "750.000₫",
                description: "Gói tiêu chuẩn bổ sung thêm video hướng dẫn từ chuyên gia giúp cha mẹ tương tác đúng cách.",
                contents: [
                    'Bóng gai + Túi cát + Đèn đổi màu',
                    'Bảng cảm ứng xúc giác (Texture Board)',
                    'Video hướng dẫn cơ bản (6 tháng)',
                    'Tham gia nhóm Zalo hỗ trợ'
                ]
            },
            premium: {
                name: "Premium Bundle",
                image: premiumSensory,
                price: "1.200.000₫",
                description: "Giải pháp toàn diện nhất với đầy đủ công cụ và sự hỗ trợ trực tiếp 1-1 từ chuyên gia.",
                contents: [
                    'Full bộ đồ chơi (Bóng, Đèn, Bảng, Fidget Tools)',
                    'Kho Video bài giảng chuyên sâu trọn đời',
                    'Bộ Test đánh giá định kỳ',
                    '1 buổi tư vấn 1-1 với chuyên gia'
                ]
            }
        }
    },
    {
        id: 'social',
        name: 'Social Kit',
        icon: '🤝',
        color: '#ff9887',
        image: imgSocial,
        focus: 'Khuyến khích trẻ giao tiếp mắt, chia sẻ và chơi luân phiên.',
        videoLink: '#',
        videoId: 'PHzrVZqguCk',
        tiers: {
            basic: {
                name: "Basic Kit",
                image: basicSocial,
                price: "350.000₫",
                description: "Bộ công cụ cơ bản để bắt đầu các trò chơi tương tác đơn giản.",
                contents: ['Bộ thẻ tương tác', 'Búp bê cảm xúc', 'Hướng dẫn PDF']
            },
            standard: {
                name: "Standard Bundle",
                image: standardSocial,
                price: "750.000₫",
                description: "Kết hợp đồ chơi và video mẫu để cha mẹ dễ dàng đóng vai cùng con.",
                contents: ['Thẻ tương tác + Búp bê', 'Trò chơi Board Game luân phiên', 'Video hướng dẫn chơi']
            },
            premium: {
                name: "Premium Bundle",
                image: premiumSocial,
                price: "1.200.000₫",
                description: "Bộ công cụ cao cấp giúp phát triển ngôn ngữ và kỹ năng xã hội chuyên sâu.",
                contents: ['Full bộ đồ chơi Social', 'Micro giao tiếp', 'Video can thiệp ngôn ngữ', 'Tư vấn 1-1']
            }
        }
    },
    {
        id: 'emotional',
        name: 'Emotional Kit',
        icon: '❤️',
        color: '#87e0ff',
            image: imgEmotional,
        focus: 'Giúp trẻ nhận biết và tự điều chỉnh cảm xúc (giận dữ, lo âu).',
        videoLink: '#',
        videoId: 'PHzrVZqguCk',
        tiers: {
            basic: {
                name: "Basic Kit",
                image: basicEmotional,
                price: "350.000₫",
                description: "Các công cụ trực quan giúp trẻ gọi tên cảm xúc.",
                contents: ['Thẻ Mood Meter', 'Vòng hít thở', 'Hướng dẫn PDF']
            },
            standard: {
                name: "Standard Bundle",
                image: standardEmotional,
                price: "750.000₫",
                description: "Bổ sung góc bình yên (Calm Corner) giúp trẻ tự trấn tĩnh.",
                contents: ['Mood Meter + Vòng hít thở', 'Tranh hành vi', 'Video hướng dẫn Calm Down', 'Hỗ trợ nhóm Zalo']
            },
            premium: {
                name: "Premium Bundle",
                image: premiumEmotional,
                price: "1.200.000₫",
                description: "Giải pháp trọn gói để xây dựng trí tuệ cảm xúc (EQ) cho trẻ.",
                contents: ['Full bộ đồ chơi Emotional', 'Hộp Calm Down Box đầy đủ', 'Video chuyên sâu xử lý hành vi', 'Tư vấn 1-1']
            }
        }
    },
];