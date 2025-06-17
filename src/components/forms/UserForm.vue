<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['submit']);
const username = ref('');
const password = ref('');

async function handleSubmit() {
  emit('submit', { username: username.value, password: password.value });
}
</script>

<template>
  <div>
    <FloatLabel variant="on">
    <InputText id="username" v-model="username" fluid />
    <label for="username">Usuario</label>
    </FloatLabel>
    <FloatLabel variant="on">
      <Password id="password" v-model="password" fluid/>
      <label for="password">Contraseña</label>
    </FloatLabel>
    <Button severity="primery" @click="handleSubmit">Guardar</Button>
  </div>
</template>
