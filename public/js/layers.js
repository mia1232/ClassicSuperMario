export function createBackgroundLayer(level, sprites, backgroundSprits) {
    const buffer = document.createElement('canvas');
    buffer.width = 1200;
    buffer.height = 800;

    const ctx = buffer.getContext('2d');


    
    return function drawBackgroundLayer(ctx) {
        level.tiles.forEach((tile, x, y) => {
            sprites.drawTile(tile.name, ctx, x, y);
        });
        ctx.drawImage(buffer, 0, 0);
    };
}

export function createSpriteLayer(entities) {
    return (ctx) => {
        entities.forEach(entity => {
            entity.draw(ctx);
        });
    };
}

export function createCollisionLayer(level) {
    const resolvedTiles = [];

    const tileResolver = level.tileCollider.tiles;
    const tileSize = tileResolver.tileSize;

    const getByIndexOriginal = tileResolver.getByIndex;
    tileResolver.getByIndex = function getByIndexFake(x, y) {
        resolvedTiles.push({x, y});
        return getByIndexOriginal.call(tileResolver, x, y);
    }

    return function drawCollision(context) {
        context.strokeStyle = 'blue';
        resolvedTiles.forEach(({x, y}) => {
            context.beginPath();
            context.rect(
                x * tileSize,
                y * tileSize,
                tileSize, tileSize);
            context.stroke();
        });

        context.strokeStyle = 'red';
        level.entities.forEach(entity => {
            context.beginPath();
            context.rect(
                entity.pos.x, entity.pos.y,
                entity.size.x, entity.size.y);
            context.stroke();
        });

        resolvedTiles.length = 0;
    };
}