/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).
Use the table of contents and search tool to explore the  OS Management Hub API.

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
 * Yum/DNF package group that associated with a software source.
 */
export interface PackageGroupSummary {
  /**
   * Package group identifier.
   */
  "id": string;
  /**
   * Package group name.
   */
  "name": string;
  /**
   * description of the package group.
   */
  "description"?: string;
  /**
   * Indicates if this package group is visible by users.
   */
  "isUserVisible"?: boolean;
  /**
   * Indicates if this package group is the default.
   */
  "isDefault"?: boolean;
  /**
   * the IDs of the package group's repositories.
   */
  "repositories"?: Array<string>;
  /**
   * Indicates if this is a group, category or environment.
   */
  "groupType"?: string;
  /**
   * Indicates the order to display category or environment. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "displayOrder"?: number;
}

export namespace PackageGroupSummary {
  export function getJsonObj(obj: PackageGroupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PackageGroupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
