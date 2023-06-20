console.log('JS OK', Vue)

// Initialize app

const app = Vue.createApp ({
    data: () => {
        return {
            tasks: [
                {
                    id: 1,
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    id: 2,
                    text: 'Consegnare il progetto',
                    done: false
                },
                {
                    id: 3,
                    text: 'Pulire',
                    done: false
                },
                {
                    id: 4,
                    text: 'Studiare',
                    done: false
                },
                {
                    id: 5,
                    text: 'Andare alla partita di calcetto',
                    done: false
                },
                {
                    id: 6,
                    text: 'Andare a prendere i bambini a scuola',
                    done: false
                },
                {
                    id: 7,
                    text: 'Preparare la cena',
                    done: false
                }
            ]
        }
    },

    methods: {
        
    }

    
});


// Mount app into DOM
app.mount('#root');