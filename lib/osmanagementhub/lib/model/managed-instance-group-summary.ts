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
 * Summary of the managed instance group.
 */
export interface ManagedInstanceGroupSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the tenancy containing the managed instance groups to list.
   */
  "compartmentId": string;
  /**
   * A user-friendly name for the managed instance group. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * managed instance group Description.
   */
  "description"?: string;
  /**
   * The number of Managed Instances in the managed instance group. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "managedInstanceCount"?: number;
  /**
   * The time the managed instance group was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the managed instance group was last modified. An RFC3339 formatted datetime string.
   */
  "timeModified"?: Date;
  /**
   * The current state of the managed instance group.
   */
  "lifecycleState": string;
  /**
   * The operating system type of the instances in the managed instance group.
   */
  "osFamily"?: model.OsFamily;
  /**
   * The CPU architecture of the instances in the managed instance group.
   */
  "archType"?: model.ArchType;
  /**
   * The software source vendor name.
   */
  "vendorName"?: model.VendorName;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ManagedInstanceGroupSummary {
  export function getJsonObj(obj: ManagedInstanceGroupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagedInstanceGroupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
