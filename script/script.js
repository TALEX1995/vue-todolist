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


    computed: {
        nextId () {
            let highestId = 0;
            this.tasks.forEach((task) => {
                if (task.id > highestId) {
                    highestId = task.id
                }
            });

            const nextId = ++highestId;
            return nextId
        }
    },

    methods: {
        // Delete task with button x
       deleteTask (currentId) {
        this.tasks = this.tasks.filter(task => {
            return currentId !== task.id
        })
       },

        // Add task
        addTask () {
            // Stop function with newTask empty
            if(!this.newTask.length) return;

            // Starting task undone and create object
            baseTask = { done: false, id: this.nextId, }

            // Add user text to object
            baseTask.text = this.newTask

            // Push into tasks Array
            this.tasks.push(baseTask)

            // Let new task empty
            this.newTask = ''

            // Focus on input
            this.$refs.task.focus();
        }
        
    }



    
});


// Mount app into DOM
app.mount('#root');