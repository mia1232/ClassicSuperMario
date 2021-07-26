import {Trait} from '../Entity.js';

export default class Jump extends Trait {
    constructor(entityRef) {
        super('jump');

        this.entityRef = entityRef;
        this.duration = 0.3;
        this.engageTime = 0;

        this.velocity = 230;
    }

    start() {
        this.entityRef.motionStatus = 1
        this.engageTime = this.duration;
    }

    cancel() {
        this.entityRef.motionStatus = 0
        this.engageTime = 0;
    }

    update(entity, deltaTime) {
        if (this.engageTime > 0) {
            entity.vel.y = -this.velocity;
            this.engageTime -= deltaTime;
        }
    }
}
