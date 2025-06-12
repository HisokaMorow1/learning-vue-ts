<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const router = useRouter()

const items = [
    { label: 'Inicio', command: () => router.push({ name: 'home' }) },
    { label: 'Usuarios', command: () => router.push({ name: 'list-users' }) },
]

async function logout() {
    const auth = useAuthStore()

    auth.clearToken()
    await router.push({ name: 'login' })
}
</script>

<template>
    <Menubar :model="items">
        <template #end>
            <Button @click="logout">Cerrar Sesión</Button>
        </template>
    </Menubar>

</template>