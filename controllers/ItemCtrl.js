const ItemDao = require("../daos/itemDao.js");
module.exports = {
    addItem: (req, res) => {
        const {
            typeId,
            ServerLevel,
            title,
            icon,
            shortMsg,
            price,
            detail,
            weight
        } = req.body;
        const fileName = req.file ? req.file.filename : "";

        ItemDao.addItem(
            typeId,
            ServerLevel,
            title,
            icon,
            shortMsg,
            price,
            detail,
            weight,
            result => {
                console.log(result);
                res.json({
                    messageCode: 1,
                    datas: {
                        inserted: !result
                    }
                });
            }
        );
    },
    getItemListByPage: (req, res) => {
        let { page, size } = req.body;
        page = parseInt(page);
        size = parseInt(size);
        let totalNum = ItemDao.getItemCount();
        let pageTotalNum = Math.ceil(totalNum / size);
        ItemDao.getItemList(page, size, result => {
            if (result && result != "err") {
                res.json({
                    messageCode: 1,
                    datas: {
                        totalCount: totalNum,
                        itemList: result
                    }
                });
            }
        });
    },
    deleteItem: function(req, res) {
        const { _id } = req.query;
        ItemDao.deleteItem(_id, result => {
            if (result != "err") {
                res.json({ messageCode: 1, datas: { isDelete: true } });
            }
        });
    },
    getItemById: function(req, res) {
        const { _id } = req.body;
        ItemDao.getItemById(_id, result => {
            if (result != "err") {
                res.json({
                    messageCode: 1,
                    datas: {
                        info: result
                    }
                });
            }
        });
    },
    updateItem: (req, res) => {
        const {
            _id,
            typeId,
            ServerLevel,
            title,
            icon,
            shortMsg,
            price,
            detail,
            weight
        } = req.body;
        var params = {
            typeId,
            ServerLevel,
            title,
            icon,
            shortMsg,
            price,
            detail,
            weight
        };
        // var fileName = req.file ? req.file.filename : "";
        // if (fileName != "") {
        //     params.fileName = fileName;
        // }

        posDao.updatePos(_id, params, result => {
            if (result != "err") {
                res.json({
                    messageCode: 1,
                    datas: {
                        update: true
                    }
                });
            } else {
                res.json({
                    messageCode: 2
                });
            }
        });
    }
};