// 캔버스 그리기
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 공룡
var dino = {
  x : 10,
  y : 200,
  width : 50,
  height : 50,
  draw(){
    ctx.fillStyle = "orange";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

//  장애물
class Cactus {
  constructor(){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var timer = 0; // 게임은 프레임으로 움직임
var cactusss = []; // 장애물 여러개 관리

// 1초에 60번 실행
// function (프레임마다 실행할 것){
//  requestAnimationFrame(프레임마다 실행할 것)
//}
//프레임마다 실행할 것();

function frame(){
  requestAnimationFrame(frame);
  timer++;

  ctx.clearRect(0,0, canvas.width, canvas.height);

  if (timer % 144 === 0){ // 144 프레임마다 장애물 소환 후 array에 보관
    var cactus = new Cactus(); // 장애물은 여러개 생김
    cactusss.push(cactus);
  }
  
  cactusss.forEach((a)=>{
    a.x--;
    a.draw();
  })

  dino.draw();
}
frame();