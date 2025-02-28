/**
 * PGSQL Control Plane API
 * A description of the PGSQL Control Plane API
 * OpenAPI spec version: 20220915
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
 * The information about new DbInstance.
 */
export interface CreateDbInstanceDetails {
  /**
   * Display name of the DbInstance.
   */
  "displayName"?: string;
  /**
   * Description of the DbInstance. This field should be input by the user.
   */
  "description"?: string;
  /**
   * Private IP in customer subnet that will be assigned to the DbInstance. The value is optional.
   * If the IP is not provided the IP will be chosen among the available IP addresses from the specified subnet.
   *
   */
  "privateIp"?: string;
}

export namespace CreateDbInstanceDetails {
  export function getJsonObj(obj: CreateDbInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDbInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
