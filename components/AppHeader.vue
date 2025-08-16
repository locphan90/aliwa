<template>
  <header class="relative bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50 transition-all duration-300">
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30 opacity-50"></div>
    
    <nav class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo Section - Enhanced -->
        <div class="flex items-center space-x-3">
          <div class="relative group">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          </div>
          <NuxtLink to="/" class="group">
            <h1 class="text-2xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              Aliwa
            </h1>
            <div class="h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </NuxtLink>
        </div>
        
        <!-- Desktop Navigation - Enhanced -->
        <div class="hidden md:flex items-center space-x-1">
          <div class="flex items-center bg-gray-50/80 rounded-2xl p-1 backdrop-blur-sm border border-gray-200/50">
            <NuxtLink 
              to="/" 
              class="relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
              :class="$route.path === '/' 
                ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-white/60'"
            >
              <span class="relative z-10">Trang chủ</span>
              <div v-if="$route.path === '/'" class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl"></div>
            </NuxtLink>
            
            <NuxtLink 
              to="/portfolio" 
              class="relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
              :class="$route.path === '/portfolio' 
                ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-white/60'"
            >
              <span class="relative z-10">Portfolio</span>
              <div v-if="$route.path === '/portfolio'" class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl"></div>
            </NuxtLink>
            
            <NuxtLink 
              to="/about" 
              class="relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
              :class="$route.path === '/about' 
                ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-white/60'"
            >
              <span class="relative z-10">Giới thiệu</span>
              <div v-if="$route.path === '/about'" class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl"></div>
            </NuxtLink>
            
            <NuxtLink 
              to="/services" 
              class="relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
              :class="$route.path === '/services' 
                ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-white/60'"
            >
              <span class="relative z-10">Dịch vụ</span>
              <div v-if="$route.path === '/services'" class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl"></div>
            </NuxtLink>
          </div>
          
          <!-- CTA Button -->
          <NuxtLink 
            to="/contact" 
            class="group relative ml-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span class="relative z-10 flex items-center space-x-2">
              <span>Liên hệ</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </NuxtLink>
        </div>
        
        <!-- Mobile menu button - Enhanced -->
        <div class="lg:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="relative group p-3 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            aria-label="Toggle mobile menu"
          >
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span class="block w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300"
                    :class="mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''"></span>
              <span class="block w-6 h-0.5 bg-gray-600 rounded-full mt-1 transition-all duration-300"
                    :class="mobileMenuOpen ? 'opacity-0' : ''"></span>
              <span class="block w-6 h-0.5 bg-gray-600 rounded-full mt-1 transition-all duration-300"
                    :class="mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''"></span>
            </div>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu - Enhanced -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform translate-y-4 opacity-0 scale-95"
        enter-to-class="transform translate-y-0 opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100 scale-100"
        leave-to-class="transform translate-y-4 opacity-0 scale-95"
      >
        <div v-if="mobileMenuOpen" class="lg:hidden absolute left-0 right-0 top-full">
          <div class="mx-4 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
            <div class="px-4 py-6 space-y-2">
              <NuxtLink 
                to="/" 
                class="group flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 hover:scale-[0.98]"
                :class="$route.path === '/' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'"
                @click="mobileMenuOpen = false"
              >
                <span class="font-medium">Trang chủ</span>
                <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
              
              <NuxtLink 
                to="/portfolio" 
                class="group flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 hover:scale-[0.98]"
                :class="$route.path === '/portfolio' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'"
                @click="mobileMenuOpen = false"
              >
                <span class="font-medium">Portfolio</span>
                <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
              
              <NuxtLink 
                to="/about" 
                class="group flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 hover:scale-[0.98]"
                :class="$route.path === '/about' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'"
                @click="mobileMenuOpen = false"
              >
                <span class="font-medium">Giới thiệu</span>
                <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
              
              <NuxtLink 
                to="/services" 
                class="group flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 hover:scale-[0.98]"
                :class="$route.path === '/services' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'"
                @click="mobileMenuOpen = false"
              >
                <span class="font-medium">Dịch vụ</span>
                <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
              
              <div class="pt-4 mt-4 border-t border-gray-200">
                <NuxtLink 
                  to="/contact" 
                  class="group flex items-center justify-center px-4 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[0.98]"
                  @click="mobileMenuOpen = false"
                >
                  <span class="mr-2">Liên hệ ngay</span>
                  <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const mobileMenuOpen = ref(false)
const route = useRoute()

onMounted(() => {
  watch(() => route.path, () => {
    mobileMenuOpen.value = false
  })
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    const header = document.querySelector('header')
    if (!header.contains(event.target)) {
      mobileMenuOpen.value = false
    }
  })
})
</script>