const FanDevice = require('../FanDevice.js');
const Constants = require('../../../constants/Constants.js');
const PropFormat = require('../../../constants/PropFormat.js');
const PropUnit = require('../../../constants/PropUnit.js');
const PropAccess = require('../../../constants/PropAccess.js');


class DmakerFanP44 extends FanDevice {
  constructor(miotDevice, name, logger) {
    super(miotDevice, name, logger);
  }


  /*----------========== DEVICE INFO ==========----------*/

  getDeviceName() {
    return 'Fan p44';
  }

  getMiotSpecUrl() {
    return 'https://miot-spec.org/miot-spec-v2/instance?type=urn:miot-spec-v2:device:fan:0000A005:dmaker-p44:1';
  }


  /*----------========== CONFIG ==========----------*/

  requiresMiCloud() {
    return false;
  }


  /*----------========== METADATA ==========----------*/

  initDeviceServices() {
    this.createServiceByString('{"siid":2,"type":"urn:miot-spec-v2:service:fan:00007808:dmaker-p44:1","description":"Fan"}');
    this.createServiceByString('{"siid":4,"type":"urn:miot-spec-v2:service:indicator-light:00007803:dmaker-p44:1","description":"Indicator Light"}');
    this.createServiceByString('{"siid":5,"type":"urn:miot-spec-v2:service:alarm:00007804:dmaker-p44:1","description":"Alarm"}');
    this.createServiceByString('{"siid":7,"type":"urn:miot-spec-v2:service:physical-controls-locked:00007807:dmaker-p44:1","description":"Physical Control Locked"}');
    this.createServiceByString('{"siid":3,"type":"urn:dmaker-spec:service:off-delay-time:00007801:dmaker-p44:1","description":"off-delay-time"}');
    this.createServiceByString('{"siid":8,"type":"urn:dmaker-spec:service:dm-service:00007802:dmaker-p44:1","description":"dm-service"}');
  }

  initDeviceProperties() {
    this.addPropertyByString('fan:on', '{"siid":2,"piid":1,"type":"urn:miot-spec-v2:property:on:00000006:dmaker-p44:1","description":"Switch Status","format":"bool","access":["read","write","notify"]}');
    this.addPropertyByString('fan:fan-level', '{"siid":2,"piid":2,"type":"urn:miot-spec-v2:property:fan-level:00000016:dmaker-p44:1","description":"Fan Level","format":"uint8","access":["read","write","notify"],"valueList":[{"value":1,"description":"Level1"},{"value":2,"description":"Level2"},{"value":3,"description":"Level3"},{"value":4,"description":"Level4"}]}');
    this.addPropertyByString('fan:mode', '{"siid":2,"piid":3,"type":"urn:miot-spec-v2:property:mode:00000008:dmaker-p44:1","description":"Mode","format":"uint8","access":["read","write","notify"],"valueList":[{"value":0,"description":"Straight Wind"},{"value":1,"description":"Natural Wind"},{"value":2,"description":"Sleep"},{"value":3,"description":"Cold Air"}]}');
    this.addPropertyByString('fan:horizontal-swing', '{"siid":2,"piid":4,"type":"urn:miot-spec-v2:property:horizontal-swing:00000017:dmaker-p44:1","description":"Horizontal Swing","format":"bool","access":["read","write","notify"]}');
    this.addPropertyByString('fan:air-cooler', '{"siid":2,"piid":6,"type":"urn:miot-spec-v2:property:air-cooler:000000EB:dmaker-p44:1","description":"Air Cooler","format":"bool","access":["read","write","notify"]}');
    this.addPropertyByString('fan:fault', '{"siid":2,"piid":7,"type":"urn:miot-spec-v2:property:fault:00000009:dmaker-p44:1","description":"Device Fault","format":"uint8","access":["read","notify"],"valueList":[{"value":2,"description":"No Cocnnect"},{"value":1,"description":"LackWater"},{"value":0,"description":"No Fault"}]}');
    this.addPropertyByString('indicator-light:on', '{"siid":4,"piid":1,"type":"urn:miot-spec-v2:property:on:00000006:dmaker-p44:1","description":"Switch Status","format":"bool","access":["read","write","notify"]}');
    this.addPropertyByString('alarm:alarm', '{"siid":5,"piid":1,"type":"urn:miot-spec-v2:property:alarm:00000012:dmaker-p44:1","description":"Alarm","format":"bool","access":["read","write","notify"]}');
    this.addPropertyByString('physical-controls-locked:physical-controls-locked', '{"siid":7,"piid":1,"type":"urn:miot-spec-v2:property:physical-controls-locked:0000001D:dmaker-p44:1","description":"Physical Control Locked","format":"bool","access":["read","write","notify"]}');
    this.addPropertyByString('dm-service:dry-left-time', '{"siid":8,"piid":6,"type":"urn:dmaker-spec:property:dry-left-time:00000001:dmaker-p44:1","description":"","format":"uint16","access":["read","notify"],"unit":"seconds","valueRange":[0,600,1]}');
    this.addPropertyByString('off-delay-time:off-delay-time', '{"siid":3,"piid":1,"type":"urn:dmaker-spec:property:off-delay-time:00000001:dmaker-p44:1","description":"","format":"uint16","access":["read","notify","write"],"unit":"minutes","valueRange":[0,480,1]}');
    this.addPropertyByString('dm-service:dry-after-off', '{"siid":8,"piid":5,"type":"urn:dmaker-spec:property:dry-after-off:00000002:dmaker-p44:1","description":"","format":"bool","access":["read","notify","write"]}');
  }

  initDeviceActions() {
    this.addActionByString('fan:toggle', '{"siid":2,"aiid":1,"type":"urn:miot-spec-v2:action:toggle:00002811:dmaker-p44:1","description":"Toggle","in":[],"out":[]}');
    this.addActionByString('dm-service:toggle-mode', '{"siid":8,"aiid":1,"type":"urn:dmaker-spec:action:toggle-mode:00002801:dmaker-p44:1","description":"toggle-mode","in":[],"out":[]}');
    this.addActionByString('dm-service:loop-gear', '{"siid":8,"aiid":2,"type":"urn:dmaker-spec:action:loop-gear:00002802:dmaker-p44:1","description":"loop-gear","in":[],"out":[]}');
  }

  initDeviceEvents() {
    //no events
  }


  /*----------========== VALUES OVERRIDES ==========----------*/


  /*----------========== PROPERTY OVERRIDES ==========----------*/


  /*----------========== ACTION OVERRIDES ==========----------*/


  /*----------========== OVERRIDES ==========----------*/


}

module.exports = DmakerFanP44;
