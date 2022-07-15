import { cryptr } from "./credentialsRepository.js"

import { client } from "../config/database.js"
import { wifiData } from "../services/wifiServices.js"

async function createNewWifi(body: wifiData, userId: number) {
    const encryptPassword = cryptr.encrypt(body.password)

    await client.wifi.create({
        data: {
            userId,
            title: body.title,
            name: body.name,
            password: encryptPassword,
        },
    })
}

async function returnAllWifi(userId: number) {
    const allWifi = await client.wifi.findMany({
        where: {
            userId,
        },
    })
    return allWifi
}

async function returnSingleWifi(wifiId: number, userId: number) {
    const wifi = await client.wifi.findFirst({
        where: {
            id: wifiId,
            userId,
        },
    })
    return wifi
}

async function checkWifiOwnership(wifiId: number, userId: number) {
    const exists = await client.wifi.findFirst({
        where: {
            id: wifiId,
            userId,
        },
    })
    return exists
}

async function deleteWifi(wifiId: number) {
    await client.wifi.delete({
        where: {
            id: wifiId,
        },
    })
}

export const wifiRepository = {
    createNewWifi,
    returnAllWifi,
    returnSingleWifi,
    checkWifiOwnership,
    deleteWifi,
}
