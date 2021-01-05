import bloodSugar from './BloodSugar';
import cannulaAge from './CannulaAge';
import sensorAge from './SensorAge';
import pumpBattery from './PumpBattery';
import pumpReservoir from './PumpReservoir';
import carbsOnBoard from './CarbsOnBoard';
import insulinOnBoard from './InsulinOnBoard';
import dmSnapshot from './DmSnapshot';
import disclaimer from './_disclaimer';
import error from './_error';

/**
 * Humanizers turn internal concepts (DmMetric/DmSnapshot/Errors) into human text
 */
export default {
  bloodSugar,
  cannulaAge,
  sensorAge,
  pumpBattery,
  pumpReservoir,
  carbsOnBoard,
  insulinOnBoard,
  error,
  dmSnapshot,
  disclaimer,
};
