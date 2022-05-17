/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details to update a sensitive type.
 */
export interface UpdateSensitiveTypeDetails {
  /**
   * The display name of the sensitive type. The name does not have to be unique, and it's changeable.
   */
  "displayName"?: string;
  /**
   * The short name of the sensitive type.
   */
  "shortName"?: string;
  /**
   * The description of the sensitive type.
   */
  "description"?: string;
  /**
   * The OCID of the parent sensitive category.
   */
  "parentCategoryId"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "entityType": string;
}

export namespace UpdateSensitiveTypeDetails {
  export function getJsonObj(obj: UpdateSensitiveTypeDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entityType" in obj && obj.entityType) {
      switch (obj.entityType) {
        case "SENSITIVE_CATEGORY":
          return model.UpdateSensitiveCategoryDetails.getJsonObj(
            <model.UpdateSensitiveCategoryDetails>(<object>jsonObj),
            true
          );
        case "SENSITIVE_TYPE":
          return model.UpdateSensitiveTypePatternDetails.getJsonObj(
            <model.UpdateSensitiveTypePatternDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.entityType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateSensitiveTypeDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entityType" in obj && obj.entityType) {
      switch (obj.entityType) {
        case "SENSITIVE_CATEGORY":
          return model.UpdateSensitiveCategoryDetails.getDeserializedJsonObj(
            <model.UpdateSensitiveCategoryDetails>(<object>jsonObj),
            true
          );
        case "SENSITIVE_TYPE":
          return model.UpdateSensitiveTypePatternDetails.getDeserializedJsonObj(
            <model.UpdateSensitiveTypePatternDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.entityType);
      }
    }
    return jsonObj;
  }
}
