import {API_BASE_URL} from "@/utils/constants";

// Restaurant Owners
export const OWNER_LOGIN = API_BASE_URL + "/owner/login";
export const OWNER_PROOFS_GET = API_BASE_URL + "/owner/proofs";
export const OWNER_EXTRA_STAFF_ADD = API_BASE_URL + "/owner/staff/add";
export const OWNER_REVISION_ADD = API_BASE_URL + "/owner/revision/add";

// Advertisers
export const ADVERTISER_LOGIN = API_BASE_URL + "/advertiser/login";
export const ADVERTISER_PROOFS_GET = API_BASE_URL + "/advertiser/proofs";
export const ADVERTISER_EXTRA_STAFF_ADD = API_BASE_URL + "/advertiser/staff/add";
export const ADVERTISER_REVISION_ADD = API_BASE_URL + "/advertiser/revision/add";

// Admin Dashboard
export const ADMIN_LOGIN = API_BASE_URL + "/admin/login";

export const ADMINS_GET = API_BASE_URL + "/admin";
export const ADMIN_CREATE = API_BASE_URL + "/admin/create";
export const ADMIN_UPDATE = API_BASE_URL + "/admin/update";
export const OWNERS_GET = API_BASE_URL + "/admin/owners";
export const OWNER_GET = API_BASE_URL + "/admin/owners"; // + id
export const OWNER_ADD = API_BASE_URL + "/admin/owners/add";
export const ADVERTISERS_GET = API_BASE_URL + "/admin/advertiser";
export const ADVERTISER_GET = API_BASE_URL + "/admin/advertiser"; // + id
export const ADVERTISER_ADD = API_BASE_URL + "/admin/advertiser/add";

export const PROOF_ADD = API_BASE_URL + "/admin/proof"; // + businessId + "/submit"
export const PROOF_GET = API_BASE_URL + "/admin/proof"; // + id
export const PROOFS_GET = API_BASE_URL + "/admin/proof";
