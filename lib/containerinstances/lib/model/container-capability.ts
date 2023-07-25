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
 * Additional configurable container capabilities.
 **/
export enum ContainerCapability {
  CapNetAdmin = "CAP_NET_ADMIN",
  CapNetRaw = "CAP_NET_RAW"
}

export namespace ContainerCapability {
  export function getJsonObj(obj: ContainerCapability): ContainerCapability {
    return obj;
  }
  export function getDeserializedJsonObj(obj: ContainerCapability): ContainerCapability {
    return obj;
  }
}
