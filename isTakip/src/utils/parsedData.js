export default function (data) {
    return Object.keys(data).map(key => {
        return {
            id: key,
            ...data[key]
        }
    })/* .sort(function (a, b) {
        var c = new Date(a.tarih);
        var d = new Date(b.tarih);
        return d - c;
    }) */
}