/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
* A detachable block volume device that allows you to dynamically expand
* the storage capacity of an instance. For more information, see
* [Overview of Cloud Volume Storage](https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/overview.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you
* supply string values using the API.
* 
*/
export interface Volume {
  /**
    * The availability domain of the volume.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the compartment that contains the volume.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The OCID of the volume.
   */
  "id": string;
  /**
   * Specifies whether the cloned volume's data has finished copying from the source volume or backup.
   *
   */
  "isHydrated"?: boolean;
  /**
   * The OCID of the Key Management key which is the master encryption key for the volume.
   *
   */
  "kmsKeyId"?: string;
  /**
   * The current state of a volume.
   */
  "lifecycleState": Volume.LifecycleState;
  /**
    * The number of volume performance units (VPUs) that will be applied to this volume per GB,
* representing the Block Volume service's elastic performance options.
* See [Block Volume Elastic Performance](https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/blockvolumeelasticperformance.htm) for more information.
* <p>
Allowed values:
* <p>
  * `0`: Represents Lower Cost option.
* <p>
  * `10`: Represents Balanced option.
* <p>
  * `20`: Represents Higher Performance option.
* <p>
For performance autotune enabled volumes, It would be the Default(Minimum) VPUs/GB.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "vpusPerGB"?: number;
  /**
   * The size of the volume in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInGBs"?: number;
  /**
   * The size of the volume in MBs. This field is deprecated. Use
   * sizeInGBs instead.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInMBs": number;
  "sourceDetails"?:
    | model.VolumeSourceFromBlockVolumeReplicaDetails
    | model.VolumeSourceFromVolumeDetails
    | model.VolumeSourceFromVolumeBackupDetails;
  /**
   * The date and time the volume was created. Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * The OCID of the source volume group.
   */
  "volumeGroupId"?: string;
  /**
   * Specifies whether the auto-tune performance is enabled for this volume. This field is deprecated.
   * Use the `DetachedVolumeAutotunePolicy` instead to enable the volume for detached autotune.
   *
   */
  "isAutoTuneEnabled"?: boolean;
  /**
   * The number of Volume Performance Units per GB that this volume is effectively tuned to.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "autoTunedVpusPerGB"?: number;
  /**
   * The list of block volume replicas of this volume.
   */
  "blockVolumeReplicas"?: Array<model.BlockVolumeReplicaInfo>;
}

export namespace Volume {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Restoring = "RESTORING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Faulty = "FAULTY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Volume): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.VolumeSourceDetails.getJsonObj(obj.sourceDetails)
          : undefined,

        "blockVolumeReplicas": obj.blockVolumeReplicas
          ? obj.blockVolumeReplicas.map(item => {
              return model.BlockVolumeReplicaInfo.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Volume): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.VolumeSourceDetails.getDeserializedJsonObj(obj.sourceDetails)
          : undefined,

        "blockVolumeReplicas": obj.blockVolumeReplicas
          ? obj.blockVolumeReplicas.map(item => {
              return model.BlockVolumeReplicaInfo.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
