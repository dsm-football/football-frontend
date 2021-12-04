import { MyProfileResponseType } from "../../../../../constance/myProfile";
import { error } from "../../../../../models/error";

interface MyProfileState {
  profileInfo: MyProfileResponseType;
  error: error | null;
  id: number;
}

export default MyProfileState;
