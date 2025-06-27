import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Booking = () => {
  const { theme } = useContext(ThemeContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

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
      price: '500,000 VNĐ',
      duration: '60 phút',
      description: 'Trải nghiệm massage thư giãn với các kỹ thuật chuyên nghiệp',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Massage Đá Nóng',
      price: '700,000 VNĐ',
      duration: '90 phút',
      description: 'Massage với đá nóng giúp thư giãn sâu và giảm đau nhức',
      image: 'https://images.unsplash.com/photo-1544161512-6ad1f9baa7b8?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Chăm Sóc Da Mặt',
      price: '800,000 VNĐ',
      duration: '90 phút',
      description: 'Dịch vụ chăm sóc da mặt chuyên sâu với sản phẩm cao cấp',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Trị Liệu Cơ Thể',
      price: '1,200,000 VNĐ',
      duration: '120 phút',
      description: 'Trị liệu cơ thể toàn diện giúp giảm đau nhức',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingData);
    alert('Đặt lịch thành công! Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.');
  };

  const selectedService = services.find(s => s.id === bookingData.service);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-800 mb-8">
              Đặt lịch dịch vụ
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Đặt lịch dịch vụ spa của bạn một cách dễ dàng và nhanh chóng
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
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step 
                      ? `${themeColors.bgAccent} text-white` 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
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
                    Chọn dịch vụ
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className={`bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 ${themeColors.borderHover} cursor-pointer transition-all duration-300 hover:shadow-xl`}
                      >
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="flex justify-between items-center">
                          <span className={`text-2xl font-bold ${themeColors.accent}`}>{service.price}</span>
                          <span className="text-gray-500">{service.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">
                    Chọn thời gian
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Date Selection */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Chọn ngày</h3>
                      <div className="grid grid-cols-7 gap-2">
                        {Array.from({ length: 7 }, (_, i) => {
                          const date = new Date();
                          date.setDate(date.getDate() + i);
                          const dateString = date.toISOString().split('T')[0];
                          const dayName = date.toLocaleDateString('vi-VN', { weekday: 'short' });
                          const dayNumber = date.getDate();
                          
                          return (
                            <button
                              key={i}
                              onClick={() => handleDateSelect(dateString)}
                              className={`p-4 rounded-lg text-center transition-colors ${
                                bookingData.date === dateString
                                  ? `${themeColors.bgAccent} text-white`
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              <div className="text-sm font-medium">{dayName}</div>
                              <div className="text-lg font-bold">{dayNumber}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Chọn giờ</h3>
                      <div className="grid grid-cols-5 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={`p-3 rounded-lg text-center transition-colors ${
                              bookingData.time === time
                                ? `${themeColors.bgAccent} text-white`
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-8">
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        ← Quay lại
                      </button>
                      <button
                        onClick={() => setCurrentStep(3)}
                        disabled={!bookingData.date || !bookingData.time}
                        className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                          bookingData.date && bookingData.time
                            ? `${themeColors.bgAccent} ${themeColors.bgHover} text-white`
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Tiếp tục →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">
                    Thông tin cá nhân
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Họ và tên *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={bookingData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Nhập họ và tên"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={bookingData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Nhập email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ghi chú
                      </label>
                      <textarea
                        name="notes"
                        value={bookingData.notes}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nhập ghi chú (nếu có)"
                      ></textarea>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-8">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        ← Quay lại
                      </button>
                      <button
                        type="submit"
                        className={`px-8 py-3 rounded-lg font-semibold ${themeColors.bgAccent} ${themeColors.bgHover} text-white transition-colors`}
                      >
                        Đặt lịch
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Tóm tắt đặt lịch</h3>
                
                {selectedService && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">{selectedService.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{selectedService.description}</p>
                    <div className="flex justify-between items-center">
                      <span className={`font-bold ${themeColors.accent}`}>{selectedService.price}</span>
                      <span className="text-gray-500 text-sm">{selectedService.duration}</span>
                    </div>
                  </div>
                )}

                {bookingData.date && (
                  <div className="mb-4">
                    <span className="text-gray-600">Ngày: </span>
                    <span className="font-medium text-gray-800">
                      {new Date(bookingData.date).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                )}

                {bookingData.time && (
                  <div className="mb-6">
                    <span className="text-gray-600">Giờ: </span>
                    <span className="font-medium text-gray-800">{bookingData.time}</span>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Tổng cộng:</span>
                    <span className={`text-xl font-bold ${themeColors.accent}`}>
                      {selectedService ? selectedService.price : '0 VNĐ'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">* Giá đã bao gồm thuế</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking; 