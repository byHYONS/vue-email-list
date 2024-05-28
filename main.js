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
            axios.get(this.url).then(response => {
                console.log(response.data.response);
                return response.data.response;
            });
            console.log(this.apiCall);
            
        }   
        
    },
    created() {
        this.apiCall()
    },
});

app.mount('#app');

