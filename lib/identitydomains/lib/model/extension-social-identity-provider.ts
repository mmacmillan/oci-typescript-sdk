/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm). This REST API is SCIM compliant.
Use the table of contents and search tool to explore the Identity Domains API.
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

/**
 * Social Identity Provider Extension Schema
 */
export interface ExtensionSocialIdentityProvider {
  /**
   * Whether account linking is enabled
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "accountLinkingEnabled": boolean;
  /**
   * Whether registration is enabled
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "registrationEnabled": boolean;
  /**
   * Status
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "status"?: ExtensionSocialIdentityProvider.Status;
  /**
   * Social IDP Authorization URL
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "authzUrl"?: string;
  /**
   * Social IDP Access token URL
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "accessTokenUrl"?: string;
  /**
   * Social IDP User profile URL
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "profileUrl"?: string;
  /**
   * Scope to request
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "scope"?: Array<string>;
  /**
   * Admin scope to request
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "adminScope"?: Array<string>;
  /**
   * Social IDP Client Application Client ID
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "consumerKey": string;
  /**
   * Social IDP Client Application Client Secret
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - idcsSensitive: encrypt
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "consumerSecret": string;
  /**
   * Service Provider Name
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "serviceProviderName": string;
  /**
   * Social IDP allowed clock skew time
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "clockSkewInSeconds"?: number;
  /**
   * redirect URL for social idp
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "redirectUrl"?: string;
  /**
   * Discovery URL
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "discoveryUrl"?: string;
  /**
   * Whether the client credential is contained in payload
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "clientCredentialInPayload"?: boolean;
  /**
   * Id attribute used for account linking
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idAttribute"?: string;
}

export namespace ExtensionSocialIdentityProvider {
  export enum Status {
    Created = "created",
    Deleted = "deleted",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExtensionSocialIdentityProvider): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExtensionSocialIdentityProvider): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
