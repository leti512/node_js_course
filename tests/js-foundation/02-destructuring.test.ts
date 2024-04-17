import { characters } from "../../src/js-foundation/02-destructuring"

describe('js-foundation/02-destructuring.ts', () => {
    test('Characters should contain Flash, Superman', () => {
        expect( characters ).toContain('Flash');
        expect( characters ).toContain('Superman');
    });
    test('Characters should contain Flash, and second Superman', () => {
        const [flash, superman] = characters;

        expect( characters ).toBe('Flash');
        expect( characters ).toBe('Superman');
    });
})