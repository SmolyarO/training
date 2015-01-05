function Cache() {
    if (!(this instanceof Cache)) {
        return new Cache();
    }

    var kvs = {},
        add,
        get,
        update,
        del,
        find;

    add = function(key, value) {
        if (!(key in kvs)) {
            kvs[key] = value;
        }
        else {
            console.log('Duplicate key');
        }

    }

    update = function(key, value) {
        if ((key in kvs)) {
            kvs[key] = value;
        }
        else {
            add(key, value);
        }

    }

    del = function(key) {
        if ((key in kvs)) {
            delete kvs[key];
        }
        else {
            console.log('No such key');
        }

    }


    get = function(key) {
        if ((key in kvs)) {
            return kvs[key];
        }
        else {
            console.log('No such key');
        }

    }

    find = function(str) {
        if (!(key in kvs)) {
            kvs[key] = value;
        }
        else {
            console.log('Not found');
        }

    }


    return {
        kvs: kvs,
        add: add,
        update: update,
        del: del,
        get: get,
        find: find
    }
}

var c = new Cache();
c.add('test', 21);
c.add('test', 22);
c.del('test');