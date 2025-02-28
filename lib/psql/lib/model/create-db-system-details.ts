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
 * The information about new DbSystem.
 */
export interface CreateDbSystemDetails {
  /**
   * DbSystem display name
   */
  "displayName": string;
  /**
   * Description of a DbSystem. This field should be input by the user.
   */
  "description"?: string;
  /**
   * Compartment identifier
   */
  "compartmentId": string;
  /**
   * Type of the DbSystem.
   */
  "systemType"?: string;
  /**
   * Version of DbSystem software.
   */
  "dbVersion": string;
  /**
   * Configuration identifier
   */
  "configId"?: string;
  "storageDetails": model.OciOptimizedStorageDetails;
  /**
   * Shape of DbInstance. This name should match from with one of the available shapes from /shapes API.
   */
  "shape": string;
  /**
   * The total number of OCPUs available to each DbInstance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceOcpuCount"?: number;
  /**
   * The total amount of memory available to each DbInstance, in gigabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceMemorySizeInGBs"?: number;
  /**
   * Count of DbInstances to be created in the DbSystem.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceCount"?: number;
  /**
   * Details of DbInstances to be created. Optional parameter.
   * If specified, its size must match instanceCount.
   *
   */
  "instancesDetails"?: Array<model.CreateDbInstanceDetails>;
  "credentials"?: model.Credentials;
  "networkDetails": model.NetworkDetails;
  "managementPolicy"?: model.ManagementPolicyDetails;
  "source"?: model.BackupSourceDetails | model.NoneSourceDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateDbSystemDetails {
  export function getJsonObj(obj: CreateDbSystemDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "storageDetails": obj.storageDetails
          ? model.StorageDetails.getJsonObj(obj.storageDetails)
          : undefined,

        "instancesDetails": obj.instancesDetails
          ? obj.instancesDetails.map(item => {
              return model.CreateDbInstanceDetails.getJsonObj(item);
            })
          : undefined,
        "credentials": obj.credentials ? model.Credentials.getJsonObj(obj.credentials) : undefined,
        "networkDetails": obj.networkDetails
          ? model.NetworkDetails.getJsonObj(obj.networkDetails)
          : undefined,
        "managementPolicy": obj.managementPolicy
          ? model.ManagementPolicyDetails.getJsonObj(obj.managementPolicy)
          : undefined,
        "source": obj.source ? model.SourceDetails.getJsonObj(obj.source) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDbSystemDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "storageDetails": obj.storageDetails
          ? model.StorageDetails.getDeserializedJsonObj(obj.storageDetails)
          : undefined,

        "instancesDetails": obj.instancesDetails
          ? obj.instancesDetails.map(item => {
              return model.CreateDbInstanceDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "credentials": obj.credentials
          ? model.Credentials.getDeserializedJsonObj(obj.credentials)
          : undefined,
        "networkDetails": obj.networkDetails
          ? model.NetworkDetails.getDeserializedJsonObj(obj.networkDetails)
          : undefined,
        "managementPolicy": obj.managementPolicy
          ? model.ManagementPolicyDetails.getDeserializedJsonObj(obj.managementPolicy)
          : undefined,
        "source": obj.source ? model.SourceDetails.getDeserializedJsonObj(obj.source) : undefined
      }
    };

    return jsonObj;
  }
}
