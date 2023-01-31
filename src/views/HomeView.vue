<template>
    <div>
        <daily-list></daily-list>
        <weekly-list></weekly-list>
        <romance-list></romance-list>
    </div>
</template>
  
<script>
import RomanceList from '../components/home/RomanceList.vue'
import DailyList from '../components/home/DailyList.vue'
import WeeklyList from '../components/home/WeeklyList.vue'

export default {
  components: {
    DailyList,
    WeeklyList,
    RomanceList,
  }
}
</script>
  
<style>

</style>
  