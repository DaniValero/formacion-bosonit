interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

// const {song: anotherSong} = audioPlayer

// console.log(anotherSong)


// const { author } = audioPlayer.details
// console.log(author)






const [p1, p2, picolo = "no encontrado"]: string[] = ["Goku", "Vegetta"];


console.log(picolo)







export { }