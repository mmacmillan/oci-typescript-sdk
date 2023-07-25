/**
 * Budgets API
 * Use the Budgets API to manage budgets and budget alerts. For more information, see [Budgets Overview](/iaas/Content/Billing/Concepts/budgetsoverview.htm).
 * OpenAPI spec version: 20190111
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
 * The create alert rule details. This is a batch-create.
 */
export interface CreateAlertRuleDetails {
  /**
   * The name of the alert rule. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The description of the alert rule.
   */
  "description"?: string;
  /**
   * The type of the alert. Valid values are ACTUAL (the alert triggers based on actual usage), or
   * FORECAST (the alert triggers based on predicted usage).
   *
   */
  "type": model.AlertType;
  /**
   * The threshold for triggering the alert, expressed as a whole number or decimal value.
   * If the thresholdType is ABSOLUTE, the threshold can have at most 12 digits before the decimal point, and up to two digits after the decimal point.
   * If the thresholdType is PERCENTAGE, the maximum value is 10000 and can have up to two digits after the decimal point.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "threshold": number;
  /**
   * The type of threshold.
   */
  "thresholdType": model.ThresholdType;
  /**
   * The audience that receives the alert when it triggers. An empty string is interpreted as null.
   */
  "recipients"?: string;
  /**
   * The message to be sent to the recipients when the alert rule is triggered.
   */
  "message"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateAlertRuleDetails {
  export function getJsonObj(obj: CreateAlertRuleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAlertRuleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
