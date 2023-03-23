export class Wallet{
    
    constructor(public id?: number,public fromId?:number,public toId?:number,public name?: string,public balance?: number,public password?: string,email?:string){}
}

// JSOn needed in Spring boot
// {
  
//     "name": "name",
//     "email": "name@g.com",
//     "pin": "123",
//     "phoneNumber": "7041389531",
//     "dateOfJoining": "2023-03-15",
//     "salary": 1000
//   }