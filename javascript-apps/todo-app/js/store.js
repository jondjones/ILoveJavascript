class Store {
    saveToStore(key, value) {
        const toJSON = JSON.stringify(value);
        localStorage.setItem(key, toJSON);
    };

    getFromStore(key) {
        const item =localStorage.getItem(key);
        if (item === undefined || item === '') {
            return null;
        }
        return JSON.parse(item);
    };

    deleteStoreByKey(key) {
        localStorage.removeItem(key);
    };

    clearStore() {
        localStorage.clear();
    };
}