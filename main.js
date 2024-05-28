// reset
'use strict';

/*/ ******************************
    inizializzo istanza vue
******************************* */

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            emails: [],
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        }
    }
});

app.mount('#app');