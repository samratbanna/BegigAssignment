import DeviceInfo from 'react-native-device-info';

export default async () => {
  let final = {
    buildId: await DeviceInfo.getBuildId(),
    batteryLevel: await DeviceInfo.getBatteryLevel(),
    brand: await DeviceInfo.getBrand(),
    carrier: await DeviceInfo.getCarrier(),
    deviceId: await DeviceInfo.getDeviceId(),
    deviceName: await DeviceInfo.getDeviceName(),
    manufacturer: await DeviceInfo.getManufacturer(),
    model: await DeviceInfo.getModel(),
    version: await DeviceInfo.getReadableVersion(),
    uniqueId: await DeviceInfo.getUniqueId(),
    codeName: await DeviceInfo.getCodename(),
  };
  console.log('final device info', final);
  return final;
};
