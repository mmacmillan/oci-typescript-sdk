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
 * Dynamic Group
 */
export interface ExtensionDynamicGroup {
  /**
   * Membership type
   * <p>
   **Added In:** 19.2.1
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: always
   *  - type: string
   *  - uniqueness: none
   */
  "membershipType"?: ExtensionDynamicGroup.MembershipType;
  /**
   * Membership rule
   * <p>
   **Added In:** 19.2.1
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
  "membershipRule"?: string;
}

export namespace ExtensionDynamicGroup {
  export enum MembershipType {
    Static = "static",
    Dynamic = "dynamic",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExtensionDynamicGroup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExtensionDynamicGroup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
