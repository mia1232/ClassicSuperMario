import SpriteSheet from './SpriteSheet.js';
import {loadImage} from './loaders.js';

export function loadMarioSprite() {
    return loadImage('/img/characters.gif')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.define('idle', 276, 44, 16, 16);
        sprites.define('jumping', 354, 44, 16, 16);
        sprites.define('walking1', 290, 44, 16, 16);
        sprites.define('walking2', 320, 44, 16, 16);
        sprites.define('walking3', 208, 44, 16, 16);
        sprites.define('walking4', 176, 44, 16, 16);
        return sprites;
    });
}


export function loadMushroomHeadSprite() {
    return loadImage('/img/characters.gif')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.define('idle', 315, 187, 16, 16);
        return sprites;
    });
}


export function loadLuigiSprite() {
    return loadImage('/img/characters.gif')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.define('idle', 276, 106, 16, 16);
        sprites.define('jumping', 354, 106, 16, 16);
        sprites.define('walking1', 320, 44, 16, 16);
        sprites.define('walking2', 290, 44, 16, 16);
        sprites.define('walking3', 208, 44, 16, 16);
        sprites.define('walking4', 176, 44, 16, 16);
        return sprites;
    });
}

export function loadBackgroundSprites() {
    return loadImage('/img/tiles.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.defineTile('ground', 0, 0);
        sprites.defineTile('questionBrick', 24, 0);
        sprites.defineTile('woodenBrick', 2, 0);
        sprites.defineTile('steelBrick', 27, 0);
        sprites.defineTile('sky', 3, 23);
        sprites.defineTile('fire', 3, 24);
        sprites.defineTile('cloud', 1, 22);
        return sprites;
    });
}
