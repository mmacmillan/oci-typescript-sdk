/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
* The platform configuration requested for the instance.
* <p>
If you provide the parameter, the instance is created with the platform configuration that you specify.
* For any values that you omit, the instance uses the default configuration values for the `shape` that you
* specify. If you don't provide the parameter, the default values for the `shape` are used.
* <p>
Each shape only supports certain configurable values. If the values that you provide are not valid for the
* specified `shape`, an error is returned.
* 
*/
export interface InstanceConfigurationLaunchInstancePlatformConfig {
  /**
   * Whether Secure Boot is enabled on the instance.
   *
   */
  "isSecureBootEnabled"?: boolean;
  /**
   * Whether the Trusted Platform Module (TPM) is enabled on the instance.
   *
   */
  "isTrustedPlatformModuleEnabled"?: boolean;
  /**
   * Whether the Measured Boot feature is enabled on the instance.
   *
   */
  "isMeasuredBootEnabled"?: boolean;
  /**
   * Whether the instance is a confidential instance. If this value is `true`, the instance is a confidential instance. The default value is `false`.
   *
   */
  "isMemoryEncryptionEnabled"?: boolean;

  "type": string;
}

export namespace InstanceConfigurationLaunchInstancePlatformConfig {
  export function getJsonObj(obj: InstanceConfigurationLaunchInstancePlatformConfig): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "AMD_MILAN_BM":
          return model.InstanceConfigurationAmdMilanBmLaunchInstancePlatformConfig.getJsonObj(
            <model.InstanceConfigurationAmdMilanBmLaunchInstancePlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_VM":
          return model.InstanceConfigurationIntelVmLaunchInstancePlatformConfig.getJsonObj(
            <model.InstanceConfigurationIntelVmLaunchInstancePlatformConfig>(<object>jsonObj),
            true
          );
        case "AMD_MILAN_BM_GPU":
          return model.InstanceConfigurationAmdMilanBmGpuLaunchInstancePlatformConfig.getJsonObj(
            <model.InstanceConfigurationAmdMilanBmGpuLaunchInstancePlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_ICELAKE_BM":
          return model.InstanceConfigurationIntelIcelakeBmLaunchInstancePlatformConfig.getJsonObj(
            <model.InstanceConfigurationIntelIcelakeBmLaunchInstancePlatformConfig>(
              (<object>jsonObj)
            ),
            true
          );
        case "AMD_ROME_BM":
          return model.InstanceConfigurationAmdRomeBmLaunchInstancePlatformConfig.getJsonObj(
            <model.InstanceConfigurationAmdRomeBmLaunchInstancePlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_SKYLAKE_BM":
          return model.InstanceConfigurationIntelSkylakeBmLaunchInstancePlatformConfig.getJsonObj(
            <model.InstanceConfigurationIntelSkylakeBmLaunchInstancePlatformConfig>(
              (<object>jsonObj)
            ),
            true
          );
        case "AMD_ROME_BM_GPU":
          return model.InstanceConfigurationAmdRomeBmGpuLaunchInstancePlatformConfig.getJsonObj(
            <model.InstanceConfigurationAmdRomeBmGpuLaunchInstancePlatformConfig>(<object>jsonObj),
            true
          );
        case "AMD_VM":
          return model.InstanceConfigurationAmdVmLaunchInstancePlatformConfig.getJsonObj(
            <model.InstanceConfigurationAmdVmLaunchInstancePlatformConfig>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: InstanceConfigurationLaunchInstancePlatformConfig
  ): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "AMD_MILAN_BM":
          return model.InstanceConfigurationAmdMilanBmLaunchInstancePlatformConfig.getDeserializedJsonObj(
            <model.InstanceConfigurationAmdMilanBmLaunchInstancePlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_VM":
          return model.InstanceConfigurationIntelVmLaunchInstancePlatformConfig.getDeserializedJsonObj(
            <model.InstanceConfigurationIntelVmLaunchInstancePlatformConfig>(<object>jsonObj),
            true
          );
        case "AMD_MILAN_BM_GPU":
          return model.InstanceConfigurationAmdMilanBmGpuLaunchInstancePlatformConfig.getDeserializedJsonObj(
            <model.InstanceConfigurationAmdMilanBmGpuLaunchInstancePlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_ICELAKE_BM":
          return model.InstanceConfigurationIntelIcelakeBmLaunchInstancePlatformConfig.getDeserializedJsonObj(
            <model.InstanceConfigurationIntelIcelakeBmLaunchInstancePlatformConfig>(
              (<object>jsonObj)
            ),
            true
          );
        case "AMD_ROME_BM":
          return model.InstanceConfigurationAmdRomeBmLaunchInstancePlatformConfig.getDeserializedJsonObj(
            <model.InstanceConfigurationAmdRomeBmLaunchInstancePlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_SKYLAKE_BM":
          return model.InstanceConfigurationIntelSkylakeBmLaunchInstancePlatformConfig.getDeserializedJsonObj(
            <model.InstanceConfigurationIntelSkylakeBmLaunchInstancePlatformConfig>(
              (<object>jsonObj)
            ),
            true
          );
        case "AMD_ROME_BM_GPU":
          return model.InstanceConfigurationAmdRomeBmGpuLaunchInstancePlatformConfig.getDeserializedJsonObj(
            <model.InstanceConfigurationAmdRomeBmGpuLaunchInstancePlatformConfig>(<object>jsonObj),
            true
          );
        case "AMD_VM":
          return model.InstanceConfigurationAmdVmLaunchInstancePlatformConfig.getDeserializedJsonObj(
            <model.InstanceConfigurationAmdVmLaunchInstancePlatformConfig>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
