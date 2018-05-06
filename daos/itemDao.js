var mongoose = require("../utils/database.js");
var Item = mongoose.model("Item", {
    typeId: String,
    ServerLevel: String,
    title: String,
    icon: String,
    shortMsg: String,
    price: String,
    detail: String,
    weight: Number
});

module.exports = {
    addItem: (
        typeId,
        ServerLevel,
        title,
        icon,
        shortMsg,
        price,
        detail,
        weight
    ) => {
        var item = new Item({
            typeId: typeId,
            ServerLevel: ServerLevel,
            title: title,
            icon: icon,
            shortMsg: shortMsg,
            price: price,
            detail: detail,
            weight: weight
        });
        item.save(err => {
            cb(err);
        });
    },
    getPosList: (params, cb) => {
        Position.find(params)
            .then(result => {
                cb(result);
            })
            .catch(() => {
                cb("err");
            });
    },
    getPosListByPage: (page, size, cb) => {
        Position.find({})
            .limit(parseInt(size, 10))
            .skip((parseInt(page, 10) - 1) * parseInt(size, 10))
            .then(result => {
                cb(result);
            })
            .catch(res => {
                cb("err");
            });
    },
    deletePos: (dataId, cb) => {
        Position.findByIdAndRemove(dataId, err => {
            cb(err);
        }).catch(res => {
            cb("err");
        });
    },
    getPosById: (_id, cb) => {
        console.log("---Dao---getPosById-------" + _id);
        Position.findById(_id)
            .then(result => {
                cb(result);
            })
            .catch(res => {
                cb("err");
            });
    },
    updatePos: (_id, params, cb) => {
        console.log("----dao--updatePos-------" + _id);
        Position.findByIdAndUpdate(_id, params)
            .then(result => {
                console.log(result);
                cb(result);
            })
            .catch(err => {
                console.log(err);
                cb("err");
            });
    }
};