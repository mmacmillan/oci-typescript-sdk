/**
 * Process Automation
 * Process Automation helps you to rapidly design, automate, and manage business processes in the cloud. With the Process Automation design-time (Designer) and the runtime (Workspace) environments, you can easily create, develop, manage, test, and monitor process applications and their components.
 * OpenAPI spec version: 20210621
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
 * Possible Metadata keys for workRequest resource metadata
 **/
export enum WorkRequestResourceMetadataKey {
  IsDryRun = "IS_DRY_RUN",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace WorkRequestResourceMetadataKey {
  export function getJsonObj(obj: WorkRequestResourceMetadataKey): WorkRequestResourceMetadataKey {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: WorkRequestResourceMetadataKey
  ): WorkRequestResourceMetadataKey {
    return obj;
  }
}
