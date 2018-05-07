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
        weight,
        response
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
        item
            .save(result => {
                response(result);
            })
            .catch(res => {
                response("err");
            });
    },
    getItemListByPage: (page, size, response) => {
        Item.find({})
            .limit(parseInt(size, 10))
            .skip((parseInt(page, 10) - 1) * parseInt(size, 10))
            .then(result => {
                response(result);
            })
            .catch(res => {
                response("err");
            });
    },
    deleteItem: (dataId, response) => {
        Item.findByIdAndRemove(dataId, err => {
            response(err);
        }).catch(res => {
            response("err");
        });
    },
    getItemById: (_id, response) => {
        Item.findById(_id)
            .then(result => {
                response(result);
            })
            .catch(res => {
                response("err");
            });
    },
    updateItem: (_id, params, response) => {
        Item.findByIdAndUpdate(_id, params)
            .then(result => {
                response(result);
            })
            .catch(err => {
                response("err");
            });
    }
};