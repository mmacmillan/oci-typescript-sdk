/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * The lifecycle state of a statement.
 *
 **/
export enum StatementLifecycleState {
  Accepted = "ACCEPTED",
  Cancelling = "CANCELLING",
  Cancelled = "CANCELLED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Succeeded = "SUCCEEDED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace StatementLifecycleState {
  export function getJsonObj(obj: StatementLifecycleState): StatementLifecycleState {
    return obj;
  }
  export function getDeserializedJsonObj(obj: StatementLifecycleState): StatementLifecycleState {
    return obj;
  }
}
