// https://www.w3schools.com/typescript/typescript_5_updates.php

import React from 'react'

const Demo = () => {
    /*-------------string-------------*/
    // let name: string = 'ash gole'

    /*-------------enum-------------*/
    // enum myEnum {
    //     first=11,
    //     second,
    //     third,
    //     fourth
    // }

    /*-------------alias-------------*/
    // type MyName=string
    // const myName:MyName='ashabb'

    /*-------------Union-------------*/
    // const printStatusCode=(code: string | number)=>{
    //     return code
    // }

    /*-------------functions-------------*/
    // const getStatusCode = (): number => {
    //     return 10
    // }

    /*-------------casting-------------*/
    // let x: unknown = 'ashabb'
    // x as string

    /*-------------generics-------------*/
    // const myInfo = <S, N>(name: S, number: N): [S, N] => {
    //     return [name, number]
    // }
    // myInfo<string, number>('ashabb', 12345)

    /*-------------utility types-------------*/
    //Partial
    // interface myInfo {
    //     name: string;
    //     contact: number
    // }

    // let info: Partial<myInfo> = {
    //     name: "ashish",
    //     contact: 12345
    // }
    // console.log('ok info', info)

    //Required
    // interface MyInfo {
    //     name: string;
    //     contact: number;
    //     city?: string
    // }

    // let info: Required<MyInfo> = {
    //     name: "ashish",
    //     contact: 123,
    //     city: 'pune'
    // };

    /*-------------null-------------*/
    // let name: string | number | null
    // name=null

    /*-------------Template Literal Types-------------*/
    type Color = "red" | "green" | "blue"
    type HexColor<T extends Color> = `#${string}`

    let myColor:HexColor<"blue">="#0000ff"
    return (
        <div>page : {myColor}</div>
    )
}

export default Demo