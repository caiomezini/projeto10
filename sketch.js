//variáveis globais
var bola;


//carregar imagens, sons...
function preload(){

}

//configuração inicial do jogo
// a função setup é executada apenas 1x
function setup() {
  createCanvas(400,400); //área visível do jogo
  bola = createSprite(200,200,20,20);
  bola.shapeColor = 'red';


}

//animação
function draw() {
  background(200,200,200); 

if(keyDown("w")){
  bola.y -= 4;
}
if(keyDown("a")){
  bola.x -= 4;
}
if(keyDown("s")){
  bola.y += 4;
}
if(keyDown("d")){
  bola.x += 4;
} 
  

console.log(bola);





  drawSprites();
}