const devices = [
  {
    id: "DEV_001",
    name: "Điều hòa phòng khách",
    room: "Phòng khách",
    powerWatts: 1200,
    isActive: true
  },
  {
    id: "DEV_002",
    name: "Đèn phòng ngủ",
    room: "Phòng ngủ",
    powerWatts: 60,
    isActive: true
  }
];

// Tìm thiết bị theo ID
const findDeviceById = (list, id) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return list[i];
    }
  }

  return null;
};

// Kiểm tra dữ liệu thiết bị
const validateDevice = (device) => {
  if (!device.name || device.name.trim() === "") {
    return false;
  }

  if (!device.room || device.room.trim() === "") {
    return false;
  }

  if (device.powerWatts <= 0) {
    return false;
  }

  return true;
};

// CREATE
const createDevice = (list, newDev) => {
  if (!validateDevice(newDev)) {
    return false;
  }

  const newId = `DEV_${String(list.length + 1).padStart(3, "0")}`;

  const device = {
    id: newId,
    name: newDev.name,
    room: newDev.room,
    powerWatts: newDev.powerWatts,
    isActive: newDev.isActive !== undefined ? newDev.isActive : false
  };

  list.push(device);

  return true;
};

// READ
const readDevicesByRoom = (list, roomName) => {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].room === roomName) {
      result.push(list[i]);
    }
  }

  return result;
};

// UPDATE
const updateDevice = (list, id, updateData) => {
  const targetDevice = findDeviceById(list, id);

  if (targetDevice === null) {
    return false;
  }

  if (updateData.name !== undefined) {
    targetDevice.name = updateData.name;
  }

  if (updateData.room !== undefined) {
    targetDevice.room = updateData.room;
  }

  if (updateData.isActive !== undefined) {
    targetDevice.isActive = updateData.isActive;
  }

  if (updateData.powerWatts !== undefined) {
    targetDevice.powerWatts = updateData.powerWatts;
  }

  return true;
};

// DELETE
const deleteDevice = (list, id) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list.splice(i, 1);
      return true;
    }
  }

  return false;
};


// KIỂM THỬ 

console.log("=== DANH SÁCH BAN ĐẦU ===");
console.table(devices);


// CREATE
const createResult = createDevice(devices, {
  name: "TV phòng khách",
  room: "Phòng khách",
  powerWatts: 150,
  isActive: false
});

console.log("CREATE:", createResult);
console.table(devices);


// READ
const livingRoomDevices = readDevicesByRoom(devices, "Phòng khách");

console.log("READ - Thiết bị phòng khách:");
console.table(livingRoomDevices);


// UPDATE Falsy: false
const updateActiveResult = updateDevice(devices, "DEV_001", {
  isActive: false
});

console.log("UPDATE isActive = false:", updateActiveResult);
console.table(devices);


// UPDATE Falsy: 0
const updatePowerResult = updateDevice(devices, "DEV_002", {
  powerWatts: 0
});

console.log("UPDATE powerWatts = 0:", updatePowerResult);
console.table(devices);


// UPDATE ID không tồn tại
const updateNotFound = updateDevice(devices, "DEV_999", {
  isActive: true
});

console.log("UPDATE ID không tồn tại:", updateNotFound);


// DELETE
const deleteResult = deleteDevice(devices, "DEV_002");

console.log("DELETE DEV_002:", deleteResult);
console.table(devices);


// DELETE ID không tồn tại
const deleteNotFound = deleteDevice(devices, "DEV_999");

console.log("DELETE DEV_999:", deleteNotFound);