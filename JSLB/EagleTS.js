var Eagle = /** @class */ (function () {
    function Eagle() {
    }
    Eagle.prototype.flyWithOneWing = function () {
        console.log('Eagle is flying with one wing');
    };
    Eagle.prototype.flyWithTwoWings = function () {
        console.log('Eagle is flying with two wings');
    };
    Eagle.prototype.glide = function () {
        console.log('Eagle is gliding in air effortlessly');
    };
    return Eagle;
}());
var eagle = new Eagle();
eagle.flyWithOneWing(); // Output: "Eagle is flying with one wing"
eagle.flyWithTwoWings(); // Output: "Eagle is flying with two wings"
eagle.glide(); // Output: "Eagle is gliding in air effortlessly"
