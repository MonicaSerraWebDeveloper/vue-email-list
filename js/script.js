const { createApp } = Vue

  createApp({
    data() {
      return {
        emailArray: []
      }
    },
    methods: {
      },
      mounted() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                const randomEmail = response.data.response
                this.emailArray.push(randomEmail);
            })
        }  
    }
  }).mount('#app')