const app=Vue.createApp({
    //template: '<h2> I am Template</h2>'
    data(){
        return{
            showBooks: true,
            title: "The Final Empire",
            author:"Branda Anderson",
            age:40
         }
    },
    methods:{
        changeTitle(title){
            // this.title="Words of Radaince"
            this.title=title
        },
        toggleShowBooks(){
            this.showBooks=!this.showBooks
        }
    }
})

app.mount("#app")

