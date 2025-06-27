import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Blog = () => {
  const { theme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
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
        border: 'border-pink-500',
        borderHover: 'hover:border-pink-600',
        gradient: 'from-pink-400 to-pink-600',
        gradientHover: 'from-pink-500 to-pink-700'
      },
      'blue': {
        accent: 'text-blue-600',
        bgAccent: 'bg-blue-600',
        bgHover: 'hover:bg-blue-700',
        bgLight: 'bg-blue-50',
        bgLightHover: 'hover:bg-blue-100',
        border: 'border-blue-500',
        borderHover: 'hover:border-blue-600',
        gradient: 'from-blue-400 to-blue-600',
        gradientHover: 'from-blue-500 to-blue-700'
      },
      'purple': {
        accent: 'text-purple-600',
        bgAccent: 'bg-purple-600',
        bgHover: 'hover:bg-purple-700',
        bgLight: 'bg-purple-50',
        bgLightHover: 'hover:bg-purple-100',
        border: 'border-purple-500',
        borderHover: 'hover:border-purple-600',
        gradient: 'from-purple-400 to-purple-600',
        gradientHover: 'from-purple-500 to-purple-700'
      },
      'green': {
        accent: 'text-emerald-600',
        bgAccent: 'bg-emerald-600',
        bgHover: 'hover:bg-emerald-700',
        bgLight: 'bg-emerald-50',
        bgLightHover: 'hover:bg-emerald-100',
        border: 'border-emerald-500',
        borderHover: 'hover:border-emerald-600',
        gradient: 'from-emerald-400 to-emerald-600',
        gradientHover: 'from-emerald-500 to-emerald-700'
      },
      'orange': {
        accent: 'text-orange-600',
        bgAccent: 'bg-orange-600',
        bgHover: 'hover:bg-orange-700',
        bgLight: 'bg-orange-50',
        bgLightHover: 'hover:bg-orange-100',
        border: 'border-orange-500',
        borderHover: 'hover:border-orange-600',
        gradient: 'from-orange-400 to-orange-600',
        gradientHover: 'from-orange-500 to-orange-700'
      }
    };
    return colors[theme] || colors['pink'];
  };

  const themeColors = getThemeColors();

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '📚' },
    { id: 'skincare', name: 'Chăm sóc da', icon: '🌸' },
    { id: 'massage', name: 'Massage', icon: '💆‍♀️' },
    { id: 'wellness', name: 'Sức khỏe', icon: '🧘‍♀️' },
    { id: 'tips', name: 'Mẹo hay', icon: '💡' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Bí Quyết Chăm Sóc Da Mùa Hè Hiệu Quả',
      category: 'skincare',
      excerpt: 'Mùa hè với nhiệt độ cao và ánh nắng gay gắt có thể gây hại cho làn da. Hãy khám phá những bí quyết chăm sóc da hiệu quả trong mùa hè.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      author: 'Nguyễn Thị Mai',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80',
      date: '15/12/2023',
      readTime: '5 phút',
      tags: ['Chăm sóc da', 'Mùa hè', 'Kem chống nắng'],
      featured: true
    },
    {
      id: 2,
      title: 'Lợi Ích Của Massage Đá Nóng Cho Sức Khỏe',
      category: 'massage',
      excerpt: 'Massage đá nóng không chỉ giúp thư giãn mà còn mang lại nhiều lợi ích sức khỏe đáng kể. Tìm hiểu chi tiết về phương pháp này.',
      image: 'https://images.unsplash.com/photo-1544161512-6ad1f9baa7b8?auto=format&fit=crop&w=600&q=80',
      author: 'Trần Văn Hùng',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      date: '12/12/2023',
      readTime: '7 phút',
      tags: ['Massage', 'Đá nóng', 'Sức khỏe'],
      featured: false
    },
    {
      id: 3,
      title: 'Thiền Định: Phương Pháp Giảm Stress Hiệu Quả',
      category: 'wellness',
      excerpt: 'Thiền định là một trong những phương pháp giảm stress hiệu quả nhất. Học cách thiền định đúng cách để cải thiện sức khỏe tinh thần.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
      author: 'Lê Thị Lan',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
      date: '10/12/2023',
      readTime: '6 phút',
      tags: ['Thiền định', 'Giảm stress', 'Sức khỏe tinh thần'],
      featured: true
    },
    {
      id: 4,
      title: 'Cách Chọn Sản Phẩm Chăm Sóc Da Phù Hợp',
      category: 'skincare',
      excerpt: 'Việc chọn đúng sản phẩm chăm sóc da là rất quan trọng. Hướng dẫn chi tiết cách chọn sản phẩm phù hợp với từng loại da.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
      author: 'Nguyễn Thị Mai',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80',
      date: '08/12/2023',
      readTime: '8 phút',
      tags: ['Chăm sóc da', 'Sản phẩm', 'Loại da'],
      featured: false
    },
    {
      id: 5,
      title: 'Yoga Trị Liệu: Cải Thiện Sức Khỏe Toàn Diện',
      category: 'wellness',
      excerpt: 'Yoga trị liệu không chỉ giúp cải thiện sức khỏe thể chất mà còn mang lại lợi ích cho tinh thần. Khám phá các bài tập yoga hiệu quả.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
      author: 'Lê Thị Lan',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
      date: '05/12/2023',
      readTime: '9 phút',
      tags: ['Yoga', 'Trị liệu', 'Sức khỏe'],
      featured: false
    },
    {
      id: 6,
      title: 'Mẹo Thư Giãn Sau Ngày Làm Việc Căng Thẳng',
      category: 'tips',
      excerpt: 'Sau một ngày làm việc căng thẳng, bạn cần những phương pháp thư giãn hiệu quả. Khám phá các mẹo thư giãn đơn giản mà hiệu quả.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      author: 'Trần Văn Hùng',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      date: '03/12/2023',
      readTime: '4 phút',
      tags: ['Thư giãn', 'Giảm stress', 'Cuộc sống'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className={`py-20 lg:py-32 bg-gradient-to-br ${themeColors.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <span className="mr-2">📖</span>
              Blog & Tin tức
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Khám phá{' '}
              <span className="bg-white/20 backdrop-blur-sm bg-clip-text text-transparent">
                kiến thức
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Những bài viết hữu ích về chăm sóc sức khỏe, làm đẹp và thư giãn từ các chuyên gia hàng đầu
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-8 py-5 pl-16 rounded-2xl border-0 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg shadow-2xl"
                />
                <svg className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white border-b border-gray-100 sticky top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${themeColors.gradient} text-white shadow-lg transform scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
                Bài viết nổi bật
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Những bài viết được yêu thích nhất từ cộng đồng
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {featuredPosts.map((post, index) => (
                <article key={post.id} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-6 left-6">
                      <span className={`bg-gradient-to-r ${themeColors.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        ⭐ Nổi bật
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <img 
                        src={post.authorImage} 
                        alt={post.author}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-800">{post.author}</div>
                        <div className="text-sm text-gray-500">{post.date} • {post.readTime}</div>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className={`inline-flex items-center bg-gradient-to-r ${themeColors.gradient} text-white font-bold px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg`}
                    >
                      Đọc thêm
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              {selectedCategory === 'all' ? 'Tất cả bài viết' : `${categories.find(cat => cat.id === selectedCategory)?.name}`}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredPosts.length} bài viết được tìm thấy
            </p>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article key={post.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className={`bg-gradient-to-r ${themeColors.gradient} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <img 
                        src={post.authorImage} 
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover mr-3"
                      />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-800 mb-4 leading-tight line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className={`inline-flex items-center ${themeColors.accent} font-semibold transition-all duration-300 hover:scale-105`}
                    >
                      Đọc thêm
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Không tìm thấy bài viết</h3>
              <p className="text-xl text-gray-600 mb-8">Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className={`bg-gradient-to-r ${themeColors.gradient} text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg`}
              >
                Xem tất cả bài viết
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`py-20 lg:py-32 bg-gradient-to-r ${themeColors.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Đăng ký nhận tin
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Nhận những bài viết mới nhất về chăm sóc sức khỏe và làm đẹp trực tiếp vào email của bạn
          </p>
          <div className="max-w-md mx-auto flex bg-white/20 backdrop-blur-sm rounded-2xl p-2">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="flex-1 px-6 py-4 rounded-xl border-0 bg-white/90 focus:ring-2 focus:ring-white focus:outline-none text-lg"
            />
            <button className={`bg-white ${themeColors.accent} hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg shadow-lg`}>
              Đăng ký
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Sẵn sàng trải nghiệm?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Đặt lịch ngay hôm nay để tận hưởng dịch vụ spa chất lượng cao tại Zuna Spa
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/booking" 
              className={`bg-gradient-to-r ${themeColors.gradient} text-white font-bold px-12 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg`}
            >
              Đặt lịch ngay
            </Link>
            <Link 
              to="/services" 
              className="bg-white text-gray-800 border-2 border-gray-200 font-bold px-12 py-5 rounded-2xl transition-all duration-300 hover:bg-gray-50 hover:scale-105 shadow-2xl text-lg"
            >
              Xem dịch vụ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 