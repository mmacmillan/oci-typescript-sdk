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
 * Information to create a container instance.
 */
export interface CreateContainerInstanceDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. If you don't provide a name, a name is generated automatically.
   *
   */
  "displayName"?: string;
  /**
   * The compartment OCID.
   */
  "compartmentId": string;
  /**
   * The availability domain where the container instance runs.
   */
  "availabilityDomain": string;
  /**
   * The fault domain where the container instance runs.
   *
   */
  "faultDomain"?: string;
  /**
   * The shape of the container instance. The shape determines the resources available to the container instance.
   */
  "shape": string;
  "shapeConfig": model.CreateContainerInstanceShapeConfigDetails;
  /**
    * A volume is a directory with data that is accessible across multiple containers in a
* container instance.
* <p>
You can attach up to 32 volumes to single container instance.
* 
    */
  "volumes"?: Array<model.CreateContainerVolumeDetails>;
  /**
   * The containers to create on this container instance.
   */
  "containers": Array<model.CreateContainerDetails>;
  /**
   * The networks available to containers on this container instance.
   */
  "vnics": Array<model.CreateContainerVnicDetails>;
  "dnsConfig"?: model.CreateContainerDnsConfigDetails;
  /**
   * The amount of time that processes in a container have to gracefully end when the container must be stopped. For example, when you delete a container instance. After the timeout is reached, the processes are sent a signal to be deleted. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "gracefulShutdownTimeoutInSeconds"?: number;
  /**
   * The image pulls secrets so you can access private registry to pull container images.
   */
  "imagePullSecrets"?: Array<model.CreateImagePullSecretDetails>;
  /**
   * Container restart policy
   */
  "containerRestartPolicy"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`.
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateContainerInstanceDetails {
  export function getJsonObj(obj: CreateContainerInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "shapeConfig": obj.shapeConfig
          ? model.CreateContainerInstanceShapeConfigDetails.getJsonObj(obj.shapeConfig)
          : undefined,
        "volumes": obj.volumes
          ? obj.volumes.map(item => {
              return model.CreateContainerVolumeDetails.getJsonObj(item);
            })
          : undefined,
        "containers": obj.containers
          ? obj.containers.map(item => {
              return model.CreateContainerDetails.getJsonObj(item);
            })
          : undefined,
        "vnics": obj.vnics
          ? obj.vnics.map(item => {
              return model.CreateContainerVnicDetails.getJsonObj(item);
            })
          : undefined,
        "dnsConfig": obj.dnsConfig
          ? model.CreateContainerDnsConfigDetails.getJsonObj(obj.dnsConfig)
          : undefined,

        "imagePullSecrets": obj.imagePullSecrets
          ? obj.imagePullSecrets.map(item => {
              return model.CreateImagePullSecretDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateContainerInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "shapeConfig": obj.shapeConfig
          ? model.CreateContainerInstanceShapeConfigDetails.getDeserializedJsonObj(obj.shapeConfig)
          : undefined,
        "volumes": obj.volumes
          ? obj.volumes.map(item => {
              return model.CreateContainerVolumeDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "containers": obj.containers
          ? obj.containers.map(item => {
              return model.CreateContainerDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "vnics": obj.vnics
          ? obj.vnics.map(item => {
              return model.CreateContainerVnicDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "dnsConfig": obj.dnsConfig
          ? model.CreateContainerDnsConfigDetails.getDeserializedJsonObj(obj.dnsConfig)
          : undefined,

        "imagePullSecrets": obj.imagePullSecrets
          ? obj.imagePullSecrets.map(item => {
              return model.CreateImagePullSecretDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
