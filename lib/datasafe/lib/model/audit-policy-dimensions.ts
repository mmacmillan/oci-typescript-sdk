/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Details of aggregation dimensions used for summarizing audit policies.
 */
export interface AuditPolicyDimensions {
  /**
   * The category to which the audit policy belongs.
   */
  "auditPolicyCategory"?: model.AuditPolicyCategory;
  /**
   * The name of the audit policy. Refer to the [documentation](https://docs.oracle.com/en/cloud/paas/data-safe/udscs/audit-policies.html#GUID-361A9A9A-7C21-4F5A-8945-9B3A0C472827) for seeded audit policy names. For custom policies, refer to the user-defined policy name created in the target database.
   *
   */
  "auditPolicyName"?: string;
  /**
   * The OCID of the target database for which the audit policy will be created.
   */
  "targetId"?: string;
}

export namespace AuditPolicyDimensions {
  export function getJsonObj(obj: AuditPolicyDimensions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AuditPolicyDimensions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
