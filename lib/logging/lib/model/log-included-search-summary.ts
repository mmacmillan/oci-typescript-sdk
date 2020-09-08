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
 * A summary of what the OCI included search does.
 *
 */
export interface LogIncludedSearchSummary {
  /**
   * The OCID of the resource.
   */
  "id": string;
  /**
   * The display name of a user-friendly name. It has to be unique within enclosing resource,
   * and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Time the resource was created.
   */
  "timeCreated"?: Date;
  /**
   * Time the resource was last modified.
   */
  "timeLastModified"?: Date;
}

export namespace LogIncludedSearchSummary {
  export function getJsonObj(obj: LogIncludedSearchSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
