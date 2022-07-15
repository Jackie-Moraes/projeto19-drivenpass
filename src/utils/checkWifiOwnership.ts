import { wifiRepository } from "../repositories/wifiRepository"

export async function checkWifiOwnership(wifiId: number, userId: number) {
    const exists = await wifiRepository.checkWifiOwnership(wifiId, userId)
    if (!exists) {
        throw {
            type: "wifiConflict",
            message: "Wifi does not exist or belongs to another user.",
        }
    }
}
