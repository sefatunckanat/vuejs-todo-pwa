var app = new Vue({
	el: '#app',
	data: {
	appName: 'Notlarım',
		newTodoText: '',
		todos: [],
		autoSave: true,
		loading: true
	},
	created:function(){
		var todoJSON = JSON.parse(localStorage.getItem("todos","[]"));
		for(var x in todoJSON){
			this.todos.push(todoJSON[x]);
		}
		setTimeout(this.hideLoading(),500);
	},
	methods:{
		goBottomPage(){
			var container = this.$el.querySelector(".list");
			container.scrollTop = container.scrollHeight;
		},
		getDateTime:function(time){
			return new Date(time).toLocaleDateString()+" "+new Date(time).toLocaleTimeString();
		},
		hideLoading:function(){
			this.loading = false;
		},
		addTodo: function(e){
			e.preventDefault();
			if(this.newTodoText.trim() == "")
				return;
			this.todos.push({
					text: this.newTodoText,
					time: new Date(),
					done: false
			});
			this.newTodoText="";
			setTimeout(this.goBottomPage,500);
			if(this.autoSave)
				this.saveTodos();
		},
		saveTodos: function(){
			localStorage.setItem("todos",JSON.stringify(this.todos));
		},
		doneTodo: function(index,done){
			this.todos[index*1].done = done;
			if(this.autoSave)
				this.saveTodos();
		},
		deleteTodo: function(index){
			this.todos.splice(index,1);
			if(this.autoSave)
				this.saveTodos();
		}
	}
})

Vue.config.productionTip = false; 