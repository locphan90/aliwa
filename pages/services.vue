<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Dịch vụ hiện có</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
          <p class="text-gray-600 mb-4">{{ service.description }}</p>
          <ul class="text-sm text-gray-500 space-y-1">
            <li v-for="feature in service.features" :key="feature">• {{ feature }}</li>
          </ul>
        </div>
      </div>

      <div class="mt-16 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Cần tư vấn thêm?</h2>
        <p class="text-gray-600 mb-6">Liên hệ với tôi để được tư vấn miễn phí</p>
        <NuxtLink 
          to="/contact" 
          class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          Liên hệ tư vấn
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '#app'

const services = [
  {
    id: 1,
    title: 'Phát triển Website',
    description: 'Thiết kế và phát triển website chuyên nghiệp, tối ưu SEO',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9',
    features: ['Giao diện đơn giản, phù hợp trên nhiều thiết bị', 'Hỗ trợ SEO nếu có nhu cầu']
  },
  {
    id: 1,
    title: 'Phát triển Ứng dụng windows',
    description: 'Phát triển ứng dụng desktop cho Windows với hiệu suất cao',
    icon: 'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25',
    features: ['Viết bằng VB.net, C#', 'Báo cáo excel (sử dụng VBA)', 'Database SQL server, MongoDB', 'Tích hợp API']
  },
  {
    id: 4,
    title: 'Tư vấn IT',
    description: 'Tư vấn giải pháp công nghệ thông tin cho các nhân, tổ chức và doanh nghiệp',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    features: ['Các giải pháp về bán hàng, du lịch, quản lý nhân sự, tối ưu hóa dữ liệu', 'Các report cần sử dụng theo yêu cầu', 'Tư vấn về ngôn ngữ sử dụng, cơ sở dự liệu, công nghệ phù hợp với dự án']
  },
  {
    id: 5,
    title: 'Bảo trì & Hỗ trợ',
    description: 'Hỗ trợ kỹ thuật và bảo trì dài hạn, đảm bảo hệ thống hoạt động ổn định',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    features: ['Có thể liên hệ bất kỳ lúc nào khi hệ thống gặp lỗi', 'Cập nhật tính năng theo yêu cầu của khách hàng']
  },
]

useHead({
  title: 'Dịch vụ - Aliwa',
  meta: [
    { name: 'description', content: 'Các dịch vụ chuyên nghiệp về phát triển web và ứng dụng' }
  ]
})
</script>
