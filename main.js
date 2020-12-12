// Variables used in Function created here
var pokeHolder1 = document.getElementById("Pokemon1");
var pokeHolder2 = document.getElementById("Pokemon2");
var move11 = document.getElementById("Move1-1");
var move21 = document.getElementById("Move2-1");
var move31 = document.getElementById("Move3-1");
var move41 = document.getElementById("Move4-1");
var move12 = document.getElementById("Move1-2");
var move22 = document.getElementById("Move2-2");
var move32 = document.getElementById("Move3-2");
var move42 = document.getElementById("Move4-2");
var YourMove1 = document.getElementById("p1move");
var YourMove2 = document.getElementById("p2move");
var HP1 = document.getElementById("hp1");
var HP2 = document.getElementById("hp2");
var turn = 1;
var gameText = document.getElementById("text");
var sleep1 = false;
var sleep2 = false;
var paralyze1 = false;
var paralyze2 = false; 
var flinch1 = false;
var flinch2 = false;
var recharge1 = false;
var recharge2 = false;
var confusion1 = false;
var confusion2 = false;
var freeze1 = false;
var freeze2 = false;
var burn1 = false;
var burn2 = false;
var poison1 = false;
var poison2 = false;
var perish1 = false;
var perish2 = false;
var perishCount1 = 3;
var perishCount2 = 3;
var pokemonType1 = [];
var pokemonType2 = [];
var pokeChooseButtons = document.getElementsByClassName("chooseButton");
var statusText1 = document.getElementById("statusCode1");
var statusRemove1 = statusText1.innerHTML;
var statusText2 = document.getElementById("statusCode2");
var statusRemove2 = statusText1.innerHTML;
var P1Moves = [move11, move21, move31, move41];
var P2Moves = [move12, move22, move32, move42];



//Pokemon Objects
var Tangela = {
	name: 'Tangela',
	type: ['grass'],
	attack1: ['Tackle', ' normal', 'Normal, 1 Damage, 80% Accurate', 'tackle()'],
	attack2: ['Vine Whip', ' grass', 'Grass, 1 Damage, 80% Accurate', 'vineWhip()'],
	attack3: ['Double Edge', ' normal', 'Normal, 3 Damage with 1 Recoil Damage, 60% Accurate', 'doubleEdge()'],
	attack4: ['Sleep Powder', ' grass', 'Grass, 50% chance to put opponent to sleep', 'sleepPowder()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/2/2e/Spr_b_5b_114.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/6/67/Spr_b_5b_114_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/a/aa/Spr_5b_114.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/c/cb/Spr_5b_114_s.png'
};

var Rattata = {
	name: 'Rattata',
	type: ['normal'],
	attack1: ['Tackle', ' normal', 'Normal, 1 Damage, 80% Accurate', 'tackle()'],
	attack2: ['U-Turn', ' bug', 'Bug, 1 Damage, 80% Accurate', 'uTurn()'],
	attack3: ['Bite', ' dark', 'Dark, 2 Damage, 70% Accurate', 'bite()'],
	attack4: ['Super Fang', ' normal', 'Normal, 40% chance to remove half opponents HP, won\'t work with 1 HP remaining', 'superFang()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/d/d8/Spr_b_5b_019_m.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/5/54/Spr_b_5b_019_m_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/d/d5/Spr_5b_019_m.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/e/e3/Spr_5b_019_m_s.png'
};

var Slugma = {
	name: 'Slugma',
	type: ['fire'],
	attack1: ['Ember', ' fire', 'Fire, 1 Damage, 80% Accurate', 'ember()'],
	attack2: ['Rock Throw', ' rock', 'Rock, 1 Damage, 80% Accurate', 'rockThrow()'],
	attack3: ['Body Slam', ' normal', 'Normal, 2 Damage, 70% Accurate', 'bodySlam()'],
	attack4: ['Rest', ' psychic', '60% chance to recover all HP and heal status, but you\'re now asleep', 'rest()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/e/ee/Spr_b_5b_218.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/5/56/Spr_b_5b_218_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/2/29/Spr_5b_218.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/2/29/Spr_5b_218_s.png'
};

var Buizel = { 
	name: 'Buizel',
	type: ['water'], 
	attack1: ['Water Gun', ' water', 'Water, 1 Damage, 80% Accurate', 'waterGun()'],
	attack2: ['Quick Attack', ' normal', 'Normal, 1 Damage, 80% Accurate', 'quickAttack()'],
	attack3: ['Brick Break', ' fighting', 'Fighting, 2 Damage, 70% Accurate', 'brickBreak()'],
	attack4: ['Aqua Ring', ' water', '70% chance to heal 1, 20% chance to heal 2, 10% chance to heal 3', 'aquaRing()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/8/87/Spr_b_5b_418_m.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/b/b7/Spr_b_5b_418_m_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/2/24/Spr_5b_418_m.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/1/1e/Spr_5b_418_m_s.png'
};

var Bagon = { 
	name: 'Bagon',
	type: ['dragon'], 
	attack1: ['Headbutt', ' normal', 'Normal, 2 Damage, 70% Accurate', 'headbutt()'],
	attack2: ['Dragonbreath', ' dragon', 'Dragon, 1 Damage, 80% Accurate, 10% chance to Paralyze', 'dragonBreathe()'],
	attack3: ['Zen Headbutt', ' psychic', 'Psychic, 2 Damage, 60% Accurate, 10% chance to Flinch', 'zenHeadbutt()'],
	attack4: ['Flamethrower', ' fire', 'Fire, 3 Damage, 60% Accurate', 'flamethrower()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/d/d8/Spr_b_5b_371.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/a/a3/Spr_b_5b_371_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_371.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/1/17/Spr_5b_371_s.png'
};

var Pachirisu = { 
	name: 'Pachirisu',
	type: ['electric'], 
	attack1: ['Spark', ' electric', 'Electric, 1 Damage, 80% Accurate', 'spark()'],
	attack2: ['Quick Attack', ' normal', 'Normal, 1 Damage, 80% Accurate', 'quickAttack()'],
	attack3: ['Discharge', ' electric', 'Electric, 2 Damage, 60% Accurate, 20% chance to Paralyze', 'discharge()'],
	attack4: ['Super Fang', ' normal', 'Normal, 40% chance to remove half opponents HP, won\'t work with 1 HP remaining', 'superFang()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/a/aa/Spr_b_5b_417_m.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/a/ad/Spr_b_5b_417_m_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/4/4b/Spr_5b_417_m.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/7/76/Spr_5b_417_m_s.png'
};

var Drilbur = { 
	name: 'Drilbur',
	type: ['ground'], 
	attack1: ['Slash', ' normal', 'Normal, 2 Damage, 70% Accurate', 'slash()'],
	attack2: ['Metal Claw', ' steel', 'Steel, 1 Damage, 80% Accurate', 'metalClaw()'],
	attack3: ['Drill Run', ' ground', 'Ground, 3 Damage, 60% Accurate', 'drillRun()'],
	attack4: ['Fissure', ' ground', 'Ground, 10% chance to knockout you\'re opponent', 'fissure()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/c/c6/Spr_b_5b_529.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/8/84/Spr_b_5b_529_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/4/45/Spr_5b_529.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/e/ef/Spr_5b_529_s.png'
};

var Klink = { 
	name: 'Klink',
	type: ['steel'], 
	attack1: ['Vice Grip', ' normal', 'Normal, 1 Damage, 80% Accurate', 'viceGrip()'],
	attack2: ['Mirror Shot', ' steel', 'Steel, 1 Damage, 80% Accurate', 'mirrorShot()'],
	attack3: ['Discharge', ' electric', 'Electric, 2 Damage, 60% Accurate, 20% chance to Paralyze', 'discharge()'],
	attack4: ['Hyper Beam', ' normal', 'Normal, 5 Damage, 60% Accurate, Can\'t attack next turn', 'hyperBeam()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/f/fa/Spr_b_5b_599.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/1/1a/Spr_b_5b_599_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/b/b9/Spr_5b_599.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/e/e8/Spr_5b_599_s.png'
};

var Poochyena = { 
	name: 'Poochyena',
	type: ['dark'], 
	attack1: ['Bite', ' dark', 'Dark, 2 Damage, 70% Accurate', 'bite()'],
	attack2: ['Play Rough', ' fairy', 'Fairy, 2 Damage, 70% Accurate', 'playRough()'],
	attack3: ['Take Down', ' normal', 'Normal, 3 Damage with 1 Recoil Damage, 60% Accurate', 'takeDown()'],
	attack4: ['Swagger', ' normal', '50% chance to confuse your opponent', 'swagger()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/e/ef/Spr_b_5b_261.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/d/d8/Spr_b_5b_261_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/3/3e/Spr_5b_261.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/7/7a/Spr_5b_261_s.png'
};

var Makuhita = { 
	name: 'Makuhita',
	type: ['fighting'], 
	attack1: ['Arm Thrusts', ' fighting', 'Fighting,<br> 30% 1 Damage, 30% 2 Damage, 20% 3 Damage, 10% 4 Damage, 10% 5 Damage, 70% Accurate', 'armThrusts()'],
	attack2: ['Knock Off', ' dark', 'Dark, 1 Damage, 80% Accurate', 'knockOff()'],
	attack3: ['Poison Jab', ' poison', 'Poison, 1 Damage, 80% Accurate', 'poisonJab()'],
	attack4: ['Heavy Slam', ' steel', 'Steel, 2 Damage, 70% Accurate', 'heavySlam()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/c/c2/Spr_b_5b_296.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/5/57/Spr_b_5b_296_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/4/4f/Spr_5b_296.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/d/da/Spr_5b_296_s.png'
};

var Roggenrola = { 
	name: 'Roggenrola',
	type: ['rock'], 
	attack1: ['Headbutt', ' normal', 'Normal, 2 Damage, 70% Accurate', 'headbutt()'],
	attack2: ['Rock Blast', ' rock', 'Rock,<br> 30% 1 Damage, 30% 2 Damage, 20% 3 Damage, 10% 4 Damage, 10% 5 Damage, 70% Accurate', 'rockBlast()'],
	attack3: ['Bulldoze', ' ground', 'Ground, 1 Damage, 80% Accurate', 'bulldoze()'],
	attack4: ['Explosion', ' normal', 'Normal, 9 Damage, 50% Accurate, 10 Damage to self, ', 'explosion()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/d/d9/Spr_b_5b_524.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/1/1f/Spr_b_5b_524_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/2/20/Spr_5b_524.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/2/2b/Spr_5b_524_s.png'
};

var Snorunt = { 
	name: 'Snorunt',
	type: ['ice'], 
	attack1: ['Headbutt', ' normal', 'Normal, 2 Damage, 70% Accurate', 'headbutt()'],
	attack2: ['Frost Breath', ' ice', 'Ice, 1 Damage, 80% Accurate', 'frostBreath()'],
	attack3: ['Ice Fang', ' ice', 'Ice, 2 Damage, 70% Accurate, 10% chance to Freeze', 'iceFang()'],
	attack4: ['Swagger', ' normal', '50% chance to confuse your opponent', 'swagger()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/a/ae/Spr_b_5b_361.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/d/d5/Spr_b_5b_361_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/c/ca/Spr_5b_361.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/c/cf/Spr_5b_361_s.png'
};

var Snubbull = { 
	name: 'Snubbull',
	type: ['fairy'], 
	attack1: ['Play Rough', ' fairy', 'Fairy, 2 Damage, 70% Accurate', 'playRough()'],
	attack2: ['Ice Fang', ' ice', 'Ice, 2 Damage, 70% Accurate, 10% chance to Freeze', 'iceFang()'],
	attack3: ['Fire Fang', ' fire', 'Fire, 2 Damage, 70% Accurate, 10% chance to Burn', 'fireFang()'],
	attack4: ['Thunder Fang', ' electric', 'Electric, 2 Damage, 70% Accurate, 10% chance to Paralyze', 'thunderFang()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/0/0f/Spr_b_5b_209.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/9/99/Spr_b_5b_209_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/b/b3/Spr_5b_209.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/d/de/Spr_5b_209_s.png'
};

var Skorupi = { 
	name: 'Skorupi',
	type: ['bug'], 
	attack1: ['Poison Sting', ' poison', 'Poison, 1 Damage, 70% Accurate, 30% chance to Poison', 'poisonSting()'],
	attack2: ['Venoshock', ' poison', 'Poison, 2 Damage, 70% Accurate, if opponent is Poisoned this does 4 Damage', 'venoshock()'],
	attack3: ['Pin Missle', ' bug', 'Bug,<br> 30% 1 Damage, 30% 2 Damage, 20% 3 Damage, 10% 4 Damage, 10% 5 Damage, 70% Accurate', 'pinMissle()'],
	attack4: ['Brick Break', ' fighting', 'Fighting, 2 Damage, 70% Accurate', 'brickBreak()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/2/21/Spr_b_5b_451.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/9/96/Spr_b_5b_451_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/8/86/Spr_5b_451.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/5/50/Spr_5b_451_s.png'
};

var Solosis = { 
	name: 'Solosis',
	type: ['psychic'], 
	attack1: ['Psyshock', ' psychic', 'Psychic, 1 Damage, 80% Accurate', 'psyshock()'],
	attack2: ['Energy Ball', '  grass', 'Grass, 1 Damage, 80% Accurate', 'energyBall()'],
	attack3: ['Endeavor', ' normal', 'Normal, 70% chance to lower your opponents HP to match yours, will fail if you have higher HP', 'endeavor()'],
	attack4: ['Recover', ' normal', 'Normal, 40% chance to recover half your HP, 10% chance to recover ALL your HP', 'recover()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/e/e4/Spr_b_5b_577.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/2/25/Spr_b_5b_577_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/4/4d/Spr_5b_577.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/d/d6/Spr_5b_577_s.png'
};

var Grimer = { 
	name: 'Grimer',
	type: ['poison'], 
	attack1: ['Pound', ' normal', 'Normal, 1 Damage, 80% Accurate', 'pound()'],
	attack2: ['Poison Gas', '  poison', 'Poison, 70% chance to Poison Opponent', 'poisonGas()'],
	attack3: ['Knock Off', ' dark', 'Dark, 1 Damage, 80% Accurate', 'knockOff()'],
	attack4: ['Sludge Bomb', ' poison', 'Poison, 2 Damage, 70% Accurate', 'sludgeBomb()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/e/ec/Spr_b_5b_088.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/7/7e/Spr_b_5b_088_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/6/6e/Spr_5b_088.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/7/74/Spr_5b_088_s.png'
};

var Misdreavus = { 
	name: 'Misdreavus',
	type: ['ghost'], 
	attack1: ['Shadow Ball', ' ghost', 'Ghost, 2 Damage, 70% Accurate', 'shadowBall()'],
	attack2: ['Psybeam', '  psychic', 'Psychic, 1 Damage, 80% Accurate', 'psybeam()'],
	attack3: ['Power Gem', ' rock', 'Rock, 1 Damage, 80% Accurate', 'powerGem()'],
	attack4: ['Perish Song', ' ghost', '40% Accurate, Places a counter on each Pokemon that starts at 3, when it reaches 0 that pokemon is knocked out', 'perishSong()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/f/fc/Spr_b_5b_200.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/9/9b/Spr_b_5b_200_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/4/4a/Spr_5b_200.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/b/b9/Spr_5b_200_s.png'
};

var Togetic = { 
	name: 'Togetic',
	type: ['flying'], 
	attack1: ['Fairy Wind', ' fairy', 'Fairy, 1 Damage, 80% Accurate', 'fairyWind()'],
	attack2: ['Peck', '  flying', 'Flying, 1 Damage, 80% Accurate', 'peck()'],
	attack3: ['Roost', ' flying', 'Flying, 60% chance to recover 3 HP', 'roost()'],
	attack4: ['Metronome', ' normal', 'Use a random Move from any Pokemon', 'metronome()'],
	sprite1: 'https://cdn.bulbagarden.net/upload/9/9f/Spr_b_5b_176.png',
    sprite1s: 'https://cdn.bulbagarden.net/upload/7/7c/Spr_b_5b_176_s.png',
	sprite2: 'https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_176.png',
    sprite2s: 'https://cdn.bulbagarden.net/upload/4/48/Spr_5b_176_s.png'
};


//Function to pick Pokemon
function pickPokemon(poke) {
	
	if (turn == 1) {
        var shinyCheck = Math.floor((Math.random() * 100) + 1);
		document.getElementById("Name1").innerHTML = poke.name;
        if (shinyCheck > 5) {
		  document.getElementById("poke1Sprite").src = poke.sprite1;
        } else {
          document.getElementById("poke1Sprite").src = poke.sprite1s;  
        }
		document.getElementById("Move11Name").innerHTML = poke.attack1[0];
		document.getElementById("Move1-1").className += poke.attack1[1];
		document.getElementById("Move1-1").setAttribute("onClick", poke.attack1[3]);
		document.getElementById("MoveTip11").innerHTML = poke.attack1[2];
		document.getElementById("Move21Name").innerHTML = poke.attack2[0];
		document.getElementById("Move2-1").className += poke.attack2[1];
		document.getElementById("Move2-1").setAttribute("onClick", poke.attack2[3]);
		document.getElementById("MoveTip21").innerHTML = poke.attack2[2];
		document.getElementById("Move31Name").innerHTML = poke.attack3[0];
		document.getElementById("Move3-1").className += poke.attack3[1];
		document.getElementById("Move3-1").setAttribute("onClick", poke.attack3[3]);
		document.getElementById("MoveTip31").innerHTML = poke.attack3[2];
		document.getElementById("Move41Name").innerHTML = poke.attack4[0];
		document.getElementById("Move4-1").className += poke.attack4[1];
		document.getElementById("Move4-1").setAttribute("onClick", poke.attack4[3]);
		document.getElementById("MoveTip41").innerHTML = poke.attack4[2];
		pokemonType1 = poke.type;
		gameText.innerHTML += "<span class='bluetext'>Player One has chosen " + poke.name +"</span><br>";
		document.getElementById("whoChooses").innerHTML = "Two!";
		turn++;
	} else if (turn == 2) {
        var shinyCheck = Math.floor((Math.random() * 100) + 1);
		document.getElementById("Name2").innerHTML = poke.name;
        if (shinyCheck > 5) {
		  document.getElementById("poke2Sprite").src = poke.sprite2;
        } else {
           document.getElementById("poke2Sprite").src = poke.sprite2s; 
        }
		document.getElementById("Move12Name").innerHTML = poke.attack1[0];
		document.getElementById("Move1-2").className += poke.attack1[1];
		document.getElementById("Move1-2").setAttribute("onClick", poke.attack1[3]);
		document.getElementById("MoveTip12").innerHTML = poke.attack1[2];
		document.getElementById("Move22Name").innerHTML = poke.attack2[0];
		document.getElementById("Move2-2").className += poke.attack2[1];
		document.getElementById("Move2-2").setAttribute("onClick", poke.attack2[3]);
		document.getElementById("MoveTip22").innerHTML = poke.attack2[2];
		document.getElementById("Move32Name").innerHTML = poke.attack3[0];
		document.getElementById("Move3-2").className += poke.attack3[1];
		document.getElementById("Move3-2").setAttribute("onClick", poke.attack3[3]);
		document.getElementById("MoveTip32").innerHTML = poke.attack3[2];
		document.getElementById("Move42Name").innerHTML = poke.attack4[0];
		document.getElementById("Move4-2").className += poke.attack4[1];
		document.getElementById("Move4-2").setAttribute("onClick", poke.attack4[3]);
		document.getElementById("MoveTip42").innerHTML = poke.attack4[2];
		pokemonType2 = poke.type;
		
		gameText.innerHTML += "<span class='redtext'>Player Two has chosen " + poke.name +"</span><br>";
		document.getElementById("ChooseButtons").style.display = "none";
		document.getElementById("battleHolder").style.display = "grid";
		document.getElementById("textBox").style.display = "block";
		turn++;
		whoStarts();
	}
}

//Sets initial HP, will be changed later
function initialHP() {
	HP1.innerHTML = 10;
	HP2.innerHTML = 10;
}

initialHP();


//Determines which player goes first
function whoStarts() {
	
	
	var startNumber = Math.random();
	if (startNumber < 0.5) {
		PlayerTwoAttack();
		gameText.innerHTML += "Player One goes First!<br>";
		checkTextareaHeight();
	} else {
		PlayerOneAttack();
		gameText.innerHTML += "Player Two goes First!<br>";
		checkTextareaHeight();
	}
}


//Resets game after finish
function resetGame() {
	HP1.innerHTML = 10;
	HP2.innerHTML = 10;
	sleep1 = false;
	sleep2 = false;
	paralyze1 = false;
	paralyze2 = false; 
	flinch1 = false;
	flinch2 = false;
	recharge1 = false;
	recharge2 = false;
	confusion1 = false;
	confusion2 = false;
	freeze1 = false;
	freeze2 = false;
	burn1 = false;
	burn2 = false;
	poison1 = false;
	poison2 = false;
	perish1 = false;
	perish2 = false;
	perishCount1 = 3;
	perishCount2 = 3;
	statusText1.innerHTML = "";
	statusText2.innerHTML = "";
	gameText.innerHTML += "<hr>";
	whoStarts();
}

//Ends Player Ones turn
function PlayerOneAttack() {
	move11.disabled = true;
	move21.disabled = true;
	move31.disabled = true;
	move41.disabled = true;
	move12.disabled = false;
	move22.disabled = false;
	move32.disabled = false;
	move42.disabled = false;
	YourMove1.style.visibility = "hidden";
	YourMove2.style.visibility = "visible";
	pokeHolder1.classList.add("turnOff");
	pokeHolder1.classList.remove("turnOn");
	pokeHolder2.classList.add("turnOn");
	pokeHolder2.classList.remove("turnOff");
	for (var i = 0; i < P1Moves.length; i++) {
		P1Moves[i].classList.add("noHover");
		P2Moves[i].classList.remove("noHover");
	}
	turn = 2;
	status2();
	setTimeout(endCheck1, 100);
}

//Ends Player Twos turn
function PlayerTwoAttack() {
	move11.disabled = false;
	move21.disabled = false;
	move31.disabled = false;
	move41.disabled = false;
	move12.disabled = true;
	move22.disabled = true;
	move32.disabled = true;
	move42.disabled = true;
	pokeHolder1.classList.add("turnOn");
	pokeHolder1.classList.remove("turnOff");
	pokeHolder2.classList.add("turnOff");
	pokeHolder2.classList.remove("turnOn");
	YourMove2.style.visibility = "hidden";
	YourMove1.style.visibility = "visible";
	for (var i = 0; i < P2Moves.length; i++) {
		P2Moves[i].classList.add("noHover");
		P1Moves[i].classList.remove("noHover");
	}
	turn = 1;
	status1();
	setTimeout(endCheck2, 100);
}

//Checks if Game is Over
function endCheck1() {
	if (HP2.innerHTML <= 0) {
		alert("Player 1 has won!");
		resetGame();
	} else if (HP1.innerHTML <= 0) {
		alert("Player 2 has won!");
		resetGame();
	}
}

function endCheck2() {
	if (HP1.innerHTML <= 0) {
		alert("Player 2 has won!");
		resetGame();
	} else if (HP2.innerHTML <= 0) {
		alert("Player 1 has won!");
		resetGame();
	}
}

//Fix for text box, keeps it at bottom
function checkTextareaHeight(){
   var textarea = document.getElementById("textBox");
   if(textarea.selectionStart == textarea.selectionEnd) {
      textarea.scrollTop = textarea.scrollHeight;
   }
}

//Pokemon Moves
function aquaRing() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (turn == 1) {
		if (HP1.innerHTML == 10) {
      gameText.innerHTML += "<span class='bluetext'>Player One used Aqua Ring, but it failed...</span><br>";
      checkTextareaHeight();
      PlayerOneAttack();
    } else if (HP1.innerHTML == 9) {
		HP1.innerHTML++;
		gameText.innerHTML += "<span class='bluetext'>Player One used Aqua Ring, and healed one HP!</span><br>";
		checkTextareaHeight();
		PlayerOneAttack();
	} else if (HP1.innerHTML == 8) {
		if (MoveHit > 8) {
			HP1.innerHTML = parseInt(HP1.innerHTML) + 2;
			gameText.innerHTML += "<span class='bluetext'>Player One used Aqua Ring, and healed two HP!</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			HP1.innerHTML++;
			gameText.innerHTML += "<span class='bluetext'>Player One used Aqua Ring, and healed one HP!</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		}
	} else {
		if (MoveHit == 10) {
			HP1.innerHTML = parseInt(HP1.innerHTML) + 3;
			gameText.innerHTML += "<span class='bluetext'>Player One used Aqua Ring, and healed three HP!</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else if (MoveHit > 8) {
			HP1.innerHTML = parseInt(HP1.innerHTML) + 2;
			gameText.innerHTML += "<span class='bluetext'>Player One used Aqua Ring, and healed two HP!</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
            HP1.innerHTML++;
			gameText.innerHTML += "<span class='bluetext'>Player One used Aqua Ring, and healed one HP!</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		}
	}
	} else {
		if (HP2.innerHTML == 10) {
      gameText.innerHTML += "<span class='redtext'>Player Two used Aqua Ring, but it failed...</span><br>";
      checkTextareaHeight();
      PlayerTwoAttack();
    } else if (HP2.innerHTML == 9) {
		HP2.innerHTML++;
		gameText.innerHTML += "<span class='redtext'>Player Two used Aqua Ring, and healed one HP!</span><br>";
		checkTextareaHeight();
		PlayerTwoAttack();
	} else if (HP2.innerHTML == 8) {
		if (MoveHit > 8) {
			HP2.innerHTML = parseInt(HP2.innerHTML) + 2;
			gameText.innerHTML += "<span class='redtext'>Player Two used Aqua Ring, and healed two HP!</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		} else {
			HP2.innerHTML++;
			gameText.innerHTML += "<span class='redtext'>Player Two used Aqua Ring, and healed one HP!</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (MoveHit == 10) {
			HP2.innerHTML = parseInt(HP2.innerHTML) + 3;
			gameText.innerHTML += "<span class='redtext'>Player Two used Aqua Ring, and healed three HP!</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		} else if (MoveHit > 8) {
			HP2.innerHTML = parseInt(HP2.innerHTML) + 2;
			gameText.innerHTML += "<span class='redtext'>Player Two used Aqua Ring, and healed two HP!</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		} else {
			HP2.innerHTML++;
			gameText.innerHTML += "<span class='redtext'>Player Two used Aqua Ring, and healed one HP!</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
	}
}

function armThrusts() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	var Damage = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("steel") || pokemonType2.includes("rock") || pokemonType2.includes("ice") || pokemonType2.includes("ice") || pokemonType2.includes("normal")) {
				if (Damage == 10) {
					HP2.innerHTML-= 6;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 5 Times for 6 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage == 9) {
					HP2.innerHTML-= 5;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 4 Times for 5 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP2.innerHTML-= 4;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 3 Times for 4 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage > 3) {
					HP2.innerHTML-= 3;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 2 Times for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else {
					HP2.innerHTML-= 2;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 1 Time for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType2.includes("bug") || pokemonType2.includes("fairy") || pokemonType2.includes("flying") || pokemonType2.includes("poison") || pokemonType2.includes("psychic")) {
				if (Damage == 10) {
					HP2.innerHTML-= 4;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 5 Times for 4 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage == 9) {
					HP2.innerHTML-= 3;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 4 Times for 3 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP2.innerHTML-= 2;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 3 Times for 2 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage > 3) {
					HP2.innerHTML--;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 2 Times for 1 Damage, it's <em>not very effective</em>...</span><br>";
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 1 Time for 0 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Arm Thrust but Player Two is immune!</span><br>";
			} else {
				if (Damage == 10) {
					HP2.innerHTML-= 5;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 5 Times for 5 Damage!</span><br>";
				} else if (Damage == 9) {
					HP2.innerHTML-= 4;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 4 Times for 4 Damage!</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP2.innerHTML-= 3;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 3 Times for 3 Damage!</span><br>";
				} else if (Damage > 3) {
					HP2.innerHTML-= 2;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 2 Times for 2 Damage!</span><br>";
				} else {
					HP2.innerHTML--;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Arm Thrust 1 Time for 1 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("steel") || pokemonType1.includes("rock") || pokemonType1.includes("ice") || pokemonType1.includes("ice") || pokemonType1.includes("normal")) {
				if (Damage == 10) {
					HP1.innerHTML-= 6;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 5 Times for 6 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage == 9) {
					HP1.innerHTML-= 5;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 4 Times for 5 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP1.innerHTML-= 4;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 3 Times for 4 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage > 3) {
					HP1.innerHTML-= 3;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 2 Times for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else {
					HP1.innerHTML-= 2;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 1 Time for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType1.includes("bug") || pokemonType1.includes("fairy") || pokemonType1.includes("flying") || pokemonType1.includes("poison") || pokemonType1.includes("psychic")) {
				if (Damage == 10) {
					HP1.innerHTML-= 4;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 5 Times for 4 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage == 9) {
					HP1.innerHTML-= 3;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 4 Times for 3 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP1.innerHTML-= 2;
					gameText.innerHTML += "<span class=redtext'>Player Two hit Arm Thrust 3 Times for 2 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage > 3) {
					HP1.innerHTML--;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 2 Times for 1 Damage, it's <em>not very effective</em>...</span><br>";
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 1 Time for 0 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Arm Thrust but Player One is immune!</span><br>";
			} else {
				if (Damage == 10) {
					HP1.innerHTML-= 5;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 5 Times for 5 Damage!</span><br>";
				} else if (Damage == 9) {
					HP1.innerHTML-= 4;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 4 Times for 4 Damage!</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP1.innerHTML-= 3;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 3 Times for 3 Damage!</span><br>";
				} else if (Damage > 3) {
					HP1.innerHTML-= 2;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 2 Times for 2 Damage!</span><br>";
				} else {
					HP1.innerHTML--;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Arm Thrust 1 Time for 1 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Arm Thrust...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Arm Thrust...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function bite() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("ghost") || pokemonType2.includes("psychic")) {
				HP2.innerHTML-= 3;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Bite for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("dark") || pokemonType2.includes("fairy") || pokemonType2.includes("fighting")) {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Bite for 1 Damage, it's <em>not very effective</em>!</span><br>";
			} else {
				HP2.innerHTML-= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Bite for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("ghost") || pokemonType1.includes("psychic")) {
				HP1.innerHTML-= 3;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Bite for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("dark") || pokemonType1.includes("fairy") || pokemonType1.includes("fighting")) {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Bite for 1 Damage, it's <em>not very effective</em>!</span><br>";
			} else {
				HP1.innerHTML-= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Bite for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Bite...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Bite...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function bodySlam() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("rock") || pokemonType2.includes("steel")) {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Body Slam for 1 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Body Slam but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Body Slam for 2 Damage!</span><br>";
			} 
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("rock") || pokemonType1.includes("steel")) {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Body Slam but it did 1 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Body Slam but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML-= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Body Slam for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Body Slam...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Body Slam...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function brickBreak() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("normal") || pokemonType2.includes("steel") || pokemonType2.includes("dark") || pokemonType2.includes("rock") || pokemonType2.includes("ice")) {
				HP2.innerHTML-= 3;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Brick Break for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("bug") || pokemonType2.includes("fairy") || pokemonType2.includes("flying") || pokemonType2.includes("poison") || pokemonType2.includes("psychic")) {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Brick Break for 1 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Brick Break but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML-= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Brick Break for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("normal") || pokemonType1.includes("steel") || pokemonType1.includes("dark") || pokemonType1.includes("rock") || pokemonType1.includes("ice")) {
				HP1.innerHTML-= 3;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Brick Break for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("bug") || pokemonType1.includes("fairy") || pokemonType1.includes("flying") || pokemonType1.includes("poison") || pokemonType1.includes("psychic")) {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Brick Break for 1 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Brick Break but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML-= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Brick Break for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Brick Break...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Brick Break...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function bulldoze() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("electric") || pokemonType2.includes("fire") || pokemonType2.includes("steel") || pokemonType2.includes("poison")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Bulldoze for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("bug") || pokemonType2.includes("grass")){
				gameText.innerHTML += "<span class='bluetext'>Player One hit Bulldoze for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("flying")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Bulldoze but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Bulldoze for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("electric") || pokemonType1.includes("fire") || pokemonType1.includes("steel") || pokemonType1.includes("poison")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Bulldoze for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("bug") || pokemonType1.includes("grass")){
				gameText.innerHTML += "<span class='redtext'>Player Two hit Bulldoze for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("flying")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Bulldoze but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Bulldoze for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Bulldoze...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Bulldoze...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function discharge() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 4) {
		if (turn == 1) {
			if (pokemonType2.includes("flying") || pokemonType2.includes("water")) {
				HP2.innerHTML-= 3;
				if (MoveHit > 8) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Discharge for 3 Damage, it's <strong>Super Effective</strong>!, Player Two is Paralyzed!</span><br>";
					paralyze2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Discharge for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType2.includes("dragon") || pokemonType2.includes("electric") || pokemonType2.includes("grass")) {
				HP2.innerHTML--;
				if (MoveHit > 8) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Discharge for 1 Damage, it's <em>not very effectice</em>..., Player Two is Paralyzed!</span><br>";
					paralyze2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Discharge for 1 Damage, it's it's <em>not very effectice</em>...!</span><br>";
				}
			} else if (pokemonType2.includes("ground")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Discharge but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML -= 2;
				if (MoveHit > 8) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Discharge for 2 Damage!, Player Two is Paralyzed!</span><br>";
					paralyze2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Discharge for 2 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("flying") || pokemonType1.includes("water")) {
				HP1.innerHTML-= 3;
				if (MoveHit > 8) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Discharge for 3 Damage, it's <strong>Super Effective</strong>!, Player One is Paralyzed!</span><br>";
					paralyze1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player One hit Discharge for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType1.includes("dragon") || pokemonType1.includes("electric") || pokemonType1.includes("grass")) {
				HP1.innerHTML--;
				if (MoveHit > 8) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Discharge for 1 Damage, it's <em>not very effectice</em>..., Player One is Paralyzed!</span><br>";
					paralyze1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Discharge for 1 Damage, it's it's <em>not very effectice</em>...!</span><br>";
				}
			} else if (pokemonType1.includes("ground")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Discharge but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML -= 2;
				if (MoveHit > 8) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Discharge for 2 Damage!, Player One is Paralyzed!</span><br>";
					paralyze1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player One hit Discharge for 2 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Discharge...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Discharge...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function doubleEdge() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 4) {
		if (turn == 1) {
			if (pokemonType2.includes("rock") || pokemonType2.includes("steel")) {
				HP2.innerHTML-= 2;
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Double Edge for 2 damage and took 1 Damage in recoil, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Double Edge but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML-= 3;
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Double Edge for 3 Damage, but took 1 in recoil!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("rock") || pokemonType1.includes("steel")) {
				HP1.innerHTML-= 2;
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Double Edge for 2 damage and took 1 Damage in recoil, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Double Edge but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML-= 3;
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Double Edge for 3 Damage, but took 1 in recoil!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Double Edge...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Double Edge...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function dragonBreathe() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			
			if (pokemonType2.includes("dragon")) {
				HP2.innerHTML-= 2;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Dragonbreath for 2 Damage, it's <strong>Super Effective</strong>! Player Two is Paralyzed.</span><br>";
					paralyze2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Dragonbreath for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType2.includes("steel")) {
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Dragonbreath for 0 Damage, it's <em>not very effective</em>...Player Two is paralyzed.</span><br>";
					paralyze2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Dragonbreath for 0 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else if (pokemonType2.includes("fairy")) {
					gameText.innerHTML += "<span class='bluetext'>Player One used Dragonbreath but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML--;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Dragonbreath for 1 Damage! Player Two is Paralyzed.</span><br>";
					paralyze2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Dragonbreath for 1 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("dragon")) {
				HP1.innerHTML-= 2;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Dragonbreath for 2 Damage, it's <strong>Super Effective</strong>! Player One is Paralyzed.</span><br>";
					paralyze1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Dragonbreath for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType1.includes("steel")) {
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Dragonbreath for 0 Damage, it's <em>not very effective</em>...Player One is Paralyzed.</span><br>";
					paralyze1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Dragonbreath for 0 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else if (pokemonType1.includes("fairy")) {
					gameText.innerHTML += "<span class='redtext'>Player Two used Dragonbreath but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML--;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Zen Headbutt for 1 Damage! Player One is Paralyzed.</span><br>";
					paralyze1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Dragonbreath for 1 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Dragonbreath...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Dragonbreath...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function drillRun() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 4) {
		if (turn == 1) {
			if (pokemonType2.includes("electric") || pokemonType2.includes("fire") || pokemonType2.includes("steel") || pokemonType2.includes("poison")) {
				HP2.innerHTML -= 4;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Drill Run for 4 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("bug") || pokemonType2.includes("grass")){
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Drill Run for 2 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("flying")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Drill Run but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML -= 3;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Drill Run for 3 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("electric") || pokemonType1.includes("fire") || pokemonType1.includes("steel") || pokemonType1.includes("poison")) {
				HP1.innerHTML -= 4;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Drill Run for 4 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("bug") || pokemonType1.includes("grass")){
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Drill Run for 2 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("flying")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Drill Run but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML -= 3;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Drill Run for 3 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Drill Run...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Drill Run...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function ember() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("grass") || pokemonType2.includes("bug") || pokemonType2.includes("ice") || pokemonType2.includes("steel")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Ember for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("dragon") || pokemonType2.includes("fire") || pokemonType2.includes("rock") || pokemonType2.includes("water")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Ember for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Ember for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("grass") || pokemonType1.includes("bug") || pokemonType1.includes("ice") || pokemonType1.includes("steel")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Ember for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("dragon") || pokemonType1.includes("fire") || pokemonType1.includes("rock") || pokemonType1.includes("water")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Ember for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Ember for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Ember...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Ember...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function endeavor() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (HP1.innerHTML < HP2.innerHTML) {
				HP2.innerHTML = HP1.innerHTML;
				gameText.innerHTML += "<span class='bluetext'>Player One used Endeavor and evened out the HP!</span><br>";
				checkTextareaHeight();
				PlayerOneAttack();
			} else {
				gameText.innerHTML += "<span class='bluetext'>Player One used but it failed...!</span><br>";
				checkTextareaHeight();
				PlayerOneAttack();
			}
		} else {
			if (HP2.innerHTML < HP1.innerHTML) {
				HP1.innerHTML = HP2.innerHTML;
				gameText.innerHTML += "<span class='redtext'>Player Two used Endeavor and evened out the HP!</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
			} else {
				gameText.innerHTML += "<span class='redtext'>Player Two used endeavor but it failed</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
			}
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Endeavor...!</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Endeavor...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function energyBall() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("water") || pokemonType2.includes("rock") || pokemonType2.includes("ground")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Energy Ball for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("bug") || pokemonType2.includes("dragon") || 	pokemonType2.includes("fire") || pokemonType2.includes("flying") || 		pokemonType2.includes("grass") || pokemonType2.includes("poison") || 		pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Energy Ball for 0 Damage, it's <em>not very effective<em>...</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Energy Ball for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("water") || pokemonType1.includes("rock") || pokemonType1.includes("ground")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Energy Ball for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("bug") || pokemonType1.includes("dragon") || 	pokemonType1.includes("fire") || pokemonType1.includes("flying") || 		pokemonType1.includes("grass") || pokemonType1.includes("poison") || 		pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Energy Ball for 0 Damage, it's <em>not very effective<em>...</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Energy Ball for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Energy Ball...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Energy Ball...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function explosion() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 5) {
		if (turn == 1) {
			if (pokemonType2.includes("rock") || pokemonType2.includes("steel")) {
				HP2.innerHTML -= 8;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Explosion for 8 damage, it's <em>not very effective</em>...</span><br>";
				HP1.innerHTML = 0;
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Tackle but Player Two is immune!</span><br>";
				HP1.innerHTML = 0;
			} else {
				HP2.innerHTML -= 9;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Explosion for 9 damage!!!</span><br>";
				HP1.innerHTML = 0;
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("rock") || pokemonType1.includes("steel")) {
				HP1.innerHTML -= 8;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Explosion for 8 damage, it's <em>not very effective</em>...</span><br>";
				HP2.innerHTML = 0;
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Tackle but Player One is immune!</span><br>";
				HP2.innerHTML = 0;
			} else {
				HP1.innerHTML-= 9;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Explosion for 9 damage!!!</span><br>";
				HP2.innerHTML = 0;
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Explosion and knocked themselves out...</span><br>";
			HP1.innerHTML = 0;
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Explosion and knocked themselves out...</span><br>";
			HP2.innerHTML = 0;
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function fairyWind() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("dark") || pokemonType2.includes("dragon") ||pokemonType2.includes("fighting")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Fairy Wind for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("fire") || pokemonType2.includes("poison") ||pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Fairy Wind for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Fairy Wind for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("dark") || pokemonType1.includes("dragon") ||pokemonType1.includes("fighting")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Fairy Wind for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("fire") || pokemonType1.includes("poison") ||pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Fairy Wind for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Fairy Wind for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Fairy Wind...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Fairy Wind...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function fireFang() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("grass") || pokemonType2.includes("steel") || pokemonType2.includes("bug") || pokemonType2.includes("ice")) {
				HP2.innerHTML-= 3;
				if (MoveHit == 10 && burn2 == false) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Fire Fang for 3 Damage, it's <strong>Super Effective</strong>!, Player Two is  Burned!</span><br>";
					burn2 = true;
					statusText2.innerHTML += " Burned";
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Fire Fang for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType2.includes("dragon") || pokemonType2.includes("fire") || pokemonType2.includes("rock") || pokemonType2.includes("water")) {
				HP2.innerHTML--;
				if (MoveHit == 10 && burn2 == false) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Fire Fang for 1 Damage, it's <em>not very effectice</em>..., Player Two is Burned!</span><br>";
					burn2 = true;
					statusText2.innerHTML += " Burned";
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Fire Fang for 1 Damage, it's it's <em>not very effectice</em>...!</span><br>";
				}
			} else {
				HP2.innerHTML -= 2;
				if (MoveHit == 10 && burn2 == false) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Fire Fang for 2 Damage!, Player Two is Burned!</span><br>";
					burn2 = true;
					statusText2.innerHTML += " Burned";
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Fire Fang for 2 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("grass") || pokemonType1.includes("steel") || pokemonType1.includes("bug") || pokemonType1.includes("ice")) {
				HP1.innerHTML-= 3;
				if (MoveHit == 10 && burn1 == false) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Fire Fang for 3 Damage, it's <strong>Super Effective</strong>!, Player One is Burned!</span><br>";
					burn1 = true;
					statusText1.innerHTML += " Burned";
				} else {
					gameText.innerHTML += "<span class='redtext'>Player One hit Fire Fang for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType1.includes("dragon") || pokemonType1.includes("fire") || pokemonType1.includes("rock") || pokemonType1.includes("water")) {
				HP1.innerHTML--;
				if (MoveHit == 10 && burn1 == false) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Fire Fang for 1 Damage, it's <em>not very effectice</em>..., Player One is Burned!</span><br>";
					burn1 = true;
					statusText1.innerHTML += " Burned";
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Fire Fang for 1 Damage, it's it's <em>not very effectice</em>...!</span><br>";
				}
			} else {
				HP1.innerHTML -= 2;
				if (MoveHit == 10 && burn1 == false) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Fire Fang for 2 Damage!, Player One is Burned!</span><br>";
					burn1 = true;
					statusText1.innerHTML += " Burned";
				} else {
					gameText.innerHTML += "<span class='redtext'>Player One hit Fire Fang for 2 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Fire Fang...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Fire Fang...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function fissure() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit == 10) {
		if (turn == 1) {
			if (pokemonType2.includes("flying")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Fissure but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML = 0;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Fissure! It's a KNOCKOUT!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("flying")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Fissure but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML = 0;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Fissure! It's a KNOCKOUT!!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One attempted Fissure, but it failed...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two attempted Fissure, but it failed...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function flamethrower() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 4) {
		if (turn == 1) {
			if (pokemonType2.includes("grass") || pokemonType2.includes("bug") || pokemonType2.includes("ice") || pokemonType2.includes("steel")) {
				HP2.innerHTML -= 4;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Flamethrower for 4 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("dragon") || pokemonType2.includes("fire") || pokemonType2.includes("rock") || pokemonType2.includes("water")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Flamethrower for 2 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP2.innerHTML -= 3;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Flamethrower for 3 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("grass") || pokemonType1.includes("bug") || pokemonType1.includes("ice") || pokemonType1.includes("steel")) {
				HP1.innerHTML -= 4;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Flamethrower for 4 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("dragon") || pokemonType1.includes("fire") || pokemonType1.includes("rock") || pokemonType1.includes("water")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Flamethrower for 2 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP1.innerHTML -= 3;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Flamethrower for 3 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Flamethrower...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Flamethrower...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function frostBreath() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("grass") || pokemonType2.includes("flying") || pokemonType2.includes("dragon") || pokemonType2.includes("ground")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Frost Breath for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("fire") || pokemonType2.includes("ice") || pokemonType2.includes("steel") || pokemonType2.includes("water")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Frost Breath for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Frost Breath for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("grass") || pokemonType1.includes("flying") || pokemonType1.includes("dragon") || pokemonType1.includes("ground")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Frost Breath for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("fire") || pokemonType1.includes("ice") || pokemonType1.includes("steel") || pokemonType1.includes("water")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Frost Breath for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Frost Breath for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Frost Breath...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Frost Breath...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function headbutt() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("rock") || pokemonType2.includes("steel")) {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Headbutt for 1 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Headbutt but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Headbutt for 2 Damage!</span><br>";
			} 
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("rock") || pokemonType1.includes("steel")) {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Headbutt but it did 1 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Headbutt but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML-= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Headbutt for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Headbutt...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Headbutt...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function heavySlam() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("fairy")|| pokemonType2.includes("rock") || pokemonType2.includes("ice")) {
				HP2.innerHTML -= 3;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Heavy Slam for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("electric") || pokemonType2.includes("fire") || pokemonType2.includes("steel") || pokemonType2.includes("water")) {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Heavy Slam for 1 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Heavy Slam for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("fairy")|| pokemonType1.includes("rock") || pokemonType1.includes("ice")) {
				HP1.innerHTML -= 3;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Heavy Slam for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("electric") || pokemonType1.includes("fire") || pokemonType1.includes("steel") || pokemonType1.includes("water")) {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Heavy Slam for 1 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Heavy Slam for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Mirror Shot...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Mirror Shot...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function hyperBeam() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 4) {
		if (turn == 1) {
			if (pokemonType2.includes("rock") || pokemonType2.includes("steel")) {
				HP2.innerHTML -= 4;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Hyper Beam for 4 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Hyper Beam but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML -= 5;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Hyper Beam for 5 Damage!</span><br>";
			}
			recharge1 = true;
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("rock") || pokemonType1.includes("steel")) {
				HP1.innerHTML -= 4;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Hyper Beam for 4 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Hyper Beam but Player One is immune!</span><br>";
			}  else {
				HP1.innerHTML -= 5;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Hyper Beam for 5 Damage!</span><br>";
			}
			recharge2 = true;
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Hyper Beam...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Hyper Beam...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function iceFang() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("flying") || pokemonType2.includes("dragon") || pokemonType2.includes("grass") || pokemonType2.includes("ground")) {
				HP2.innerHTML-= 3;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Ice Fang for 3 Damage, it's <strong>Super Effective</strong>!, Player Two is Frozen!</span><br>";
					freeze2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Ice Fang for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType2.includes("fire") || pokemonType2.includes("ice") || pokemonType2.includes("steel") || pokemonType2.includes("water")) {
				HP2.innerHTML--;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Ice Fang for 1 Damage, it's <em>not very effectice</em>..., Player Two is Frozen!</span><br>";
					freeze2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Ice Fang for 1 Damage, it's it's <em>not very effectice</em>...!</span><br>";
				}
			} else {
				HP2.innerHTML -= 2;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Ice Fang for 2 Damage!, Player Two is Frozen!</span><br>";
					freeze2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Ice Fang for 2 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("flying") || pokemonType1.includes("dragon") || pokemonType1.includes("grass") || pokemonType1.includes("ground")) {
				HP1.innerHTML-= 3;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Ice Fang for 3 Damage, it's <strong>Super Effective</strong>!, Player One is Frozen!</span><br>";
					freeze1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player One hit Ice Fang for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType1.includes("fire") || pokemonType1.includes("ice") || pokemonType1.includes("steel") || pokemonType1.includes("water")) {
				HP1.innerHTML--;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Ice Fang for 1 Damage, it's <em>not very effectice</em>..., Player One is Frozen!</span><br>";
					freeze1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Ice Fang for 1 Damage, it's it's <em>not very effectice</em>...!</span><br>";
				}
			} else {
				HP1.innerHTML -= 2;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Ice Fang for 2 Damage!, Player One is Frozen!</span><br>";
					freeze1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player One hit Ice Fang for 2 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Ice Fang...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Ice Fang...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function knockOff() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("ghost") || pokemonType2.includes("psychic")) {
				HP2.innerHTML-= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Knock Off for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("dark") || pokemonType2.includes("fairy") || pokemonType2.includes("fighting")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Knock Off for 0 Damage, it's <em>not very effective</em>!</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Knock Off for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("ghost") || pokemonType1.includes("psychic")) {
				HP1.innerHTML-= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Knock Off for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("dark") || pokemonType1.includes("fairy") || pokemonType1.includes("fighting")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Knock Off for 0 Damage, it's <em>not very effective</em>!</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Knock Off for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Knock Off...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Knock Off...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function metalClaw() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("fairy")|| pokemonType2.includes("rock") || pokemonType2.includes("ice")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Metal Claw for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("electric") || pokemonType2.includes("fire") || pokemonType2.includes("steel") || pokemonType2.includes("water")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Metal Claw for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Metal Claw for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("fairy")|| pokemonType1.includes("rock") || pokemonType1.includes("ice")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Metal Claw for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("electric") || pokemonType1.includes("fire") || pokemonType1.includes("steel") || pokemonType1.includes("water")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Metal Claw for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Metal Claw for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Metal Claw...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Metal Claw...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function metronome() {
	var moveList = [tackle, vineWhip, uTurn, bite, doubleEdge, superFang, ember, rockThrow, bodySlam, waterGun, quickAttack, brickBreak, sleepPowder, rest, aquaRing, spark, discharge, headbutt, frostBreath, swagger, dragonBreathe, zenHeadbutt, flamethrower, poisonSting, venoshock, pinMissle, armThrusts, knockOff, poisonJab, heavySlam, rockBlast, bulldoze, explosion, slash, metalClaw, drillRun, fissure, takeDown, playRough, shadowBall, psybeam, powerGem, perishSong, psyshock, energyBall, endeavor, recover, viceGrip, mirrorShot, hyperBeam, pound, poisonGas, sludgeBomb, iceFang, fireFang, thunderFang, fairyWind, roost, peck];
	var total = moveList.length;
	var move = Math.floor(Math.random() * total);
	console.log(moveList);
	console.log(total);
	console.log("random number is " + move);
	moveList[move]();
}

function mirrorShot() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("fairy")|| pokemonType2.includes("rock") || pokemonType2.includes("ice")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Mirror Shot for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("electric") || pokemonType2.includes("fire") || pokemonType2.includes("steel") || pokemonType2.includes("water")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Mirror Shot for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Mirror Shot for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("fairy")|| pokemonType1.includes("rock") || pokemonType1.includes("ice")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Mirror Shot for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("electric") || pokemonType1.includes("fire") || pokemonType1.includes("steel") || pokemonType1.includes("water")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Mirror Shot for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Mirror Shot for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Mirror Shot...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Mirror Shot...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function peck() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("grass") || pokemonType2.includes("bug") || pokemonType2.includes("fighting")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Peck for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("electric") || pokemonType2.includes("rock") || pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Peck for 0 Damage, it's <em>not very effective</em>...</span><br>";
			}   else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Peck for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("grass") || pokemonType1.includes("bug") || pokemonType1.includes("fighting")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Peck for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("electric") || pokemonType1.includes("rock") || pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Peck for 0 Damage, it's <em>not very effective</em>...</span><br>";
			}   else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Peck for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Peck...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Peck...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function perishSong() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 6) {
		if (turn == 1) {
			if (perish2 == true) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Perish Song, but it's already active!</span><br>";
				checkTextareaHeight();
				PlayerOneAttack();
			} else {
				perish1 = true;
				perish2 = true; 
				gameText.innerHTML += "<span class='bluetext'>Player One used Perish Count! Both Pokemon are effected!</span><br>";
				checkTextareaHeight();
				PlayerOneAttack(); 
			}
		} else {
			if (perish1 == true) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Perish Song, but it's already active!</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
			} else {
				perish1 = true;
				perish2 = true; 
				gameText.innerHTML += "<span class='redtext'>Player Two used Perish Count! Both Pokemon are effected!</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack(); 
			}
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Perish Song...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Perish Song...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function pinMissle() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	var Damage = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("psychic") || pokemonType2.includes("dark") || pokemonType2.includes("grass")) {
				if (Damage == 10) {
					HP2.innerHTML-= 6;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 5 Times for 6 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage == 9) {
					HP2.innerHTML-= 5;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 4 Times for 5 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP2.innerHTML-= 4;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 3 Times for 4 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage > 3) {
					HP2.innerHTML-= 3;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 2 Times for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else {
					HP2.innerHTML-= 2;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 1 Time for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType2.includes("fighting") || pokemonType2.includes("steel") || pokemonType2.includes("fire") || pokemonType2.includes("fairy") || pokemonType2.includes("ghost") || pokemonType2.includes("poison") || pokemonType2.includes("flying")) {
				if (Damage == 10) {
					HP2.innerHTML-= 4;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 5 Times for 4 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage == 9) {
					HP2.innerHTML-= 3;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 4 Times for 3 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP2.innerHTML-= 2;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 3 Times for 2 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage > 3) {
					HP2.innerHTML--;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 2 Times for 1 Damage, it's <em>not very effective</em>...</span><br>";
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 1 Time for 0 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else {
				if (Damage == 10) {
					HP2.innerHTML-= 5;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 5 Times for 5 Damage!</span><br>";
				} else if (Damage == 9) {
					HP2.innerHTML-= 4;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 4 Times for 4 Damage!</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP2.innerHTML-= 3;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 3 Times for 3 Damage!</span><br>";
				} else if (Damage > 3) {
					HP2.innerHTML-= 2;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 2 Times for 2 Damage!</span><br>";
				} else {
					HP2.innerHTML--;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Pin Missle 1 Time for 1 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("psychic") || pokemonType1.includes("dark") || pokemonType1.includes("grass")) {
				if (Damage == 10) {
					HP1.innerHTML-= 6;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 5 Times for 6 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage == 9) {
					HP1.innerHTML-= 5;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 4 Times for 5 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP1.innerHTML-= 4;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 3 Times for 4 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage > 3) {
					HP1.innerHTML-= 3;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 2 Times for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else {
					HP1.innerHTML-= 2;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 1 Time for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType1.includes("fighting") || pokemonType1.includes("steel") || pokemonType1.includes("fire") || pokemonType1.includes("fairy") || pokemonType1.includes("ghost") || pokemonType1.includes("poison") || pokemonType1.includes("flying")) {
				if (Damage == 10) {
					HP1.innerHTML-= 4;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 5 Times for 4 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage == 9) {
					HP1.innerHTML-= 3;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 4 Times for 3 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP1.innerHTML-= 2;
					gameText.innerHTML += "<span class=redtext'>Player Two hit Pin Missle 3 Times for 2 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage > 3) {
					HP1.innerHTML--;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 2 Times for 1 Damage, it's <em>not very effective</em>...</span><br>";
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 2 Time for 0 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else {
				if (Damage == 10) {
					HP1.innerHTML-= 5;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 5 Times for 5 Damage!</span><br>";
				} else if (Damage == 9) {
					HP1.innerHTML-= 4;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 4 Times for 4 Damage!</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP1.innerHTML-= 3;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 3 Times for 3 Damage!</span><br>";
				} else if (Damage > 3) {
					HP1.innerHTML-= 2;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 2 Times for 2 Damage!</span><br>";
				} else {
					HP1.innerHTML--;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Pin Missle 1 Time for 1 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Pin Missle...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Pin Missle...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function playRough() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("dragon") || pokemonType2.includes("fighting") || pokemonType2.includes("dark")) {
				HP2.innerHTML-= 3;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Play Rough for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("fire") || pokemonType2.includes("poison") || pokemonType2.includes("poison")) {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Play Rough for 1 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP2.innerHTML-= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Play Rough for 2 Damage!</span><br>";
			}   
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("dragon") || pokemonType1.includes("fighting") || pokemonType1.includes("dark")) {
				HP1.innerHTML-= 3;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Play Rough for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("fire") || pokemonType1.includes("poison") || pokemonType1.includes("poison")) {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Play Rough for 1 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP1.innerHTML-= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Play Rough for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Play Rough...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Play Rough...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function poisonGas() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (poison2 == false) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Poison Gas!, Player Two is Poisoned!</span><br>";
				poison2 = true;
				statusText2.innerHTML += " Poisoned";
				checkTextareaHeight();
				PlayerOneAttack();
			} else {
				gameText.innerHTML += "<span class='bluetext'>Player One used Poison Gas but Player One is already poisoned</span><br>";
				checkTextareaHeight();
				PlayerOneAttack();
			}
		} else {
			if (poison1 == false) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Poison Gas!, Player One is Poisoned!</span><br>";
				poison1 = true;
				statusText1.innerHTML += " Poisoned";
				checkTextareaHeight();
				PlayerTwoAttack();
			} else {
				gameText.innerHTML += "<span class='redtext'>Player Two used Poison Gas but Player One is already poisoned!</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
			}
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Poison Gas...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Poison Gas...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function poisonJab() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("grass") || pokemonType2.includes("fairy")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Poison Jab for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("poison") || pokemonType2.includes("ground") || pokemonType2.includes("rock") || pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Poison Jab for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Poison Jab , but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Poison Jab for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("grass") || pokemonType1.includes("fairy")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Poison Jab for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("poison") || pokemonType1.includes("ground") || pokemonType1.includes("rock") || pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Poison Jab for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Poison Jab , but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Poison Jab for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Poison Jab...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Poison Jab...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function poisonSting() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("grass") || pokemonType2.includes("fairy")) {
				HP2.innerHTML -= 2;
				if (MoveHit > 7 && poison2 == false) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Poison Sting for 2 Damage, it's <strong>Super Effective</strong>!, Player Two is Poisoned!</span><br>";
					poison2 = true;
					statusText2.innerHTML += " Poisoned";
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Poison Sting for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType2.includes("poison") || pokemonType2.includes("rock") || pokemonType2.includes("ground") || pokemonType2.includes("ghost")) {
				if (MoveHit > 7 && poison2 == false) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Poison Sting for 0 Damage, it's <em>not very effective</em>..., Player Two is Poisoned!</span><br>";
					poison2 = true;
					statusText2.innerHTML += " Poisoned";
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Poison Sting for 0 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else if (pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Poison Sting but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML--;
				if (MoveHit > 7 && poison2 == false) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Poison Sting for 1 Damage!, Player Two is Poisoned!</span><br>";
					poison2 = true;
					statusText2.innerHTML += " Poisoned";
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Poison Sting for 1 Damage!</span><br>";
				}
			}
		checkTextareaHeight();
		PlayerOneAttack();
		} else {
			if (pokemonType1.includes("grass") || pokemonType1.includes("fairy")) {
				HP1.innerHTML -= 2;
				if (MoveHit > 7 && poison1 == false) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Poison Sting for 2 Damage, it's <strong>Super Effective</strong>!, Player One is Poisoned!</span><br>";
					poison1 = true;
					statusText1.innerHTML += " Poisoned";
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Poison Sting for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType1.includes("poison") || pokemonType1.includes("rock") || pokemonType1.includes("ground") || pokemonType1.includes("ghost")) {
				if (MoveHit > 7 && poison1 == false) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Poison Sting for 0 Damage, it's <em>not very effective</em>..., Player One is Poisoned!</span><br>";
					poison1 = true;
					statusText1.innerHTML += " Poisoned";
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Poison Sting for 0 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else if (pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Poison Sting but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML--;
				if (MoveHit > 7 && poison1 == false) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Poison Sting for 1 Damage!, Player One is Poisoned!</span><br>";
					poison1 = true;
					statusText1.innerHTML += " Poisoned";
				} else {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Poison Sting for 1 Damage!</span><br>";
				}
			}
		checkTextareaHeight();
		PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Poison Sting...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Poison Sting...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function pound() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("rock") || pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Pound for 0 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Pound but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Pound for 1 Damage!</span><br>";
			} 
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("rock") || pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player One hit Pound for 0 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Pound but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Pound for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Pound...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Pound...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function powerGem() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("bug") || pokemonType2.includes("fire") || pokemonType2.includes("flying") || pokemonType2.includes("ice")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Power Gem for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";	
			} else if (pokemonType2.includes("fighting") || pokemonType2.includes("ground") || pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Power Gem for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Power Gem for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("bug") || pokemonType1.includes("fire") || pokemonType1.includes("flying") || pokemonType1.includes("ice")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Power Gem for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";	
			} else if (pokemonType1.includes("fighting") || pokemonType1.includes("ground") || pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Power Gem for 0 Damage, it's <em>not very effective</em>...</span><br>";	
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Power Gem for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Power Gem...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Power Gem...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function psybeam() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("fighting") || pokemonType2.includes("poison")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Psybeam for 2 Damage, it's <strong>super effective</strong>!</span><br>";
			} else if (pokemonType2.includes("psychic")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Psybeam for 0 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("dark")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Psybeam but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Psybeam for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("fighting") || pokemonType1.includes("poison")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Psybeam for 2 Damage, it's <strong>super effective</strong>!</span><br>";
			} else if (pokemonType1.includes("psychic")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Psybeam for 0 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("dark")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Psybeam but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Psybeam for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Psybeam...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Psybeam...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function psyshock() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("poison") || pokemonType2.includes("fighting")) {
				HP2.innerHTML-= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Psyshock for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes ("psychic") || pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Psyshock for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("dark")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Psychock but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Psyshock for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("poison") || pokemonType1.includes("fighting")) {
				HP1.innerHTML-= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Psyshock for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes ("psychic") || pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Psyshock for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("dark")) {
				gameText.innerHTML += "<span class='bluetext'>Player Two hit Psychock but Player One is immune!</span><br>";
			} else {
			HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Psyshock for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Psyshock...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Psyshock...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function quickAttack() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("rock") || pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Quick Attack for 0 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Quick Attack but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Quick Attack for 1 Damage!</span><br>";
			} 
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("rock") || pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Quick Attack for 0 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Quick Attack but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Quick Attack for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Quick Attack...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Quick Attack...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function recover() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (turn == 1) {
		if (MoveHit == 10) {
			if (HP1.innerHTML ==  10) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Recover, but it failed...</span><br>";
				checkTextareaHeight();
				PlayerOneAttack();
			} else if (HP1.innerHTML < 10) {
				HP1.innerHTML = 10;
				gameText.innerHTML += "<span class='bluetext'>Player One used Recover, They recovered all their health!</span><br>";
				checkTextareaHeight();
				PlayerOneAttack();
			}
		} else if (MoveHit > 4) {
			if (HP1.innerHTML ==  10) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Recover, but it failed...</span><br>";
				checkTextareaHeight();
				PlayerOneAttack();
			} else if (HP1.innerHTML > 4){
				HP1.innerHTML = 10;
				gameText.innerHTML += "<span class='bluetext'>Player One used Recover, They recovered all their health!</span><br>";
				checkTextareaHeight();
				PlayerOneAttack();
			} else if (HP1.innerHTML > 0) {
				HP1.innerHTML = parseInt(HP1.innerHTML) + 5;
				gameText.innerHTML += "<span class='bluetext'>Player One used Recover, They healed 5 Damage!</span><br>";
				checkTextareaHeight();
				PlayerOneAttack();
			}
		} else {
			gameText.innerHTML += "<span class='bluetext'>Player One used Recover, but it failed...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		}
	} else {
		if (MoveHit == 10) {
			if (HP2.innerHTML ==  10) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Recover, but it failed...</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
			} else if (HP2.innerHTML < 10) {
				HP2.innerHTML = 10;
				gameText.innerHTML += "<span class='redtext'>Player Two used Recover, They recovered all their health!</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
			}
		} else if (MoveHit > 4) {
			if (HP2.innerHTML ==  10) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Recover, but it failed...</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
			} else if (HP2.innerHTML > 4){
				HP2.innerHTML = 10;
				gameText.innerHTML += "<span class='redtext'>Player Two used Recover, They recovered all their health!</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
			}else if (HP2.innerHTML > 0) {
				HP2.innerHTML = parseInt(HP2.innerHTML) + 5;
				gameText.innerHTML += "<span class='redtext'>Player Two used Recover, They healed 5 Damage!</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
			}
		} else {
				gameText.innerHTML += "<span class='redtext'>Player Two used Recover, but it failed...</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
		}
	}
}

function rest() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 4) {
		if (turn == 1) {
			if (HP1.innerHTML < 6) {
				HP1.innerHTML = parseInt(HP1.innerHTML) + 5;
			} else {
				HP1.innerHTML = 10;
			}
			gameText.innerHTML += "<span class='bluetext'>Player One used Rest, recovered HP and is now asleep!</span><br>";
			checkTextareaHeight();
			sleep1 = true;
			burn1 = false;
			poison1 = false;
			statusText1.innerHTML = " Asleep";
			PlayerOneAttack();	
		} else {
			if (HP2.innerHTML < 6) {
				HP2.innerHTML = parseInt(HP2.innerHTML) + 5;
			} else {
				HP2.innerHTML = 10;
			}
			gameText.innerHTML += "<span class='redtext'>Player Two used Rest, recovered HP and is now asleep!</span><br>";
			checkTextareaHeight();
			sleep2 = true;
			burn2 = false;
			poison2 = false;
			statusText2.innerHTML = " Asleep";
			PlayerTwoAttack();	
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One tried to use Rest, but it failed...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two tried to use Rest, but it failed...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function rockBlast() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	var Damage = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("fire") || pokemonType2.includes("flying") || pokemonType2.includes("ice") || pokemonType2.includes("bug")) {
				if (Damage == 10) {
					HP2.innerHTML-= 6;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 5 Times for 6 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage == 9) {
					HP2.innerHTML-= 5;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 4 Times for 5 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP2.innerHTML-= 4;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 3 Times for 4 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage > 3) {
					HP2.innerHTML-= 3;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 2 Times for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else {
					HP2.innerHTML-= 2;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 1 Time for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType2.includes("fighting") || pokemonType2.includes("steel") || pokemonType2.includes("ground")) {
				if (Damage == 10) {
					HP2.innerHTML-= 4;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 5 Times for 4 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage == 9) {
					HP2.innerHTML-= 3;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 4 Times for 3 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP2.innerHTML-= 2;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 3 Times for 2 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage > 3) {
					HP2.innerHTML--;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 2 Times for 1 Damage, it's <em>not very effective</em>...</span><br>";
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 1 Time for 0 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else {
				if (Damage == 10) {
					HP2.innerHTML-= 5;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 5 Times for 5 Damage!</span><br>";
				} else if (Damage == 9) {
					HP2.innerHTML-= 4;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 4 Times for 4 Damage!</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP2.innerHTML-= 3;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 3 Times for 3 Damage!</span><br>";
				} else if (Damage > 3) {
					HP2.innerHTML-= 2;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 2 Times for 2 Damage!</span><br>";
				} else {
					HP2.innerHTML--;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Blast 1 Time for 1 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("fire") || pokemonType1.includes("flying") || pokemonType1.includes("ice") || pokemonType1.includes("bug")) {
				if (Damage == 10) {
					HP1.innerHTML-= 6;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 5 Times for 6 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage == 9) {
					HP1.innerHTML-= 5;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 4 Times for 5 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP1.innerHTML-= 4;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 3 Times for 4 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else if (Damage > 3) {
					HP1.innerHTML-= 3;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 2 Times for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else {
					HP1.innerHTML-= 2;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 1 Time for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType1.includes("fighting") || pokemonType1.includes("steel") || pokemonType1.includes("ground")) {
				if (Damage == 10) {
					HP1.innerHTML-= 4;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 5 Times for 4 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage == 9) {
					HP1.innerHTML-= 3;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 4 Times for 3 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP1.innerHTML-= 2;
					gameText.innerHTML += "<span class=redtext'>Player Two hit Rock Blast 3 Times for 2 Damage, it's <em>not very effective</em>...</span><br>";
				} else if (Damage > 3) {
					HP1.innerHTML--;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 2 Times for 1 Damage, it's <em>not very effective</em>...</span><br>";
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 1 Time for 0 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else {
				if (Damage == 10) {
					HP1.innerHTML-= 5;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 5 Times for 5 Damage!</span><br>";
				} else if (Damage == 9) {
					HP1.innerHTML-= 4;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 4 Times for 4 Damage!</span><br>";
				} else if (Damage == 7 || Damage == 8) {
					HP1.innerHTML-= 3;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 3 Times for 3 Damage!</span><br>";
				} else if (Damage > 3) {
					HP1.innerHTML-= 2;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 2 Times for 2 Damage!</span><br>";
				} else {
					HP1.innerHTML--;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Blast 1 Time for 1 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Rock Blast...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Rock Blast...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function rockThrow() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("bug") || pokemonType2.includes("fire") || pokemonType2.includes("flying") || pokemonType2.includes("ice")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Throw for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";	
			} else if (pokemonType2.includes("fighting") || pokemonType2.includes("ground") || pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Throw for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Rock Throw for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("bug") || pokemonType1.includes("fire") || pokemonType1.includes("flying") || pokemonType1.includes("ice")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Throw for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";	
			} else if (pokemonType1.includes("fighting") || pokemonType1.includes("ground") || pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Throw for 0 Damage, it's <em>not very effective</em>...</span><br>";	
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Rock Throw for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Rock Throw...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Rock Throw...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function roost() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 4) {
		if (turn == 1) {
			if (HP1.innerHTML == 10) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Roost but it failed!</span><br>";
				checkTextareaHeight();
				PlayerOneAttack();
			} else if (HP1.innerHTML > 7) {
				HP1.innerHTML = 10;
				gameText.innerHTML += "<span class='bluetext'>Player One used Roost to recover to full health!</span><br>";
				checkTextareaHeight();
				PlayerOneAttack();
			} else {
				HP1.innerHTML = parseInt(HP1.innerHTML) + 3;
				gameText.innerHTML += "<span class='bluetext'>Player One used Roost to recover 3 health!</span><br>";
				checkTextareaHeight();
				PlayerOneAttack();
			}
		} else {
			if (HP2.innerHTML == 10) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Roost but it failed!</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
			} else if (HP2.innerHTML > 7) {
				HP2.innerHTML = 10;
				gameText.innerHTML += "<span class='redtext'>Player Two used Roost to recover to full health!</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
			} else {
				HP2.innerHTML = parseInt(HP2.innerHTML) + 3;
				gameText.innerHTML += "<span class='redtext'>Player Two used Roost to recover 3 health!</span><br>";
				checkTextareaHeight();
				PlayerTwoAttack();
			}
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One used Roost but it failed...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two used Roost but it failed...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function shadowBall() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("phychic") || pokemonType2.includes("ghost")) {
				HP2.innerHTML-= 3;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Shadow Ball for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("dark")) {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Shadow Ball for 1 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("normal")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Shadow Ball but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML-= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Shadow Ball for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("phychic") || pokemonType1.includes("ghost")) {
				HP1.innerHTML-= 3;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Shadow Ball for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("dark")) {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Shadow Ball for 1 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("normal")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Shadow Ball but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML-= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Shadow Ball for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Shadow Ball...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Shadow Ball...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function slash() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("rock") || pokemonType2.includes("steel")) {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Slash for 1 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Slash but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Slash for 2 Damage!</span><br>";
			} 
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("rock") || pokemonType1.includes("steel")) {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Slash but it did 1 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Slash but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML-= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Slash for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Slash...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Slash...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function sleepPowder() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			sleep2 = true;
			statusText2.innerHTML += " Asleep";
			gameText.innerHTML += "<span class='bluetext'>Player One hit Sleep Poweder, Player two is now asleep!</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			sleep1 = true;
			statusText1.innerHTML += " Asleep";
			gameText.innerHTML += "<span class='redtext'>Player Two hit Sleep Poweder, Player one is now asleep!</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Sleep Powder...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Sleep Powder...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function sludgeBomb() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("grass") || pokemonType2.includes("fairy")) {
				HP2.innerHTML -= 3;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Sludge Bomb for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("poison") || pokemonType2.includes("ground") || pokemonType2.includes("rock") || pokemonType2.includes("ghost")) {
				HP2.innerHTML --;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Sludge Bomb for 1 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Sludge Bomb , but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML-= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Sludge Bomb for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("grass") || pokemonType1.includes("fairy")) {
				HP1.innerHTML -= 3;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Sludge Bomb for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("poison") || pokemonType1.includes("ground") || pokemonType1.includes("rock") || pokemonType1.includes("ghost")) {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Sludge Bomb for 1 Damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Sludge Bomb , but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Sludge Bomb for 2 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Sludge Bomb...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Sludge Bomb...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function spark() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("water") || pokemonType2.includes("flying")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Spark for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("dragon") || pokemonType2.includes("electric") || pokemonType2.includes("grass")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Spark for 0 Damage, it's <strong>not very effective</strong>...</span><br>";
			} else if (pokemonType2.includes("ground")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Spark but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Spark for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("water") || pokemonType1.includes("flying")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Spark for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("dragon") || pokemonType1.includes("electric") || pokemonType1.includes("grass")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Spark for 0 Damage, it's <strong>not very effective</strong>...</span><br>";
			} else if (pokemonType1.includes("ground")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Spark but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Spark for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Spark...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Spark...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function superFang() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 6) {
		if (turn == 1) {
			 if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Super Fang but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML = Math.ceil(HP2.innerHTML / 2);
				gameText.innerHTML += "<span class='bluetext'>Player One hit Super Fang! Opponent loses 50% of their health!!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player Two hit Super Fang but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML = Math.ceil(HP1.innerHTML / 2);
				gameText.innerHTML += "<span class='redtext'>Player Two hit Super Fang! Opponent loses 50% of their health!!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Super Fang...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Super Fang...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function swagger() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 4) {
		if (turn == 1) {
			confusion2 = true;
			gameText.innerHTML += "<span class='redtext'>Player One hit Swagger, Player one is now confused!</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			confusion1 = true;
			gameText.innerHTML += "<span class='redtext'>Player Two hit Swagger, Player one is now confused!</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Swagger...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Swagger...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function tackle() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("rock") || pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Tackle for 0 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Tackle but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Tackle for 1 Damage!</span><br>";
			} 
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("rock") || pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Tackle for 0 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Tackle but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Tackle for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Tackle...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Tackle...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function takeDown() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 4) {
		if (turn == 1) {
			if (pokemonType2.includes("rock") || pokemonType2.includes("steel")) {
				HP2.innerHTML-= 2;
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Take Down for 2 damage and took 1 Damage in recoil, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Take Down but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML-= 3;
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Take Down for 3 Damage, but took 1 in recoil!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("rock") || pokemonType1.includes("steel")) {
				HP1.innerHTML-= 2;
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Take Down for 2 damage and took 1 Damage in recoil, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Take Down but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML-= 3;
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Take Down for 3 Damage, but took 1 in recoil!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Take Down...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Take Down...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function thunderFang() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("flying") || pokemonType2.includes("water")) {
				HP2.innerHTML-= 3;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Thunder Fang for 3 Damage, it's <strong>Super Effective</strong>!, Player Two is Paralyzed!</span><br>";
					paralyze2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Thunder Fang for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType2.includes("dragon") || pokemonType2.includes("electric") || pokemonType2.includes("grass")) {
				HP2.innerHTML--;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Thunder Fang for 1 Damage, it's <em>not very effectice</em>..., Player Two is Paralyzed!</span><br>";
					paralyze2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Thunder Fang for 1 Damage, it's it's <em>not very effectice</em>...!</span><br>";
				}
			} else if (pokemonType2.includes("ground")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Discharge but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML -= 2;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Thunder Fang for 2 Damage!, Player Two is Paralyzed!</span><br>";
					paralyze2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Thunder Fang for 2 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("flying") || pokemonType1.includes("water")) {
				HP1.innerHTML-= 3;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Thunder Fang for 3 Damage, it's <strong>Super Effective</strong>!, Player One is Paralyzed!</span><br>";
					paralyze1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player One hit Thunder Fang for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType1.includes("dragon") || pokemonType1.includes("electric") || pokemonType1.includes("grass")) {
				HP1.innerHTML--;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Thunder Fang for 1 Damage, it's <em>not very effectice</em>..., Player One is Paralyzed!</span><br>";
					paralyze1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Thunder Fang for 1 Damage, it's it's <em>not very effectice</em>...!</span><br>";
				}
			} else if (pokemonType1.includes("ground")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Thunder Fang but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML -= 2;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Thunder Fang for 2 Damage!, Player One is Paralyzed!</span><br>";
					paralyze1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player One hit Thunder Fang for 2 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Thunder Fang...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Thunder Fang...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function uTurn() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("psychic") || pokemonType2.includes("dark") || pokemonType2.includes("grass")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit U-Turn for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("fairy") || pokemonType2.includes("fighting") || pokemonType2.includes("fire") || pokemonType2.includes("fighting") || pokemonType2.includes("ghost") || pokemonType2.includes("poison") || pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit U-Turn for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit U-Turn for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("psychic") || pokemonType1.includes("dark") || pokemonType1.includes("grass")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit U-Turn for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("fairy") || pokemonType1.includes("fighting") || pokemonType1.includes("fire") || pokemonType1.includes("fighting") || pokemonType1.includes("ghost") || pokemonType1.includes("poison") || pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit U-Turn for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit U-Turn for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed U-Turn...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed U-Turn...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function viceGrip() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("rock") || pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Vice Grip for 0 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType2.includes("ghost")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Vice Grip but Player Two is immune!</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Vice Grip for 1 Damage!</span><br>";
			} 
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("rock") || pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Vice Grip for 0 damage, it's <em>not very effective</em>...</span><br>";
			} else if (pokemonType1.includes("ghost")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Vice Grip but Player One is immune!</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Vice Grip for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Vice Grip...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Vice Grip...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function venoshock() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 3) {
		if (turn == 1) {
			if (pokemonType2.includes("grass") || pokemonType2.includes("fairy")) {
				if (poison2 == true) {
					HP2.innerHTML -= 5;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Venoshock for 5 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else {
					HP2.innerHTML -= 3;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Venoshock for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType2.includes("rock") || pokemonType2.includes("ground") || pokemonType2.includes("ghost") || pokemonType2.includes("poison")) {
				if (poison2 == true) {
					HP2.innerHTML -= 3;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Venoshock for 3 Damage, it's <em>not very effective</em>...</span><br>";
				} else {
					HP2.innerHTML --;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Venoshock for 1 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else if (pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One used Venoshock but Player Two is immune!</span><br>";
			} else {
				if (poison2 == true) {
					HP2.innerHTML -= 4;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Venoshock for 4 Damage!</span><br>";
				} else {
					HP2.innerHTML -= 2;
					gameText.innerHTML += "<span class='bluetext'>Player One hit Venoshock for 2 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("grass") || pokemonType1.includes("fairy")) {
				if (poison1 == true) {
					HP1.innerHTML -= 5;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Venoshock for 5 Damage, it's <strong>Super Effective</strong>!</span><br>";
				} else {
					HP1.innerHTML -= 3;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Venoshock for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType1.includes("rock") || pokemonType1.includes("ground") || pokemonType1.includes("ghost") || pokemonType1.includes("poison")) {
				if (poison1 == true) {
					HP1.innerHTML -= 3;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Venoshock for 3 Damage, it's <em>not very effective</em>...</span><br>";
				} else {
					HP1.innerHTML --;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Venoshock for 1 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else if (pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two used Venoshock but Player One is immune!</span><br>";
			} else {
				if (poison1 == true) {
					HP1.innerHTML -= 4;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Venoshock for 4 Damage!</span><br>";
				} else {
					HP1.innerHTML -= 2;
					gameText.innerHTML += "<span class='redtext'>Player Two hit Venoshock for 2 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Venoshock...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Venoshock...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function vineWhip() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("water") || pokemonType2.includes("rock") || pokemonType2.includes("ground")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Vine Whip for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("bug") || pokemonType2.includes("dragon") || 	pokemonType2.includes("fire") || pokemonType2.includes("flying") || 		pokemonType2.includes("grass") || pokemonType2.includes("poison") || 		pokemonType2.includes("steel")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Vine Whip for 0 Damage, it's <em>not very effective<em>...</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Vine Whip for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("water") || pokemonType1.includes("rock") || pokemonType1.includes("ground")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Vine Whip for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("bug") || pokemonType1.includes("dragon") || 	pokemonType1.includes("fire") || pokemonType1.includes("flying") || 		pokemonType1.includes("grass") || pokemonType1.includes("poison") || 		pokemonType1.includes("steel")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Vine Whip for 0 Damage, it's <em>not very effective<em>...</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Vine Whip for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Vine Whip...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Vine Whip...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function waterGun() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 2) {
		if (turn == 1) {
			if (pokemonType2.includes("fire") || pokemonType2.includes("rock") || pokemonType2.includes("ground")) {
				HP2.innerHTML -= 2;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Water gun for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType2.includes("grass") || pokemonType2.includes("dragon") || pokemonType2.includes("water")) {
				gameText.innerHTML += "<span class='bluetext'>Player One hit Water gun for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP2.innerHTML--;
				gameText.innerHTML += "<span class='bluetext'>Player One hit Water gun for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("fire") || pokemonType1.includes("rock") || pokemonType1.includes("ground")) {
				HP1.innerHTML -= 2;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Water gun for 2 Damage, it's <strong>Super Effective</strong>!</span><br>";
			} else if (pokemonType1.includes("grass") || pokemonType1.includes("dragon") || pokemonType1.includes("water")) {
				gameText.innerHTML += "<span class='redtext'>Player Two hit Water gun for 0 Damage, it's <em>not very effective</em>...</span><br>";
			} else {
				HP1.innerHTML--;
				gameText.innerHTML += "<span class='redtext'>Player Two hit Water Gun for 1 Damage!</span><br>";
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Water Gun...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Water Gun...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

function zenHeadbutt() {
	var MoveHit = Math.floor((Math.random() * 10) + 1);
	if (MoveHit > 4) {
		if (turn == 1) {
			if (pokemonType2.includes("fighting") || pokemonType2.includes("poison")) {
				HP2.innerHTML-= 3;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Zen Headbutt for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
					flinch2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Zen Headbutt for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType2.includes("psychic") || pokemonType2.includes("steel")) {
				HP2.innerHTML--;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Zen Headbutt for 1 Damage, it's <em>not very effective</em>...</span><br>";
					flinch2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Zen Headbutt for 1 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else if (pokemonType2.includes("dark")) {
					gameText.innerHTML += "<span class='bluetext'>Player One used Zen Headbutt but Player Two is immune!</span><br>";
			}  else {
			HP2.innerHTML-= 2;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Zen Headbutt for 2 Damage!</span><br>";
					flinch2 = true;
				} else {
					gameText.innerHTML += "<span class='bluetext'>Player One hit Zen Headbutt for 2 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			if (pokemonType1.includes("fighting") || pokemonType1.includes("poison")) {
				HP1.innerHTML-= 3;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Zen Headbutt for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
					flinch1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Zen Headbutt for 3 Damage, it's <strong>Super Effective</strong>!</span><br>";
				}
			} else if (pokemonType1.includes("psychic") || pokemonType1.includes("steel")) {
				HP1.innerHTML--;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Zen Headbutt for 1 Damage, it's <em>not very effective</em>...</span><br>";
					flinch1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Zen Headbutt for 1 Damage, it's <em>not very effective</em>...</span><br>";
				}
			} else if (pokemonType1.includes("dark")) {
					gameText.innerHTML += "<span class='redtext'>Player Two used Zen Headbutt but Player One is immune!</span><br>";
			}  else {
			HP1.innerHTML-= 2;
				if (MoveHit == 10) {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Zen Headbutt for 2 Damage!</span><br>";
					flinch1 = true;
				} else {
					gameText.innerHTML += "<span class='redtext'>Player Two hit Zen Headbutt for 2 Damage!</span><br>";
				}
			}
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	} else {
		if (turn == 1) {
			gameText.innerHTML += "<span class='bluetext'>Player One missed Zen Headbutt...</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two missed Zen Headbutt...</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		}
	}
}

//Checks for Status Conditions
function status1() {
	if (sleep1 == true) {
		var x = Math.random();
		if (x > 0.5) {
			gameText.innerHTML += "<span class='bluetext'>Player One is still asleep!</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			sleep1 = false;
			statusCode1.innerHTML = "";
			gameText.innerHTML += "<span class='bluetext'>Player One Woke Up!</span><br>";
			checkTextareaHeight();
		}
	} else if (paralyze1 == true) {
		paralyze1 = false; 
		gameText.innerHTML += "<span class='bluetext'>Player One is Paralyzed</span><br>";
		checkTextareaHeight();
		PlayerOneAttack();
	} else if (flinch1 == true) {
		flinch1 = false; 
		gameText.innerHTML += "<span class='bluetext'>Player One Flinched!</span><br>";
		checkTextareaHeight();
		PlayerOneAttack();
	} else if (recharge1 == true) {
		recharge1 = false; 
		gameText.innerHTML += "<span class='bluetext'>Player One needs to recharge...</span><br>";
		checkTextareaHeight();
		PlayerOneAttack();
	} else if (freeze1 == true) {
		freeze1 = false; 
		gameText.innerHTML += "<span class='bluetext'>Player One is Frozen...</span><br>";
		checkTextareaHeight();
		PlayerOneAttack();
	} else if (confusion1 == true) {
		var x = Math.random();
		if (x > 0.5) {
			HP1.innerHTML--;
			gameText.innerHTML += "<span class='bluetext'>Player One hit themself in confusion!</span><br>";
			checkTextareaHeight();
			PlayerOneAttack();
		} else {
			confusion1 = false;
			gameText.innerHTML += "<span class='bluetext'>Player One snapped out of their confusion!</span><br>";
			checkTextareaHeight();
		}
	} else if (burn1 == true) {
		var x = Math.random();
		if (x > 0.5) {
			HP1.innerHTML--;
			gameText.innerHTML += "<span class='bluetext'>Player One took one Burn Damage!</span><br>";
			checkTextareaHeight();
		} else {
			gameText.innerHTML += "<span class='bluetext'>Player One did not take any Burn Damage this turn!</span><br>";
			checkTextareaHeight();
		}
	} else if (poison1 == true) {
		var x = Math.random();
		if (x > 0.5) {
			HP1.innerHTML--;
			gameText.innerHTML += "<span class='bluetext'>Player One took one Poison Damage!</span><br>";
			checkTextareaHeight();
		} else {
			gameText.innerHTML += "<span class='bluetext'>Player One did not take any Poison Damage this turn!</span><br>";
			checkTextareaHeight();
		}
	} else if (perish1 == true) {
		if (perishCount1 > 0) {
			perishCount1--;
			gameText.innerHTML += "<span class='bluetext'>Player One's Perish count has dropped to " + perishCount1 + "!</span><br>";
			checkTextareaHeight();
		} else {
			HP1.innerHTML = 0;
			gameText.innerHTML += "<span class='bluetext'>Player One was knocked out by Perish Song!</span><br>";
			PlayerTwoAttack();
		}
	}
}

function status2() {
	if (sleep2 == true) {
		var x = Math.random();
		if (x > 0.5) {
			gameText.innerHTML += "<span class='redtext'>Player Two is still asleep!</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		} else {
			sleep2 = false;
			statusCode2.innerHTML = "";
			gameText.innerHTML += "<span class='redtext'>Player Two Woke Up!</span><br>";
			checkTextareaHeight();
		}
	} else if (paralyze2 == true) {
		paralyze2 = false; 
		gameText.innerHTML += "<span class='redtext'>Player Two is Paralyzed</span><br>";
		checkTextareaHeight();
		PlayerTwoAttack();
	} else if (flinch2 == true) {
		flinch2 = false; 
		gameText.innerHTML += "<span class='redtext'>Player Two Flinched!</span><br>";
		checkTextareaHeight();
		PlayerTwoAttack();
	} else if (recharge2 == true) {
		recharge2 = false; 
		gameText.innerHTML += "<span class='redtext'>Player Two needs to recharge...</span><br>";
		checkTextareaHeight();
		PlayerTwoAttack();
	} else if (freeze2 == true) {
		freeze2 = false; 
		gameText.innerHTML += "<span class='redtext'>Player Two is Frozen...</span><br>";
		checkTextareaHeight();
		PlayerTwoAttack();
	} else if (confusion2 == true) {
		var x = Math.random();
		if (x > 0.5) {
			HP2.innerHTML--;
			gameText.innerHTML += "<span class='redtext'>Player Two hit themself in confusion!</span><br>";
			checkTextareaHeight();
			PlayerTwoAttack();
		} else {
			confusion2 = false;
			gameText.innerHTML += "<span class='bluetext'>Player Two snapped out of their confusion!</span><br>";
			checkTextareaHeight();
		}
	} else if (burn2 == true) {
		var x = Math.random();
		if (x > 0.5) {
			HP2.innerHTML--;
			gameText.innerHTML += "<span class='redtext'>Player Two took one Burn Damage!</span><br>";
			checkTextareaHeight();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two did not take any Burn Damage this turn!</span><br>";
			checkTextareaHeight();
		}
	} else if (poison2 == true) {
		var x = Math.random();
		if (x > 0.5) {
			HP2.innerHTML--;
			gameText.innerHTML += "<span class='redtext'>Player Two took one Poison Damage!</span><br>";
			checkTextareaHeight();
		} else {
			gameText.innerHTML += "<span class='redtext'>Player Two did not take any Poison Damage this turn!</span><br>";
			checkTextareaHeight();
		}
	} else if (perish2 == true) {
		if (perishCount2 > 0) {
			perishCount2--;
			gameText.innerHTML += "<span class='redtext'>Player Two's Perish count has dropped to " + perishCount2 + "!</span><br>";
			checkTextareaHeight();
		} else {
			HP2.innerHTML = 0;
			gameText.innerHTML += "<span class='redtext'>Player Two was knocked out by Perish Song!</span><br>";
			PlayerOneAttack();
		}
	}
}

//Test Function
function testMath() {
	var x = Math.floor((Math.random() * 10) + 1);
	return x;
}

//Changes Accordion
$( function() {
    $( "#accordion" ).accordion({
      active: true,
      collapsible: true,
      heightStyle: "content"
    });
  } );

//Changing Background
var basic = {
	p1: "url('img/basic1.png')",
	p2: "url('img/basic2.png')"
};

var beach = {
	p1: "url('img/beach1.png')",
	p2: "url('img/beach2.png')"
};

var bridge = {
	p1: "url('img/bridge1.png')",
	p2: "url('img/bridge2.png')"
};

var cave1 = {
	p1: "url('img/cave11.png')",
	p2: "url('img/cave12.png')"
};

var cave2 = {
	p1: "url('img/cave21.png')",
	p2: "url('img/cave22.png')"
};

var city = {
	p1: "url('img/city1.png')",
	p2: "url('img/city2.png')"
};

var field = {
	p1: "url('img/field1.png')",
	p2: "url('img/field2.png')"
};

var forest = {
	p1: "url('img/forest1.png')",
	p2: "url('img/forest2.png')"
};

var lava = {
	p1: "url('img/lava1.png')",
	p2: "url('img/lava2.png')"
};

var ocean = {
	p1: "url('img/ocean1.png')",
	p2: "url('img/ocean2.png')"
};

var online = {
	p1: "url('img/online1.png')",
	p2: "url('img/online2.png')"
};

var path = {
	p1: "url('img/path1.png')",
	p2: "url('img/path2.png')"
};

var plaza = {
	p1: "url('img/plaza1.png')",
	p2: "url('img/plaza2.png')"
};

var redCarpet = {
	p1: "url('img/redCarpet1.png')",
	p2: "url('img/redCarpet2.png')"
};

var snow = {
	p1: "url('img/snow1.png')",
	p2: "url('img/snow2.png')"
};

var space = {
	p1: "url('img/space1.png')",
	p2: "url('img/space2.png')"
};


function changeBG(zone) {
    document.getElementById("poke1Sprite").style.background = zone.p1;
    document.getElementById("poke2Sprite").style.background = zone.p2;
}

function randomBG() {
    var maps = [basic, beach, bridge, cave1, cave2, city, field, forest, lava, ocean, online, path, plaza, redCarpet, snow, space];
    var total = maps.length;
    var whichOne = Math.floor(Math.random() * total);
    var finalPick = maps[whichOne];
    changeBG(finalPick);
}

randomBG();