
export default class EntitiesCollider {
    constructor(entities) {
        this.entities = entities
    }

    checkCollision() {
        const mario = Array.from(this.entities).find(entity => entity.type === "Mario")
        const mushroomHeads = Array.from(this.entities).filter(entity => entity.type === "Mushroomhead")
        if( mushroomHeads.some(mh => (Math.sqrt((mh.pos.x - mario.pos.x)*(mh.pos.x - mario.pos.x) + (mh.pos.y - mario.pos.y)*(mh.pos.y - mario.pos.y))) < 15)) {
           mario.pos.x = 0
           mario.pos.y = 50
        }
    }
    
}
