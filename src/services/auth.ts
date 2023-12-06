interface Response{
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn():Promise<Response> {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve({
                token: 'esse_e_meu_token_secreto_56524$$##2',
                user: {
                    name: 'kaue',
                    email: 'kaue@gmail.com'
                }
            })
        }, 2000);
    })
}