export default class Map1 {
    constructor(scene) {
        this.tilemap = scene.make.tilemap({key: 'tilemap'});

		const blocks = this.tilemap.addTilesetImage("wall");
		const belowLayer = this.tilemap.createDynamicLayer("capa1", blocks, 0, 0);
		belowLayer.setCollisionByProperty({collide: true});
		scene.matter.world.convertTilemapLayer(belowLayer);

		this.spawnPoint = this.tilemap.findObject("capaobj", obj => obj.name === "SpawnPoint");

    }
}
