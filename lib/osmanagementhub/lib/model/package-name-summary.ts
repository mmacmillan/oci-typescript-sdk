/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * A simple representation of a package using its displayName and NEVRA parts.
 */
export interface PackageNameSummary {
  /**
   * Full package NEVRA name - this value should be unique.
   */
  "displayName": string;
  /**
   * The name of the software package.
   */
  "name": string;
  /**
   * Type of the package.
   */
  "type"?: string;
  /**
   * Version of the installed package.
   */
  "version"?: string;
  /**
   * The architecture for which this package was built.
   */
  "architecture"?: model.ArchType;
}

export namespace PackageNameSummary {
  export function getJsonObj(obj: PackageNameSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PackageNameSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
