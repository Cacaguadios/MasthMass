<template>
  <header class="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex h-14 items-center justify-between">
        <!-- Left: Logo/Título -->
        <RouterLink to="/" class="flex items-center gap-2">
          <div class="h-8 w-8 rounded-lg bg-sky-500"></div>
          <span class="text-lg font-bold">Math Mass</span>
        </RouterLink>

        <!-- Desktop nav -->
        <nav class="hidden items-center gap-6 md:flex">
          <RouterLink class="text-sm hover:text-sky-600" to="/">Inicio</RouterLink>
          <RouterLink class="text-sm hover:text-sky-600" to="/actividades">Actividades</RouterLink>
          <RouterLink class="text-sm hover:text-sky-600" to="/acerca">Acerca de</RouterLink>
        </nav>

        <!-- Right: Progreso + acciones -->
        <div class="hidden items-center gap-3 md:flex">
          <div class="rounded-lg border px-3 py-1.5 text-sm">
            <span class="font-semibold">{{ aciertos }}</span>/<span>{{ intentos }}</span>
            <span class="text-slate-500 ml-1">aciertos</span>
          </div>

          <button @click="exportar"
                  class="rounded-lg bg-sky-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-sky-600">
            Exportar
          </button>

          <label class="cursor-pointer rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50">
            Importar
            <input type="file" class="hidden" accept="application/json" @change="importar" />
          </label>
        </div>

        <!-- Mobile: botón hamburguesa -->
        <button @click="open = !open" class="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border">
          <span class="i">≡</span>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="open" class="md:hidden pb-3">
        <nav class="flex flex-col gap-2 border-t pt-3">
          <RouterLink class="px-2 py-1.5 rounded hover:bg-slate-50" to="/" @click="open=false">Inicio</RouterLink>
          <RouterLink class="px-2 py-1.5 rounded hover:bg-slate-50" to="/actividades" @click="open=false">Actividades</RouterLink>
          <RouterLink class="px-2 py-1.5 rounded hover:bg-slate-50" to="/acerca" @click="open=false">Acerca de</RouterLink>

          <div class="mt-2 flex items-center justify-between rounded-lg border px-3 py-2">
            <div class="text-sm">
              <span class="font-semibold">{{ aciertos }}</span>/<span>{{ intentos }}</span>
              <span class="text-slate-500 ml-1">aciertos</span>
            </div>
            <div class="flex items-center gap-2">
              <button @click="exportar" class="rounded bg-sky-500 px-2.5 py-1 text-xs text-white">Exportar</button>
              <label class="cursor-pointer rounded border px-2.5 py-1 text-xs">
                Importar
                <input type="file" class="hidden" accept="application/json" @change="importar" />
              </label>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProgresoStore } from '../stores/progreso'

const open = ref(false)
const store = useProgresoStore()
const intentos = computed(() => store.intentos)
const aciertos = computed(() => store.aciertos)

function exportar() {
  const blob = new Blob([JSON.stringify(store.$state, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'mathmass-progreso.json'
  a.click()
  URL.revokeObjectURL(url)
}

function importar(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  file.text().then(t => {
    try {
      const data = JSON.parse(t)
      store.$patch(data)
      alert('Progreso importado')
    } catch {
      alert('Archivo inválido')
    }
  })
}
</script>
