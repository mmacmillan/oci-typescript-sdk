/**
 *
 *
 * OpenAPI spec version: 20220125
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/disasterrecovery/ListDrProtectionGroups.ts.html |here} to see how to use ListDrProtectionGroupsRequest.
 */
export interface ListDrProtectionGroupsRequest extends common.BaseRequest {
  /**
 * The ID (OCID) of the compartment in which to list resources.
* <p>
Example: `ocid1.compartment.oc1..exampleocid1`
* 
 */
  "compartmentId": string;
  /**
   * A filter to return only DR Protection Groups that match the given lifecycleState.
   *
   */
  "lifecycleState"?: model.DrProtectionGroupLifecycleState;
  /**
 * The OCID of the DR Protection Group. Optional query param.
* <p>
Example: `ocid1.drprotectiongroup.oc1.phx.exampleocid`
* 
 */
  "drProtectionGroupId"?: string;
  /**
 * A filter to return only resources that match the entire display name given.
* <p>
Example: `MY UNIQUE DISPLAY NAME`
* 
 */
  "displayName"?: string;
  /**
 * For list pagination. The maximum number of results per page,
* or items to return in a paginated \"List\" call.
* 1 is the minimum, 1000 is the maximum.
* <p>
For important details about how pagination works,
* see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `100`
* 
 */
  "limit"?: number;
  /**
 * For list pagination. The value of the `opc-next-page` response
* header from the previous \"List\" call.
* <p>
For important details about how pagination works,
* see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* 
 */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
 * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending.
* Default order for displayName is ascending. If no value is specified timeCreated is default.
* <p>
Example: `displayName`
* 
 */
  "sortBy"?: ListDrProtectionGroupsRequest.SortBy;
  /**
   * The client request ID for tracing.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListDrProtectionGroupsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
