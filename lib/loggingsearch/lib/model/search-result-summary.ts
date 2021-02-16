/**
 * Logging Search API
 * Search for logs in your compartments, log groups, and log objects.
 * OpenAPI spec version: 20190909
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
 * Summary of results.
 */
export interface SearchResultSummary {
  /**
   * Total number of search results. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "resultCount"?: number;
  /**
   * Total number of field schema information. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "fieldCount"?: number;
}

export namespace SearchResultSummary {
  export function getJsonObj(obj: SearchResultSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
