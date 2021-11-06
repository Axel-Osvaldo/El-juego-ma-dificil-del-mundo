var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["65b84e00-7f4f-4ba8-a6f9-e32ca4fddc83","8a698c1c-5757-4f2f-b6dc-fc5b5a178677","9db23462-c6d7-4795-bc46-adb665d82bfa","7091e6b0-4a72-46a8-ad81-76de9d1bda96","b041f8e4-ee8c-4bfe-8725-661deed12107","6e1c0ff0-f319-4761-b606-35bf0d7144b7"],"propsByKey":{"65b84e00-7f4f-4ba8-a6f9-e32ca4fddc83":{"name":"trunk","sourceUrl":null,"frameSize":{"x":35,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"zS_e20f39O4SjnUjdH3gx5NZjzcXqpP2","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":102},"rootRelativePath":"assets/65b84e00-7f4f-4ba8-a6f9-e32ca4fddc83.png"},"8a698c1c-5757-4f2f-b6dc-fc5b5a178677":{"name":"trunk2","sourceUrl":null,"frameSize":{"x":35,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"Se0dlcEPQJtxDGxYHtdPxTZfbyOT5phw","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":102},"rootRelativePath":"assets/8a698c1c-5757-4f2f-b6dc-fc5b5a178677.png"},"9db23462-c6d7-4795-bc46-adb665d82bfa":{"name":"car1","sourceUrl":null,"frameSize":{"x":50,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":".6T_kwke6oK0hj9SSkxk7BLknGxWb4hj","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":70},"rootRelativePath":"assets/9db23462-c6d7-4795-bc46-adb665d82bfa.png"},"7091e6b0-4a72-46a8-ad81-76de9d1bda96":{"name":"car2","sourceUrl":null,"frameSize":{"x":50,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"7fxKImeKbQTiiBdzEE.mLgi4gTo9VDs1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":70},"rootRelativePath":"assets/7091e6b0-4a72-46a8-ad81-76de9d1bda96.png"},"b041f8e4-ee8c-4bfe-8725-661deed12107":{"name":"car3","sourceUrl":null,"frameSize":{"x":50,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"YdKpoO9AkcifzKJ_EJpYMsU5tct7GqDj","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":70},"rootRelativePath":"assets/b041f8e4-ee8c-4bfe-8725-661deed12107.png"},"6e1c0ff0-f319-4761-b606-35bf0d7144b7":{"name":"frog","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"bo3ZTWbNjmrIQ6lvBDXleAlBeX5ZGvky","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":15},"rootRelativePath":"assets/6e1c0ff0-f319-4761-b606-35bf0d7144b7.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,1,420,3);
  boundary2 = createSprite(190,400,420,3);
  
  grass = createSprite(20,200,80,400);
  grass2 = createSprite(380,200,80,400); 
  grass3 = createSprite(260,200,35,400); 
  
  lake = createSprite(300,200,80,400); 
  

  
  car1= createSprite(88,130,10,10);
  car2 = createSprite(215,130,10,10);
  car3 = createSprite(150,250,10,10);
  
  trunk = createSprite(280,250,1000,1000); 
  trunk2 = createSprite(320,250,10,10);
  
  sam = createSprite(20,190,13,13);
  
  trunk.setAnimation("trunk");
  trunk2.setAnimation("trunk2");
  
  car1.setAnimation("car1");
  car2.setAnimation("car2");
  car3.setAnimation("car3");
 
  sam.setAnimation("frog");
  
  boundary1.shapeColor = "whait";
  boundary2.shapeColor = "whait";
  
  grass.shapeColor = "#61B256";
  grass2.shapeColor = "#61B256";  
  grass3.shapeColor = "#61B256";
   
  lake.shapeColor = "#8CDEC9";   
  
  car1.shapeColor = "red";
  car2.shapeColor = "red";
  car3.shapeColor = "red";
  trunk.shapeColor = "red";
  
  sam.shapeColor = "green";  
 
//Agrega velocidad para hacer que el auto se mueva.
car1.velocityY = 8;
car2.velocityY = 8;
car3.velocityY = -8;
trunk.velocityY = -2;
trunk2.velocityY = 2;

function draw() {
  background("white");
  text("Lives: " + life,65,14);
  strokeWeight(0);

// Crea la función bounceoff para hacer que el auto rebote en los límites.
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
trunk.bounceOff(boundary1);
trunk.bounceOff(boundary2);
trunk2.bounceOff(boundary1);
trunk2.bounceOff(boundary2);

//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.}
  if (keyDown("a")) {
   sam.x=sam.x-8;
  }
  if (keyDown("d")) {
  sam.x=sam.x+8;
  }
 if (keyDown("w")) {
   sam.y=sam.y-8;
  }
  if (keyDown("s")) {
  sam.y=sam.y+8;
  }

//Agregar la condición de reducir la vida de Sam si toca el carro.
    if(
     sam.isTouching(lake)||      
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3))
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }

  
  

 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
