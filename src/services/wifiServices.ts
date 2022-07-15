import { wifi } from "@prisma/client"

import { cryptr } from "../repositories/credentialsRepository.js"
import { wifiRepository } from "../repositories/wifiRepository.js"
import { checkWifiOwnership } from "../utils/checkWifiOwnership.js"
import { createNewWifi } from "../utils/createNewWifi.js"

export type wifiData = Omit<wifi, "id" | "userId">

async function createWifi(body: wifiData, userId: number) {
    await createNewWifi(body, userId)
}

async function returnAllWifi(userId: number) {
    const wifi = await wifiRepository.returnAllWifi(userId)
    wifi.map((network) => {
        network.password = cryptr.decrypt(network.password)
        delete network.id
        delete network.userId
    })

    return wifi
}

async function returnSingleWifi(wifiId: number, userId: number) {
    const wifi = await wifiRepository.returnSingleWifi(wifiId, userId)
    delete wifi.id
    delete wifi.userId
    wifi.password = cryptr.decrypt(wifi.password)

    return wifi
}

async function deleteWifi(wifiId: number, userId: number) {
    await checkWifiOwnership(wifiId, userId)
    await wifiRepository.deleteWifi(wifiId)
}

export const wifiServices = {
    createWifi,
    returnAllWifi,
    returnSingleWifi,
    deleteWifi,
}
