const success = (data) => {
    return {
        status: 200,
        data: data.length,
        result: []
    }
}

const fail = (error) => {
    return {
        status: 400,
        result: [
            {
                message: error
            }
        ]
    }
}

module.exports = {
    success,
    fail
}