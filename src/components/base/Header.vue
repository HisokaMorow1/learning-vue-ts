<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const items = [
    { label: 'Inicio', command: () => router.push({ name: 'home' }) },
    { label: 'Usuarios', command: () => router.push({ name: 'list-users' }) },
]
</script>

<template>
    <Menubar :model="items" />
</template>