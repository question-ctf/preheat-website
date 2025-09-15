<template>
  <div class="countdown-card" :class="colorClass">
    <h3 class="text-2xl font-bold mb-6">{{ title }}</h3>
    <div class="grid grid-cols-4 gap-4 mb-6">
      <div class="countdown-item">
        <div class="countdown-number">{{ timeLeft.days }}</div>
        <div class="countdown-label">天</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number">{{ timeLeft.hours }}</div>
        <div class="countdown-label">时</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number">{{ timeLeft.minutes }}</div>
        <div class="countdown-label">分</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number">{{ timeLeft.seconds }}</div>
        <div class="countdown-label">秒</div>
      </div>
    </div>
    <div class="text-lg opacity-90">
      <div>{{ targetDate.format('YYYY年MM月DD日') }}</div>
      <div>{{ targetDate.format('HH:mm') }} (UTC+8)</div>
    </div>
    <div v-if="isExpired" class="mt-4 text-xl font-bold text-yellow-300">
      🎉 比赛已开始！
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import duration from 'dayjs/plugin/duration'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(duration)

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  targetDateTime: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    default: 'blue',
    validator: (value) => ['blue', 'orange'].includes(value)
  }
})

const targetDate = computed(() => {
  // 将传入的日期时间字符串转换为正确的格式
  const dateTimeStr = props.targetDateTime.replace(' ', 'T') + '+08:00'
  return dayjs(dateTimeStr)
})

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const isExpired = ref(false)

const colorClass = computed(() => {
  return props.theme === 'orange' ? 'border-l-4 border-orange-500' : 'border-l-4 border-blue-500'
})

const updateCountdown = () => {
  const now = dayjs()
  const target = targetDate.value
  const diff = target.diff(now)
  
  if (diff <= 0) {
    isExpired.value = true
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return
  }
  
  const durationObj = dayjs.duration(diff)
  timeLeft.value = {
    days: Math.floor(durationObj.asDays()),
    hours: durationObj.hours(),
    minutes: durationObj.minutes(),
    seconds: durationObj.seconds()
  }
}

let interval = null

onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<style scoped>
.countdown-item {
  @apply flex flex-col items-center;
}
</style>