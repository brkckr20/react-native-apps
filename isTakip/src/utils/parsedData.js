export default function (data) {
    return Object.keys(data || []).map(key => {
        return {
            id: key,
            ...data[key]
        }
    }).sort(function (a, b) {
        return a.tarih > b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0;
    })
}