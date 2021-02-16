/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Control Plane API
 * OpenAPI spec version: 20191010
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
 * Blockchain Platform Metering Preview after Scaling
 */
export interface ScaledPlatformMeteringPreview {
  /**
   * Number of total OCPU allocation for the blockchain platform Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalOcpuAllocation"?: number;
  /**
   * Number of total OCPU allocation for the blockchain platform after Scaling Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalOcpuAllocationPostScaling"?: number;
  /**
   * Current Storage metered units in TBs Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageMeteredUnits"?: number;
  /**
   * Extra Storage units required in TBs Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "extraStorageMeteredUnits"?: number;
  /**
   * Total Post Scaling Storage metered units in TBs Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageMeteredUnitsPostScaling"?: number;
}

export namespace ScaledPlatformMeteringPreview {
  export function getJsonObj(obj: ScaledPlatformMeteringPreview): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
