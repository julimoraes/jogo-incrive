var path,boy,leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 pathimg = loadImage("path.png");
 boy = loadImage("boy.png"); 
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;
path = createSprite(200,180,400,20);
path.addImage("path.png",pathImg);
path.x = path.width /2;
path.velocityX = -4;
  
//crie um sprite de menino
//adicione uma animação de corrida para ele
boy.scale=0.08;
path = createSprite()
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = mouseX;
  edge = createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
