import { defineStore } from 'pinia'
import axios from "axios"
export const useChatbotStore = defineStore("chat", {
    state: () => ({
        messages: [],
    }),
    getters: {
      getMessages(state){
          return state.messages
        }
    },
    actions: {
      async fetchMessages() {
        try {
          const data = await axios.get('/data.json')
            this.messages = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})