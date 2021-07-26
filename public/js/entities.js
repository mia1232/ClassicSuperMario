import Entity from './Entity.js';
import Go from './traits/Go.js';
import Jump from './traits/Jump.js';
import Velocity from './traits/Velocity.js';
import {loadMarioSprite, loadLuigiSprite, loadMushroomHeadSprite} from './sprites.js';

export function createMario() {
    return loadMarioSprite()
    .then(sprite => {
        const mario = new Entity("Mario");
        mario.size.set(14, 16);

        mario.addTrait(new Go(mario));
        mario.addTrait(new Jump(mario));
        // mario.addTrait(new Velocity());

        mario.draw = function drawMario(context) {
            if(mario.motionStatus === 1) {
                sprite.draw('jumping', context, this.pos.x, this.pos.y);
            } else if(mario.walkingLoopStatus === 0 && mario.vel.x > 0) {
                sprite.draw('walking1', context, this.pos.x, this.pos.y);
            } else if(mario.walkingLoopStatus === 1 && mario.vel.x > 0) {
                sprite.draw('walking2', context, this.pos.x, this.pos.y);
            } else if(mario.walkingLoopStatus === 0 && mario.vel.x < 0) {
                sprite.draw('walking3', context, this.pos.x, this.pos.y);
            } else if(mario.walkingLoopStatus === 1 && mario.vel.x < 0) {
                sprite.draw('walking4', context, this.pos.x, this.pos.y);
            }else if(mario.motionStatus === 0 || mario.vel.x === 0){
                sprite.draw('idle', context, this.pos.x, this.pos.y);
            }
        }


        return mario;
    });
}

export function createMushroomHead() {
    return loadMushroomHeadSprite()
    .then(sprite => {
        return sprite;
    });
}



// export function createMushroomHead() {
//     return loadMushroomHeadSprite()
//     .then(sprite => {
//         const mushRoomHead = new Entity("Mushroomhead");
//         mushRoomHead.size.set(14, 16);

//         mushRoomHead.draw = function drawMushroomhead(context) {
//             sprite.draw('idle', context, this.pos.x, this.pos.y);
//         }
//         return mushRoomHead;
//     });
// }


export function createLuigi() {
    return loadLuigiSprite()
    .then(sprite => {
        const mario = new Entity();
        mario.size.set(14, 16);

        mario.addTrait(new Go());
        mario.addTrait(new Jump(mario));
        //mario.addTrait(new Velocity());

        mario.draw = function drawMario(context) {
            if(mario.motionStatus === 0) {
                sprite.draw('idle', context, this.pos.x, this.pos.y);
            } else if (mario.motionStatus === 1) {
                sprite.draw('jumping', context, this.pos.x, this.pos.y);
            }
        } 
        return mario;
    });
}