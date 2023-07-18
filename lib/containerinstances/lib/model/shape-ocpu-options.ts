/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * For a flexible shape, the number of OCPUs available for container instances that use this shape.
 *
 */
export interface ShapeOcpuOptions {
  /**
   * The minimum number of OCPUs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "min": number;
  /**
   * The maximum number of OCPUs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "max": number;
}

export namespace ShapeOcpuOptions {
  export function getJsonObj(obj: ShapeOcpuOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ShapeOcpuOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
