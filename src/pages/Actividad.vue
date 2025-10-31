<template>
  <section class="p-6 space-y-4">
    <h2 class="text-2xl font-bold text-sky-700 mb-4">
      Actividad: {{ actividadNombre }}
    </h2>

    <p class="text-slate-700">
      Completa los ejercicios para practicar fracciones equivalentes.
    </p>

    <!-- Ejemplo simple de actividad -->
    <div class="p-4 bg-white rounded-xl border shadow-sm space-y-4">
      <div class="flex items-center gap-2">
        <label class="text-sm font-medium">Semilla:</label>
        <input v-model.number="seed" type="number" class="border rounded px-2 py-1 w-24" />
        <button @click="randomSeed" class="px-3 py-1 rounded bg-sky-500 text-white hover:bg-sky-600">
          Aleatoria
        </button>
      </div>

      <div class="space-y-3">
        <div v-for="(q, i) in preguntas" :key="i" class="p-3 rounded border bg-slate-50">
          <KatexBlock :tex="q.tex" />
          <input
            v-model="respuestas[i]"
            type="text"
            placeholder="Tu respuesta"
            class="w-full border rounded px-3 py-2 mt-2"
          />
        </div>
      </div>

      <button @click="calificar" class="px-4 py-2 rounded bg-emerald-500 text-white hover:bg-emerald-600">
        Calificar
      </button>

      <div v-if="resultado" class="text-slate-700 mt-2">{{ resultado }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import KatexBlock from '../ui/KatexBlock.vue'

const route = useRoute()

const seed = ref<number>(1234)
const respuestas = ref<string[]>([])
const resultado = ref('')

// id seguro como string
const actividadId = computed(() =>
  typeof route.params.id === 'string' ? route.params.id : 'fracciones'
)

// Nombre mostrado (por si luego agregas más actividades)
const actividadNombre = computed(() => {
  switch (actividadId.value) {
    case 'fracciones':
      return 'Fracciones equivalentes'
    default:
      return actividadId.value.charAt(0).toUpperCase() + actividadId.value.slice(1)
  }
})

// Generador de números pseudoaleatorios (determinista)
function rng(n: number) {
  let x = (n | 0) || 123456789
  return () => {
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5
    return (x >>> 0) / 4294967296
  }
}

// Generar preguntas basadas en la semilla
const preguntas = computed(() => {
  const R = rng(seed.value)
  const list = Array.from({ length: 5 }, () => {
    const a = 1 + Math.floor(R() * 8)
    const b = a * (2 + Math.floor(R() * 5))
    const c = 1 + Math.floor(R() * 8)
    const d = c * (2 + Math.floor(R() * 5))
    return {
      tex: `\\dfrac{${a}}{${b}} \\;\\equiv\\; \\dfrac{\\,?\\,}{${d}}`,
      correct: Math.round((a * d) / b),
    }
  })
  respuestas.value = Array(list.length).fill('')
  return list
})

watch(seed, () => { resultado.value = '' })

function randomSeed() {
  seed.value = Math.floor(Math.random() * 1e9)
}

function calificar() {
  let ok = 0
  preguntas.value.forEach((q, i) => {
    const texto = (respuestas.value[i] ?? '').trim() // <- evita undefined
    const val = parseInt(texto, 10)
    if (!Number.isNaN(val) && val === q.correct) ok++
  })
  resultado.value = `Aciertos: ${ok} de ${preguntas.value.length}`
}
</script>
