import {API_BASE_URL} from "@/utils/constants";

// Restaurant Owners
export const OWNER_LOGIN = API_BASE_URL + "/auth/login";
export const OWNER_PROOFS_GET = API_BASE_URL + "/user/proofs";
export const OWNER_PROOF_GET = API_BASE_URL + "/user/proof"; // + id
export const OWNER_REVISION_ADD = API_BASE_URL + "/user/proof"; // + id + /verify
export const OWNER_EXTRA_STAFF_ADD = API_BASE_URL + "/user/add-staff";

// Advertisers
export const ADVERTISER_LOGIN = API_BASE_URL + "/auth/login";
export const ADVERTISER_PROOFS_GET = API_BASE_URL + "/user/proofs";
export const ADVERTISER_PROOF_GET = API_BASE_URL + "/user/proof"; // + id
export const ADVERTISER_REVISION_ADD = API_BASE_URL + "/user/proof"; // + id /verify
export const ADVERTISER_EXTRA_STAFF_ADD = API_BASE_URL + "/user/add-staff";

// Admin Dashboard
export const ADMIN_LOGIN = API_BASE_URL + "/admin/login";

export const ADMINS_GET = API_BASE_URL + "/admin";
export const ADMIN_CREATE = API_BASE_URL + "/admin/create";
export const ADMIN_UPDATE = API_BASE_URL + "/admin/update";
export const OWNERS_GET = API_BASE_URL + "/admin/owners";
export const OWNER_GET = API_BASE_URL + "/admin/owners"; // + contactNumber
export const OWNER_ADD = API_BASE_URL + "/admin/owners/add";
export const ADVERTISERS_GET = API_BASE_URL + "/admin/advertiser";
export const ADVERTISER_GET = API_BASE_URL + "/admin/advertiser"; // + officeNumber
export const ADVERTISER_ADD = API_BASE_URL + "/admin/advertiser/add";

export const PROOF_ADD = API_BASE_URL + "/admin/proof"; // + businessId + "/submit"
export const PROOF_GET = API_BASE_URL + "/admin/proof"; // + id
export const PROOFS_GET = API_BASE_URL + "/admin/proof";
