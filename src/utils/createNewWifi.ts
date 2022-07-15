import { wifiRepository } from "../repositories/wifiRepository.js"
import { wifiData } from "../services/wifiServices.js"

export async function createNewWifi(body: wifiData, userId: number) {
    await wifiRepository.createNewWifi(body, userId)
}
