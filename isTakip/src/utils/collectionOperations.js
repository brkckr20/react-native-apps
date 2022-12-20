const sum = (data, which) => {
    return data.reduce((acc, obj) => {
        return acc + obj[which]
    })
}

export default sum;