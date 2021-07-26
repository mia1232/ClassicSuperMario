import Keyboard from './KeyboardState.js';
import {throttle} from '../utils/actionHelper.js';

export function setupKeyboard(entity) {
    const input = new Keyboard();

    input.addMapping('Space', throttle(keyState => {
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    }, 100));

    input.addMapping('ArrowRight',throttle( keyState => {
        entity.go.dir = keyState;
    }, 50));

    input.addMapping('ArrowLeft', throttle( keyState => {
        entity.go.dir = -keyState;
    }, 50));

    return input;
}

export function setupKeyboardPlayer2(entity) {
    const input = new Keyboard();

    input.addMapping('ShiftLeft', keyState => {
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    });

    input.addMapping('KeyD', keyState => {
        entity.go.dir = keyState;
    });

    input.addMapping('KeyA', keyState => {
        entity.go.dir = -keyState;
    });

    return input;
}
