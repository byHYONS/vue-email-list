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
        apiCall(){
           return axios.get(this.url).then(response => {
                console.log(response.data.response);
                return response.data.response;
            });
            
        },
        runApiCall() {
            for (let i=0; i<10; i++){
                this.emails[i] = this.apiCall()[i]
            }
        }  
        
    },
    
    created() {
        this.runApiCall()
        
    },
});

app.mount('#app');

