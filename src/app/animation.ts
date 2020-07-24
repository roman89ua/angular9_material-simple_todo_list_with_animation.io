import { trigger, transition, state, style, animate } from '@angular/animations';

export const fade = trigger('fade', [
    state('void', style({
        transform: 'translateX(-20px)',
        // backgroundColor: 'gray',
        opacity: 0,
        color: 'Red',
    })),
    transition('void => *, * => void', [
        animate(2000)
    ])
]);
