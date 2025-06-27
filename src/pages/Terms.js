import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Terms = () => {
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
              Điều khoản sử dụng
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Vui lòng đọc kỹ các điều khoản sử dụng trước khi sử dụng dịch vụ của chúng tôi
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <p className="text-gray-600 leading-relaxed">
                <strong>Ngày hiệu lực:</strong> 15/12/2023<br />
                <strong>Liên hệ:</strong> <a href="mailto:info@zunaspa.com" className={`${themeColors.accent} underline`}>info@zunaspa.com</a>
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">1. Chấp nhận điều khoản</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bằng việc truy cập và sử dụng website và dịch vụ của Zuna Spa, bạn đồng ý tuân thủ 
                và bị ràng buộc bởi các điều khoản và điều kiện này. Nếu bạn không đồng ý với bất kỳ 
                phần nào của các điều khoản này, bạn không được phép sử dụng dịch vụ của chúng tôi.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">2. Sử dụng dịch vụ</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dịch vụ của chúng tôi được cung cấp cho mục đích sử dụng cá nhân và phi thương mại. 
                Bạn đồng ý không sử dụng dịch vụ cho bất kỳ mục đích bất hợp pháp hoặc bị cấm nào.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Bạn cam kết:</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Sử dụng dịch vụ một cách hợp pháp và phù hợp</li>
                <li>Không vi phạm quyền sở hữu trí tuệ</li>
                <li>Không gây rối hoặc làm gián đoạn dịch vụ</li>
                <li>Không cố gắng truy cập trái phép vào hệ thống</li>
                <li>Cung cấp thông tin chính xác và cập nhật</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">3. Đặt lịch và thanh toán</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Khi đặt lịch dịch vụ, bạn đồng ý với các điều khoản sau:
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Đặt lịch:</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Đặt lịch trước ít nhất 24 giờ</li>
                <li>Hủy lịch trước 24 giờ để tránh phí hủy</li>
                <li>Đến đúng giờ hẹn</li>
                <li>Thông báo sớm nếu có thay đổi</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Thanh toán:</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Thanh toán đầy đủ theo giá niêm yết</li>
                <li>Chấp nhận các phương thức thanh toán được hỗ trợ</li>
                <li>Giữ bí mật thông tin thanh toán</li>
                <li>Báo cáo ngay nếu có giao dịch bất thường</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">4. Sức khỏe và an toàn</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Để đảm bảo an toàn cho bạn và nhân viên, vui lòng:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Thông báo các vấn đề sức khỏe trước khi sử dụng dịch vụ</li>
                <li>Không sử dụng dịch vụ nếu đang bị bệnh truyền nhiễm</li>
                <li>Tuân thủ các quy định vệ sinh và an toàn</li>
                <li>Báo cáo ngay nếu có sự cố hoặc chấn thương</li>
                <li>Không mang theo vật dụng nguy hiểm</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">5. Hủy bỏ và hoàn tiền</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chính sách hủy bỏ và hoàn tiền của chúng tôi:
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hủy lịch:</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Hủy trước 24 giờ: Không mất phí</li>
                <li>Hủy trong vòng 24 giờ: Phí hủy 50% giá dịch vụ</li>
                <li>Không đến hoặc hủy muộn: Phí 100% giá dịch vụ</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hoàn tiền:</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Hoàn tiền trong vòng 7-14 ngày làm việc</li>
                <li>Chỉ hoàn tiền cho các trường hợp hợp lệ</li>
                <li>Phí giao dịch không được hoàn lại</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">6. Giới hạn trách nhiệm</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Zuna Spa không chịu trách nhiệm về:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Thiệt hại gián tiếp hoặc hậu quả</li>
                <li>Mất mát dữ liệu hoặc thông tin</li>
                <li>Gián đoạn dịch vụ do lý do khách quan</li>
                <li>Hành vi của bên thứ ba</li>
                <li>Thiệt hại do sử dụng sai mục đích</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">7. Sở hữu trí tuệ</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tất cả nội dung trên website, bao gồm nhưng không giới hạn ở văn bản, hình ảnh, 
                logo, thiết kế và phần mềm, đều thuộc quyền sở hữu của Zuna Spa hoặc được cấp phép sử dụng.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bạn không được phép sao chép, phân phối, hiển thị hoặc sử dụng nội dung này 
                mà không có sự cho phép bằng văn bản của chúng tôi.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">8. Thay đổi điều khoản</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chúng tôi có quyền thay đổi các điều khoản này vào bất kỳ lúc nào. 
                Những thay đổi sẽ có hiệu lực ngay khi được đăng tải trên website.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Việc tiếp tục sử dụng dịch vụ sau khi thay đổi có hiệu lực được coi là 
                chấp nhận các điều khoản mới.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">9. Luật áp dụng</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Các điều khoản này được điều chỉnh và giải thích theo luật pháp Việt Nam. 
                Bất kỳ tranh chấp nào phát sinh sẽ được giải quyết tại tòa án có thẩm quyền tại Việt Nam.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">10. Liên hệ</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nếu bạn có bất kỳ câu hỏi nào về các điều khoản này, vui lòng liên hệ với chúng tôi:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>Email: info@zunaspa.com</li>
                <li>Điện thoại: +84 28 1234 5678</li>
                <li>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</li>
              </ul>
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
            Có câu hỏi về điều khoản?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc về điều khoản sử dụng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@zunaspa.com" 
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

export default Terms; 