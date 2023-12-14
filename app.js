console.log("run render")

const app = Vue.createApp({
    data() {
        return {
            showBooks : true,
            title: 'The Final Empire',
            author: "Brandon Anderson",
            age : 45,
            buttonShow : "Show Book",
            x : 0,
            y : 0
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        resetData(){
            this.title = 'The Final Empire'
            this.author = "Brandon Anderson"
            this.age = 45
        },
        toggleShow(){
            this.showBooks = !this.showBooks
            if(this.showBooks){
                this.buttonShow = "Hide Book"
            } else {
                this.buttonShow = "Show Book"
            }
        },
        handleEvent(e, data) {
            console.log(e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount("#app")