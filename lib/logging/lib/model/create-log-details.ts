/**
 * loggingManagementControlplane API
 * loggingManagementControlplane API specification
 * OpenAPI spec version: 20200531
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
 * The details to create a log object.
 */
export interface CreateLogDetails {
  /**
   * The display name of a user-friendly name. It has to be unique within enclosing resource,
   * and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * The logType that the log object is for, custom or service.
   */
  "logType": CreateLogDetails.LogType;
  /**
   * Whether or not this resource is currently enabled.
   */
  "isEnabled"?: boolean;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  "configuration"?: model.Configuration;
  /**
   * Log retention duration in days.
   */
  "retentionDuration"?: number;
}

export namespace CreateLogDetails {
  export enum LogType {
    Custom = "CUSTOM",
    Service = "SERVICE"
  }

  export function getJsonObj(obj: CreateLogDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configuration": obj.configuration
          ? model.Configuration.getJsonObj(obj.configuration)
          : undefined
      }
    };

    return jsonObj;
  }
}
