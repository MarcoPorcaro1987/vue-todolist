var app = new Vue({
    el: '#root',
    data: {
        todos : [
            "Fare i compiti",
            "Fare la spesa",
            "Fare il bucato"
        ],
        newTodo : ""
    },
    methods: {
        addTodo : function(){
            if(this.newTodo != ""){
            this.todos.push(this.newTodo);
            this.newTodo = ""
            }
        },
        removeTodo: function(index){
            this.todos.splice(index, 1);
        }
    }
  });