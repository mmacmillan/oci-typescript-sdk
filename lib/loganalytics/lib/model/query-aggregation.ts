/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Query results.
 *
 */
export interface QueryAggregation {
  /**
   * Number of rows query retrieved. Up to maxTotalCount limit.
   *
   */
  "totalCount"?: number;
  /**
   * Number of rows matched by query.
   *
   */
  "totalMatchedCount"?: number;
  /**
   * True if query did not complete processing all data.
   *
   */
  "arePartialResults"?: boolean;
  /**
   * Explanation of why results may be partial. Only set if isPartialResults is true.
   *
   */
  "partialResultReason"?: string;
  /**
   * Query result columns
   *
   */
  "columns"?: Array<model.AbstractColumn>;
  /**
   * Query result fields
   *
   */
  "fields"?: Array<model.AbstractColumn>;
  /**
   * Query result data
   *
   */
  "items"?: Array<{ [key: string]: any }>;
  /**
   * Time ellapsed executing query in milli-seconds.
   *
   */
  "queryExecutionTimeInMs"?: number;
  /**
   * Percentage progress completion of the query.
   *
   */
  "percentComplete": number;
}

export namespace QueryAggregation {
  export function getJsonObj(obj: QueryAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "columns": obj.columns
          ? obj.columns.map(item => {
              return model.AbstractColumn.getJsonObj(item);
            })
          : undefined,
        "fields": obj.fields
          ? obj.fields.map(item => {
              return model.AbstractColumn.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
