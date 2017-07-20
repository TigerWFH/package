let obj = {
    name: "monkey",
    getName: () => {
        return obj.name;
    }
};

exports = module.exports = obj;