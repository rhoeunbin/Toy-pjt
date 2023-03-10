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
var jumptimer = 0;

// 1초에 60번 실행
// function (프레임마다 실행할 것){
//  requestAnimationFrame(프레임마다 실행할 것)
//}
//프레임마다 실행할 것();

function frame(){
  requestAnimationFrame(frame);
  timer++;

  ctx.clearRect(0,0, canvas.width, canvas.height);

  if (timer % 120 === 0){ // 144 프레임마다 장애물 소환 후 array에 보관
    var cactus = new Cactus(); // 장애물은 여러개 생김
    cactusss.push(cactus);
  }
  cactusss.forEach((a)=>{
    // x좌표가 0미만이면 제거
    if (a.x < 0){
      o.splice(i, 1) // 필요없어진 장애물 제거
    }
    // a.x--;
    a.draw();
  })

  // 점프기능
  if (jumping == true){
    dino.y-=1; //100프레임 지나면 dino.y 그만
    jumptimer++;
  }
  if (jumping == false){ // 내려오기 그만
    if (dino.y < 200){
      dino.y++;
    }
  }
  if (jumptimer > 100){
    jumping = false; //100프레임 지나면 dino.y 그만
    jumptimer = 0;
  }
  dino.draw();
}
frame();

var jumping = false;

document.addEventListener('keydown', function(e){
  if (e.code === 'Space'){
    jumping = true;
  }
})