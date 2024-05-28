// reset
'use strict';

/*/ ******************************
    inizializzo istanza vue
******************************* */

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            test: 'sono collegato',
            emails: [],
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        }
    },
    methods: {
        // funzione per chiamata api con axios
        // apiCall(){                              
        //    return axios.get(this.url)                //? return della chiamata axios
        //    .then(response => {
        //         console.log(response.data.response);
        //         return response.data.response;       //? altro return del metodo/funzione .then()
        //     });
            
        // },
        // funzione per iterare 10 volte la chiamata:
        runApiCall() { 
            for (let i=0; i<10; i++){
                // apiCall().then(email => { ... })     //? quando ho una "promise" devo riappendere il .then()
                axios.get(this.url)
                .then(email => {                        
                    this.emails[i] = email.data.response
                    console.log(email);
                })
            }
        }  
        
    },
    
    created() {
        // invoco la funzione dopo la creazione della pagina:
        this.runApiCall()         
    },
});

app.mount('#app');

// FINE
