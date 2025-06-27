import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SmartBookingWidget = () => {
  const { theme } = useContext(ThemeContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    mood: '',
    skinType: '',
    stressLevel: ''
  });
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to get theme colors
  const getThemeColors = () => {
    const colors = {
      'pink': {
        accent: 'text-pink-600',
        bgAccent: 'bg-pink-600',
        bgHover: 'hover:bg-pink-700',
        bgLight: 'bg-pink-50',
        border: 'border-pink-300'
      },
      'blue': {
        accent: 'text-blue-600',
        bgAccent: 'bg-blue-600',
        bgHover: 'hover:bg-blue-700',
        bgLight: 'bg-blue-50',
        border: 'border-blue-300'
      },
      'purple': {
        accent: 'text-purple-600',
        bgAccent: 'bg-purple-600',
        bgHover: 'hover:bg-purple-700',
        bgLight: 'bg-purple-50',
        border: 'border-purple-300'
      },
      'green': {
        accent: 'text-emerald-600',
        bgAccent: 'bg-emerald-600',
        bgHover: 'hover:bg-emerald-700',
        bgLight: 'bg-emerald-50',
        border: 'border-emerald-300'
      },
      'orange': {
        accent: 'text-orange-600',
        bgAccent: 'bg-orange-600',
        bgHover: 'hover:bg-orange-700',
        bgLight: 'bg-orange-50',
        border: 'border-orange-300'
      }
    };
    return colors[theme] || colors['pink'];
  };

  const themeColors = getThemeColors();

  const services = [
    {
      id: 1,
      name: 'Massage Thư Giãn',
      price: 500000,
      duration: '60 phút',
      description: 'Trải nghiệm massage thư giãn với các kỹ thuật chuyên nghiệp',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      benefits: ['Giảm stress', 'Thư giãn cơ bắp', 'Cải thiện tuần hoàn'],
      suitableFor: ['stress', 'tired', 'normal']
    },
    {
      id: 2,
      name: 'Massage Đá Nóng',
      price: 700000,
      duration: '90 phút',
      description: 'Massage với đá nóng giúp thư giãn sâu và giảm đau nhức',
      image: 'https://images.unsplash.com/photo-1544161512-6ad1f9baa7b8?auto=format&fit=crop&w=400&q=80',
      benefits: ['Giảm đau nhức', 'Thư giãn sâu', 'Cải thiện lưu thông máu'],
      suitableFor: ['pain', 'stress', 'tired']
    },
    {
      id: 3,
      name: 'Chăm Sóc Da Mặt',
      price: 800000,
      duration: '90 phút',
      description: 'Dịch vụ chăm sóc da mặt chuyên sâu với sản phẩm cao cấp',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      benefits: ['Làm sạch sâu', 'Dưỡng ẩm', 'Trẻ hóa da'],
      suitableFor: ['dry', 'oily', 'combination', 'sensitive']
    },
    {
      id: 4,
      name: 'Trị Liệu Cơ Thể',
      price: 1200000,
      duration: '120 phút',
      description: 'Trị liệu cơ thể toàn diện giúp giảm đau nhức',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      benefits: ['Giảm đau nhức', 'Tăng cường sức khỏe', 'Thư giãn toàn thân'],
      suitableFor: ['pain', 'stress', 'tired']
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  // AI Recommendation System
  const generateRecommendations = (mood, skinType, stressLevel) => {
    let recommendations = [];
    
    if (mood === 'stress' || stressLevel === 'high') {
      recommendations.push(...services.filter(s => s.suitableFor.includes('stress')));
    }
    
    if (skinType) {
      recommendations.push(...services.filter(s => s.suitableFor.includes(skinType)));
    }
    
    if (mood === 'tired') {
      recommendations.push(...services.filter(s => s.suitableFor.includes('tired')));
    }
    
    return [...new Set(recommendations)].slice(0, 3);
  };

  const handleServiceSelect = (service) => {
    setBookingData({ ...bookingData, service });
    setCurrentStep(2);
  };

  const handleDateSelect = (date) => {
    setBookingData({ ...bookingData, date });
  };

  const handleTimeSelect = (time) => {
    setBookingData({ ...bookingData, time });
  };

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleMoodChange = (mood) => {
    setBookingData({ ...bookingData, mood });
    const recs = generateRecommendations(mood, bookingData.skinType, bookingData.stressLevel);
    setRecommendations(recs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Booking submitted:', bookingData);
    alert('Đặt lịch thành công! Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.');
    setIsLoading(false);
  };

  const selectedService = services.find(s => s.id === bookingData.service);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-96 max-h-[600px] overflow-hidden">
        {/* Header */}
        <div className={`${themeColors.bgAccent} text-white p-6`}>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">🤖 Smart Booking</h3>
            <button 
              onClick={() => setCurrentStep(1)}
              className="text-white/80 hover:text-white"
            >
              ✕
            </button>
          </div>
          <p className="text-white/80 text-sm mt-2">AI sẽ giúp bạn chọn dịch vụ phù hợp</p>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[500px] overflow-y-auto">
          {currentStep === 1 && (
            <div>
              {/* Mood Analysis */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Tâm trạng hiện tại:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 'stress', label: 'Căng thẳng', emoji: '😰' },
                    { value: 'tired', label: 'Mệt mỏi', emoji: '😴' },
                    { value: 'anxiety', label: 'Lo âu', emoji: '😟' },
                    { value: 'normal', label: 'Bình thường', emoji: '😊' }
                  ].map((mood) => (
                    <button
                      key={mood.value}
                      onClick={() => handleMoodChange(mood.value)}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        bookingData.mood === mood.value
                          ? `${themeColors.border} ${themeColors.bgLight}`
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-lg mb-1">{mood.emoji}</div>
                      <div className="text-xs font-medium">{mood.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Skin Type */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Loại da:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 'dry', label: 'Da khô' },
                    { value: 'oily', label: 'Da dầu' },
                    { value: 'combination', label: 'Da hỗn hợp' },
                    { value: 'sensitive', label: 'Da nhạy cảm' }
                  ].map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setBookingData({...bookingData, skinType: type.value})}
                      className={`p-2 rounded-lg border-2 transition-all duration-300 text-sm ${
                        bookingData.skinType === type.value
                          ? `${themeColors.border} ${themeColors.bgLight}`
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Recommendations */}
              {recommendations.length > 0 && (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">🤖</span>
                    AI đề xuất
                  </h4>
                  <div className="space-y-3">
                    {recommendations.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className="bg-white rounded-lg p-3 shadow-sm cursor-pointer hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-800 text-sm">{service.name}</h5>
                            <p className="text-xs text-gray-600">{service.duration}</p>
                            <p className="text-sm font-bold text-pink-600">{service.price.toLocaleString()} VNĐ</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* All Services */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Tất cả dịch vụ</h4>
                <div className="space-y-3">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className="bg-gray-50 rounded-lg p-3 cursor-pointer hover:bg-gray-100 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-800 text-sm">{service.name}</h5>
                          <p className="text-xs text-gray-600">{service.description}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm font-bold text-pink-600">{service.price.toLocaleString()} VNĐ</span>
                            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">{service.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Chọn thời gian</h4>
              
              {/* Date Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Ngày:</label>
                <input
                  type="date"
                  name="date"
                  value={bookingData.date}
                  onChange={(e) => handleDateSelect(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              {/* Time Selection */}
              {bookingData.date && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Giờ:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`p-2 rounded-lg border-2 transition-all duration-300 text-sm ${
                          bookingData.time === time
                            ? `${themeColors.border} ${themeColors.bgLight}`
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Quay lại
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  disabled={!bookingData.date || !bookingData.time}
                  className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                    bookingData.date && bookingData.time
                      ? `${themeColors.bgAccent} ${themeColors.bgHover} text-white`
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Tiếp tục
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Thông tin cá nhân</h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên *</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    Quay lại
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white px-6 py-2 rounded-lg transition-colors flex items-center text-sm ${
                      isLoading ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Đang xử lý...
                      </>
                    ) : (
                      'Xác nhận đặt lịch'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Summary */}
        {selectedService && (
          <div className="border-t p-4 bg-gray-50">
            <div className="flex items-center space-x-3">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-10 h-10 object-cover rounded-lg"
              />
              <div>
                <p className="font-medium text-gray-800 text-sm">{selectedService.name}</p>
                <p className="text-sm font-bold text-pink-600">{selectedService.price.toLocaleString()} VNĐ</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartBookingWidget; 