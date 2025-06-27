import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ParallaxHero from '../components/ParallaxHero';
import ParticleBackground from '../components/ParticleBackground';
import MorphingShapes from '../components/MorphingShapes';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  // Function to get theme colors
  const getThemeColors = () => {
    const colors = {
      'pink': {
        accent: 'text-pink-600',
        bgAccent: 'bg-pink-600',
        bgHover: 'hover:bg-pink-700',
        bgLight: 'hover:bg-pink-50',
        border: 'border-pink-600'
      },
      'blue': {
        accent: 'text-blue-600',
        bgAccent: 'bg-blue-600',
        bgHover: 'hover:bg-blue-700',
        bgLight: 'hover:bg-blue-50',
        border: 'border-blue-600'
      },
      'purple': {
        accent: 'text-purple-600',
        bgAccent: 'bg-purple-600',
        bgHover: 'hover:bg-purple-700',
        bgLight: 'hover:bg-purple-50',
        border: 'border-purple-600'
      },
      'green': {
        accent: 'text-emerald-600',
        bgAccent: 'bg-emerald-600',
        bgHover: 'hover:bg-emerald-700',
        bgLight: 'hover:bg-emerald-50',
        border: 'border-emerald-600'
      },
      'orange': {
        accent: 'text-orange-600',
        bgAccent: 'bg-orange-600',
        bgHover: 'hover:bg-orange-700',
        bgLight: 'hover:bg-orange-50',
        border: 'border-orange-600'
      }
    };
    return colors[theme] || colors['pink'];
  };

  const themeColors = getThemeColors();

  // Function to get gradient colors based on theme
  const getGradientColors = () => {
    const gradients = {
      'pink': 'bg-gradient-to-r from-pink-300 via-pink-500 to-pink-700',
      'blue': 'bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700', 
      'purple': 'bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700',
      'green': 'bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-700',
      'orange': 'bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700'
    };
    return gradients[theme] || gradients['pink'];
  };

  const features = [
    {
      icon: "🌸",
      title: "Dịch vụ chất lượng cao",
      description: "Đội ngũ chuyên gia giàu kinh nghiệm với các kỹ thuật spa hiện đại"
    },
    {
      icon: "🌿",
      title: "Môi trường thư giãn",
      description: "Không gian yên tĩnh, thoải mái giúp bạn thư giãn hoàn toàn"
    },
    {
      icon: "✨",
      title: "Sản phẩm tự nhiên",
      description: "Sử dụng các sản phẩm organic và tự nhiên tốt cho da"
    }
  ];

  const services = [
    {
      title: "Massage thư giãn",
      description: "Giảm stress, thư giãn cơ bắp",
      price: "500.000đ",
      image: "https://images.unsplash.com/photo-1544161512-4f8b5d0c0c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Chăm sóc da mặt",
      description: "Làm sạch và dưỡng ẩm da",
      price: "800.000đ",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Body treatment",
      description: "Chăm sóc toàn thân chuyên sâu",
      price: "1.200.000đ",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Nguyễn Thị Anh",
      role: "Khách hàng thường xuyên",
      content: "Dịch vụ rất tốt, nhân viên chuyên nghiệp. Tôi rất hài lòng với trải nghiệm tại đây.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Trần Văn Bình",
      role: "Khách hàng mới",
      content: "Lần đầu đến spa và rất ấn tượng với không gian và dịch vụ. Sẽ quay lại thường xuyên.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Lê Thị Cẩm",
      role: "Khách hàng VIP",
      content: "Đã sử dụng dịch vụ nhiều năm, chất lượng luôn ổn định và ngày càng cải thiện.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ParallaxHero 
        backgroundImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        speed={0.3}
      >
        <ParticleBackground particleCount={30} theme={theme} />
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                  Thư giãn và làm đẹp tại{' '}
                  <span className={`${getGradientColors()} bg-clip-text text-transparent bg-gradient-to-r bg-[length:200%_100%] animate-gradient-x`}>
                    Zuna Spa
                  </span>
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                  Nơi thư giãn và làm đẹp hàng đầu với các dịch vụ spa chất lượng cao, 
                  mang đến trải nghiệm thư giãn tuyệt vời cho khách hàng.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/booking"
                    className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
                  >
                    Đặt lịch ngay
                  </Link>
                  <Link
                    to="/services"
                    className={`bg-white/90 backdrop-blur-sm ${themeColors.bgLight} ${themeColors.accent} border-2 ${themeColors.border} font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white shadow-lg`}
                  >
                    Xem dịch vụ
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Spa Relaxation"
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full animate-bounce" style={{animationDelay: '1s'}} />
              </div>
            </div>
          </div>
        </section>
      </ParallaxHero>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-100 rounded-full animate-float opacity-30" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-100 rounded-full animate-float-delay-1 opacity-30" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-100 rounded-full animate-float-delay-2 opacity-30" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Tại sao chọn Zuna Spa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi cam kết mang đến trải nghiệm spa tốt nhất với những ưu điểm nổi bật
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift backdrop-blur-light">
                <div className="text-4xl mb-4 animate-float">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
        <MorphingShapes count={2} theme={theme} />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Dịch vụ nổi bật
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá các dịch vụ spa chất lượng cao của chúng tôi
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift group">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`text-2xl font-bold ${themeColors.accent}`}>{service.price}</span>
                    <Link
                      to="/booking"
                      className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300 hover:scale-105`}
                    >
                      Đặt lịch
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 hover:scale-105 shadow-lg`}
            >
              Xem tất cả dịch vụ
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những đánh giá chân thực từ khách hàng đã sử dụng dịch vụ
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Sẵn sàng trải nghiệm thư giãn?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Đặt lịch ngay hôm nay để được tận hưởng các dịch vụ spa chất lượng cao
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105`}
            >
              Đặt lịch ngay
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 