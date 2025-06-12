<script setup lang="ts">
import { login } from '@/api/users';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const auth = useAuthStore()

const username = ref('')
const password = ref('')


async function handleLogin() {
    try {
        const token = await login(username.value, password.value);
        auth.setToken(token.access_token)
        router.push({ name: 'home' })
    }
    catch (error) {
        console.error('Error al iniciar sesión:', error);
    }
}
</script>

<template>
    <div class="bg-gray-600 min-h-screen flex items-center justify-center">
        <Card class="w-96 mx-auto">
            <template #title>Iniciar Sesión</template>
            <template #content>
                <div class="flex flex-col gap-3">
                    <FloatLabel variant="in">
                        <InputText id="username" v-model="username" fluid />
                        <label for="username">Usuario</label>
                    </FloatLabel>
                    <FloatLabel variant="in">
                        <InputText type="password" id="password" v-model="password" fluid />
                        <label for="password">Contraseña</label>
                    </FloatLabel>
                    <Button @click="handleLogin">Iniciar Sesión</Button>
                </div>
            </template>
        </Card>
    </div>
</template>