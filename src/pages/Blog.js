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

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'skincare', name: 'Chăm sóc da' },
    { id: 'massage', name: 'Massage' },
    { id: 'wellness', name: 'Sức khỏe' },
    { id: 'tips', name: 'Mẹo hay' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Bí Quyết Chăm Sóc Da Mùa Hè Hiệu Quả',
      category: 'skincare',
      excerpt: 'Mùa hè với nhiệt độ cao và ánh nắng gay gắt có thể gây hại cho làn da. Hãy khám phá những bí quyết chăm sóc da hiệu quả trong mùa hè.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80',
      author: 'Nguyễn Thị Mai',
      date: '15/12/2023',
      readTime: '5 phút',
      tags: ['Chăm sóc da', 'Mùa hè', 'Kem chống nắng']
    },
    {
      id: 2,
      title: 'Lợi Ích Của Massage Đá Nóng Cho Sức Khỏe',
      category: 'massage',
      excerpt: 'Massage đá nóng không chỉ giúp thư giãn mà còn mang lại nhiều lợi ích sức khỏe đáng kể. Tìm hiểu chi tiết về phương pháp này.',
      image: 'https://images.unsplash.com/photo-1544161512-6ad1f9baa7b8?auto=format&fit=crop&w=500&q=80',
      author: 'Trần Văn Hùng',
      date: '12/12/2023',
      readTime: '7 phút',
      tags: ['Massage', 'Đá nóng', 'Sức khỏe']
    },
    {
      id: 3,
      title: 'Thiền Định: Phương Pháp Giảm Stress Hiệu Quả',
      category: 'wellness',
      excerpt: 'Thiền định là một trong những phương pháp giảm stress hiệu quả nhất. Học cách thiền định đúng cách để cải thiện sức khỏe tinh thần.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80',
      author: 'Lê Thị Lan',
      date: '10/12/2023',
      readTime: '6 phút',
      tags: ['Thiền định', 'Giảm stress', 'Sức khỏe tinh thần']
    },
    {
      id: 4,
      title: 'Cách Chọn Sản Phẩm Chăm Sóc Da Phù Hợp',
      category: 'skincare',
      excerpt: 'Việc chọn đúng sản phẩm chăm sóc da là rất quan trọng. Hướng dẫn chi tiết cách chọn sản phẩm phù hợp với từng loại da.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80',
      author: 'Nguyễn Thị Mai',
      date: '08/12/2023',
      readTime: '8 phút',
      tags: ['Chăm sóc da', 'Sản phẩm', 'Loại da']
    },
    {
      id: 5,
      title: 'Yoga Trị Liệu: Cải Thiện Sức Khỏe Toàn Diện',
      category: 'wellness',
      excerpt: 'Yoga trị liệu không chỉ giúp cải thiện sức khỏe thể chất mà còn mang lại lợi ích cho tinh thần. Khám phá các bài tập yoga hiệu quả.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=80',
      author: 'Lê Thị Lan',
      date: '05/12/2023',
      readTime: '9 phút',
      tags: ['Yoga', 'Trị liệu', 'Sức khỏe']
    },
    {
      id: 6,
      title: 'Mẹo Thư Giãn Sau Ngày Làm Việc Căng Thẳng',
      category: 'tips',
      excerpt: 'Sau một ngày làm việc căng thẳng, bạn cần những phương pháp thư giãn hiệu quả. Khám phá các mẹo thư giãn đơn giản mà hiệu quả.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
      author: 'Trần Văn Hùng',
      date: '03/12/2023',
      readTime: '4 phút',
      tags: ['Thư giãn', 'Giảm stress', 'Cuộc sống']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-800 mb-8">
              Blog & Tin tức
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
              Khám phá những bài viết hữu ích về chăm sóc sức khỏe, làm đẹp và thư giãn
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full px-6 py-4 pl-12 rounded-full border-2 border-gray-200 ${themeColors.border} focus:outline-none text-lg shadow-lg`}
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
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

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${themeColors.bgAccent} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className={`inline-flex items-center ${themeColors.accent} ${themeColors.bgHover} font-semibold transition-colors`}
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
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Không tìm thấy bài viết</h3>
              <p className="text-gray-600">Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-500 to-pink-pastel-400">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Đăng ký nhận tin
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Nhận những bài viết mới nhất về chăm sóc sức khỏe và làm đẹp trực tiếp vào email của bạn
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="flex-1 px-6 py-4 rounded-l-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-lg"
            />
            <button className="bg-white text-spa-pink-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-r-lg transition-colors text-lg">
              Đăng ký
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-6">
            Sẵn sàng trải nghiệm?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Đặt lịch ngay hôm nay để tận hưởng dịch vụ spa chất lượng cao tại Zuna Spa
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/booking" className="btn-primary text-lg px-8 py-4">
              Đặt lịch ngay
            </Link>
            <Link to="/services" className="btn-secondary text-lg px-8 py-4">
              Xem dịch vụ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 