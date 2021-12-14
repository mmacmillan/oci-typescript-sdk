/**
 *
 *
 * OpenAPI spec version: 20190325
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datacatalog/ListTermRelationships.ts.html |here} to see how to use ListTermRelationshipsRequest.
 */
export interface ListTermRelationshipsRequest extends common.BaseRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * Unique glossary key.
   */
  "glossaryKey": string;
  /**
   * Unique glossary term key.
   */
  "termKey": string;
  /**
   * A filter to return only resources that match the entire display name given. The match is not case sensitive.
   */
  "displayName"?: string;
  /**
   * A filter to return only resources that match display name pattern given. The match is not case sensitive.
   * For Example : /folders?displayNameContains=Cu.*
   * The above would match all folders with display name that starts with \"Cu\" or has the pattern \"Cu\" anywhere in between.
   *
   */
  "displayNameContains"?: string;
  /**
   * A filter to return only resources that match the specified lifecycle state. The value is case insensitive.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Specifies the fields to return in a term relationship summary response.
   *
   */
  "fields"?: Array<ListTermRelationshipsRequest.Fields>;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. If no value is specified TIMECREATED is default.
   *
   */
  "sortBy"?: ListTermRelationshipsRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListTermRelationshipsRequest.SortOrder;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListTermRelationshipsRequest {
  export enum Fields {
    Key = "key",
    DisplayName = "displayName",
    Description = "description",
    RelatedTermKey = "relatedTermKey",
    RelatedTermDisplayName = "relatedTermDisplayName",
    ParentTermKey = "parentTermKey",
    ParentTermDisplayName = "parentTermDisplayName",
    LifecycleState = "lifecycleState",
    TimeCreated = "timeCreated",
    Uri = "uri"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
