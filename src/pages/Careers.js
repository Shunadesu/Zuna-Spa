import React, { useState } from 'react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = [
    { id: 'all', name: 'Tất cả' },
    { id: 'spa', name: 'Spa & Massage' },
    { id: 'beauty', name: 'Chăm sóc da' },
    { id: 'admin', name: 'Hành chính' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Chuyên Viên Massage',
      department: 'spa',
      type: 'Toàn thời gian',
      location: 'TP.HCM',
      experience: '2-3 năm',
      salary: '8,000,000 - 12,000,000 VNĐ',
      description: 'Chúng tôi đang tìm kiếm chuyên viên massage có kinh nghiệm để tham gia đội ngũ chuyên nghiệp của Zuna Spa.',
      requirements: [
          'Có chứng chỉ massage từ trường đào tạo uy tín',
          'Kinh nghiệm ít nhất 2 năm trong lĩnh vực spa',
          'Kỹ năng giao tiếp tốt và tận tâm với khách hàng',
          'Có thể làm việc theo ca linh hoạt'
      ],
      benefits: [
          'Lương cạnh tranh và thưởng theo hiệu suất',
          'Bảo hiểm xã hội đầy đủ',
          'Môi trường làm việc chuyên nghiệp',
          'Cơ hội thăng tiến trong nghề nghiệp'
      ]
    },
    {
      id: 2,
      title: 'Chuyên Viên Chăm Sóc Da',
      department: 'beauty',
      type: 'Toàn thời gian',
      location: 'TP.HCM',
      experience: '1-2 năm',
      salary: '7,000,000 - 10,000,000 VNĐ',
      description: 'Tuyển dụng chuyên viên chăm sóc da có kiến thức chuyên sâu về các loại da và phương pháp điều trị.',
      requirements: [
          'Tốt nghiệp chuyên ngành thẩm mỹ hoặc liên quan',
          'Có kinh nghiệm trong lĩnh vực chăm sóc da',
          'Kiến thức về các loại da và sản phẩm chăm sóc',
          'Kỹ năng tư vấn và chăm sóc khách hàng tốt'
      ],
      benefits: [
          'Được đào tạo chuyên sâu về sản phẩm mới',
          'Môi trường làm việc hiện đại',
          'Chế độ thưởng hấp dẫn',
          'Bảo hiểm y tế và xã hội'
      ]
    },
    {
      id: 3,
      title: 'Nhân Viên Lễ Tân',
      department: 'admin',
      type: 'Toàn thời gian',
      location: 'TP.HCM',
      experience: '1 năm',
      salary: '6,000,000 - 8,000,000 VNĐ',
      description: 'Tuyển dụng nhân viên lễ tân có kỹ năng giao tiếp tốt và tinh thần phục vụ khách hàng.',
      requirements: [
          'Tốt nghiệp trung cấp trở lên',
          'Kỹ năng giao tiếp và xử lý tình huống tốt',
          'Thành thạo vi tính văn phòng',
          'Ngoại hình ưa nhìn và thân thiện'
      ],
      benefits: [
          'Lương cơ bản + thưởng theo doanh số',
          'Được đào tạo về quy trình làm việc',
          'Môi trường làm việc năng động',
          'Cơ hội thăng tiến lên quản lý'
      ]
    },
    {
      id: 4,
      title: 'Nhân Viên Marketing',
      department: 'marketing',
      type: 'Toàn thời gian',
      location: 'TP.HCM',
      experience: '2-3 năm',
      salary: '10,000,000 - 15,000,000 VNĐ',
      description: 'Tuyển dụng nhân viên marketing có kinh nghiệm trong lĩnh vực spa và làm đẹp.',
      requirements: [
          'Tốt nghiệp đại học chuyên ngành Marketing',
          'Kinh nghiệm ít nhất 2 năm trong lĩnh vực marketing',
          'Thành thạo các công cụ marketing online',
          'Có khả năng sáng tạo và lập kế hoạch'
      ],
      benefits: [
          'Lương cạnh tranh và thưởng theo KPI',
          'Môi trường làm việc sáng tạo',
          'Được tham gia các khóa đào tạo chuyên môn',
          'Cơ hội phát triển nghề nghiệp rộng mở'
      ]
    },
    {
      id: 5,
      title: 'Quản Lý Spa',
      department: 'admin',
      type: 'Toàn thời gian',
      location: 'TP.HCM',
      experience: '3-5 năm',
      salary: '15,000,000 - 20,000,000 VNĐ',
      description: 'Tuyển dụng quản lý spa có kinh nghiệm quản lý và điều hành hoạt động spa.',
      requirements: [
          'Tốt nghiệp đại học chuyên ngành quản trị kinh doanh',
          'Kinh nghiệm quản lý spa ít nhất 3 năm',
          'Kỹ năng lãnh đạo và quản lý nhân sự tốt',
          'Có kiến thức về tài chính và marketing'
      ],
      benefits: [
          'Lương cao và thưởng theo doanh thu',
          'Quyền lợi quản lý cấp cao',
          'Môi trường làm việc chuyên nghiệp',
          'Cơ hội thăng tiến lên vị trí cao hơn'
      ]
    }
  ];

  const benefits = [
    {
      id: 1,
      title: 'Lương & Thưởng',
      description: 'Mức lương cạnh tranh và chế độ thưởng hấp dẫn dựa trên hiệu suất công việc.',
      icon: (
        <svg className="w-12 h-12 text-spa-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Bảo Hiểm',
      description: 'Bảo hiểm xã hội, bảo hiểm y tế và bảo hiểm tai nạn lao động đầy đủ theo quy định.',
      icon: (
        <svg className="w-12 h-12 text-spa-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Đào Tạo',
      description: 'Cơ hội tham gia các khóa đào tạo chuyên môn và phát triển kỹ năng nghề nghiệp.',
      icon: (
        <svg className="w-12 h-12 text-spa-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Thăng Tiến',
      description: 'Cơ hội thăng tiến trong nghề nghiệp với môi trường làm việc năng động và chuyên nghiệp.',
      icon: (
        <svg className="w-12 h-12 text-spa-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-spa-pink-50 to-pink-pastel-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-800 mb-8">
              Cơ hội nghề nghiệp
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
              Tham gia đội ngũ chuyên nghiệp của Zuna Spa và phát triển sự nghiệp trong lĩnh vực spa & làm đẹp
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-spa-pink-600 mb-2">50+</div>
                <div className="text-gray-600">Nhân viên</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-spa-pink-600 mb-2">5+</div>
                <div className="text-gray-600">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-spa-pink-600 mb-2">98%</div>
                <div className="text-gray-600">Hài lòng</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-6">
              Quyền lợi khi làm việc tại Zuna Spa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi cam kết mang đến môi trường làm việc tốt nhất và quyền lợi hấp dẫn cho nhân viên
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="text-center group">
                <div className="w-20 h-20 bg-spa-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-spa-pink-200 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-16 bg-spa-gradient">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((department) => (
              <button
                key={department.id}
                onClick={() => setSelectedDepartment(department.id)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === department.id
                    ? 'bg-spa-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {department.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {filteredJobs.length > 0 ? (
            <div className="space-y-8">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                          </svg>
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{job.description}</p>
                    </div>
                    
                    <div className="lg:ml-8 mt-6 lg:mt-0">
                      <div className="text-2xl font-bold text-spa-pink-600 mb-4">{job.salary}</div>
                      <button
                        onClick={() => handleApply(job)}
                        className="bg-spa-pink-600 hover:bg-spa-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                      >
                        Ứng tuyển ngay
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Yêu cầu:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <svg className="w-4 h-4 text-spa-pink-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Quyền lợi:</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <svg className="w-4 h-4 text-spa-pink-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
              <p className="text-xl text-gray-600">Không có vị trí nào trong phòng ban này.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-gray-800">
                  Ứng tuyển: {selectedJob.title}
                </h3>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kinh nghiệm
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-colors">
                      <option>Dưới 1 năm</option>
                      <option>1-2 năm</option>
                      <option>2-3 năm</option>
                      <option>3-5 năm</option>
                      <option>Trên 5 năm</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CV/Resume *
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thư xin việc
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-pink-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Giới thiệu bản thân và lý do ứng tuyển..."
                  ></textarea>
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300 font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-spa-pink-600 hover:bg-spa-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Gửi đơn ứng tuyển
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-500 to-pink-pastel-400">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Không tìm thấy vị trí phù hợp?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Gửi CV của bạn để chúng tôi có thể liên hệ khi có vị trí phù hợp
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:hr@zunaspa.com" className="bg-white text-spa-pink-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Gửi CV tự do
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-spa-pink-600 font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Liên hệ HR
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 