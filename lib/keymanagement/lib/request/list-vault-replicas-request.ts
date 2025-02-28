/**
 *
 *
 * OpenAPI spec version: release
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/keymanagement/ListVaultReplicas.ts.html |here} to see how to use ListVaultReplicasRequest.
 */
export interface ListVaultReplicasRequest extends common.BaseRequest {
  /**
   * The OCID of the vault.
   */
  "vaultId": string;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a
   * resource, set the `if-match` parameter to the value of the etag from a
   * previous GET or POST response for that resource. The resource will be
   * updated or deleted only if the etag you provide matches the resource's
   * current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header
   * from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * Unique identifier for the request. If provided, the returned request ID
   * will include this value. Otherwise, a random request ID will be
   * generated by the service.
   *
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case
   * of a timeout or server error without risk of executing that same action
   * again. Retry tokens expire after 24 hours, but can be invalidated
   * before then due to conflicting operations (e.g., if a resource has been
   * deleted and purged from the system, then a retry of the original
   * creation request may be rejected).
   *
   */
  "opcRetryToken"?: string;
  /**
   * The field to sort by. You can specify only one sort order. The default
   * order for `TIMECREATED` is descending. The default order for `DISPLAYNAME`
   * is ascending.
   *
   */
  "sortBy"?: ListVaultReplicasRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListVaultReplicasRequest.SortOrder;
}

export namespace ListVaultReplicasRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
