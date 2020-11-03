/**
 * Cloud Advisor API
 * APIs for managing Cloud Advisor. Cloud Advisor provides recommendations that help you maximize cost savings and improve the security posture of your tenancy.
 * OpenAPI spec version: 20200606
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The metadata associated with the recommendation summary.
 * <p>
 **Caution:** Avoid using any confidential information when you supply string values using the API.
 *
 */
export interface RecommendationSummary {
  /**
   * The unique OCID associated with the recommendation.
   */
  "id": string;
  /**
   * The OCID of the tenancy. The tenancy is the root compartment.
   */
  "compartmentId": string;
  /**
   * The unique OCID associated with the category.
   */
  "categoryId": string;
  /**
   * The name assigned to the recommendation.
   */
  "name": string;
  /**
   * Text describing the recommendation.
   */
  "description": string;
  /**
   * The level of importance assigned to the recommendation.
   */
  "importance": model.Importance;
  /**
   * An array of `ResourceCount` objects grouped by the status of the resource actions.
   */
  "resourceCounts": Array<model.ResourceCount>;
  /**
   * The recommendation's current state.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * The estimated cost savings, in dollars, for the recommendation.
   */
  "estimatedCostSaving": number;
  /**
   * The current status of the recommendation.
   */
  "status": model.Status;
  /**
    * The date and time that the recommendation entered its current status. The format is defined by RFC3339.
* <p>
For example, \"The status of the recommendation changed from `pending` to `current(ignored)` on this date and time.\"
* 
    */
  "timeStatusBegin": Date;
  /**
    * The date and time the current status will change. The format is defined by RFC3339.
* <p>
For example, \"The current `postponed` status of the recommendation will end and change to `pending` on this 
* date and time.\"
* 
    */
  "timeStatusEnd"?: Date;
  /**
   * The date and time the recommendation details were created, in the format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the recommendation details were last updated, in the format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  "supportedLevels"?: model.SupportedLevels;
}

export namespace RecommendationSummary {
  export function getJsonObj(obj: RecommendationSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceCounts": obj.resourceCounts
          ? obj.resourceCounts.map(item => {
              return model.ResourceCount.getJsonObj(item);
            })
          : undefined,

        "supportedLevels": obj.supportedLevels
          ? model.SupportedLevels.getJsonObj(obj.supportedLevels)
          : undefined
      }
    };

    return jsonObj;
  }
}
