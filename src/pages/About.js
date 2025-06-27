import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ParallaxHero from '../components/ParallaxHero';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
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

  const stats = [
    { number: "5+", label: "Năm kinh nghiệm" },
    { number: "1000+", label: "Khách hàng hài lòng" },
    { number: "50+", label: "Chuyên gia spa" },
    { number: "100%", label: "Sản phẩm tự nhiên" }
  ];

  const values = [
    {
      icon: "💎",
      title: "Chất lượng cao",
      description: "Cam kết mang đến dịch vụ spa chất lượng cao nhất với đội ngũ chuyên gia giàu kinh nghiệm"
    },
    {
      icon: "🤝",
      title: "Tận tâm",
      description: "Luôn đặt sự hài lòng của khách hàng lên hàng đầu, tận tâm phục vụ từng chi tiết nhỏ"
    },
    {
      icon: "🌿",
      title: "Tự nhiên",
      description: "Sử dụng các sản phẩm organic và phương pháp tự nhiên tốt cho sức khỏe và môi trường"
    },
    {
      icon: "✨",
      title: "Sáng tạo",
      description: "Liên tục cập nhật và sáng tạo các liệu pháp spa mới, hiện đại"
    }
  ];

  const team = [
    {
      name: "Nguyễn Thị Mai",
      role: "Giám đốc",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      experience: "15 năm kinh nghiệm"
    },
    {
      name: "Trần Văn Nam",
      role: "Chuyên gia massage",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      experience: "12 năm kinh nghiệm"
    },
    {
      name: "Lê Thị Hương",
      role: "Chuyên gia chăm sóc da",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      experience: "10 năm kinh nghiệm"
    }
  ];

  return (
    <div className={`min-h-screen ${themeColors.background}`}>
      {/* Hero Section */}
      <ParallaxHero 
        backgroundImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        speed={0.4}
      >
        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                  Về{' '}
                  <span className={themeColors.accent}>Zuna Spa</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                  Zuna Spa được thành lập với mục tiêu mang đến trải nghiệm thư giãn và làm đẹp tốt nhất cho khách hàng. 
                  Với đội ngũ chuyên gia giàu kinh nghiệm và cơ sở vật chất hiện đại, chúng tôi cam kết mang đến những dịch vụ spa chất lượng cao.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/booking"
                    className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg`}
                  >
                    Đặt lịch ngay
                  </Link>
                  <Link
                    to="/contact"
                    className={`bg-white/90 backdrop-blur-sm ${themeColors.bgLight} ${themeColors.accent} border-2 ${themeColors.border} font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white shadow-lg`}
                  >
                    Liên hệ
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Zuna Spa"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full animate-bounce" style={{animationDelay: '0.3s'}} />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full animate-bounce" style={{animationDelay: '0.8s'}} />
              </div>
            </div>
          </div>
        </section>
      </ParallaxHero>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl lg:text-5xl font-bold text-${themeColors.accent} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-16 lg:py-24 ${themeColors.background}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những giá trị định hình nên chất lượng dịch vụ và văn hóa của Zuna Spa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Đội ngũ chuyên gia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gặp gỡ những chuyên gia spa giàu kinh nghiệm và tận tâm của chúng tôi
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className={`text-${themeColors.accent} font-medium mb-2`}>{member.role}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-16 lg:py-24 ${themeColors.background}`}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
                Câu chuyện của chúng tôi
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Zuna Spa được thành lập từ tình yêu với nghệ thuật thư giãn và làm đẹp. 
                Chúng tôi tin rằng mỗi người đều xứng đáng được tận hưởng những khoảnh khắc thư giãn tuyệt vời 
                và được chăm sóc với sự tận tâm nhất.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Với hơn 10 năm kinh nghiệm trong ngành spa, chúng tôi đã phục vụ hàng nghìn khách hàng 
                và nhận được sự tin tưởng, yêu mến từ cộng đồng. Đó chính là động lực để chúng tôi 
                không ngừng cải thiện và mang đến những dịch vụ tốt nhất.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hãy để chúng tôi mang đến cho bạn trải nghiệm thư giãn tuyệt vời và giúp bạn 
                khám phá vẻ đẹp tự nhiên của mình.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1544161512-4f8b5d0c0c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Spa Interior"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Spa Treatment"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
            Sẵn sàng trải nghiệm?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hãy để chúng tôi mang đến cho bạn trải nghiệm spa tuyệt vời và khám phá vẻ đẹp tự nhiên của mình
          </p>
          <Link
            to="/booking"
            className={`${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105`}
          >
            Đặt lịch ngay
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About; 