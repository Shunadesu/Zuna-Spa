import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Privacy = () => {
  const { theme } = useContext(ThemeContext);

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Chính sách bảo mật
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Chúng tôi cam kết bảo vệ thông tin cá nhân và quyền riêng tư của bạn
            </p>
            
            {/* Table of Contents */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mục lục</h2>
              <nav>
                <ul className="space-y-2 text-left">
                  <li><a href="#introduction" className={`${themeColors.accent} ${themeColors.bgHover}`}>1. Giới thiệu</a></li>
                  <li><a href="#collection" className={`${themeColors.accent} ${themeColors.bgHover}`}>2. Thu thập thông tin</a></li>
                  <li><a href="#usage" className={`${themeColors.accent} ${themeColors.bgHover}`}>3. Sử dụng thông tin</a></li>
                  <li><a href="#sharing" className={`${themeColors.accent} ${themeColors.bgHover}`}>4. Chia sẻ thông tin</a></li>
                  <li><a href="#security" className={`${themeColors.accent} ${themeColors.bgHover}`}>5. Bảo mật thông tin</a></li>
                  <li><a href="#rights" className={`${themeColors.accent} ${themeColors.bgHover}`}>6. Quyền của bạn</a></li>
                  <li><a href="#cookies" className={`${themeColors.accent} ${themeColors.bgHover}`}>7. Cookie và công nghệ theo dõi</a></li>
                  <li><a href="#changes" className={`${themeColors.accent} ${themeColors.bgHover}`}>8. Thay đổi chính sách</a></li>
                  <li><a href="#contact" className={`${themeColors.accent} ${themeColors.bgHover}`}>9. Liên hệ</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section id="introduction">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">1. Giới thiệu</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Zuna Spa ("chúng tôi", "của chúng tôi", hoặc "spa") cam kết bảo vệ quyền riêng tư của bạn. 
                Chính sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn 
                khi bạn sử dụng dịch vụ của chúng tôi.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bằng việc sử dụng dịch vụ của chúng tôi, bạn đồng ý với việc thu thập và sử dụng thông tin 
                theo chính sách này. Nếu bạn không đồng ý với chính sách này, vui lòng không sử dụng dịch vụ của chúng tôi.
              </p>
            </section>

            <section id="collection">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">2. Thu thập thông tin</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chúng tôi thu thập các loại thông tin sau đây:
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Thông tin cá nhân:</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Họ và tên</li>
                <li>Địa chỉ email</li>
                <li>Số điện thoại</li>
                <li>Địa chỉ</li>
                <li>Ngày sinh</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Thông tin sử dụng:</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Lịch sử đặt lịch</li>
                <li>Dịch vụ đã sử dụng</li>
                <li>Phản hồi và đánh giá</li>
                <li>Thông tin thanh toán</li>
              </ul>
            </section>

            <section id="usage">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">3. Sử dụng thông tin</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chúng tôi sử dụng thông tin thu thập được cho các mục đích sau:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Cung cấp và duy trì dịch vụ</li>
                <li>Xử lý đặt lịch và thanh toán</li>
                <li>Gửi thông báo và cập nhật</li>
                <li>Cải thiện dịch vụ và trải nghiệm khách hàng</li>
                <li>Phân tích và thống kê</li>
                <li>Tuân thủ nghĩa vụ pháp lý</li>
              </ul>
            </section>

            <section id="sharing">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">4. Chia sẻ thông tin</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chúng tôi không bán, trao đổi hoặc chuyển giao thông tin cá nhân của bạn cho bên thứ ba 
                mà không có sự đồng ý của bạn, trừ khi:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Được yêu cầu bởi pháp luật</li>
                <li>Bảo vệ quyền và tài sản của chúng tôi</li>
                <li>Ngăn chặn hành vi gian lận hoặc bảo mật</li>
                <li>Với các đối tác tin cậy để cung cấp dịch vụ</li>
              </ul>
            </section>

            <section id="security">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">5. Bảo mật thông tin</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chúng tôi thực hiện các biện pháp bảo mật phù hợp để bảo vệ thông tin cá nhân của bạn:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Mã hóa dữ liệu</li>
                <li>Kiểm soát truy cập</li>
                <li>Giám sát bảo mật</li>
                <li>Đào tạo nhân viên</li>
                <li>Cập nhật hệ thống bảo mật</li>
              </ul>
            </section>

            <section id="rights">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">6. Quyền của bạn</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bạn có các quyền sau đối với thông tin cá nhân của mình:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Quyền truy cập và xem thông tin</li>
                <li>Quyền chỉnh sửa và cập nhật</li>
                <li>Quyền xóa thông tin</li>
                <li>Quyền rút lại sự đồng ý</li>
                <li>Quyền khiếu nại</li>
              </ul>
            </section>

            <section id="cookies">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">7. Cookie và công nghệ theo dõi</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chúng tôi sử dụng cookie và các công nghệ tương tự để:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Ghi nhớ tùy chọn của bạn</li>
                <li>Phân tích lưu lượng truy cập</li>
                <li>Cải thiện trải nghiệm người dùng</li>
                <li>Cung cấp nội dung phù hợp</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bạn có thể kiểm soát cookie thông qua cài đặt trình duyệt của mình.
              </p>
            </section>

            <section id="changes">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">8. Thay đổi chính sách</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. 
                Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Đăng thông báo trên website</li>
                <li>Gửi email thông báo</li>
                <li>Cập nhật ngày hiệu lực</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-6">
                Việc tiếp tục sử dụng dịch vụ sau khi thay đổi có hiệu lực được coi là 
                chấp nhận chính sách mới.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">9. Liên hệ</h2>
              <div className={`${themeColors.bgLight} rounded-2xl p-8`}>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, 
                  vui lòng liên hệ với chúng tôi:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Email: privacy@zunaspa.com</li>
                  <li>Điện thoại: +84 28 1234 5678</li>
                  <li>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</li>
                </ul>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Ngày cập nhật cuối:</strong> 15/12/2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Có câu hỏi về bảo mật?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc về chính sách bảo mật
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:privacy@zunaspa.com" 
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Gửi email
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Liên hệ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy; 