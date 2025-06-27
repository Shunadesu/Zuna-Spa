import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import { ThemeContext } from '../context/ThemeContext';

const Promotions = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

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
        borderHover: 'hover:border-pink-600',
        btn: 'bg-pink-600 hover:bg-pink-700 text-white',
        btnOutline: 'bg-white text-pink-600 hover:bg-pink-50 border border-pink-600',
      },
      'blue': {
        accent: 'text-blue-600',
        bgAccent: 'bg-blue-600',
        bgHover: 'hover:bg-blue-700',
        bgLight: 'bg-blue-50',
        bgLightHover: 'hover:bg-blue-100',
        border: 'border-blue-500',
        borderHover: 'hover:border-blue-600',
        btn: 'bg-blue-600 hover:bg-blue-700 text-white',
        btnOutline: 'bg-white text-blue-600 hover:bg-blue-50 border border-blue-600',
      },
      'purple': {
        accent: 'text-purple-600',
        bgAccent: 'bg-purple-600',
        bgHover: 'hover:bg-purple-700',
        bgLight: 'bg-purple-50',
        bgLightHover: 'hover:bg-purple-100',
        border: 'border-purple-500',
        borderHover: 'hover:border-purple-600',
        btn: 'bg-purple-600 hover:bg-purple-700 text-white',
        btnOutline: 'bg-white text-purple-600 hover:bg-purple-50 border border-purple-600',
      },
      'green': {
        accent: 'text-emerald-600',
        bgAccent: 'bg-emerald-600',
        bgHover: 'hover:bg-emerald-700',
        bgLight: 'bg-emerald-50',
        bgLightHover: 'hover:bg-emerald-100',
        border: 'border-emerald-500',
        borderHover: 'hover:border-emerald-600',
        btn: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        btnOutline: 'bg-white text-emerald-600 hover:bg-emerald-50 border border-emerald-600',
      },
      'orange': {
        accent: 'text-orange-600',
        bgAccent: 'bg-orange-600',
        bgHover: 'hover:bg-orange-700',
        bgLight: 'bg-orange-50',
        bgLightHover: 'hover:bg-orange-100',
        border: 'border-orange-500',
        borderHover: 'hover:border-orange-600',
        btn: 'bg-orange-600 hover:bg-orange-700 text-white',
        btnOutline: 'bg-white text-orange-600 hover:bg-orange-50 border border-orange-600',
      }
    };
    return colors[theme] || colors['pink'];
  };

  const themeColors = getThemeColors();

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'massage', name: 'Massage' },
    { id: 'facial', name: 'Chăm sóc da' },
    { id: 'package', name: 'Gói combo' },
    { id: 'new', name: 'Dịch vụ mới' }
  ];

  const promotions = [
    {
      id: 1,
      title: 'Khuyến Mãi Mùa Hè - Giảm 30%',
      category: 'massage',
      description: 'Tận hưởng các dịch vụ massage với mức giá ưu đãi đặc biệt trong mùa hè này. Giảm 30% cho tất cả dịch vụ massage.',
      originalPrice: '700,000 VNĐ',
      discountedPrice: '490,000 VNĐ',
      discount: '30%',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
      validUntil: '2024-01-31',
      services: ['Massage Thư Giãn', 'Massage Đá Nóng', 'Trị Liệu Cơ Thể'],
      terms: [
        'Áp dụng cho tất cả khách hàng',
        'Không áp dụng cùng các khuyến mãi khác',
        'Cần đặt lịch trước 24 giờ'
      ]
    },
    {
      id: 2,
      title: 'Combo Chăm Sóc Da - Tiết Kiệm 25%',
      category: 'facial',
      description: 'Gói combo chăm sóc da toàn diện bao gồm làm sạch, dưỡng ẩm và chống lão hóa với giá ưu đãi.',
      originalPrice: '1,200,000 VNĐ',
      discountedPrice: '900,000 VNĐ',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80',
      validUntil: '2024-02-15',
      services: ['Làm Sạch Sâu', 'Dưỡng Ẩm', 'Chống Lão Hóa'],
      terms: [
        'Áp dụng cho khách hàng mới',
        'Cần đặt lịch trước 48 giờ',
        'Không hoàn tiền nếu hủy lịch'
      ]
    },
    {
      id: 3,
      title: 'Gói Spa Toàn Diện - Giảm 40%',
      category: 'package',
      description: 'Trải nghiệm spa toàn diện với massage, chăm sóc da và thư giãn trong một buổi trị liệu.',
      originalPrice: '2,000,000 VNĐ',
      discountedPrice: '1,200,000 VNĐ',
      discount: '40%',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80',
      validUntil: '2024-01-20',
      services: ['Massage Toàn Thân', 'Chăm Sóc Da Mặt', 'Thư Giãn'],
      terms: [
        'Áp dụng cho khách hàng VIP',
        'Cần đặt lịch trước 72 giờ',
        'Thời gian trị liệu: 3 giờ'
      ]
    },
    {
      id: 4,
      title: 'Dịch Vụ Mới - Giảm 20%',
      category: 'new',
      description: 'Khám phá dịch vụ mới - Yoga Trị Liệu với mức giá ưu đãi đặc biệt cho khách hàng đầu tiên.',
      originalPrice: '600,000 VNĐ',
      discountedPrice: '480,000 VNĐ',
      discount: '20%',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=80',
      validUntil: '2024-02-28',
      services: ['Yoga Trị Liệu', 'Thiền Định', 'Tư Vấn Sức Khỏe'],
      terms: [
        'Áp dụng cho 50 khách hàng đầu tiên',
        'Cần đặt lịch trước 24 giờ',
        'Giáo viên yoga chuyên nghiệp'
      ]
    },
    {
      id: 5,
      title: 'Khuyến Mãi Sinh Nhật - Giảm 50%',
      category: 'massage',
      description: 'Đặc biệt dành cho khách hàng trong tháng sinh nhật. Giảm 50% cho tất cả dịch vụ massage.',
      originalPrice: '800,000 VNĐ',
      discountedPrice: '400,000 VNĐ',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1544161512-6ad1f9baa7b8?auto=format&fit=crop&w=500&q=80',
      validUntil: '2024-12-31',
      services: ['Massage Thư Giãn', 'Massage Đá Nóng'],
      terms: [
        'Áp dụng trong tháng sinh nhật',
        'Cần xuất trình CMND/CCCD',
        'Chỉ áp dụng cho khách hàng thân thiết'
      ]
    },
    {
      id: 6,
      title: 'Combo Gia Đình - Tiết Kiệm 35%',
      category: 'package',
      description: 'Gói spa dành cho gia đình với các dịch vụ phù hợp cho mọi lứa tuổi.',
      originalPrice: '3,500,000 VNĐ',
      discountedPrice: '2,275,000 VNĐ',
      discount: '35%',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80',
      validUntil: '2024-03-15',
      services: ['Massage Cho Người Lớn', 'Chăm Sóc Da Cho Trẻ', 'Thư Giãn Gia Đình'],
      terms: [
        'Áp dụng cho gia đình từ 3 người trở lên',
        'Cần đặt lịch trước 1 tuần',
        'Có phòng riêng cho gia đình'
      ]
    }
  ];

  const filteredPromotions = selectedCategory === 'all' 
    ? promotions 
    : promotions.filter(promo => promo.category === selectedCategory);

  // Newsletter submit handler
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-spa-pink-50 to-pink-pastel-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-800 mb-8">
              Khuyến mãi & Ưu đãi
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
              Khám phá những ưu đãi đặc biệt và khuyến mãi hấp dẫn tại Zuna Spa
            </p>
            
            {/* Countdown Timer */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Khuyến mãi mùa hè kết thúc sau:
              </h3>
              <CountdownTimer />
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

      {/* Promotions Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {filteredPromotions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPromotions.map((promotion) => (
                <div key={promotion.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={promotion.image}
                      alt={promotion.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${themeColors.bgAccent} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {categories.find(cat => cat.id === promotion.category)?.name}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        -{promotion.discount}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{promotion.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{promotion.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Dịch vụ bao gồm:</h4>
                      <ul className="space-y-2">
                        {promotion.services.map((service, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <svg className={`w-4 h-4 ${themeColors.accent} mr-3 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Điều khoản:</h4>
                      <ul className="space-y-1">
                        {promotion.terms.map((term, index) => (
                          <li key={index} className="text-sm text-gray-500 flex items-start">
                            <span className="text-gray-400 mr-2">•</span>
                            {term}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-spa-pink-600">{promotion.discountedPrice}</span>
                          <span className="text-gray-400 line-through ml-2">{promotion.originalPrice}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          Hạn đến: {new Date(promotion.validUntil).toLocaleDateString('vi-VN')}
                        </div>
                      </div>
                      
                      <Link 
                        to="/booking" 
                        className={`w-full ${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center block`}
                      >
                        Đặt lịch ngay
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <p className="text-xl text-gray-600">Không có khuyến mãi nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-400">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Nhận thông báo khuyến mãi
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Đăng ký nhận thông báo về các khuyến mãi mới nhất và ưu đãi đặc biệt từ Zuna Spa
          </p>
          <form className="max-w-md mx-auto flex" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              value={newsletterEmail}
              onChange={e => setNewsletterEmail(e.target.value)}
              placeholder="Nhập email của bạn..."
              className="flex-1 px-6 py-4 rounded-l-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-lg"
              required
            />
            <button
              type="submit"
              className={`rounded-r-lg font-semibold px-8 py-4 transition-colors text-lg ${themeColors.btn}`}
            >
              Đăng ký
            </button>
          </form>
          {newsletterSuccess && (
            <div className="mt-4 text-white font-semibold animate-fade-in">
              🎉 Đăng ký thành công! Bạn sẽ nhận được thông báo mới nhất từ Zuna Spa.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-6">
            Sẵn sàng trải nghiệm?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Đặt lịch ngay hôm nay để tận hưởng các khuyến mãi hấp dẫn tại Zuna Spa
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/booking" className="btn-primary text-lg px-8 py-4">
              Đặt lịch ngay
            </Link>
            <Link to="/services" className="btn-secondary text-lg px-8 py-4">
              Xem tất cả dịch vụ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotions; 