const devices = [
    {
        deviceId: "DEV01",
        deviceName: "Điều hòa",
        power: 1500,
        isActive: true
    },
    {
        deviceId: "DEV02",
        deviceName: "Quạt",
        power: 60,
        isActive: true
    },
    {
        deviceId: "DEV03",
        deviceName: "Đèn",
        power: 40,
        isActive: true
    }
];

const findDeviceById = (deviceId) => {
    for (let i = 0; i < devices.length; i++) {
        if (devices[i].deviceId === deviceId) {
            return devices[i];
        }
    }

    return null;
};

const updateDeviceState = (deviceId, isActive, power) => {
    const device = findDeviceById(deviceId);

    if (device === null) {
        console.log(`Không tìm thấy thiết bị ${deviceId}`);
        return;
    }

    if (isActive !== undefined) {
        device.isActive = isActive;
    }

    if (power !== undefined) {
        device.power = power;
    }
};

const calculateActivePower = () => {
    let totalPower = 0;

    for (let i = 0; i < devices.length; i++) {
        if (devices[i].isActive === true) {
            totalPower += devices[i].power;
        }
    }

    return totalPower;
};

const printDevices = () => {
    for (let i = 0; i < devices.length; i++) {
        console.log(
            `${devices[i].deviceId} - ${devices[i].deviceName} - ` +
            `${devices[i].power}W - ` +
            `Trạng thái: ${devices[i].isActive ? "BẬT" : "TẮT"}`
        );
    }
};

console.log("===== TRƯỚC KHI CẬP NHẬT =====");
printDevices();

console.log("Tổng công suất đang hoạt động:", calculateActivePower(), "W");

updateDeviceState("DEV01", false);

updateDeviceState("DEV03", undefined, 0);

console.log("\n===== SAU KHI CẬP NHẬT =====");
printDevices();

console.log("Tổng công suất đang hoạt động:", calculateActivePower(), "W");