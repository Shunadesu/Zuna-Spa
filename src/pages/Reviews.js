import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Reviews = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

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

  const ratingOptions = [
    { value: 'all', label: 'Tất cả' },
    { value: '5', label: '5 sao' },
    { value: '4', label: '4 sao' },
    { value: '3', label: '3 sao' },
    { value: '2', label: '2 sao' },
    { value: '1', label: '1 sao' }
  ];

  const serviceOptions = [
    { value: 'all', label: 'Tất cả dịch vụ' },
    { value: 'massage', label: 'Massage' },
    { value: 'facial', label: 'Chăm sóc da' },
    { value: 'body', label: 'Body treatment' },
    { value: 'wellness', label: 'Wellness' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Nguyễn Thị Lan',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80',
      rating: 5,
      service: 'massage',
      date: '15/12/2023',
      title: 'Trải nghiệm tuyệt vời!',
      content: 'Tôi đã trải nghiệm massage tại Zuna Spa và thực sự rất hài lòng. Nhân viên chuyên nghiệp, không gian thoải mái và kỹ thuật massage rất tốt. Chắc chắn sẽ quay lại!',
      images: ['https://images.unsplash.com/photo-1544161512-6ad1f9baa7b8?auto=format&fit=crop&w=300&q=80']
    },
    {
      id: 2,
      name: 'Trần Văn Hùng',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      rating: 5,
      service: 'facial',
      date: '12/12/2023',
      title: 'Chăm sóc da hiệu quả',
      content: 'Dịch vụ chăm sóc da tại đây thực sự chất lượng. Sau khi sử dụng, da tôi mịn màng và tươi sáng hơn hẳn. Cảm ơn đội ngũ chuyên gia!',
      images: []
    },
    {
      id: 3,
      name: 'Lê Thị Mai',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
      rating: 4,
      service: 'body',
      date: '10/12/2023',
      title: 'Body treatment thư giãn',
      content: 'Body treatment giúp tôi thư giãn hoàn toàn sau những ngày làm việc căng thẳng. Mùi hương dễ chịu và kỹ thuật massage rất chuyên nghiệp.',
      images: ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=300&q=80']
    },
    {
      id: 4,
      name: 'Phạm Văn An',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
      rating: 5,
      service: 'wellness',
      date: '08/12/2023',
      title: 'Wellness package hoàn hảo',
      content: 'Gói wellness bao gồm nhiều dịch vụ kết hợp rất tốt. Tôi cảm thấy sức khỏe được cải thiện đáng kể sau khi sử dụng.',
      images: []
    },
    {
      id: 5,
      name: 'Hoàng Thị Hoa',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
      rating: 4,
      service: 'massage',
      date: '05/12/2023',
      title: 'Massage thư giãn',
      content: 'Massage giúp tôi giảm stress rất hiệu quả. Nhân viên thân thiện và chuyên nghiệp. Không gian spa rất đẹp và thoải mái.',
      images: ['https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80']
    },
    {
      id: 6,
      name: 'Vũ Văn Bình',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
      rating: 5,
      service: 'facial',
      date: '03/12/2023',
      title: 'Chăm sóc da chuyên nghiệp',
      content: 'Dịch vụ chăm sóc da rất chuyên nghiệp. Chuyên gia tư vấn kỹ lưỡng và sử dụng sản phẩm chất lượng cao. Kết quả rất tốt!',
      images: []
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesRating = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const matchesService = selectedService === 'all' || review.service === selectedService;
    return matchesRating && matchesService;
  });

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? themeColors.accent : 'text-gray-300'} ml-2`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Đánh giá từ khách hàng
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Khám phá những trải nghiệm thực tế từ khách hàng đã sử dụng dịch vụ tại Zuna Spa
            </p>
            
            {/* Overall Rating */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                {renderStars(5)}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">4.8/5</div>
              <div className="text-gray-600 mb-4">Dựa trên {reviews.length} đánh giá</div>
              <div className="text-sm text-gray-500">98% khách hàng hài lòng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {/* Rating Filter */}
            <div className="flex flex-wrap gap-2">
              {ratingOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedRating(option.value)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedRating === option.value
                      ? `${themeColors.bgAccent} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            
            {/* Service Filter */}
            <div className="flex flex-wrap gap-2">
              {serviceOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedService(option.value)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedService === option.value
                      ? `${themeColors.bgAccent} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {filteredReviews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <img 
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">{review.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{review.content}</p>
                  </div>
                  
                  {/* Service Badge */}
                  <div className="mb-6">
                    <span className={`${themeColors.bgAccent} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {serviceOptions.find(s => s.value === review.service)?.label}
                    </span>
                  </div>
                  
                  {/* Images */}
                  {review.images.length > 0 && (
                    <div className="flex gap-2">
                      {review.images.map((image, index) => (
                        <img 
                          key={index}
                          src={image}
                          alt="Review"
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Không tìm thấy đánh giá</h3>
              <p className="text-gray-600">Hãy thử chọn bộ lọc khác để xem đánh giá.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Sẵn sàng trải nghiệm?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Đặt lịch ngay hôm nay để tận hưởng dịch vụ spa chất lượng cao và trở thành một trong những khách hàng hài lòng của chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/booking" 
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Đặt lịch ngay
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Liên hệ tư vấn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews; 