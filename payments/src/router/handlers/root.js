let helloPayments = async (req, res) => {
    res.send('hello payments');
}

let test = async (req, res) => {
    res.send('<html><body><h1>Testing Hello!</h1></body></html>');
}

module.exports = {
    helloPayments: helloPayments,
    test: test,
};