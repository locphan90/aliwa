<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-5xl font-bold mb-6">Hoạt động với phương châm <br></br><br></br>"Đơn giản, thực tế, hiệu quả"</h1>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20 lg:py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Story Section -->
        <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Giải thích tên website</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Tên Ali là tên nick name của tôi khi chơi game, w viết tắt của web, a viết tắt của app. Nên tôi viết tên trang web là Aliwa.
              </p>
              <p class="text-gray-600 leading-relaxed">
                
              </p>
            </div>
          </div>
        </div>

        <!-- Vision & Values -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-10">
            <div class="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Tầm nhìn</h3>
            <p class="text-gray-700 leading-relaxed">
              Trở thành đối tác tin cậy trong việc cung cấp các giải pháp 
              công nghệ thông tin toàn diện và hiệu quả, góp phần thúc đẩy sự phát triển 
              của cá nhân và doanh nghiệp trong kỷ nguyên số.
              <br><br>
              Với tôi sự đơn giản, dễ sử dụng và mang lại hiệu quả là mục đích hướng tới.
              <br><br>
              Hợp tác với mục tiêu win-win, cùng nhau phát triển và thành công. Mong muốn mang lại giá trị cho bạn và doanh nghiệp của bạn.
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 lg:p-10">
            <div class="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h3>
            <ul class="text-gray-700 space-y-3">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Chất lượng là ưu tiên hàng đầu
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Đổi mới và sáng tạo liên tục
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Phục vụ khách hàng tận tâm
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Làm việc với tinh thần trách nhiệm
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  title: 'Giới thiệu - My Website',
  meta: [
    { name: 'description', content: 'Thông tin chung' }
  ]
})
</script>
