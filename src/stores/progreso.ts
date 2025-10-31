import { defineStore } from 'pinia'

export const useProgresoStore = defineStore('progreso', {
  state: () => ({
    intentos: 0,
    aciertos: 0,
  }),
  actions: {
    registrar(payload: { aciertos: number }) {
      this.intentos += 1
      this.aciertos += payload.aciertos
    },
  },
})
