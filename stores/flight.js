import { defineStore } from 'pinia'

export const flightStore = defineStore('flight', {
    state: () => ({
        dateIn: '',
        dateOut: '',
        NBadult: 1,
        NBenfant: 0,
        NBbbAsise: 0,
        NBbbGenous: 0,
        depart: {
          displayname: ''
        },
        destination: {
          displayname: ''
        }
      }),
    actions: {
    
   
    },
  })
  export const flightFilterStore = defineStore('flightFilter', {
    state: () => ({
      maxPrice: undefined,
      minPrice: undefined,
      compagnie: undefined,
    }),
    actions: {
      setMaxPrice(val) {
        this.maxPrice = val
        console.log('price set to ' + val)
      },
      setMinPrice(val) {
        this.minPrice = val
        console.log('price set to ' + val)
      },
    },
  })
  