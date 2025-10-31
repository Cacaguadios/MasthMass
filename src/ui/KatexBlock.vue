<template>
  <span ref="el"></span>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const props = defineProps<{
  tex: string
  inline?: boolean
}>()

const el = ref<HTMLElement | null>(null)

watchEffect(() => {
  if (el.value && props.tex) {
    katex.render(props.tex, el.value, {
      throwOnError: false,
      displayMode: !props.inline,
    })
  }
})
</script>
