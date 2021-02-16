/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
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
 * Provides the timestamps and their corresponding number of remediations.
 */
export interface ResponderExecutionTrendAggregation {
  /**
   * The key-value pairs of dimensions and their names.
   */
  "dimensionsMap": { [key: string]: string };
  /**
   * Start Time in epoch seconds Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "startTimestamp": number;
  /**
   * Duration Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "durationInSeconds": number;
  /**
   * The number of remediations for a given time. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "count": number;
}

export namespace ResponderExecutionTrendAggregation {
  export function getJsonObj(obj: ResponderExecutionTrendAggregation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
