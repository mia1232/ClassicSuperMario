import {Trait} from '../Entity.js';

export default class Go extends Trait {
    constructor(entityRef) {
        super('go');
        this.entityRef = entityRef;
        this.dir = 0;
        this.speed = 6000;
    }

    update(entity, deltaTime) {
        entity.vel.x = this.speed * this.dir * deltaTime;
        if(entity.vel.x > 0) {
            if (this.entityRef.walkingLoopStatus === 0) {
                this.entityRef.walkingLoopStatus = 1
            } else if (this.entityRef.walkingLoopStatus === 1){
                this.entityRef.walkingLoopStatus = 0
            }
        }
    }
}
