const images = [
  'img/image1.jpg',
  'img/image2.jpg',
  'img/image3.jpg',
  'img/image4.jpg',
]

const myApp = new Vue ({
  el:root,
  data: {
    images: [
      'img/image1.jpg',
      'img/image2.jpg',
      'img/image3.jpg',
      'img/image4.jpg',
    ],
    currentIndex: 0
  },
  methods: {
    movePrev: function(){
      console.log(this.currentIndex);
      if(this.currentIndex === 0){
        this.currentIndex = this.images.length-1;
      }else{
        this.currentIndex--;
      }
    },
    moveNext: function(){
      console.log(this.currentIndex);
      if(this.currentIndex === this.images.length-1){
        this.currentIndex = 0;
      }else{
        this.currentIndex ++;
      }
    }
  }
})
