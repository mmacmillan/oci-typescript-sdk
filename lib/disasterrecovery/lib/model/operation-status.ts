/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

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
 * Types of operation statuses.
 **/
export enum OperationStatus {
  Accepted = "ACCEPTED",
  InProgress = "IN_PROGRESS",
  Waiting = "WAITING",
  Canceling = "CANCELING",
  Canceled = "CANCELED",
  Succeeded = "SUCCEEDED",
  Failed = "FAILED",
  NeedsAttention = "NEEDS_ATTENTION",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationStatus {
  export function getJsonObj(obj: OperationStatus): OperationStatus {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationStatus): OperationStatus {
    return obj;
  }
}
