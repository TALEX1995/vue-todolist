console.log('JS OK', Vue)

// Initialize app

const app = Vue.createApp ({
    data: () => {
        return {
            newTask: '',
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
        // Delete task with button x
       deleteTask (index) {
        this.tasks.splice(index, 1)
       },

        // Add task
        addTask () {
            // Starting task undone and create object
            baseTask = { done: false }
            // Add user text to object
            baseTask.text = this.newTask
            // Push into tasks Array
            this.tasks.push(baseTask)
        }
        
    }



    
});


// Mount app into DOM
app.mount('#root');