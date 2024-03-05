import { apiService } from "../../../services/api.service";

async function getClassData() {
  return await apiService.getInfo().classes;
}

async function getRaceData() {
  return await apiService.getInfo().races;
}

async function getFractionData() {
  return await apiService.getInfo().fraction;
}

async function getCardSetData() {
  return await apiService.getInfo().cardSet;
}

export { getClassData, getRaceData, getFractionData, getCardSetData };
