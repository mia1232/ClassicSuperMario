import Timer from './Timer.js';
import {loadLevel,loadEnemies} from './loaders.js';
import Entity from './Entity.js';
import {createMario, createLuigi, createMushroomHead} from './entities.js';
import {createCollisionLayer} from './layers.js';
import {setupKeyboard, setupKeyboardPlayer2} from './input.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
    createMario(),
    createMushroomHead(),
    loadEnemies('1-1'),
    createLuigi(),
    loadLevel('1-1'),
])
.then(([mario, mushroomHeadSprite, enemiesSpec, luiji, level]) => {
    mario.pos.set(12, 12);

    //level.comp.layers.push(createCollisionLayer(level));

    enemiesSpec.forEach((enemy) => {

        const mushRoomHead = new Entity("Mushroomhead");
        mushRoomHead.size.set(14, 16);

        mushRoomHead.draw = function drawMushroomhead(context) {
            mushroomHeadSprite.draw('idle', context, this.pos.x, this.pos.y);
        }
        mushRoomHead.pos.set(enemy.location.x, enemy.location.y);
        mushRoomHead.vel.x = enemy.vel;
        level.entities.add(mushRoomHead);

    })
    level.entities.add(mario);

    // level.entities.add(luiji);

    const input = setupKeyboard(mario);
    input.listenTo(window);


    const inputPlayer2 = setupKeyboardPlayer2(luiji);
    inputPlayer2.listenTo(window);

    ['mousedown', 'mousemove'].forEach(eventName => {
        canvas.addEventListener(eventName, event => {
            if (event.buttons === 1) {
                mario.vel.set(0, 0);
                mario.pos.set(event.offsetX, event.offsetY);
            }
        });
    });


    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
        level.update(deltaTime);

        level.comp.draw(context);
    }

    timer.start();
});