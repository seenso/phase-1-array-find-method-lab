
let superbowlWin = (arrOfObj) => {
  let win = undefined;
  arrOfObj.find((play) => {
    if (play.result === "W") {
      // console.log('WINNING PLAY-', play.result, play.year);
      win = play.year; 
    }
  });
  return win;
};