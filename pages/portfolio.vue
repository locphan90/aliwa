<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 lg:py-32">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Profile Info -->
          <div>
            <div class="mb-6">
              <span class="inline-block px-4 py-2 bg-blue-600 bg-opacity-30 rounded-full text-sm font-medium mb-4">
                Full-Stack Developer
              </span>
              <h1 class="text-4xl lg:text-6xl font-bold mb-4">
                Phan Gia Bá Lộc
              </h1>
              <p class="text-xl lg:text-2xl text-blue-100 mb-6">
                Chuyên viên phát triển phần mềm với hơn 12 năm kinh nghiệm
              </p>
            </div>

            <!-- Personal Info -->
            <div class="space-y-3 mb-8">
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2">
                  </path>
                </svg>
                <span class="text-blue-100">Sinh ngày: 21/04/1990</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z">
                  </path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                  </path>
                </svg>
                <span class="text-blue-100">Tốt nghiệp đại học ngành Công Nghệ Thông Tin</span>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#projects"
                class="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center">
                Xem dự án
              </a>
              <a href="#contact"
                class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 text-center">
                Liên hệ
              </a>
            </div>
          </div>

          <!-- Profile Image/Avatar -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <div class="flex justify-center lg:justify-end">
                <div class="relative flex flex-col items-center">
                  <div
                    class="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <div class="w-72 h-72 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                      <div
                        class="w-72 h-72 bg-white bg-opacity-10 rounded-full flex items-center justify-center overflow-hidden">
                        <img src="/avatar.jpg" alt="Ảnh đại diện Phan Gia Bá Lộc"
                          class="w-full h-full object-cover rounded-full shadow-lg" />
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-200 text-center text-base mt-4">
                    Đây là hình ảnh của tôi rất lâu về trước, mấy thằng bạn đồn bán vé số dạo ở vincom. Mà thực ra là
                    mấy cọc vé dò trong túi 😂😂😂. Thuở xưa mệnh danh là tướng cướp ali (mà toàn da bọc xương), hi vọng
                    500 anh em ủng hộ để có thêm xí thịt :v.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kỹ năng chuyên môn</h2>
          <p class="text-lg text-gray-600">Các công nghệ và kỹ năng tôi thành thạo</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Skill Item -->
          <div v-for="skill in skills" :key="skill.name"
            class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900">{{ skill.name }}</h3>
              <span class="text-sm font-medium text-blue-600">{{ skill.level }}/10</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div
                class="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: `${skill.level * 10}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kinh nghiệm làm việc</h2>
          <p class="text-lg text-gray-600">Hành trình phát triển sự nghiệp của tôi</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Timeline -->
          <div class="space-y-8">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6">
                  </path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Freelance Developer</h3>
                <p class="text-blue-600 font-medium mb-2">2020 - Hiện tại (4+ năm)</p>
                <p class="text-gray-600">Phát triển các dự án freelance, tư vấn giải pháp công nghệ cho doanh nghiệp nhỏ
                  và vừa.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Công ty Du lịch</h3>
                <p class="text-green-600 font-medium mb-2">2012 - 2020 (8+ năm)</p>
                <p class="text-gray-600">Phát triển và quản lý hệ thống quản lý tour du lịch, booking online, và các ứng
                  dụng nội bộ.</p>
              </div>
            </div>
          </div>

          <!-- Project Types -->
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Các loại dự án đã thực hiện</h3>
            <div class="space-y-4">
              <div v-for="project in projectTypes" :key="project" class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ project }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hobbies Section -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Sở thích cá nhân</h2>
          <p class="text-lg text-gray-300">Những điều tôi yêu thích trong thời gian rảnh</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-300">
            <div class="text-4xl mb-4">🎮</div>
            <h3 class="text-xl font-semibold mb-3">Gaming</h3>
            <ul class="text-gray-300 space-y-2 text-sm">
              <li>Age of Empires 2 (1800+)</li>
              <li>Clash Royale (Ultimate Champion)</li>
              <li>Các game RPG như Diablo</li>
            </ul>
          </div>

          <div class="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-300">
            <div class="text-4xl mb-4">⚽</div>
            <h3 class="text-xl font-semibold mb-3">Thể thao, giải trí</h3>
            <ul class="text-gray-300 space-y-2 text-sm">
              <li>Đam mê bóng đá, xem đá banh</li>
              <li>Đọc truyện tranh</li>
              <li>Xem phim hoạt hình, anime</li>
            </ul>
          </div>

          <div
            class="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-300 md:col-span-2 lg:col-span-1">
            <div class="text-4xl mb-4">💻</div>
            <h3 class="text-xl font-semibold mb-3">Công nghệ</h3>
            <p class="text-gray-300 text-sm">
              Luôn cập nhật các công nghệ mới phù hợp để đáp ứng yêu cầu công việc
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dự án tham khảo</h2>
          <p class="text-lg text-gray-600">Một số dự án tiêu biểu tôi đã thực hiện</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in sampleProjects" :key="index"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="h-32 bg-gradient-to-br flex items-center justify-center" :class="project.bgColor">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" :d="project.icon"></path>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4" v-html="linkify(project.description)"></p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" :key="tech"
                  class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {{ tech }}
                </span>
              </div>

              <!-- Demo có sẵn -->
              <button v-if="project.videoUrl" @click="openModal(project.videoUrl)"
                class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                Xem demo
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </button>

              <!-- Demo không có sẵn -->
              <span v-else class="text-gray-500 text-sm font-medium">Demo không khả dụng</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Sẵn sàng hợp tác?
        </h2>
        <p class="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Tôi luôn sẵn sàng thảo luận về các dự án mới và cơ hội hợp tác.
          Hãy liên hệ để chúng ta có thể tạo ra những điều tuyệt vời cùng nhau!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact"
            class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
            Liên hệ ngay
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Modal for YouTube Videos -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      @click="closeModal">
      <div class="bg-white rounded-xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] relative" @click.stop>
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold">
          ×
        </button>
        <div class="mt-8">
          <iframe :src="currentVideoUrl" class="w-full h-96 md:h-[480px]" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import { ref } from 'vue'

// Modal state
const showModal = ref(false)
const currentVideoUrl = ref('')

// Functions
const openModal = (videoUrl) => {
  currentVideoUrl.value = videoUrl
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  currentVideoUrl.value = ''
}

// Close modal with Escape key
const handleKeyDown = (e) => {
  if (e.key === 'Escape' && showModal.value) {
    closeModal()
  }
}

function linkify(text) {
  // Regex tìm link bắt đầu bằng http hoặc https
  return text.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" class="text-blue-600 underline break-all">$1</a>'
  ).replace(/\n/g, '<br>');
}

// Add event listener
onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})

const skills = [
  { name: 'VB.NET', level: 8 },
  { name: 'C#, ASP.NET', level: 8 },
  { name: 'SQL Server', level: 8 },
  { name: 'VBA Reports', level: 9 },
  { name: 'MongoDB', level: 7 },
  { name: 'Vue.js', level: 8 },
  { name: 'JavaScript', level: 8 },
  { name: 'Hosting & Deploy', level: 10 }
]

const projectTypes = [
  'Phần mềm quản lý cửa hàng vật tư',
  'Hệ thống quản lý phòng trọ',
  'Ứng dụng quản lý nhân sự',
  'Phần mềm quản lý mua bán',
  'Hệ thống điều hành tour du lịch',
  'Website thương mại điện tử',
  'Tích hợp các báo cáo vào hệ thống quản lý',
]

const sampleProjects = [
  {
    title: 'Hệ thống quản lý tour du lịch',
    description: 'Ứng dụng window quản lý toàn bộ quy trình tour từ booking đến thanh toán',
    technologies: ['VB.net', 'SQL Server', 'VBA'],
    bgColor: 'from-blue-400 to-purple-500',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    videoUrl: 'https://www.youtube.com/embed/hn364zSZirg?si=SlU0RhYk_ft-sUrY'
  },
  {
    title: 'Phần mềm quản lý phòng trọ',
    description: 'Hệ thống quản lý thuê phòng, hóa đơn, và báo cáo doanh thu. Phần mềm này cách vận hành tương tự với phần mềm quản lý tour, nếu cần demo có thể xem cách thức hoạt động của phần mềm quản lý tour.',
    technologies: ['VB.NET', 'SQL Server', 'VBA'],
    bgColor: 'from-blue-400 to-purple-500',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h1a1 1 0 011 1v5m-4 0h4',
    // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
  },
  {
    title: 'Website giới thiệu sản phẩm',
    description: 'Giới thiệu sản phẩm và quản lý đơn hàng. Có thể truy cập trực tiếp link tại https://www.khanidy.com',
    technologies: ['Vue.js', 'Node.js', 'SQL Server'],
    bgColor: 'from-blue-400 to-purple-500',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
  },
  {
    title: 'Website quản lý khách sạn',
    description: 'Tích hợp quản lý phòng, đặt phòng và thanh toán, quản lý nhân viên, khách hàng. \n \n Nếu bạn muốn sử dụng thử có thể vào link sau https://qlkhachsan.vercel.app/ (tài khoản: 0123456789, mật khẩu: 1). \n \n Bạn có thể test thoải mái các tính năng, từ xóa chỉnh sửa... Nếu có thắc mắc hoặc cần tư vấn thì liên hệ theo thông tin liên lạc của mình.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    bgColor: 'from-blue-400 to-purple-500',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    videoUrl: 'https://www.youtube.com/embed/id4NLUAsT78?si=_4_eJIyJwGcOZ43-'
  },
]

useHead({
  title: 'Portfolio - Phan Gia Bá Lộc',
  meta: [
    { name: 'description', content: 'Portfolio của Phan Gia Bá Lộc - Full-stack Developer với hơn 12 năm kinh nghiệm' }
  ]
})
</script>

<style scoped>
.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes pulse {
  50% {
    opacity: .5;
  }
}
</style>