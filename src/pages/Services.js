import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ParallaxHero from '../components/ParallaxHero';
import { ThemeContext } from '../context/ThemeContext';

const Services = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Function to get theme colors
  const getThemeColors = () => {
    const colors = {
      'pink': {
        accent: 'text-pink-600',
        bgAccent: 'bg-pink-600',
        bgHover: 'hover:bg-pink-700',
        bgLight: 'bg-pink-50',
        bgLightHover: 'hover:bg-pink-100',
        border: 'border-pink-600'
      },
      'blue': {
        accent: 'text-blue-600',
        bgAccent: 'bg-blue-600',
        bgHover: 'hover:bg-blue-700',
        bgLight: 'bg-blue-50',
        bgLightHover: 'hover:bg-blue-100',
        border: 'border-blue-600'
      },
      'purple': {
        accent: 'text-purple-600',
        bgAccent: 'bg-purple-600',
        bgHover: 'hover:bg-purple-700',
        bgLight: 'bg-purple-50',
        bgLightHover: 'hover:bg-purple-100',
        border: 'border-purple-600'
      },
      'green': {
        accent: 'text-emerald-600',
        bgAccent: 'bg-emerald-600',
        bgHover: 'hover:bg-emerald-700',
        bgLight: 'bg-emerald-50',
        bgLightHover: 'hover:bg-emerald-100',
        border: 'border-emerald-600'
      },
      'orange': {
        accent: 'text-orange-600',
        bgAccent: 'bg-orange-600',
        bgHover: 'hover:bg-orange-700',
        bgLight: 'bg-orange-50',
        bgLightHover: 'hover:bg-orange-100',
        border: 'border-orange-600'
      }
    };
    return colors[theme] || colors['pink'];
  };

  const themeColors = getThemeColors();

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'massage', name: 'Massage' },
    { id: 'facial', name: 'Chăm sóc da' },
    { id: 'body', name: 'Body treatment' },
    { id: 'wellness', name: 'Wellness' }
  ];

  const services = [
    {
      id: 1,
      title: "Massage thư giãn",
      category: "massage",
      description: "Giảm stress, thư giãn cơ bắp với kỹ thuật massage chuyên nghiệp",
      price: "500.000đ",
      duration: "60 phút",
      image: "https://images.unsplash.com/photo-1544161512-4f8b5d0c0c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Giảm stress", "Thư giãn cơ bắp", "Cải thiện tuần hoàn", "Tăng cường năng lượng"],
      popular: true
    },
    {
      id: 2,
      title: "Chăm sóc da mặt",
      category: "facial",
      description: "Làm sạch và dưỡng ẩm da với sản phẩm organic",
      price: "800.000đ",
      duration: "90 phút",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Làm sạch sâu", "Dưỡng ẩm", "Chống lão hóa", "Làm sáng da"],
      popular: true
    },
    {
      id: 3,
      title: "Body treatment",
      category: "body",
      description: "Chăm sóc toàn thân chuyên sâu với các liệu pháp spa",
      price: "1.200.000đ",
      duration: "120 phút",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Tẩy tế bào chết", "Dưỡng ẩm toàn thân", "Thư giãn sâu", "Làm mềm da"],
      popular: true
    },
    {
      id: 4,
      title: "Hot stone massage",
      category: "massage",
      description: "Massage với đá nóng giúp thư giãn sâu và giảm đau cơ",
      price: "700.000đ",
      duration: "75 phút",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Giảm đau cơ", "Thư giãn sâu", "Cải thiện tuần hoàn", "Giảm stress"],
      popular: true
    },
    {
      id: 5,
      title: "Anti-aging facial",
      category: "facial",
      description: "Liệu pháp chống lão hóa chuyên sâu cho làn da trẻ trung",
      price: "1.000.000đ",
      duration: "90 phút",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Chống lão hóa", "Làm mờ nếp nhăn", "Tăng collagen", "Làm sáng da"],
      popular: true
    },
    {
      id: 6,
      title: "Aromatherapy",
      category: "wellness",
      description: "Liệu pháp hương thơm giúp cân bằng tinh thần và thể chất",
      price: "600.000đ",
      duration: "60 phút",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Cân bằng tinh thần", "Giảm stress", "Cải thiện giấc ngủ", "Tăng năng lượng"],
      popular: true
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className={`min-h-screen ${themeColors.background}`}>
      {/* Hero Section */}
      <ParallaxHero 
        backgroundImage="https://images.unsplash.com/photo-1544161512-4f8b5d0c0c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        speed={0.35}
      >
        <section className="py-20 lg:py-32">
          <div className="container-custom text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              Dịch vụ của chúng tôi
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
              Khám phá các dịch vụ spa chất lượng cao được thiết kế để mang lại trải nghiệm thư giãn và làm đẹp tốt nhất
            </p>
            <Link
              to="/booking"
              className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
            >
              Đặt lịch ngay
            </Link>
          </div>
        </section>
      </ParallaxHero>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `${themeColors.bgAccent} text-white`
                    : `${themeColors.bgLight} ${themeColors.accent} ${themeColors.bgLightHover}`
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  {service.popular && (
                    <div className={`absolute top-4 right-4 ${themeColors.bgAccent} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      Phổ biến
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <span className={`text-sm ${themeColors.accent} font-medium`}>
                      {service.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Lợi ích:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className={`w-2 h-2 ${themeColors.bgAccent} rounded-full mr-2`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-2xl font-bold ${themeColors.accent}`}>
                      {service.price}
                    </span>
                    <Link
                      to="/booking"
                      className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300`}
                    >
                      Đặt lịch
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">Không có dịch vụ nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
            Cần tư vấn thêm?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn chi tiết về các dịch vụ phù hợp với nhu cầu của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300`}
            >
              Liên hệ tư vấn
            </Link>
            <Link
              to="/booking"
              className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300`}
            >
              Đặt lịch ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 