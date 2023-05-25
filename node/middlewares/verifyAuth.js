const password = process.env.ROUTE_PASSWORD;

function verifyPassword(request, response, next){
    const input = request.headers.authorization;
    if(!input){
        return response.status(403).json({message: 'Just input password'})

    }
    
}