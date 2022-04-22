<script setup lang="ts">
import '../assets/pqgrid.css';
import { ref, onMounted } from 'vue'
import pq from 'pqgrid';

	
const props = defineProps<{ options: object }>();

const el = ref(null);
onMounted(() =>{
    pq.grid(el.value, props.options);	
});

</script>

<template>
<div ref="el"></div> 
</template>

<style scoped>

</style>
