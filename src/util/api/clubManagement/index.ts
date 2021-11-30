import { getRequest, getRequestWithAccessToken } from "../default";
import uri from "../uri";

export const getClubMember = async (id: string) => {
  try {
    const request = getRequest();
    return await request.get(uri.club + "/" + id + "/member");
  } catch (error) {
    throw error;
  }
};

export const getApplicationMember = async () => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(uri.application);
  } catch (error) {
    throw error;
  }
};

export const getClubInfo = async (id: string) => {
  try {
    const request = getRequest();
    return await request.get(uri.club + "/" + id);
  } catch (error) {
    throw error;
  }
};

export const patchBackNum = async (id: number, backNum: number) => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    return await request.patch(uri.backNum, {
      user_id: id,
      back_num: backNum,
    });
  } catch (error) {
    throw error;
  }
};

export const kickMember = async (id: number) => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    return await request.patch(uri.kickMember, {
      user_id: id,
    });
  } catch (error) {
    throw error;
  }
};

export const applicationConsentMember = async (
  consent: boolean,
  id: number
) => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    return consent
      ? await request.put(uri.application + `/${id}`)
      : await request.delete(uri.application + `/${id}`);
  } catch (error) {
    throw error;
  }
};

export const getApplicantGameClubList = async () => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(uri.applicantGameClubList);
  } catch (error) {
    throw error;
  }
};

export const getClubApplicant = async () => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(uri.clubApplcant);
  } catch (error) {
    throw error;
  }
};

export const postClubApplicant = async (count: number) => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    return await request.post(uri.clubApplcant, {
      count: count,
    });
  } catch (error) {
    throw error;
  }
};
