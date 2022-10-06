<template>
  <h1>TRPC</h1>
  <p>check console</p>
</template>

<script setup lang="ts">
const { trpc } = useTRPC();

// autocomplete stops @ equipment, `equipment.list` doesn't work
const test = await trpc.equipment.list.query();
console.log(test);
</script>
