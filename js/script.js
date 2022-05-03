
const app = new Vue({
    el : "#app",

    data : {

        photoContainer:[
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },

            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },

            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },

            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },

            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
        
        indexOfPhotoContainer : 0 ,

        hover : false,
        noHover : true

        
    },
    
    methods: {
        photoSlideFw(){
            this.indexOfPhotoContainer++;
            if(this.indexOfPhotoContainer > this.photoContainer.length -1){
                this.indexOfPhotoContainer = 0;
            }
            // console.log(this.indexOfPhotoContainer);
        },
        photoSlideBack(){
            this.indexOfPhotoContainer--;
            if(this.indexOfPhotoContainer < 0){
                this.indexOfPhotoContainer = this.photoContainer.length -1;
            }
            // console.log(this.indexOfPhotoContainer);
        },

        cambiaImmagine(index){
            this.indexOfPhotoContainer = index;
        },

        funcionForHover(){
            this.hover = !this.hover
            if(this.hover){
                alert("stop")
            }
        }


    },

    mounted(){
    this.clearTimer = setInterval( () => {

            this.photoSlideFw()
            
        }, 3000)
    }
})

