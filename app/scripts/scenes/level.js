//import * as config from '../config.js';

export default class Level extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Level'});
  }

  /**
   *  Called when this scene is initialized.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  init(/* data */) {
    

  }

  /**
   *  Used to declare game assets to be loaded using the loader plugin API.
   *
   *  @protected
   */
  preload() {
    
  }

  /**
   *  Responsible for setting up game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  create(/* data */) {
    const levelMap = [
        [   0,   0,   0,   0, 418, 419,   0,   0,   0,   0 ],
        [ 226,   1,   1, 449, 450, 451, 452,   1,   1, 227 ],
        [ 258,  33,  33,  33, 482, 483,  33,  33,  33, 259 ],
        [ 257, 129, 129, 129, 129, 129, 129, 129, 129, 256 ],
        [ 257, 129, 129, 130, 129, 129, 129, 129, 129, 256 ],
        [ 257, 129, 129, 162, 129, 129, 131, 129, 129, 256 ],
        [ 257, 129, 129, 129, 129, 129, 129, 129, 163, 256 ],
        [ 257, 130, 129, 129, 131, 129, 129, 129, 129, 256 ],
        [ 257, 194, 129, 129, 129, 129, 130, 129, 129, 256 ],
        [ 290,   2,   2,   2,   2,   2,   2,   2,   2, 291 ],
        [ 322,  34,  34,  34,  34,  34,  34,  34,  34, 323 ]
    ];

    const map = this.make.tilemap({ key: 'levelMap', data: levelMap, tileWidth: 16, tileHeight: 16 });
    const tiles = map.addTilesetImage('Dungeon_Tiles', 'dungeon');
    const layer = map.createStaticLayer(0, tiles, 0, 0);

  }

  /**
   *  Handles updates to game logic, physics and game objects.
   *
   *  @protected
   *  @param {number} t - Current internal clock time.
   *  @param {number} dt - Time elapsed since last update.
   */
  update(/* t, dt */) {

  }

  /**
   *  Called after a scene is rendered. Handles rendering post processing.
   *
   *  @protected
   */
  render() {
  }

  /**
   *  Called when a scene is about to shut down.
   *
   *  @protected
   */
  shutdown() {
  }

  /**
   *  Called when a scene is about to be destroyed (i.e.: removed from scene
   *  manager). All allocated resources that need clean up should be freed up
   *  here.
   *
   *  @protected
   */
  destroy() {
  }
}
