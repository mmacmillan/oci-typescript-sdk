/**
 * Cloud Guard API
 * Use the Cloud Guard API to automate processes that you would otherwise perform through the Cloud Guard Console.

**Note:** You can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
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
 * Possible target resource types.
 **/
export enum TargetResourceType {
  Compartment = "COMPARTMENT",
  Erpcloud = "ERPCLOUD",
  Hcmcloud = "HCMCLOUD",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace TargetResourceType {
  export function getJsonObj(obj: TargetResourceType): TargetResourceType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: TargetResourceType): TargetResourceType {
    return obj;
  }
}
