/**
 * Identity and Access Management Data Plane API
 * APIs for managing identity data plane services. For example, use this API to create a scoped-access security token. To manage identity domains (for example, creating or deleting an identity domain) or to manage resources (for example, users and groups) within the default identity domain, see [IAM API](https://docs.oracle.com/iaas/api/#/en/identity/).
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface BadUserStateAuthenticateUserResult {
  /**
   * The tenant name.
   */
  "tenantInput": string;
  /**
   * The user name.
   */
  "userInput": string;
  /**
   * The resolved tenant id.
   */
  "resolvedTenantId": string;
  /**
   * The resolved user id.
   */
  "resolvedUserId": string;
  /**
   * The bad user state.
   */
  "userState": BadUserStateAuthenticateUserResult.UserState;
}

export namespace BadUserStateAuthenticateUserResult {
  export enum UserState {
    UserBlocked = "USER_BLOCKED",
    UserDisabled = "USER_DISABLED",
    OneTimePasswordExpired = "ONE_TIME_PASSWORD_EXPIRED",
    PasswordInvalid = "PASSWORD_INVALID"
  }

  export function getJsonObj(obj: BadUserStateAuthenticateUserResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BadUserStateAuthenticateUserResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
