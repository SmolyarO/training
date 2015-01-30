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
    var assetsBase = {},

        getAsset = function (key) {
            if (!key) {
                console.log('You have not entered Key');
                return null;
            }

            if (assetsBase[key]) {
                return assetsBase[key];
            }

            console.log('No such key');
            return null;
        },

        setAsset = function (key, value) {
            if (arguments.length < 2) {
                console.log('Key or Value is absent');
                return null;
            }

            if (assetsBase[key]) {
                console.log('Duplicate key');
                return false;
            }

            assetsBase[key] = value;
            console.log('Cache successfully has been added');
            return assetsBase[key];
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

console.log(assets.set('test'));
console.log(assets.get(0));