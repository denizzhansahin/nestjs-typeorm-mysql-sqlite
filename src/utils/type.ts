export type CreateUserParam = {
    username:string
    password:string
}


export type UpdateUserParam = {
    username:string
    password:string
}


export type CreateUserProfileParams = {
    firstName:string
    lastName:string
    age:number
    dob:string
}


export type CreateUserPostParam = {
    title:string
    description:string
}