import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SmartBooking = () => {
  const { theme } = useContext(ThemeContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
    mood: '',
    skinType: '',
    stressLevel: ''
  });
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
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
        bgLightHover: 'hover:bg-pink-100',
        border: 'border-pink-300',
        borderHover: 'hover:border-pink-400'
      },
      'blue': {
        accent: 'text-blue-600',
        bgAccent: 'bg-blue-600',
        bgHover: 'hover:bg-blue-700',
        bgLight: 'bg-blue-50',
        bgLightHover: 'hover:bg-blue-100',
        border: 'border-blue-300',
        borderHover: 'hover:border-blue-400'
      },
      'purple': {
        accent: 'text-purple-600',
        bgAccent: 'bg-purple-600',
        bgHover: 'hover:bg-purple-700',
        bgLight: 'bg-purple-50',
        bgLightHover: 'hover:bg-purple-100',
        border: 'border-purple-300',
        borderHover: 'hover:border-purple-400'
      },
      'green': {
        accent: 'text-emerald-600',
        bgAccent: 'bg-emerald-600',
        bgHover: 'hover:bg-emerald-700',
        bgLight: 'bg-emerald-50',
        bgLightHover: 'hover:bg-emerald-100',
        border: 'border-emerald-300',
        borderHover: 'hover:border-emerald-400'
      },
      'orange': {
        accent: 'text-orange-600',
        bgAccent: 'bg-orange-600',
        bgHover: 'hover:bg-orange-700',
        bgLight: 'bg-orange-50',
        bgLightHover: 'hover:bg-orange-100',
        border: 'border-orange-300',
        borderHover: 'hover:border-orange-400'
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
      category: 'massage',
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
      category: 'massage',
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
      category: 'skincare',
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
      category: 'therapy',
      benefits: ['Giảm đau nhức', 'Tăng cường sức khỏe', 'Thư giãn toàn thân'],
      suitableFor: ['pain', 'stress', 'tired']
    }
  ];

  const packages = [
    {
      id: 1,
      name: 'Gói Thư Giãn Cơ Bản',
      services: [1, 2],
      originalPrice: 1200000,
      discountPrice: 1000000,
      description: 'Massage thư giãn + Massage đá nóng',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Gói Chăm Sóc Toàn Diện',
      services: [3, 4],
      originalPrice: 2000000,
      discountPrice: 1700000,
      description: 'Chăm sóc da mặt + Trị liệu cơ thể',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80'
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

  // Real-time availability simulation
  const generateAvailableSlots = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    const isToday = selectedDate.toDateString() === today.toDateString();
    
    if (isToday) {
      const currentHour = today.getHours();
      return timeSlots.filter(slot => {
        const slotHour = parseInt(slot.split(':')[0]);
        return slotHour > currentHour + 1;
      });
    }
    
    return timeSlots;
  };

  const handleServiceSelect = (service) => {
    setBookingData({ ...bookingData, service });
    setCurrentStep(2);
  };

  const handlePackageSelect = (packageId) => {
    const pkg = packages.find(p => p.id === packageId);
    setSelectedPackages([...selectedPackages, pkg]);
  };

  const handleDateSelect = (date) => {
    setBookingData({ ...bookingData, date });
    setAvailableSlots(generateAvailableSlots(date));
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
  const totalPrice = selectedPackages.reduce((sum, pkg) => sum + pkg.discountPrice, 0) + 
                    (selectedService ? selectedService.price : 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-800 mb-8">
              Đặt lịch dịch vụ thông minh
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Hệ thống đặt lịch AI giúp bạn chọn dịch vụ phù hợp nhất
            </p>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Progress Steps */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center space-x-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step 
                      ? `${themeColors.bgAccent} text-white` 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-4 ${
                      currentStep > step ? themeColors.bgAccent : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {currentStep === 1 && (
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">
                    AI sẽ giúp bạn chọn dịch vụ phù hợp
                  </h2>
                  
                  {/* Mood & Skin Analysis */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Phân tích nhu cầu</h3>
                    
                    {/* Mood Selection */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">Tâm trạng hiện tại:</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { value: 'stress', label: 'Căng thẳng', emoji: '😰' },
                          { value: 'tired', label: 'Mệt mỏi', emoji: '😴' },
                          { value: 'anxiety', label: 'Lo âu', emoji: '😟' },
                          { value: 'normal', label: 'Bình thường', emoji: '😊' }
                        ].map((mood) => (
                          <button
                            key={mood.value}
                            onClick={() => handleMoodChange(mood.value)}
                            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                              bookingData.mood === mood.value
                                ? `${themeColors.border} ${themeColors.bgLight}`
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="text-2xl mb-2">{mood.emoji}</div>
                            <div className="text-sm font-medium">{mood.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Skin Type Selection */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">Loại da:</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { value: 'dry', label: 'Da khô' },
                          { value: 'oily', label: 'Da dầu' },
                          { value: 'combination', label: 'Da hỗn hợp' },
                          { value: 'sensitive', label: 'Da nhạy cảm' }
                        ].map((type) => (
                          <button
                            key={type.value}
                            onClick={() => setBookingData({...bookingData, skinType: type.value})}
                            className={`p-3 rounded-lg border-2 transition-all duration-300 ${
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
                  </div>

                  {/* AI Recommendations */}
                  {recommendations.length > 0 && (
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                        <span className="mr-2">🤖</span>
                        AI đề xuất cho bạn
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {recommendations.map((service) => (
                          <div
                            key={service.id}
                            onClick={() => handleServiceSelect(service.id)}
                            className="bg-white rounded-xl p-4 shadow-md cursor-pointer hover:shadow-lg transition-all duration-300"
                          >
                            <img
                              src={service.image}
                              alt={service.name}
                              className="w-full h-32 object-cover rounded-lg mb-3"
                            />
                            <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                            <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-bold text-pink-600">{service.price.toLocaleString()} VNĐ</span>
                              <span className="text-sm text-gray-500">{service.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* All Services */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Tất cả dịch vụ</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => handleServiceSelect(service.id)}
                          className={`bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 ${themeColors.borderHover} cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105`}
                        >
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-2xl font-bold text-pink-600">{service.price.toLocaleString()} VNĐ</span>
                            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{service.duration}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {service.benefits.map((benefit, index) => (
                              <span key={index} className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">
                    Chọn gói dịch vụ (tùy chọn)
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {packages.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => handlePackageSelect(pkg.id)}
                        className={`bg-white rounded-2xl shadow-lg p-6 border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                          selectedPackages.find(p => p.id === pkg.id)
                            ? `${themeColors.border} ${themeColors.bgLight}`
                            : 'border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{pkg.name}</h3>
                        <p className="text-gray-600 mb-4">{pkg.description}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-500 line-through">{pkg.originalPrice.toLocaleString()} VNĐ</span>
                            <div className="text-xl font-bold text-pink-600">{pkg.discountPrice.toLocaleString()} VNĐ</div>
                          </div>
                          <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                            -{Math.round((1 - pkg.discountPrice / pkg.originalPrice) * 100)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Quay lại
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white px-8 py-3 rounded-lg transition-colors`}
                    >
                      Tiếp tục
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">
                    Chọn thời gian
                  </h2>
                  
                  {/* Date Selection */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Chọn ngày</h3>
                    <input
                      type="date"
                      name="date"
                      value={bookingData.date}
                      onChange={(e) => handleDateSelect(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>

                  {/* Time Selection */}
                  {bookingData.date && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-6">Chọn giờ</h3>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {availableSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
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
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Quay lại
                    </button>
                    <button
                      onClick={() => setCurrentStep(4)}
                      disabled={!bookingData.date || !bookingData.time}
                      className={`px-8 py-3 rounded-lg transition-colors ${
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

              {currentStep === 4 && (
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">
                    Thông tin cá nhân
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                        <input
                          type="text"
                          name="name"
                          value={bookingData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={bookingData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ghi chú</label>
                      <textarea
                        name="notes"
                        value={bookingData.notes}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Nhập yêu cầu đặc biệt hoặc ghi chú..."
                      />
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Quay lại
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white px-8 py-3 rounded-lg transition-colors flex items-center ${
                          isLoading ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Tóm tắt đặt lịch</h3>
                
                {selectedService && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Dịch vụ đã chọn:</h4>
                    <div className="flex items-center space-x-3">
                      <img
                        src={selectedService.image}
                        alt={selectedService.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium text-gray-800">{selectedService.name}</p>
                        <p className="text-sm text-gray-600">{selectedService.duration}</p>
                        <p className="text-lg font-bold text-pink-600">{selectedService.price.toLocaleString()} VNĐ</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedPackages.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Gói đã chọn:</h4>
                    {selectedPackages.map((pkg) => (
                      <div key={pkg.id} className="mb-3 p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium text-gray-800">{pkg.name}</p>
                        <p className="text-sm text-gray-600">{pkg.description}</p>
                        <p className="text-lg font-bold text-pink-600">{pkg.discountPrice.toLocaleString()} VNĐ</p>
                      </div>
                    ))}
                  </div>
                )}

                {bookingData.date && bookingData.time && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Thời gian:</h4>
                    <p className="text-gray-600">{new Date(bookingData.date).toLocaleDateString('vi-VN')}</p>
                    <p className="text-gray-600">{bookingData.time}</p>
                  </div>
                )}

                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-800">Tổng cộng:</span>
                    <span className="text-2xl font-bold text-pink-600">{totalPrice.toLocaleString()} VNĐ</span>
                  </div>
                  
                  {selectedPackages.length > 0 && (
                    <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                      💰 Tiết kiệm: {(selectedPackages.reduce((sum, pkg) => sum + (pkg.originalPrice - pkg.discountPrice), 0)).toLocaleString()} VNĐ
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartBooking; 