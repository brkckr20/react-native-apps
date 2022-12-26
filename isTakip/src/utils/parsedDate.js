function convert(date) {
    const val = date.split("/")
    return val[2] + "." + val[1] + "." + val[0]
}

export default convert