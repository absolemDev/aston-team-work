import { History } from "#store";
import { firebaseService, localStorageService, CardData } from "#services";

interface UserData {
  _id?: string;
  name?: string;
  email?: string;
  favorites?: CardData[];
  history?: History[];
}

const userEndpoint = "user/";

const userService = {
  create: async (payload: UserData) => {
    const { data } = await firebaseService.put(
      userEndpoint + payload._id,
      payload
    );
    return data;
  },
  getUserData: async () => {
    const { data } = await firebaseService.get(
      userEndpoint + localStorageService.getUserId()
    );
    return data;
  },
  update: async (payload: UserData) => {
    const { data } = await firebaseService.patch(
      userEndpoint + localStorageService.getUserId(),
      payload
    );
    return data;
  },
};

export { userService };
