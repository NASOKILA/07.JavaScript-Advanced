
function mapSort(map, sortFn) {

    if (sortFn === undefined) {

        let orderedMapArray = [...map].sort(
            function (a, b) {
                if (a[0] < b[0]) return -1;
                if (a[0] > b[0]) return 1;
                return 0;
            });

        let orderedMap = new Map();

        orderedMapArray.forEach(e => {
            orderedMap.set(e[0], e[1]);
        })

        return (orderedMap);
    }

    let result = new Map();

    [...map].sort(sortFn).forEach(e => {
        result.set(e[0], e[1]);
    })

    return result;
}

module.exports = mapSort;