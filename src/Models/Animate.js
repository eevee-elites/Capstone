export default function Animate(
	key,
	sprite,
	lstart,
	lend,
	rstart,
	rend,
	ustart,
	uend,
	dstart,
	dend,
	still,
	frameRate = 10,
	repeat = 0
) {
	key.anims.create({
		key: 'left',
		frames: key.anims.generateFrameNumbers(sprite, {
			start: lstart,
			end: lend,
		}),
		repeat: repeat,
		frameRate: frameRate,
	});

	key.anims.create({
		key: 'right',
		frames: key.anims.generateFrameNumbers(sprite, {
			start: rstart,
			end: rend,
		}),
		repeat: repeat,
		frameRate: frameRate,
	});

	key.anims.create({
		key: 'up',
		frames: key.anims.generateFrameNumbers(sprite, {
			start: ustart,
			end: uend,
		}),
		repeat: repeat,
		frameRate: frameRate,
	});
	key.anims.create({
		key: 'down',
		frames: key.anims.generateFrameNumbers(sprite, {
			start: dstart,
			end: dend,
		}),
		repeat: repeat,
		frameRate: frameRate,
	});
	key.anims.create({
		key: 'still',
		frames: [{key: sprite, frame: still}],
		repeat: repeat,
		frameRate: frameRate,
	});
}
