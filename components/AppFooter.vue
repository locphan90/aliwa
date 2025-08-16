<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Company Info - Chiếm 2 cột trên desktop -->
        <div class="sm:col-span-2 lg:col-span-2">
          <div class="w-full max-w-[1200px] mx-auto">
            <h3 class="text-2xl lg:text-3xl font-bold mb-4">Aliwa</h3>
            <p class="text-gray-1200 mb-6 leading-relaxed">
              Chuyên cung cấp các giải pháp số hóa toàn diện, từ thiết kế web, đến phát triển ứng dụng (ứng dụng windows, web app) để giúp doanh nghiệp, cá nhân phát triển trong thời đại số.
            </p>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div class="sm:col-span-1 lg:col-span-1">
          <h3 class="text-lg lg:text-xl font-semibold mb-6">Liên kết nhanh</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink 
                to="/" 
                class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Trang chủ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/about" 
                class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Giới thiệu
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/services" 
                class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Dịch vụ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/contact" 
                class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Liên hệ
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div class="sm:col-span-1 lg:col-span-1">
          <h3 class="text-lg lg:text-xl font-semibold mb-6">Thông tin liên hệ</h3>
          <div class="space-y-4">
            <!-- <div class="flex items-start group">
              <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors duration-300">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p class="text-gray-300 text-sm leading-relaxed">
                  123 Đường ABC, Quận 1<br>
                  TP. Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </div> -->
            
            <div class="flex items-center group">
              <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-600 transition-colors duration-300">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <a href="mailto:info@mywebsite.com" class="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                locphan90@gmail.com
              </a>
            </div>
            
            <div class="flex items-center group">
              <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors duration-300">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <a href="tel:0389948278" class="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                038 994 8278
              </a>
            </div>
            
            <div class="flex items-start group">
              <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-yellow-600 transition-colors duration-300">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="text-gray-300 text-sm leading-relaxed">
                  Thứ 2 - Thứ 6: 8:00 - 17:00<br>
                  Thứ 7: 8:00 - 12:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>      
      <!-- Bottom section -->
      <div class="mt-12 pt-8 border-t border-gray-700">
        <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p class="text-gray-300 text-sm text-center lg:text-left">
            &copy; {{ currentYear }} Aliwa. All rights reserved. Made with ❤️ in Vietnam.
          </p>
          <!-- <div class="flex flex-wrap justify-center lg:justify-end gap-6">
            <a href="#" class="text-gray-300 hover:text-white text-sm transition-colors duration-200">
              Chính sách bảo mật
            </a>
            <a href="#" class="text-gray-300 hover:text-white text-sm transition-colors duration-200">
              Điều khoản sử dụng
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
