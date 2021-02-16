/**
 * Management Agent API
 * API for Management Agent Cloud Service
 * OpenAPI spec version: 20200202
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
 * Supported Agent downloads
 */
export interface ManagementAgentImage {
  /**
   * Agent image resource id
   */
  "id": string;
  /**
   * Agent image platform type
   */
  "platformType": model.PlatformTypes;
  /**
   * Agent image platform display name
   */
  "platformName"?: string;
  /**
   * Agent image version
   */
  "version": string;
  /**
   * Agent image size in bytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "size"?: number;
  /**
   * Agent image content SHA256 Hash
   */
  "checksum"?: string;
  /**
   * Object storage URL for download
   */
  "objectUrl"?: string;
  /**
   * The current state of Management Agent Image
   */
  "lifecycleState"?: model.LifecycleStates;
}

export namespace ManagementAgentImage {
  export function getJsonObj(obj: ManagementAgentImage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
