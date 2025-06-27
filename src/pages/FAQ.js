import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const FAQ = () => {
  const { theme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState(new Set());

  // Function to get theme colors
  const getThemeColors = () => {
    const colors = {
      'pink': {
        accent: 'text-pink-600',
        bgAccent: 'bg-pink-600',
        bgHover: 'hover:bg-pink-700',
        bgLight: 'bg-pink-50',
        bgLightHover: 'hover:bg-pink-100',
        border: 'border-pink-500',
        borderHover: 'hover:border-pink-600'
      },
      'blue': {
        accent: 'text-blue-600',
        bgAccent: 'bg-blue-600',
        bgHover: 'hover:bg-blue-700',
        bgLight: 'bg-blue-50',
        bgLightHover: 'hover:bg-blue-100',
        border: 'border-blue-500',
        borderHover: 'hover:border-blue-600'
      },
      'purple': {
        accent: 'text-purple-600',
        bgAccent: 'bg-purple-600',
        bgHover: 'hover:bg-purple-700',
        bgLight: 'bg-purple-50',
        bgLightHover: 'hover:bg-purple-100',
        border: 'border-purple-500',
        borderHover: 'hover:border-purple-600'
      },
      'green': {
        accent: 'text-emerald-600',
        bgAccent: 'bg-emerald-600',
        bgHover: 'hover:bg-emerald-700',
        bgLight: 'bg-emerald-50',
        bgLightHover: 'hover:bg-emerald-100',
        border: 'border-emerald-500',
        borderHover: 'hover:border-emerald-600'
      },
      'orange': {
        accent: 'text-orange-600',
        bgAccent: 'bg-orange-600',
        bgHover: 'hover:bg-orange-700',
        bgLight: 'bg-orange-50',
        bgLightHover: 'hover:bg-orange-100',
        border: 'border-orange-500',
        borderHover: 'hover:border-orange-600'
      }
    };
    return colors[theme] || colors['pink'];
  };

  const themeColors = getThemeColors();

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'booking', name: 'Đặt lịch' },
    { id: 'services', name: 'Dịch vụ' },
    { id: 'pricing', name: 'Giá cả' },
    { id: 'general', name: 'Chung' }
  ];

  const faqData = [
    {
      id: 1,
      question: 'Làm thế nào để đặt lịch tại Zuna Spa?',
      answer: 'Bạn có thể đặt lịch trực tiếp tại spa, qua điện thoại hoặc sử dụng form đặt lịch trực tuyến trên website. Chúng tôi khuyến nghị đặt lịch trước ít nhất 24 giờ để đảm bảo có chuyên gia phù hợp.',
      category: 'booking'
    },
    {
      id: 2,
      question: 'Có cần đặt lịch trước không?',
      answer: 'Chúng tôi khuyến nghị đặt lịch trước để đảm bảo có chuyên gia phù hợp và tránh chờ đợi. Tuy nhiên, bạn vẫn có thể đến trực tiếp nếu có chỗ trống.',
      category: 'booking'
    },
    {
      id: 3,
      question: 'Thời gian làm việc của spa như thế nào?',
      answer: 'Zuna Spa mở cửa từ 8:00 sáng đến 22:00 tối, 7 ngày trong tuần để phục vụ khách hàng. Chúng tôi không nghỉ vào các ngày lễ.',
      category: 'general'
    },
    {
      id: 4,
      question: 'Có chính sách hủy lịch không?',
      answer: 'Bạn có thể hủy lịch miễn phí trước 24 giờ. Hủy trong vòng 24 giờ sẽ có phí hủy lịch bằng 50% giá trị dịch vụ.',
      category: 'booking'
    },
    {
      id: 5,
      question: 'Các dịch vụ spa có an toàn không?',
      answer: 'Tất cả các dịch vụ tại Zuna Spa đều được thực hiện bởi các chuyên gia có chứng chỉ và kinh nghiệm. Chúng tôi sử dụng các sản phẩm cao cấp và thiết bị được kiểm định an toàn.',
      category: 'services'
    },
    {
      id: 6,
      question: 'Có thể thay đổi chuyên gia massage không?',
      answer: 'Bạn có thể yêu cầu thay đổi chuyên gia khi đặt lịch hoặc trước khi bắt đầu dịch vụ. Chúng tôi sẽ cố gắng đáp ứng yêu cầu của bạn.',
      category: 'services'
    },
    {
      id: 7,
      question: 'Giá dịch vụ có bao gồm thuế không?',
      answer: 'Tất cả giá dịch vụ đã bao gồm thuế VAT. Không có phí phát sinh thêm ngoài giá đã niêm yết.',
      category: 'pricing'
    },
    {
      id: 8,
      question: 'Có chương trình khuyến mãi nào không?',
      answer: 'Chúng tôi thường xuyên có các chương trình khuyến mãi cho khách hàng thân thiết và các dịch vụ mới. Bạn có thể theo dõi trên website hoặc fanpage để cập nhật.',
      category: 'pricing'
    },
    {
      id: 9,
      question: 'Có thể mang trẻ em đến spa không?',
      answer: 'Để đảm bảo không gian thư giãn cho tất cả khách hàng, chúng tôi không khuyến nghị mang trẻ em dưới 12 tuổi đến spa. Trẻ em từ 12 tuổi trở lên có thể sử dụng một số dịch vụ phù hợp.',
      category: 'general'
    },
    {
      id: 10,
      question: 'Có dịch vụ spa tại nhà không?',
      answer: 'Hiện tại chúng tôi chưa cung cấp dịch vụ spa tại nhà. Tất cả dịch vụ được thực hiện tại spa để đảm bảo chất lượng và an toàn.',
      category: 'services'
    },
    {
      id: 11,
      question: 'Có thể thanh toán bằng thẻ tín dụng không?',
      answer: 'Chúng tôi chấp nhận thanh toán bằng tiền mặt, thẻ tín dụng, thẻ ghi nợ và chuyển khoản ngân hàng.',
      category: 'general'
    },
    {
      id: 12,
      question: 'Có dịch vụ spa cho nam giới không?',
      answer: 'Tất cả dịch vụ tại Zuna Spa đều phù hợp cho cả nam và nữ. Chúng tôi có các chuyên gia nam và nữ để phục vụ khách hàng.',
      category: 'services'
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Câu hỏi thường gặp
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Tìm câu trả lời cho những thắc mắc phổ biến về dịch vụ spa của chúng tôi
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm câu hỏi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 rounded-full border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg shadow-lg"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `${themeColors.bgAccent} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </h3>
                      <svg 
                        className={`w-6 h-6 ${themeColors.accent} flex-shrink-0 transition-transform duration-300 ${
                          openItems.has(faq.id) ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openItems.has(faq.id) && (
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Không tìm thấy câu hỏi</h3>
                <p className="text-gray-600">Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Vẫn chưa tìm thấy câu trả lời?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+842812345678" 
              className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg`}
            >
              Gọi ngay
            </a>
            <a 
              href="mailto:info@zunaspa.com" 
              className={`border-2 ${themeColors.border} ${themeColors.accent} ${themeColors.bgAccent} ${themeColors.bgHover} hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg`}
            >
              Gửi email
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-6">
              Thông tin hữu ích khác
            </h2>
            <p className="text-xl text-gray-600">
              Khám phá thêm các thông tin và dịch vụ của chúng tôi
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Privacy Policy */}
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className={`w-16 h-16 ${themeColors.bgLight} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <svg className={`w-8 h-8 ${themeColors.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Chính sách bảo mật</h3>
              <p className="text-gray-600 mb-6">Tìm hiểu cách chúng tôi bảo vệ thông tin cá nhân của bạn</p>
              <a href="/privacy" className={`${themeColors.accent} ${themeColors.bgHover} font-semibold`}>
                Xem chi tiết →
              </a>
            </div>

            {/* Contact */}
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className={`w-16 h-16 ${themeColors.bgLight} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <svg className={`w-8 h-8 ${themeColors.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Liên hệ trực tiếp</h3>
              <p className="text-gray-600 mb-6">Liên hệ với chúng tôi để được tư vấn chi tiết</p>
              <a href="/contact" className={`${themeColors.accent} ${themeColors.bgHover} font-semibold`}>
                Liên hệ ngay →
              </a>
            </div>

            {/* Blog */}
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className={`w-16 h-16 ${themeColors.bgLight} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <svg className={`w-8 h-8 ${themeColors.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Blog & Tin tức</h3>
              <p className="text-gray-600 mb-6">Khám phá các bài viết hữu ích về chăm sóc sức khỏe</p>
              <a href="/blog" className={`${themeColors.accent} ${themeColors.bgHover} font-semibold`}>
                Đọc blog →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 