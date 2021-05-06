const app = new Vue ({
  
  el : "#app",
  data : {
    alertText : false,
    strToDo: '',
    todos : [
      {
        text:"che bello Vue",
        checked: false
      },
      {
        text:"bugia",
        checked: false
      },
      {
        text:"scendere il cane",
        checked: false
      },
      {
        text:"Imprecare",
        checked: true
      }
    ],
    error : false,
    msgError : "non puoi cancellare questo task senza averlo sbarrato"
  },
  methods : {
    deleteToDo(index){
      if(this.todos[index].checked === true){
        this.todos.splice(index,1);
      }else{
        alert(this.msgError);
      }
    },
    addToDo(){
      if(this.strToDo.length > 3){
        this.todos.push({text:this.strToDo, checked:false});
        this.strToDo ="";
      }else{
        this.alertText = true;
        setTimeout(()=>{
          this.alertText = false;
        },3000)
      }
    }
  }
})