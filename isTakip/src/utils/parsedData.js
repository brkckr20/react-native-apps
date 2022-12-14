import moment from "moment";

export default function (data) {
    return Object.keys(data || []).map(key => {
        return {
            id: key,
            ...data[key]
        }
    }).sort(function (a, b) {
        return moment(b.tarih) - moment(a.tarih);
    })
}