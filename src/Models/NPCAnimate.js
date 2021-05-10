export default function NPCAnimate(
	key,
	sprite,
	start,
	end,
	frameRate = 10,
	repeat = -1
) {
	key.anims.create({
		key: `${sprite}still`,
		frames: key.anims.generateFrameNumbers(sprite, {
			start: start,
			end: end,
		}),
		repeat: repeat,
		frameRate: frameRate,
	});
}
