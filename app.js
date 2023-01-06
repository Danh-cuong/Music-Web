const music = new Audio('audio/01.mp3');
// music.play();

const songs = [
    {
        id: "1",
        songName: `Anh Sẽ Đón Em<br>
        <div class="subtitle">Nguyên ft. Trang</div>`,
        poster: "images/1.png",
    },
    {
        id: "2",
        songName: `Tự Tình2<br>
        <div class="subtitle">Trung Quân</div>`,
        poster: "images/2.png",
    },
    {
        id: "3",
        songName: `Tự Sự<br>
        <div class="subtitle">Orange</div>`,
        poster: "images/3.png",
    },
    {
        id: "4",
        songName: `Nghe Như Tình Yêu<br>
        <div class="subtitle">HIEUTHUHAI</div>`,
        poster: "images/4.png",
    },
    {
        id: "5",
        songName: `Có Khi<br>
        <div class="subtitle">Hoài Lâm</div>`,
        poster: "images/5.png",
    },
    {
        id: "6",
        songName: `Yêu Thương Ngày Đó<br>
        <div class="subtitle">Soobin Hoàng Sơn</div>`,
        poster: "images/6.png",
    },
    {
        id: "7",
        songName: `Chuyện Đôi Ta<br>
        <div class="subtitle">Emcee L</div>`,
        poster: "images/7.png",
    },
    {
        id: "8",
        songName: `Em Trong Mắt Tôi<br>
        <div class="subtitle">Sơn Tùng MTP</div>`,
        poster: "images/8.png",
    },
    {
        id: "9",
        songName: `Anh Không Theo Đuổi Em Nữa<br>
        <div class="subtitle">An Vũ Cover</div>`,
        poster: "images/9.png",
    },
    {
        id: "10",
        songName: `Tệ Thật, Anh Nhớ Em<br>
        <div class="subtitle">Thanh Hưng</div>`,
        poster: "images/10.png",
    },
    {
        id: "11",
        songName: `Xuân Thì<br>
        <div class="subtitle">Hà Anh Tuấn</div>`,
        poster: "images/11.png",
    },
    {
        id: "12",
        songName: `Hãy Ra Khỏi Người Đó Đi<br>
        <div class="subtitle">Phan Mạnh Quỳnh</div>`,
        poster: "images/12.png",
    },
    {
        id: "13",
        songName: `Có Chàng Trai Viết Lên Cây<br>
                         <div class="subtitle">Phan Mạnh Quỳnh</div>`,
        poster: "images/13.png",
    },
    {
        id: "14",
        songName: `Tháng Tư Là Lời Nói Dối Của Em<br>
        <div class="subtitle">Hà Anh Tuấn</div>`,
        poster: "images/14.png",
    },
    {
        id: "15",
        songName: `3107-2<br>
        <div class="subtitle">DuongG x Nâu x W/N</div>`,
        poster: "images/15.png",
    },
]

let arr = [...document.querySelectorAll(".songItem")];

for(i in arr.length) {
    e.querySelectorAll("img")[i].setAttribute("src", songs[i].poster);
    e.querySelector('h5')[i].innerHTML = songs[i].songName;
}

//Tìm kiếm bài hát
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    let card = ('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
         <div class="content">
         ${songName}
         </div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=> {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) > -1 ) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";

        }

        if (input_value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";

        }
    }
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-circle-fill');
        masterPlay.classList.remove('bi-pause-circle-fill');
    }
});
// Xét đổi icon
const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

// Xét đổi màu background
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105,105, 105, .0)';
    })
}



let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');

let title = document.getElementById('title');

// Xét chuyển ảnh và nhạc, icon
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index  = el.target.id;
         //console.log(e);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `images/${index}.png`;
        music.play();
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        download_music.href = `audio/${index}.mp3`;
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let{songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105,105, 105, .1)"; 
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });

})

// Xét thời gian chạy nhạc
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

// Chỉnh 
music.addEventListener('timeupdate', ()=> {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr/ music_dur) * 100);
    seek.value = progressBar;
   

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

// tua nhac
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

// chinh am luong
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if(vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back  = document.getElementById('back');
let next  = document.getElementById('next');

// Chuyen tiep nhac
back.addEventListener('click', ()=> {
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `images/${index}.png`;
    music.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let{songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105,105, 105, .1)"; 
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
            index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `images/${index}.png`;
    music.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let{songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105,105, 105, .1)"; 
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
    

});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -= 330;
});

// chuyển bài hát
let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', ()=> {
    let a = shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'radom';
            break;
        case "radom":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
          
});



const next_music = () => {
    if(index == songs.length) {
        index = 1
    } else {
        index ++;
    }
    //console.log(e);
   music.src = `audio/${index}.mp3`;
   poster_master_play.src = `images/${index}.png`;
   music.play();
   masterPlay.classList.remove('bi-play-circle-fill');
   masterPlay.classList.add('bi-pause-circle-fill');
   download_music.href = `audio/${index}.mp3`;
   let songTitles = songs.filter((els) =>{
       return els.id == index;
   });

   songTitles.forEach(elss => {
       let{songName} = elss;
       title.innerHTML = songName;
       download_music.setAttribute('download', songName);
   });

   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105,105, 105, .1)"; 
   makeAllplays();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
}
const repeat_music = () => {
   index;
    //console.log(e);
   music.src = `audio/${index}.mp3`;
   poster_master_play.src = `images/${index}.png`;
   music.play();
   masterPlay.classList.remove('bi-play-circle-fill');
   masterPlay.classList.add('bi-pause-circle-fill');
   download_music.href = `audio/${index}.mp3`;
   let songTitles = songs.filter((els) =>{
       return els.id == index;
   });

   songTitles.forEach(elss => {
       let{songName} = elss;
       title.innerHTML = songName;
       download_music.setAttribute('download', songName);
   });

   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105,105, 105, .1)"; 
   makeAllplays();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
}
const radom_music = () => {
    if(index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
     //console.log(e);
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `images/${index}.png`;
    music.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
    download_music.href = `audio/${index}.mp3`;
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });
 
    songTitles.forEach(elss => {
        let{songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });
 
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105,105, 105, .1)"; 
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
 }

 music.addEventListener('ended', ()=>{
   let b = shuffle.innerHTML;
   switch (b) {
    case 'repeat':
        repeat_music();
        break;
    case 'next':
            next_music();
            break;
    case 'radom':
                radom_music();
                break;
   }
})
