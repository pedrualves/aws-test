module.exports = function (app) {
    let count = 0;
    app.get('/', (req, res) => {
        count++
        console.log(count)

        new Promise((resolve, reject) => {
            try {
                for (let i = 0; i < 99999; i++) {
                    let j = i;
                    console.log(i, j)
                    if (i >= 99998)
                        resolve(true)
                }
            } catch (error) {
                reject(false)
            }
        }).then(() => {
            res.status(200).json({ message: 'Vai curintia! ', count })
        }).catch(() => {
            res.status(500).json({ message: 'ops ', count })
        })
    })

}