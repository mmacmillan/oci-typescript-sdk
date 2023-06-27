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
 * A software source contains a collection of packages.
 */
export interface SoftwareSource {
  /**
   * OCID for the software source.
   */
  "id": string;
  /**
   * The OCID of the tenancy containing the software source.
   */
  "compartmentId": string;
  /**
   * User friendly name for the software source.
   */
  "displayName": string;
  /**
   * The date and time the software source was created, as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeCreated": Date;
  /**
   * Information specified by the user about the software source.
   */
  "description"?: string;
  /**
   * Possible availabilities of a software source.
   */
  "availability": model.Availability;
  /**
   * The Repo ID for the software source.
   */
  "repoId": string;
  /**
   * The OS family the software source belongs to.
   */
  "osFamily": model.OsFamily;
  /**
   * The architecture type supported by the software source.
   */
  "archType": model.ArchType;
  /**
   * The current state of the software source.
   */
  "lifecycleState"?: SoftwareSource.LifecycleState;
  /**
   * Number of packages. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "packageCount"?: number;
  /**
   * URL for the repository.
   */
  "url": string;
  /**
   * The yum repository checksum type used by this software source.
   */
  "checksumType"?: model.ChecksumType;
  /**
   * URL of the GPG key for this software source.
   */
  "gpgKeyUrl"?: string;
  /**
   * ID of the GPG key for this software source.
   */
  "gpgKeyId"?: string;
  /**
   * Fingerprint of the GPG key for this software source.
   */
  "gpgKeyFingerprint"?: string;
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

  "softwareSourceType": string;
}

export namespace SoftwareSource {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SoftwareSource): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "softwareSourceType" in obj && obj.softwareSourceType) {
      switch (obj.softwareSourceType) {
        case "VENDOR":
          return model.VendorSoftwareSource.getJsonObj(
            <model.VendorSoftwareSource>(<object>jsonObj),
            true
          );
        case "CUSTOM":
          return model.CustomSoftwareSource.getJsonObj(
            <model.CustomSoftwareSource>(<object>jsonObj),
            true
          );
        case "VERSIONED":
          return model.VersionedCustomSoftwareSource.getJsonObj(
            <model.VersionedCustomSoftwareSource>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.softwareSourceType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SoftwareSource): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "softwareSourceType" in obj && obj.softwareSourceType) {
      switch (obj.softwareSourceType) {
        case "VENDOR":
          return model.VendorSoftwareSource.getDeserializedJsonObj(
            <model.VendorSoftwareSource>(<object>jsonObj),
            true
          );
        case "CUSTOM":
          return model.CustomSoftwareSource.getDeserializedJsonObj(
            <model.CustomSoftwareSource>(<object>jsonObj),
            true
          );
        case "VERSIONED":
          return model.VersionedCustomSoftwareSource.getDeserializedJsonObj(
            <model.VersionedCustomSoftwareSource>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.softwareSourceType}`);
      }
    }
    return jsonObj;
  }
}
