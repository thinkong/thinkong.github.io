var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Namespace;
(function (Namespace) {
    var State;
    (function (State) {
        var Game = (function (_super) {
            __extends(Game, _super);
            function Game() {
                _super.apply(this, arguments);
            }
            Game.prototype.create = function () {
                this.inventory = new Namespace.Entity.Inventory(this);
                this.items = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
                var img = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaser-logo');
                img.anchor.x = 0.5;
                img.anchor.y = 0.5;
                this.physics.startSystem(Phaser.Physics.ARCADE);
                this.char = this.game.add.sprite(this.game.world.centerX, this.game.world.height, 'chars', 20);
                this.char.anchor.set(0.5, 1);
                this.game.physics.enable(this.char);
                this.char.body.collideWorldBounds = true;
                var inven = this.inventory;
                var itm = this.items;
                this.game.input.onTap.add(function (pt) {
                    console.log('touched', pt.position.x, pt.position.y, this);
                    var addedItem = new Namespace.Entity.GameItem(this.game, this.game.world.centerX, this.game.world.centerY, 'items', this.game.rnd.integerInRange(0, 100));
                    this.game.add.existing(addedItem);
                    this.game.physics.enable(addedItem, Phaser.Physics.ARCADE);
                    addedItem.body.velocity.setTo(this.game.rnd.between(-50, 50), -460);
                    addedItem.body.collideWorldBounds = true;
                    addedItem.body.bounce.set(0.8);
                    addedItem.body.gravity.set(0, 980);
                    inven.addItem(addedItem);
                    itm.add(addedItem);
                });
            };
            Game.prototype.update = function () {
                this.game.physics.arcade.collide(this.items, this.char, this.collisionHandler, null, this);
            };
            Game.prototype.collisionHandler = function (obj1, obj2) {
                console.log('hit!!');
            };
            return Game;
        })(Phaser.State);
        State.Game = Game;
    })(State = Namespace.State || (Namespace.State = {}));
})(Namespace || (Namespace = {}));
