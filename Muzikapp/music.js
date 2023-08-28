class Music {
    constructor(title,singer,img,file){

        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }

    getName(){
        return this.title + "-" + this.singer;
    }

}

const musicList=[
    new Music("Paramparça", "Teoman","1.jpg","1.mp3"),
    new Music("Cambaz", "Mor Ve Ötesi","2.jpg","2.mp3"),
    new Music("Bana Yalan Söylediler", "Semaris Pekkan","3.jpg","3.mp3")
]