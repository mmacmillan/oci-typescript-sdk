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
export interface ListLogAnalyticsEntityTypesRequest extends common.BaseRequest {
  /**
   * The Log Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * A filter to return only log analytics entity types whose name matches the entire name given. The match is
   * case-insensitive.
   *
   */
  "name"?: string;
  /**
   * A filter to return only log analytics entity types whose name or internalName contains name given. The match
   * is case-insensitive.
   *
   */
  "nameContains"?: string;
  /**
   * A filter to return CLOUD or NON_CLOUD entity types.
   *
   */
  "cloudType"?: model.EntityCloudType;
  /**
   * A filter to return only those log analytics entities with the specified lifecycle state. The state
   * value is case-insensitive.
   *
   */
  "lifecycleState"?: model.EntityLifecycleStates;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListLogAnalyticsEntityTypesRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated and timeUpdated
   * is descending. Default order for name is ascending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListLogAnalyticsEntityTypesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListLogAnalyticsEntityTypesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated",
    Name = "name"
  }
}
