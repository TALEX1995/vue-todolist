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
                text: 'Fare la spesa',
                done: false
            },
            {
                id: 3,
                text: 'Fare la spesa',
                done: false
            },
            {
                id: 4,
                text: 'Fare la spesa',
                done: false
            },
            {
                id: 5,
                text: 'Fare la spesa',
                done: false
            },
            {
                id: 6,
                text: 'Fare la spesa',
                done: false
            },
            {
                id: 7,
                text: 'Fare la spesa',
                done: false
            }
        ]
    }
}
})


// Mount app into DOM
app.mount('#root');