const { createApp } = Vue

  createApp({
    data() {
      return {
        
      }
    },
    methods: {

        listEmail() {
          const emailArray = []
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
              console.log(response.data);
          })
        }  
      },
      mounted() {
          this.listEmail()
      }
  }).mount('#app')