/**
 * Anomaly Detection API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately by using our proven,
pre-trained/custom models or containers, and without a need to set up in house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI/ML operations, shortening the time to market.

 * OpenAPI spec version: 20210101
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
 * Summary of the Model.
 */
export interface ModelSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the model.
   */
  "id": string;
  /**
   * A user-friendly display name for the resource. It does not have to be unique and can be modified. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * A short description of the Model.
   */
  "description"?: string;
  /**
   * The OCID for the model's compartment.
   */
  "compartmentId": string;
  "modelTrainingDetails"?: model.ModelTrainingDetails;
  "modelTrainingResults"?: model.ModelTrainingResults;
  /**
   * The time the the Model was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The state of the model.
   */
  "lifecycleState": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project to associate with the model.
   */
  "projectId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{ \"orcl-cloud\": { \"free-tier-retained\": \"true\" } }`
   *
   */
  "systemTags"?: { [key: string]: any };
}

export namespace ModelSummary {
  export function getJsonObj(obj: ModelSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelTrainingDetails": obj.modelTrainingDetails
          ? model.ModelTrainingDetails.getJsonObj(obj.modelTrainingDetails)
          : undefined,
        "modelTrainingResults": obj.modelTrainingResults
          ? model.ModelTrainingResults.getJsonObj(obj.modelTrainingResults)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModelSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelTrainingDetails": obj.modelTrainingDetails
          ? model.ModelTrainingDetails.getDeserializedJsonObj(obj.modelTrainingDetails)
          : undefined,
        "modelTrainingResults": obj.modelTrainingResults
          ? model.ModelTrainingResults.getDeserializedJsonObj(obj.modelTrainingResults)
          : undefined
      }
    };

    return jsonObj;
  }
}
