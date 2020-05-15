namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . 2 2 . 2 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . 2 2 2 . . . . . . 
. . . . . 2 2 2 . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
}
scene.onHitWall(SpriteKind.Player, function (sprite) {
    TombRaider.setPosition(10, 10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    TombRaider.setPosition(10, 10)
    info.startCountdown(20)
    Baddie.setPosition(Math.randomRange(20, 140), Math.randomRange(10, 110))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.setScore(0)
    info.startCountdown(20)
    tiles.setTilemap(tiles.createTilemap(
            hex`0a000800010808080808080808080a0b0b0b0b0b0b0b0b0b0a0b0b0b0b0b0b0b0b0b0a0b0b0b0b0b0b0b0b0b0a0b0b0b0b0b0b0b0b0b0a0b0b0b0b0b0b0b0b0b0a0b0b0b0b0b0b0b0b0b0a0b0b0b0b0b0b0b0b0b`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestClosed,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath5,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
    TombRaider = sprites.create(img`
. . . f f f c c c . . . . . 
. f f 5 5 5 5 5 5 f f . . . 
. f 5 5 5 5 5 5 5 5 5 f . . 
f 5 5 5 5 5 5 5 5 5 5 5 c . 
f 5 5 b d 5 5 5 5 5 5 5 c . 
f 5 d 4 4 b 5 5 5 5 5 5 5 f 
f 5 b 4 4 4 c c 5 5 5 5 5 f 
f f f 4 4 c b c b 5 5 5 b f 
. f f d d c 1 e b b b b b c 
. . f d d d d 4 f b b b b c 
. . f 4 4 4 e e e 4 b b c . 
. . f 9 9 9 e d d 4 f f . . 
. . f 9 9 9 e d d e f . . . 
. f 3 3 b 3 b e e b f . . . 
. f f 3 b 3 b 3 b f f . . . 
. . . f f b b f f . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(TombRaider)
    TombRaider.setPosition(10, 10)
    for (let index = 0; index < 4; index++) {
        Baddie = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        Baddie.setPosition(Math.randomRange(20, 140), Math.randomRange(10, 110))
    }
    Chest = sprites.create(img`
. . b b b b b b b b b b b b . . 
. b e 4 4 4 4 4 4 4 4 4 4 e b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b b b b b b b d d b b b b b b b 
c b b b b b b c c b b b b b b c 
c c c c c c b c c b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.Food)
    Chest.setPosition(Math.randomRange(141, 160), Math.randomRange(101, 120))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    TombRaider.setPosition(10, 10)
})
let Chest: Sprite = null
let Baddie: Sprite = null
let TombRaider: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000303000000000000000300000300000000000003000003000000000000030303030000000000000300000300000000000000000000000000`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
