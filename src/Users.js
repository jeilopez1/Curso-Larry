export const USERS = [
    {phone: '3102230385', name:'Alfonsin', code: "1234"},
    {phone: '12345', name:'Humberto',code:"4321"},
    {phone: '3167974510', name:'Jeison',code:"9876"}
]

export const verifiedCode1 = (code) =>{
    return USERS.find( item => item.code === code)
}


export const login = (phone) =>{
    return USERS.find( item => item.phone === phone)
}