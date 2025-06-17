<script setup lang="ts">
import { createUser } from '@/api/users';
import UserFrom from '@/components/forms/UserForm.vue';
import type { UserCreate } from '@/interfaces';
import { Toast, useToast } from 'primevue';
import { useRouter } from 'vue-router';
const Toast = useToast()
const router = useRouter()
async function saveUser(user: UserCreate) {
  await createUser(user)
  Toast.add({ severity: 'success', summary: 'Éxito', detail: 'Usuario creado correctamente', life: 3000 });
  await router.push({ name: 'list-users' });
}
</script>

<template>
  <div>
    <div class="w-1/2 mx-auto">
      <h1 class="text-3xl font-bold mb-4">Nuevo Usuario</h1>
    <UserFrom @submit="saveUser"/>
    </div>
  </div>
</template>
