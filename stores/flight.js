import { defineStore } from 'pinia'

export const flightStore = defineStore('flight', {
    state: () => ({
        dateDepart: null,
        dateOut: null,
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
  