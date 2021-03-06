const Q = require('q');
const path = require('path');
const nedb = require('nedb');
const remote = require('electron').remote;
const app = remote.app;

var db = new nedb({
    filename: path.join(app.getPath('userData'), '/app/data/library.db'),
    autoload: true
});

exports.insertdb = (doc) => {
    var deferred = Q.defer();
    db.insert(doc, (err, newDocs) => {
        if (err) {
            deferred.reject(new Error(err))
        } else {
            deferred.resolve(doc)
        };
    });
    return deferred.promise;
}

exports.find = (obj) => {
    var deferred = Q.defer();
    db.find(obj, (err, docs) => {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(docs);
        }
    });
    return deferred.promise;
}

exports.remove = (obj) => {
    var deferred = Q.defer();
    db.remove(obj, {}, (err, numRemoved) => {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(numRemoved);
        }
    });
    return deferred.promise;
}