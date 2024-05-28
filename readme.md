# ESERCIZIO: Vue Email List

> [!NOTE]
>
> nome repo: vue-email-list

### Descrizione:

- Attraverso l'apposita **API** di Boolean:
`https://flynn.boolean.careers/exercises/api/random/mail`,
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

#### Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

#### NB: axios è la via:
`https://axios-http.com/docs/intro`

## Svolgimento:
1. creo scaffolding html, dove riporto le cdn di vuejs e di axios;

2. inizializo istanza di vue su file js;

3. su data() definisco la chiave emails, al quale darò valore di un array vuoto; definisco anche la chiave url dove assegnerò il valore dell'indirizzo API;

4. definisco la funzione `apiCall()` che tramite axios ottengo il dato dall'API:
```
axios.get(this.url).then(response => { ... }
```

5. definisco le funzione `runApiCall()` e itero per 10 volte la funzione `apiCall` salvando il valore dell'indice `[i]` sull'array vuoto `emails[i]`:
```
for (let i=0; i<10; i++){
    this.apiCall().then(email => {
        this.emails[i] = email
        })
}                
```

6. 
