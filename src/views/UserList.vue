<script setup lang="ts">
import { getUsers } from '@/api/users'
import type { User } from '../interfaces'
import { ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const users: Ref<User[]> = ref([])
async function loadUsers() {
  users.value = await getUsers()
}

async function createUser() {
  await router.push({ name: 'new-user' })
}
loadUsers()
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-end">
      <Button severity="primary" outlined @click="createUser">
      <i class ="pi pi-plus"></i>
      Nuevo Usuario</Button>
    </div>
    <h1>Lista de Usuarios</h1>
    <DataTable v-if="users.length > 0" :value="users">
      <Column field="id" header="ID" />
      <Column field="username" header="Usuario" />
    </DataTable>
  </div>
</template>
