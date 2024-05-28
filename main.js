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
        apiCall(){  // funzione per chiamata api con axios
           return axios.get(this.url).then(response => {
                console.log(response.data.response);
                return response.data.response;
            });
            
        },
        runApiCall() { // itero per 10 volte la chiamata
            for (let i=0; i<10; i++){
                this.apiCall().then(email => { //? quando ho una "promise" devo riappendere il .then()
                    this.emails[i] = email
                    console.log(email);
                })
            }
        }  
        
    },
    
    created() {
        this.runApiCall()         
    },
});

app.mount('#app');

