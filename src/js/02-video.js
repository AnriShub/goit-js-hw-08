import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',  throttle( e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
    }, 1000)
    );

let time = localStorage.getItem('videoplayer-current-time');
if(time === null) time = 0;


player.setCurrentTime(time);
// .catch(function (error) {
//     console.error(error)
// });

