/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Summary of a host configuration for a resource.
 */
export interface HostConfigurationSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the host insight resource.
   */
  "hostInsightId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The host name. The host name is unique amongst the hosts managed by the same management agent.
   */
  "hostName": string;
  /**
   * Platform type.
   *
   */
  "platformType": HostConfigurationSummary.PlatformType;
  /**
   * Platform version.
   */
  "platformVersion": string;
  /**
   * Platform vendor.
   */
  "platformVendor": string;
  /**
   * Total CPU on this host.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalCpus": number;
  /**
   * Total amount of usable physical memory in gibabytes
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalMemoryInGBs": number;
  /**
   * CPU architechure
   */
  "cpuArchitecture": string;
  /**
   * Size of cache memory in megabytes.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCacheInMBs": number;
  /**
   * Name of the CPU vendor.
   */
  "cpuVendor": string;
  /**
   * Clock frequency of the processor in megahertz.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuFrequencyInMhz": number;
  /**
   * Model name of processor.
   */
  "cpuImplementation": string;
  /**
   * Number of cores per socket.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "coresPerSocket": number;
  /**
   * Number of total sockets. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalSockets": number;
  /**
   * Number of threads per socket. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "threadsPerSocket": number;
  /**
   * Indicates if hyper-threading is enabled or not
   *
   */
  "isHyperThreadingEnabled": boolean;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags": { [key: string]: string };

  "entitySource": string;
}

export namespace HostConfigurationSummary {
  export enum PlatformType {
    Linux = "LINUX",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: HostConfigurationSummary): object {
    const jsonObj = { ...obj, ...{} };

    if ("entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "MACS_MANAGED_EXTERNAL_HOST":
          return model.MacsManagedExternalHostConfigurationSummary.getJsonObj(
            <model.MacsManagedExternalHostConfigurationSummary>(<object>jsonObj),
            true
          );
        case "EM_MANAGED_EXTERNAL_HOST":
          return model.EmManagedExternalHostConfigurationSummary.getJsonObj(
            <model.EmManagedExternalHostConfigurationSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.entitySource);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HostConfigurationSummary): object {
    const jsonObj = { ...obj, ...{} };

    if ("entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "MACS_MANAGED_EXTERNAL_HOST":
          return model.MacsManagedExternalHostConfigurationSummary.getDeserializedJsonObj(
            <model.MacsManagedExternalHostConfigurationSummary>(<object>jsonObj),
            true
          );
        case "EM_MANAGED_EXTERNAL_HOST":
          return model.EmManagedExternalHostConfigurationSummary.getDeserializedJsonObj(
            <model.EmManagedExternalHostConfigurationSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.entitySource);
      }
    }
    return jsonObj;
  }
}
