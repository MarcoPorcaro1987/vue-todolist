var app = new Vue({
    el: '#root',
    data: {
        todos : [
            {
                compito: "Fare i compiti",
                fatto: false
            },
            {
                compito: "Fare la spesa",
                fatto: false    
            },
            {
                compito: "Fare il bucato",
                fatto: false
            }
        ],
        newTodo : ""
    },
    methods: {
        addTodo : function(){
            if(this.newTodo != ""){
                this.todos.push({
                    compito : this.newTodo, fatto : false
                });
                this.newTodo = ""
            }
        },
        removeTodo: function(index){
            this.todos.splice(index, 1);
        },
    }
  });