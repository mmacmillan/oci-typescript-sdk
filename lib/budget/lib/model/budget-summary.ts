/**
 * Budgets API
 * Use the Budgets API to manage budgets and budget alerts.
 * OpenAPI spec version: 20190111
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A budget.
 */
export interface BudgetSummary {
  /**
   * The OCID of the budget
   */
  "id": string;
  /**
   * The OCID of the compartment
   */
  "compartmentId": string;
  /**
   * This is DEPRECATED. For backwards compatability, the property will be populated when
   * targetType is \"COMPARTMENT\" AND targets contains EXACT ONE target compartment ocid.
   * For all other scenarios, this property will be left empty.
   *
   */
  "targetCompartmentId"?: string;
  /**
   * The display name of the budget.
   */
  "displayName": string;
  /**
   * The description of the budget.
   */
  "description"?: string;
  /**
   * The amount of the budget expressed in the currency of the customer's rate card.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "amount": number;
  /**
   * The reset period for the budget.
   *
   */
  "resetPeriod": model.ResetPeriod;
  /**
   * The number of days offset from the first day of the month, at which the budget processing period starts. In months that have fewer days than this value, processing will begin on the last day of that month. For example, for a value of 12, processing starts every month on the 12th at midnight. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "budgetProcessingPeriodStartOffset"?: number;
  /**
   * The type of target on which the budget is applied.
   *
   */
  "targetType"?: model.TargetType;
  /**
   * The list of targets on which the budget is applied.
   *   If targetType is \"COMPARTMENT\", targets contains list of compartment OCIDs.
   *   If targetType is \"TAG\", targets contains list of cost tracking tag identifiers in the form of \"{tagNamespace}.{tagKey}.{tagValue}\".
   *
   */
  "targets"?: Array<string>;
  /**
   * The current state of the budget.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * Total number of alert rules in the budget Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "alertRuleCount": number;
  /**
   * Version of the budget. Starts from 1 and increments by 1. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version"?: number;
  /**
   * The actual spend in currency for the current budget cycle Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "actualSpend"?: number;
  /**
   * The forecasted spend in currency by the end of the current budget cycle Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "forecastedSpend"?: number;
  /**
   * Time budget spend was last computed
   */
  "timeSpendComputed"?: Date;
  /**
   * Time budget was created
   */
  "timeCreated": Date;
  /**
   * Time budget was updated
   */
  "timeUpdated": Date;
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

export namespace BudgetSummary {
  export function getJsonObj(obj: BudgetSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
