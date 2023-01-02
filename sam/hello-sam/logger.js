exports.handler = async (event) => {
    let jsonobj = JSON.stringify(event);
    console.log(jsonobj);
    return {
        statusCode : 200,
        body : jsonobj
    }
}