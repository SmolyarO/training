// kvs (object with our cache) is accessible directly
// It's bad!

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

    add = function (key, value) {
        if (arguments.length < 2) {
            console.log('Key or Value is absent');
            return false;
        }

        if (kvs[key]) {
            console.log('Duplicate key');
            return false;
        }

        kvs[key] = value;
        console.log('Cache successfully has been added');
        return kvs[key];
    };

    update = function (key, value) {
        if (arguments.length < 2) {
            console.log('Key or Value is absent');
            return null;
        }

        if (kvs.hasOwnProperty(key)) {
            kvs[key] = value;
            console.log('Cache successfully has been updated');
            return kvs[key];
        }

        // will add new record
        add(key, value);
        return true;
    };

    del = function (key) {
        if (!key) {
            console.log('Key is absent');
            return null;
        }

        if (kvs.hasOwnProperty(key)) {
            delete kvs[key];
            console.log('Cache key:value pair has been deleted');
            return true;
        }

        console.log('No such key');
        return undefined;
    };


    get = function (key) {
        if (!key) {
            console.log('Key is absent');
            return null;
        }

        if (kvs[key]) {
            return kvs[key];
        }

        console.log('No such key');
        return null;
    };

    find = function (query) {
        if (!query) {
            console.log('There is no query')
            return null;
        }

        if (query) {
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
                return null;
            }

            return result;
        }
    };

    count = function (key) {
        if (key && kvs.hasOwnProperty(key)) {
            console.log('Cache property value length: ' + kvs[key].toString().length);
            //maybe better use switch
            return kvs[key].toString().length;
        }

        var prop, ln = 0;
        //console.log('Total cache prop count: ' + Object.keys(kvs).length);
        for (prop in kvs) {
            if (kvs.hasOwnProperty(prop)) {
                ln += kvs[prop].toString().length;
            }
        }
        console.log('Total cache values length: ' + ln);
        return ln;
    };


    return {
        add: add,
        update: update,
        del: del,
        get: get,
        find: find,
        count: count
    }
}

// trash generator
function trash(obj, count) {
    for (var i = 0; i < count; i++) {
        obj.add([Math.floor((Math.random() * 10000) + 1)], Math.floor((Math.random() * 10000) + 1));
    }
}

var c = new Cache();
c.add('test', 21);
c.add('test', 22);  // duplicate
c.add('test2', 'test string');
trash(c, 20);
c.del('test');


// kvs is not accessible directly, only through methods
// To call method you must do next: var.prototype.add();
// So it's not very good

function Cache2() {
    if (!(this instanceof Cache2)) {
        return new Cache2();
    }

    var kvs = {};

    Cache2.prototype = {
        add: function (key, value) {
            if (arguments.length < 2) {
                console.log('Key or Value is absent');
                return false;
            }

            if (kvs[key]) {
                console.log('Duplicate key');
                return false;
            }

            kvs[key] = value;
            console.log('Cache successfully has been added');
            return kvs[key];

        },

        update: function (key, value) {
            if (arguments.length < 2) {
                console.log('Key or Value is absent');
                return null;
            }

            if (kvs.hasOwnProperty(key)) {
                kvs[key] = value;
                console.log('Cache successfully has been updated');
                return kvs[key];
            }

            // will add new record
            add(key, value);
            return true;
        },

        del: function (key) {
            if (!key) {
                console.log('Key is absent');
                return null;
            }

            if (kvs.hasOwnProperty(key)) {
                delete kvs[key];
                console.log('Cache key:value pair has been deleted');
                return true;
            }

            console.log('No such key');
            return undefined;
        },


        get: function (key) {
            if (!key) {
                console.log('Key is absent');
                return null;
            }

            if (kvs[key]) {
                return kvs[key];
            }

            console.log('No such key');
            return null;
        },

        find: function (query) {
            if (!query) {
                console.log('There is no query')
                return null;
            }

            if (query) {
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
                    return null;
                }

                return result;
            }
        },

        count: function (key) {
            if (key && kvs.hasOwnProperty(key)) {
                console.log('Cache property value length: ' + kvs[key].toString().length);
                //maybe better use switch
                return kvs[key].toString().length;
            }

            var prop, ln = 0;
            //console.log('Total cache prop count: ' + Object.keys(kvs).length);
            for (prop in kvs) {
                if (kvs.hasOwnProperty(prop)) {
                    ln += kvs[prop].toString().length;
                }
            }
            console.log('Total cache values length: ' + ln);
            return ln;
        }
    };


    return Cache2;
}


var c2 = new Cache2();
c2.prototype.add('test', 21);
c2.prototype.add('test', 22);  // duplicate
c2.prototype.add('test2', 'test string');
trash(c2.prototype, 20);
c2.prototype.del('test');






// kvs is not accessible directly, only through methods
// To call method you don't need type prototype: var.add();
// So it's good

function Cache3() {
    if (!(this instanceof Cache3)) {
        return new Cache3();
    }

    this._kvs = {};
}

Cache3.prototype.add = function (key, value) {
    if (arguments.length < 2) {
        console.log('Key or Value is absent');
        return false;
    }

    if (_kvs[key]) {
        console.log('Duplicate key');
        return false;
    }

    kvs[key] = value;
    console.log('Cache successfully has been added');
    return kvs[key];
};

Cache3.prototype.update = function (key, value) {
    if (arguments.length < 2) {
        console.log('Key or Value is absent');
        return null;
    }

    if (kvs.hasOwnProperty(key)) {
        kvs[key] = value;
        console.log('Cache successfully has been updated');
        return kvs[key];
    }

    // will add new record
    add(key, value);
    return true;
};

Cache3.prototype.del = function (key) {
    if (!key) {
        console.log('Key is absent');
        return null;
    }

    if (kvs.hasOwnProperty(key)) {
        delete kvs[key];
        console.log('Cache key:value pair has been deleted');
        return true;
    }

    console.log('No such key');
    return undefined;
};


Cache3.prototype.get = function (key) {
    if (!key) {
        console.log('Key is absent');
        return null;
    }

    if (kvs[key]) {
        return kvs[key];
    }

    console.log('No such key');
    return null;
};

Cache3.prototype.find = function (query) {
    if (!query) {
        console.log('There is no query')
        return null;
    }

    if (query) {
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
            return null;
        }

        return result;
    }
};

Cache3.prototype.count = function (key) {
    if (key && kvs.hasOwnProperty(key)) {
        console.log('Cache property value length: ' + kvs[key].toString().length);
        //maybe better use switch
        return kvs[key].toString().length;
    }

    var prop, ln = 0;
    //console.log('Total cache prop count: ' + Object.keys(kvs).length);
    for (prop in kvs) {
        if (kvs.hasOwnProperty(prop)) {
            ln += kvs[prop].toString().length;
        }
    }
    console.log('Total cache values length: ' + ln);
    return ln;
    
    /*if (key && kvs[key] !== undefined) {
        console.log(kvs[key].length);
        return 0;
        //maybe better use switch
    }

    console.log('Total cache prop count: ' + Object.keys(kvs).length);
*/

};


var c3 = new Cache3();
c3.add('test', 21);
c3.add('test', 22);  // duplicate
c3.add('test2', 'test string');
trash(c3, 20);
c3.del('test');


// I think it is better ways of solving this task, I hope I'll find them with help of future experience :)