/**
 * Logging Search API
 * Search for logs in your compartements / log groups / log objects.
 * OpenAPI spec version: 20190909
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
 * Search response object.
 */
export interface SearchResponse {
  /**
   * List of search results
   */
  "results"?: Array<model.SearchResult>;
  /**
   * List of log field schema information.
   */
  "fields"?: Array<model.FieldInfo>;
  "summary": model.SearchResultSummary;
}

export namespace SearchResponse {
  export function getJsonObj(obj: SearchResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "results": obj.results
          ? obj.results.map(item => {
              return model.SearchResult.getJsonObj(item);
            })
          : undefined,
        "fields": obj.fields
          ? obj.fields.map(item => {
              return model.FieldInfo.getJsonObj(item);
            })
          : undefined,
        "summary": obj.summary ? model.SearchResultSummary.getJsonObj(obj.summary) : undefined
      }
    };

    return jsonObj;
  }
}
