function Cache() {
    if (!(this instanceof Cache)) {
        return new Cache();
    }

    var kvs = {},
        add,
        get,
        update,
        del,
        find,
        count;

    add = function(key, value) {
        if (arguments.length < 2) {
            console.log('Key or Value is absent');
        }
        else if (!(key in kvs)) {
            kvs[key] = value;
        }
        else {
            console.log('Duplicate key');
        }

    };

    update = function(key, value) {
        if (arguments.length < 2) {
            console.log('Key or Value is absent');
        }
        else if ((key in kvs)) {
            kvs[key] = value;
        }
        else {
            add(key, value);
        }

    };

    del = function(key) {
        if (!key) {
            console.log('Key is absent');
        }
        else if ((key in kvs)) {
            delete kvs[key];
        }
        else {
            console.log('No such key');
        }

    };


    get = function(key) {
        if (!key) {
            console.log('Key is absent');
        }
        else if (key in kvs) {
            return kvs[key];
        }
        else {
            console.log('No such key');
        }

    };

    find = function(query) {
        if (!query) {
            console.log('There is no query')
        }
        else if (query) {
            var result = [],
                prop;

            for (prop in kvs) {
                if (kvs.hasOwnProperty(prop) && (kvs[prop].toString().indexOf(query)) != -1) {
                    var obj = {};
                    obj[prop] = kvs[prop];
                    result.push(obj);
                }
            }

            console.log(result);

            if (result.length == 0) {
                console.log('Sorry, I have found nothing :(');
            }
        }

    };

    count = function(key) {
        if (key && key in kvs) {
            console.log(kvs[key].length);
            //maybe better use switch
        }
        else {
            console.log('Total cache prop count: ' + Object.keys(kvs).length);
        }

    };


    return {
        kvs: kvs,
        add: add,
        update: update,
        del: del,
        get: get,
        find: find,
        count: count
    }
}

//trash generator
function trash (obj, count) {
    for (var i = 0; i < count; i++) {
        obj.add([Math.floor((Math.random() * 10000) + 1)],  Math.floor((Math.random() * 10000) + 1));
    }
}

var c = new Cache();
c.add('test', 21);
c.add('test', 22);  // duplicate
c.add('test2', 'test string');
trash(c, 20);
c.del('test');