// AVID namespace task
var AVID = AVID || {};

AVID.namespace = function (nsString) {
    var parts = nsString.split('.'),
        parent = AVID,
        i;

    if (parts[0] === "AVID") {
        parts = parts.slice(1);
    }

    for (i = 0; i < parts.length; i += 1) {
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;

};

// module filling
AVID.namespace('models.assets');
AVID.models.assets = (function () {
    var assetsBase = [],

        getAsset = function (id) {
                return assetsBase[id];
        },
        setAsset = function (value) {
                assetsBase.push(value);
                console.log(value);
        };
    return {
        get: getAsset,
        set: setAsset
    }
}());

var a = AVID.models.assets;

var assets,
    users,
    links,
    parser,
    checksum,
    rest,
    bus;

// models
assets = AVID.namespace('models.assets');
users = AVID.namespace('models.users');
links = AVID.namespace('models.links');

// helpers
parser = AVID.namespace('helpers.parser');
checksum = AVID.namespace('helpers.checksum');

// apis
rest = AVID.namespace('apis.rest');
bus = AVID.namespace('apis.bus');

console.log(assets.setAsset('test'));
console.log(assets.getAsset(0));