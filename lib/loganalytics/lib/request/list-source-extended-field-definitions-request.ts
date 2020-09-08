/**
 *
 *
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
export interface ListSourceExtendedFieldDefinitionsRequest extends common.BaseRequest {
  /**
   * The Log Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * source name
   */
  "sourceName": string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * sort by source extended field definition
   */
  "sortBy"?: ListSourceExtendedFieldDefinitionsRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListSourceExtendedFieldDefinitionsRequest.SortOrder;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListSourceExtendedFieldDefinitionsRequest {
  export enum SortBy {
    BaseFieldName = "baseFieldName",
    RegularExpression = "regularExpression"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
