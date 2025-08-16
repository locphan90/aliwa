<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader />
    
    <main class="flex-1">
      <slot />
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
// Components sẽ được auto-import từ thư mục components/
</script>
