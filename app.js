const app=Vue.createApp({
    //template: '<h2> I am Template</h2>'
    data(){
        return{
            showMyBooks:true,
            x:0,
            y:0,
            url:"https://www.google.com", 
            myBooks:[
                {title:"Murder in Orient Express" ,author:"Agatha Christie",img:'assets/m.jpg', isFav:true},
                {title:"Atomic Habits" ,author:"James Clear",img:'assets/a.jpg', isFav:false},
                {title:"2 States and half girlfriend" ,author:"Chetan Bhagat",img:'assets/s.jpg', isFav:true},
            ],
            books:[
                {author:'Agatha Christie', title:["Then there were none",
                                          "Death on the Nile ",
                                          "Murder on the Orient Express",
                                          "The Murder on the Links ",
                                          "The ABC murder"
                                        ],showBooks: false,
                                        img:'assets/1.jpg'
                                    },
                {author:'Colleen Hoover', title:["It Ends with Us ",
                                                 "November 9 ",
                                                 "Ugly Love ",
                                                 "Maybe Someday ",
                                                 "Losing Hope "
                                                ],showBooks: false,
                                                img:'assets/2.jpg'
                                            },
                {author:"Chetan Bhagat", title:["Five point someone",
                                                "The girl in room 105",
                                                "The three mistakes of my life",
                                                "2 States",
                                                "Half girlfriend"
                                                ],showBooks: false,
                                                img:'assets/3.jpg'
                                            }
            ]
         }
    },
    methods:{
        changeTitle(title){
            // this.title="Words of Radaince"
            this.title=title
        },
        toggleShowBooks(author){
            author.showBooks=!author.showBooks
        },
        toggleMyBooks(){
            this.showMyBooks=!this.showMyBooks
        },
        toggleFav(book){
            book.isFav=!book.isFav
        },
        handleEvent(e, n){
            console.log(e,e.type)
            if (n){
                console.log(n)
            }
        },
        handleMouseMove(e){
            this.x=e.offsetX
            this.y=e.offsetY
        }
    },
    computed:{
        filteredBooks(){
            return this.myBooks.filter((book)=>book.isFav)
        }
        
    }
})

app.mount("#app")

