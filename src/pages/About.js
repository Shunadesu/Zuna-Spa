import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import VideoBackground from '../components/VideoBackground';
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
        border: 'border-pink-600',
        gradient: 'from-pink-400 to-pink-600',
        gradientHover: 'from-pink-500 to-pink-700'
      },
      'blue': {
        accent: 'text-blue-600',
        bgAccent: 'bg-blue-600',
        bgHover: 'hover:bg-blue-700',
        bgLight: 'hover:bg-blue-50',
        border: 'border-blue-600',
        gradient: 'from-blue-400 to-blue-600',
        gradientHover: 'from-blue-500 to-blue-700'
      },
      'purple': {
        accent: 'text-purple-600',
        bgAccent: 'bg-purple-600',
        bgHover: 'hover:bg-purple-700',
        bgLight: 'hover:bg-purple-50',
        border: 'border-purple-600',
        gradient: 'from-purple-400 to-purple-600',
        gradientHover: 'from-purple-500 to-purple-700'
      },
      'green': {
        accent: 'text-emerald-600',
        bgAccent: 'bg-emerald-600',
        bgHover: 'hover:bg-emerald-700',
        bgLight: 'hover:bg-emerald-50',
        border: 'border-emerald-600',
        gradient: 'from-emerald-400 to-emerald-600',
        gradientHover: 'from-emerald-500 to-emerald-700'
      },
      'orange': {
        accent: 'text-orange-600',
        bgAccent: 'bg-orange-600',
        bgHover: 'hover:bg-orange-700',
        bgLight: 'hover:bg-orange-50',
        border: 'border-orange-600',
        gradient: 'from-orange-400 to-orange-600',
        gradientHover: 'from-orange-500 to-orange-700'
      }
    };
    return colors[theme] || colors['pink'];
  };

  const themeColors = getThemeColors();

  const stats = [
    { number: "5+", label: "Năm kinh nghiệm", icon: "📅" },
    { number: "1000+", label: "Khách hàng hài lòng", icon: "😊" },
    { number: "50+", label: "Chuyên gia spa", icon: "👩‍⚕️" },
    { number: "100%", label: "Sản phẩm tự nhiên", icon: "🌿" }
  ];

  const values = [
    {
      icon: "💎",
      title: "Chất lượng cao",
      description: "Cam kết mang đến dịch vụ spa chất lượng cao nhất với đội ngũ chuyên gia giàu kinh nghiệm",
      color: "bg-gradient-to-br from-pink-50 to-purple-50"
    },
    {
      icon: "🤝",
      title: "Tận tâm",
      description: "Luôn đặt sự hài lòng của khách hàng lên hàng đầu, tận tâm phục vụ từng chi tiết nhỏ",
      color: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: "🌿",
      title: "Tự nhiên",
      description: "Sử dụng các sản phẩm organic và phương pháp tự nhiên tốt cho sức khỏe và môi trường",
      color: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      icon: "✨",
      title: "Sáng tạo",
      description: "Liên tục cập nhật và sáng tạo các liệu pháp spa mới, hiện đại",
      color: "bg-gradient-to-br from-yellow-50 to-orange-50"
    }
  ];

  const team = [
    {
      name: "Nguyễn Thị Mai",
      role: "Giám đốc",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      experience: "15 năm kinh nghiệm",
      specialties: ["Quản lý spa", "Chiến lược kinh doanh", "Chăm sóc khách hàng"]
    },
    {
      name: "Trần Văn Nam",
      role: "Chuyên gia massage",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      experience: "12 năm kinh nghiệm",
      specialties: ["Massage trị liệu", "Thư giãn cơ bắp", "Giảm đau nhức"]
    },
    {
      name: "Lê Thị Hương",
      role: "Chuyên gia chăm sóc da",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      experience: "10 năm kinh nghiệm",
      specialties: ["Chăm sóc da mặt", "Trẻ hóa da", "Điều trị mụn"]
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Thành lập Zuna Spa",
      description: "Khởi đầu với 3 phòng trị liệu và đội ngũ 10 chuyên gia"
    },
    {
      year: "2021",
      title: "Mở rộng quy mô",
      description: "Tăng lên 8 phòng trị liệu và 25 chuyên gia spa"
    },
    {
      year: "2023",
      title: "Đạt chuẩn quốc tế",
      description: "Được chứng nhận ISO và nhận giải thưởng Spa xuất sắc"
    },
    {
      year: "2024",
      title: "Tiên phong công nghệ",
      description: "Áp dụng công nghệ AI và liệu pháp spa hiện đại"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <VideoBackground 
        videoSrc="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
        fallbackImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.6}
        className="min-h-screen relative"
      >
        <section className="py-20 lg:py-32">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left animate-slide-in-left">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                  <span className="mr-2">🏆</span>
                  Spa hàng đầu Việt Nam
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                  Về{' '}
                  <span className={`bg-gradient-to-r ${themeColors.gradient} bg-clip-text text-transparent animate-gradient-x`}>
                    Zuna Spa
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                  Zuna Spa được thành lập với mục tiêu mang đến trải nghiệm thư giãn và làm đẹp tốt nhất cho khách hàng. 
                  Với đội ngũ chuyên gia giàu kinh nghiệm và cơ sở vật chất hiện đại, chúng tôi cam kết mang đến những dịch vụ spa chất lượng cao.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Link
                    to="/booking"
                    className={`bg-gradient-to-r ${themeColors.gradient} ${themeColors.gradientHover} text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl text-lg`}
                  >
                    Đặt lịch ngay
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:bg-white/30 hover:scale-105 shadow-2xl text-lg"
                  >
                    Liên hệ
                  </Link>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                    alt="Zuna Spa"
                    className="rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Floating Stats Card */}
                  <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl animate-float">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600">4.9</div>
                      <div className="text-sm text-gray-600">Đánh giá trung bình</div>
                      <div className="flex justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full animate-float-delay-1" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full animate-float-delay-2" />
              </div>
            </div>
          </div>
        </section>
      </VideoBackground>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${themeColors.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-pink-100 rounded-full animate-float opacity-20" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-100 rounded-full animate-float-delay-1 opacity-20" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Những giá trị định hình nên chất lượng dịch vụ và văn hóa của Zuna Spa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`${value.color} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Đội ngũ chuyên gia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Gặp gỡ những chuyên gia spa giàu kinh nghiệm và tận tâm của chúng tôi
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-4 animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-lg font-semibold text-pink-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.experience}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-3">Chuyên môn:</h4>
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Hành trình phát triển
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Những cột mốc quan trọng trong quá trình phát triển của Zuna Spa
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-purple-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${themeColors.gradient} bg-clip-text text-transparent mb-2`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${themeColors.gradient} shadow-lg border-4 border-white`}></div>
                  </div>
                  
                  {/* Empty space for alignment */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-pink-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
              Trải nghiệm Zuna Spa ngay hôm nay
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Đặt lịch ngay để được tận hưởng dịch vụ spa chất lượng cao với đội ngũ chuyên gia giàu kinh nghiệm
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/booking"
                className="bg-white text-pink-600 font-bold px-12 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
              >
                Đặt lịch ngay
              </Link>
              <Link
                to="/services"
                className="bg-transparent text-white border-2 border-white font-bold px-12 py-5 rounded-2xl transition-all duration-300 hover:bg-white hover:text-pink-600 transform hover:scale-105 text-lg"
              >
                Xem dịch vụ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 