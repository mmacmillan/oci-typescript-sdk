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
 * Represents a LogGroup object
 */
export interface LogGroup {
  /**
   * The OCID of the resource.
   */
  "id": string;
  /**
   * The OCID of the compartment that the resource belongs to.
   */
  "compartmentId": string;
  /**
   * The display name of a user-friendly name. It has to be unique within enclosing resource,
   * and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Description for this resource.
   */
  "description"?: string;
  /**
   * The state of the log group object.
   */
  "lifecycleState"?: model.LogGroupLifecycleState;
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
  /**
   * Time the resource was created.
   */
  "timeCreated"?: Date;
  /**
   * Time the resource was last modified.
   */
  "timeLastModified"?: Date;
}

export namespace LogGroup {
  export function getJsonObj(obj: LogGroup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
