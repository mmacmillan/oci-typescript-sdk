/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Initialization parameters for a database.
 */
export interface DBParameters extends model.DatabaseConfigurationMetricGroup {
  /**
   * Database instance number. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceNumber": number;
  /**
   * Database parameter name.
   */
  "parameterName": string;
  /**
   * Database parameter value.
   */
  "parameterValue": string;
  /**
   * AWR snapshot id for the parameter value Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "snapshotId"?: number;
  /**
   * Indicates whether the parameter's value changed in given snapshot or not.
   */
  "isChanged"?: string;
  /**
   * Indicates whether this value is the default value or not.
   */
  "isDefault"?: string;

  "metricName": string;
}

export namespace DBParameters {
  export function getJsonObj(obj: DBParameters, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConfigurationMetricGroup.getJsonObj(obj) as DBParameters)),
      ...{}
    };

    return jsonObj;
  }
  export const metricName = "DB_PARAMETERS";
  export function getDeserializedJsonObj(obj: DBParameters, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConfigurationMetricGroup.getDeserializedJsonObj(obj) as DBParameters)),
      ...{}
    };

    return jsonObj;
  }
}
