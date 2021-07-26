import {Vec2} from './math.js';

const IDLE = 0;
const JUMPING = 1;


export class Trait {
    constructor(name) {
        this.NAME = name;
    }

    update() {
        console.warn('Unhandled update call in Trait');
    }
}


export default class Entity {
    constructor(entityType) {
        this.pos = new Vec2(0, 0);
        this.vel = new Vec2(0, 0);
        this.size = new Vec2(0, 0);
        this.motionStatus = 0
        this.walkingLoopStatus = 0
        this.type = entityType
        this.traits = [];

    }

    addTrait(trait) {
        this.traits.push(trait);
        this[trait.NAME] = trait;
    }

    update(deltaTime) {
        this.traits.forEach(trait => {
            trait.update(this, deltaTime);
        });
    }
}
