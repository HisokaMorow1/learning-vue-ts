<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore()
</script>

<template>
  {{ auth.token }}
  <Button severity="danger" outlined>Hola</Button>
</template>
