const Artist = require('../src/encapsulation');

test('Test - Artist Instantiation', () => {
    let music = new Artist("BTS");
    expect(music.name).toBe("BTS");
});

test('Test - Artist getName()', () => {
    let music = new Artist("Astro");
    expect(music.getName()).toBe("Astro");
});

test('Test - Artist setName()', () => {
    let music = new Artist("Tomorrow x Together");
    music.setName("TXT");
    expect(music.name).toBe("TXT");
});