console.log("run render")

const app = Vue.createApp({
    data() {
        return {
            showBooks : false,
            buttonShow : 'Show List Book',
            books: [
                { title: 'Pulang', author : 'Tere Liye', image : './assets/pulang.jpg', isFav : true},
                { title: 'Pergi', author : 'Tere Liye', image : './assets/pergi.jpg', isFav : true},
                { title: 'Pulang Pergi', author : 'Tere Liye', image : './assets/pulang_pergi.jpg', isFav: false},
            ]
        }
    },
    methods: {
        toggleShow(){
            this.showBooks = !this.showBooks
            if(this.showBooks){
                this.buttonShow = "Hide List Book"
            } else {
                this.buttonShow = "Show List Book"
            }
        },
        handleEvent(e, data) {
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(e){
            e.isFav = !e.isFav
        }
    },
    computed: {
        filterBooks() {
            return this.books.filter(e => e.isFav)
        },
        filterBooksNotFav() {
            return this.books.filter(e => !e.isFav)
        }
    }
})

app.mount("#app")