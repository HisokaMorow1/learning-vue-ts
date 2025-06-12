<script setup lang="ts">
import { getUsers } from '@/api/users'
import type { User } from '../interfaces'
import { ref, type Ref } from 'vue'

const users: Ref<User[]> = ref([])
async function loadUsers() {
  users.value = await getUsers()
}
</script>

<template>
  <Button @click="loadUsers">Cargar</Button>
  <DataTable v-if="users.length > 0" :value="users">
    <Column field="id" header="ID" />
    <Column field="username" header="Usuario" />
  </DataTable>
</template>
