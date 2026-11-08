<template>
  <div>
    <!-- Hero Section - Tối ưu cho PC -->
    <section class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div class="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div class="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Chào mừng đến với
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Aliwa
            </span>
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Nếu bạn muốn hướng tới sự đơn giản, hiện đại và hiệu quả trong thiết kế web, thì đây chính là nơi bạn cần đến. Aliwa cung cấp các giải pháp phù hợp và tối ưu theo yêu cầu khách hàng.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NuxtLink 
              to="/about" 
              class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Tìm hiểu thêm
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Liên hệ ngay
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section - Cải thiện layout PC -->
    <section class="py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tính năng nổi bật</h2>
          <p class="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Những điều tuyệt vời mà aliwa có thể mang lại cho dự án của bạn
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div class="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">Nhanh chóng</h3>
            <p class="text-gray-600 leading-relaxed">
              Đảm bảo hiệu suất tối ưu và trải nghiệm người dùng mượt mà
            </p>
          </div>
          
          <div class="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">Đáng tin cậy</h3>
            <p class="text-gray-600 leading-relaxed">
              Kiến trúc ổn định và bảo mật cao, đảm bảo website hoạt động liên tục 24/7
            </p>
          </div>
          
          <div class="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">Thân thiện</h3>
            <p class="text-gray-600 leading-relaxed">
              Giao diện đẹp mắt, responsive và dễ sử dụng trên mọi thiết bị
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- CTA Section - Cải thiện cho PC -->
    <section class="py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Sẵn sàng bắt đầu dự án của bạn?
        </h2>
        <p class="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Hãy liên hệ với tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá tốt nhất
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/contact" 
            class="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Liên hệ tư vấn miễn phí
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            class="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Xem dịch vụ
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  title: 'Trang chủ - Aliwa',
  meta: [
    { name: 'description', content: 'Thông tin trang chủ' }
  ]
})
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
