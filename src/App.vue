<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import PQGrid from "./components/PQGrid.vue"
	
const data = [
    {
      rank: 1,
      company: 'Exxon MobilXXXCCCXcxczccxc',
      revenues: 339938.0,
      profits: 36130.0,
    },
    {
      rank: 2,
      company: 'Wal-Mart Stores',
      revenues: 315654.0,
      profits: 11231.0,
    },
    {
      rank: 3,
      company: 'Royal Dutch Shell',
      revenues: 306731.0,
      profits: 25311.0,
    },
    { rank: 4, company: 'BP', revenues: 267600.0, profits: 22341.0 },
    {
      rank: 5,
      company: 'General Motors',
      revenues: 192604.0,
      profits: -10567.0,
    },
    { rank: 6, company: 'Chevron', revenues: 189481.0, profits: 14099.0 },
    {
      rank: 7,
      company: 'DaimlerChrysler',
      revenues: 186106.3,
      profits: 3536.3,
    },
    { rank: 8, company: 'Toyota Motor', revenues: 185805.0, profits: 12119.6 },
    { rank: 9, company: 'Ford Motor', revenues: 177210.0, profits: 2024.0 },
    {
      rank: 10,
      company: 'ConocoPhillips',
      revenues: 166683.0,
      profits: 13529.0,
    },
    {
      rank: 11,
      company: 'General Electric',
      revenues: 157153.0,
      profits: 16353.0,
    },
    { rank: 12, company: 'Total', revenues: 152360.7, profits: 15250.0 },
    { rank: 13, company: 'ING Group', revenues: 138235.3, profits: 8958.9 },
    { rank: 14, company: 'Citigroup', revenues: 131045.0, profits: 24589.0 },
    { rank: 15, company: 'AXA', revenues: 129839.2, profits: 5186.5 },
    { rank: 16, company: 'Allianz', revenues: 121406.0, profits: 5442.4 },
    { rank: 17, company: 'Volkswagen', revenues: 118376.6, profits: 1391.7 },
    { rank: 18, company: 'Fortis', revenues: 112351.4, profits: 4896.3 },
    {
      rank: 19,
      company: 'Crédit Agricole',
      revenues: 110764.6,
      profits: 7434.3,
    },
    {
      rank: 20,
      company: 'American Intl. Group',
      revenues: 108905.0,
      profits: 10477.0,
    },
  ];

const columns = [
    { title: 'Rank', width: 100, dataType: 'integer', dataIndx: 'rank' },
    { title: 'Company', width: 200, dataType: 'string', dataIndx: 'company' },
    {
      title: 'Revenues',
      width: 150,
      dataType: 'float',
      dataIndx: 'revenues',
      format: '#.0',
    },
    {
      title: 'Profits',
      width: 150,
      dataType: 'float',
      dataIndx: 'profits',
      format: '#.0',
    },
  ];
	
const options = {
	  showTop: false,
      reactive: true,
      locale: 'en',
      height: 'flex',
      numberCell: {
        show: false,
      },
      columnTemplate: { width: 100 },
      pageModel: {
        type: 'local',
        rPP: 5,
        rPPOptions: [3, 5, 10],
        layout: ['strDisplay', '|', 'prev', 'next'],
      },
      colModel: columns,
      animModel: {
        on: true,
      },
      dataModel: {
        data: data,
      }
}
	
</script>

<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <PQGrid :options="options"></PQGrid>
</div>

</template>
<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
