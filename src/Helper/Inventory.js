export default function Inventory(scene, x, y, inventory, onClick) {
	const myInventory = [];
	const actions = [];

	for (const key in inventory) {
		if (inventory[key] != 0) {
			myInventory.push(key);
		}
	}
	myInventory.forEach(item => {
		actions.push(scene.add.image(0, 0, 'pizza'));
	});
	console.log(actions);
	var inventory = scene.rexUI.add
		.dialog({
			x: 350,
			y: 0,

			background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0xf57f17),

			title: scene.rexUI.add.label({
				background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0xbc5100),
				text: scene.add.text(0, 0, 'Inventory', {
					fontSize: '20px',
				}),
				space: {
					left: 15,
					right: 15,
					top: 10,
					bottom: 10,
				},
			}),

			actions: [],

			actionsAlign: 'left',

			space: {
				title: 10,
				action: 5,

				left: 10,
				right: 10,
				top: 10,
				bottom: 10,
			},
		})
		.layout()
		.pushIntoBounds()
		.popUp(500);

	inventory.on('button.click', function (button, groupName, index) {
		onClick(button.fillColor);
	});
	// inventory.actions.push(scene.add.image(0, 0, 'cat'));

	return inventory;
}
export function createLabel(scene, text) {
	return scene.rexUI.add.label({
		width: 40,
		height: 40,

		background: scene.rexUI.add.roundRectangle(10, 50, 10, 0, 0, 0x5e92f3),

		text: scene.add.text(0, 0, text, {
			fontSize: '24px',
		}),

		space: {
			left: 80,
			right: 80,
			top: 10,
			bottom: 10,
		},
	});
}
