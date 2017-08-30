module.exports = function (app) {
    let count = 0;
    app.get('/', (req, res) => {
        count++
        console.log(count)
        for (let i = 0; i < 99999; i++) {
            let j = i;
            console.log(i, j)
        }
        res.status(200).json({ message: 'Vai curintia! ', count })
    })

}