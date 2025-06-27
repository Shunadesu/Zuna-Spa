import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const BlogDetail = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [comment, setComment] = useState('');

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

  // Mock data - in real app this would come from API
  const blogPost = {
    id: parseInt(id),
    title: '10 Bí Quyết Chăm Sóc Da Mùa Hè Hiệu Quả',
    category: 'Chăm sóc da',
    author: 'Nguyễn Thị Mai',
    authorAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80',
    date: '15/12/2023',
    readTime: '5 phút',
    featuredImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Mùa hè với nhiệt độ cao và ánh nắng gay gắt có thể gây hại cho làn da. Hãy khám phá những bí quyết chăm sóc da hiệu quả trong mùa hè.',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Mùa hè là thời điểm làn da của chúng ta phải đối mặt với nhiều thách thức như ánh nắng gay gắt, nhiệt độ cao, độ ẩm và bụi bẩn. Để duy trì làn da khỏe mạnh và tươi sáng trong mùa hè, bạn cần có một quy trình chăm sóc da phù hợp.
      </p>

      <h2 class="text-3xl font-serif font-bold text-gray-800 mb-6 mt-12">1. Làm Sạch Da Đúng Cách</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Việc làm sạch da là bước quan trọng nhất trong quy trình chăm sóc da mùa hè. Bạn nên rửa mặt 2 lần mỗi ngày với sữa rửa mặt phù hợp với loại da của mình. Sử dụng nước ấm thay vì nước nóng để tránh làm khô da.
      </p>

      <h2 class="text-3xl font-serif font-bold text-gray-800 mb-6 mt-12">2. Sử Dụng Kem Chống Nắng</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Kem chống nắng là sản phẩm không thể thiếu trong mùa hè. Chọn kem chống nắng có chỉ số SPF ít nhất 30 và PA+++. Thoa kem chống nắng 30 phút trước khi ra ngoài và thoa lại sau mỗi 2-3 giờ.
      </p>

      <h2 class="text-3xl font-serif font-bold text-gray-800 mb-6 mt-12">3. Dưỡng Ẩm Đầy Đủ</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Mặc dù thời tiết nóng ẩm, da vẫn cần được dưỡng ẩm đầy đủ. Chọn kem dưỡng ẩm có kết cấu nhẹ, không gây nhờn rít. Sử dụng kem dưỡng ẩm sau khi rửa mặt và trước khi thoa kem chống nắng.
      </p>

      <h2 class="text-3xl font-serif font-bold text-gray-800 mb-6 mt-12">4. Tẩy Tế Bào Chết</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Tẩy tế bào chết 1-2 lần mỗi tuần để loại bỏ tế bào chết và bụi bẩn tích tụ trên da. Chọn sản phẩm tẩy tế bào chết dịu nhẹ, phù hợp với loại da của bạn.
      </p>

      <h2 class="text-3xl font-serif font-bold text-gray-800 mb-6 mt-12">5. Sử Dụng Mặt Nạ</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Mặt nạ giúp cung cấp dưỡng chất sâu cho da. Sử dụng mặt nạ dưỡng ẩm 2-3 lần mỗi tuần. Bạn có thể tự làm mặt nạ từ các nguyên liệu tự nhiên như mật ong, sữa chua, hoặc dưa leo.
      </p>

      <h2 class="text-3xl font-serif font-bold text-gray-800 mb-6 mt-12">6. Uống Đủ Nước</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Uống ít nhất 2 lít nước mỗi ngày để giữ ẩm cho da từ bên trong. Nước giúp thải độc tố và duy trì độ ẩm tự nhiên của da.
      </p>

      <h2 class="text-3xl font-serif font-bold text-gray-800 mb-6 mt-12">7. Chế Độ Ăn Uống Lành Mạnh</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Ăn nhiều rau xanh, trái cây giàu vitamin C và E để tăng cường sức đề kháng cho da. Tránh ăn đồ cay nóng và uống rượu bia quá nhiều.
      </p>

      <h2 class="text-3xl font-serif font-bold text-gray-800 mb-6 mt-12">8. Bảo Vệ Da Khỏi Ô Nhiễm</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Sử dụng các sản phẩm chống ô nhiễm để bảo vệ da khỏi tác hại của bụi bẩn và khói xe. Các sản phẩm này thường chứa chất chống oxy hóa mạnh.
      </p>

      <h2 class="text-3xl font-serif font-bold text-gray-800 mb-6 mt-12">9. Ngủ Đủ Giấc</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Ngủ 7-8 giờ mỗi đêm để da có thời gian tái tạo và phục hồi. Thiếu ngủ có thể gây ra quầng thâm mắt và làm da xỉn màu.
      </p>

      <h2 class="text-3xl font-serif font-bold text-gray-800 mb-6 mt-12">10. Thăm Khám Chuyên Gia</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Nếu gặp các vấn đề về da như mụn, nám, hoặc dị ứng, hãy thăm khám chuyên gia da liễu để được tư vấn và điều trị phù hợp.
      </p>

      <div class="bg-gray-50 rounded-2xl p-8 my-12">
        <h3 class="text-2xl font-serif font-bold text-gray-800 mb-4">Lời Kết</h3>
        <p class="text-lg leading-relaxed text-gray-700">
          Chăm sóc da mùa hè không khó, chỉ cần bạn kiên trì và có quy trình phù hợp. Hãy áp dụng những bí quyết trên để có làn da khỏe mạnh và tươi sáng trong mùa hè này.
        </p>
      </div>
    `,
    tags: ['Chăm sóc da', 'Mùa hè', 'Kem chống nắng', 'Dưỡng ẩm', 'Tẩy tế bào chết'],
    comments: [
      {
        id: 1,
        name: 'Trần Thị Lan',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80',
        date: '16/12/2023',
        content: 'Bài viết rất hữu ích! Tôi đã áp dụng những bí quyết này và thấy da cải thiện rõ rệt.'
      },
      {
        id: 2,
        name: 'Nguyễn Văn An',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
        date: '17/12/2023',
        content: 'Cảm ơn chuyên gia đã chia sẻ những thông tin quý giá. Tôi sẽ thử áp dụng ngay.'
      }
    ]
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Lợi Ích Của Massage Đá Nóng Cho Sức Khỏe',
      excerpt: 'Massage đá nóng không chỉ giúp thư giãn mà còn mang lại nhiều lợi ích sức khỏe đáng kể.',
      image: 'https://images.unsplash.com/photo-1544161512-6ad1f9baa7b8?auto=format&fit=crop&w=400&q=80',
      date: '12/12/2023',
      category: 'Massage'
    },
    {
      id: 3,
      title: 'Thiền Định: Phương Pháp Giảm Stress Hiệu Quả',
      excerpt: 'Thiền định là một trong những phương pháp giảm stress hiệu quả nhất.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
      date: '10/12/2023',
      category: 'Sức khỏe'
    },
    {
      id: 4,
      title: 'Cách Chọn Sản Phẩm Chăm Sóc Da Phù Hợp',
      excerpt: 'Việc chọn đúng sản phẩm chăm sóc da là rất quan trọng.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80',
      date: '08/12/2023',
      category: 'Chăm sóc da'
    }
  ];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      console.log('Comment submitted:', comment);
      setComment('');
      alert('Bình luận đã được gửi thành công!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className={`${themeColors.bgAccent} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                {blogPost.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-8 text-center leading-tight">
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 text-center leading-relaxed">
              {blogPost.excerpt}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <img 
                  src={blogPost.authorAvatar}
                  alt={blogPost.author}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-800">{blogPost.author}</div>
                  <div className="text-sm">{blogPost.date}</div>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {blogPost.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <img 
              src={blogPost.featuredImage}
              alt={blogPost.title}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-12">Bình luận ({blogPost.comments.length})</h2>
            
            {/* Comment Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Viết bình luận</h3>
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Viết bình luận của bạn..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className={`mt-4 ${themeColors.bgAccent} ${themeColors.bgHover} text-white font-semibold px-6 py-3 rounded-lg transition-colors`}
                >
                  Gửi bình luận
                </button>
              </form>
            </div>
            
            {/* Comments List */}
            <div className="space-y-8">
              {blogPost.comments.map((comment) => (
                <div key={comment.id} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={comment.avatar}
                      alt={comment.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">{comment.name}</h4>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-600">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-12">Bài viết liên quan</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${themeColors.bgAccent} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail; 