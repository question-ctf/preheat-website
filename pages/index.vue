<template>
  <div class="min-h-screen flex flex-col justify-center items-center p-4">
    <!-- Logo and Title -->
    <div class="text-center mb-12">
      <div class="logo-container mb-6">
        <img src="/icon.svg" alt="?CTF Logo" class="w-24 h-24 mx-auto" />
      </div>
      <h1 class="text-5xl font-bold mb-4">
        <span class="gradient-text">?</span><span class="text-orange-500">CTF</span>
        <span class="text-white ml-4">2025 倒计时</span>
      </h1>
      <p class="text-xl opacity-90">比赛即将开始</p>
    </div>

    <!-- Countdown Timers -->
    <div class="w-full max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 校内赛道 -->
        <div class="countdown-section">
          <div class="text-center mb-4">
            <h2 class="text-3xl font-bold text-orange-500 mb-2 flex items-center justify-center gap-3">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
              校内赛道
            </h2>
            <p class="text-lg opacity-80">面向联办高校开放</p>
          </div>
          <CountdownTimer
            title="校内赛道开始倒计时"
            targetDateTime="2025-09-27 10:00:00"
            theme="orange"
          />
        </div>

        <!-- 校外赛道 -->
        <div class="countdown-section">
          <div class="text-center mb-4">
            <h2 class="text-3xl font-bold text-blue-400 mb-2 flex items-center justify-center gap-3">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              校外赛道
            </h2>
            <p class="text-lg opacity-80">面向全国高校开放</p>
          </div>
          <CountdownTimer
            title="校外赛道开始倒计时"
            targetDateTime="2025-10-04 10:00:00"
            theme="blue"
          />
        </div>
      </div>
    </div>

    <!-- Platform Notice -->
    <div class="mt-12 text-center glass-effect p-6 max-w-4xl border-l-4 border-yellow-400">
      <div class="flex items-center justify-center gap-3 mb-3">
        <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <h3 class="text-2xl font-bold text-yellow-400">平台通知</h3>
      </div>
      <p class="text-lg opacity-90">
         这是 <span class="gradient-text font-bold">?</span><strong>CTF 2025</strong> 的预热页面。正式比赛平台正在维护中。
       </p>
       <div class="mt-4 space-y-2">
         <p class="text-sm opacity-80">
           <strong class="text-blue-400">公开赛道群：</strong><span class="font-mono bg-gray-800 px-2 py-1 rounded">1063409268</span>
         </p>
         <p class="text-sm opacity-80">
           <strong class="text-orange-400">校内赛道：</strong>由各高校独立通知
         </p>
       </div>
    </div>

    <!-- Competition Description -->
    <div class="mt-12 text-center glass-effect p-8 max-w-6xl">
      <h3 class="text-3xl font-bold mb-6">关于 ?CTF 2025</h3>
      <div class="text-left space-y-4 opacity-90 leading-relaxed">
        <p class="text-lg">
          <span class="gradient-text font-bold">?</span><strong>CTF 2025</strong> 是由来自<strong>杭州师范大学、暨南大学、广东工业大学、哈尔滨理工大学、湖南科技大学、西安工业大学、福建农林大学、太原理工大学、浙江师范大学、江南大学、山东科技大学、东北大学秦皇岛分校、青岛工学院、广东外语外贸大学、兰州大学</strong>（以上排名不分先后）共<strong class="text-yellow-300">十五所高校</strong>的网络安全竞赛团队共同发起的CTF新生赛。
        </p>
        <p>
          比赛采取传统 <strong class="text-blue-400">Jeopardy 解题个人赛</strong>的形式，持续<strong class="text-orange-500">四周时间</strong>，每周放出新赛题，同时停止上一周赛题作答。大部分赛题采用动态计分，其涵盖 <strong class="text-green-400">Web、Reverse、Pwn、Crypto、Misc</strong> 五大方向。
        </p>
        <p>
          本赛事设置<strong class="text-orange-500">校内赛道</strong>供联办高校招新选拔参考使用，同时设置<strong class="text-blue-400">公开赛道</strong>，希望与全国各地的师傅交流学习，共同进步。
        </p>
        <p class="text-center text-yellow-300 font-semibold">
          🙏 ?CTF 作为一个完全公益的新赛事，其筹备历程颇为艰难，各种不周之处，万望海涵。🙏
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
        <div>
          <h4 class="text-xl font-semibold text-orange-500 mb-3 flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
            校内赛道
          </h4>
          <ul class="space-y-2 opacity-90">
            <li>• 开始时间：2025年9月27日 10:00 (UTC+8)</li>
            <li>• 参赛对象：联办高校在校学生</li>
            <li>• 比赛形式：线上解题竞赛</li>
            <li>• 用途：招新选拔参考</li>
          </ul>
        </div>
        <div>
          <h4 class="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            公开赛道
          </h4>
          <ul class="space-y-2 opacity-90">
            <li>• 开始时间：2025年10月4日 10:00 (UTC+8)</li>
            <li>• 参赛对象：全国高校学生</li>
            <li>• 比赛形式：线上竞技</li>
            <li>• 目标：交流学习，共同进步</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-12 text-center opacity-70">
      <p>Copyright © 2025 <span class="gradient-text">?</span><strong>CTF</strong> 赛事组委会</p>
      <p class="text-sm mt-2">浙ICP备2025198404号</p>
    </footer>
  </div>
</template>

<script setup>
// 设置页面标题
useHead({
  title: '?CTF 2025 - 倒计时页面',
  meta: [
    { name: 'description', content: '?CTF 2025十五所高校联办CTF新生赛倒计时页面，包含校内赛道和公开赛道' }
  ]
})
</script>

<style scoped>
.logo-container {
  @apply w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.countdown-section {
  @apply transition-all duration-300 hover:scale-105;
}

@media (max-width: 1024px) {
  .countdown-section {
    @apply hover:scale-100;
  }
}
</style>