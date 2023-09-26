/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
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
 * The details of the KeyVersion.
 */
export interface KeyVersionSummary {
  /**
   * The OCID of the compartment that contains this key version.
   */
  "compartmentId": string;
  /**
   * The OCID of the key version.
   */
  "id": string;
  /**
   * The OCID of the master encryption key associated with this key version.
   */
  "keyId": string;
  /**
    * The key version's current lifecycle state.
* <p>
Example: `ENABLED`
* 
    */
  "lifecycleState"?: KeyVersionSummary.LifecycleState;
  /**
   * The source of the key material. When this value is INTERNAL, Key Management created the key material. When this value is EXTERNAL, the key material was imported from an external source.
   */
  "origin": KeyVersionSummary.Origin;
  /**
    * The date and time this key version was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
* <p>
Example: `2018-04-03T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * An optional property to indicate when to delete the key version, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfDeletion"?: Date;
  /**
   * The OCID of the vault that contains this key version.
   */
  "vaultId": string;
  "externalKeyReferenceDetails"?: model.ExternalKeyReferenceDetails;
}

export namespace KeyVersionSummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Enabling = "ENABLING",
    Enabled = "ENABLED",
    Disabling = "DISABLING",
    Disabled = "DISABLED",
    Deleting = "DELETING",
    Deleted = "DELETED",
    PendingDeletion = "PENDING_DELETION",
    SchedulingDeletion = "SCHEDULING_DELETION",
    CancellingDeletion = "CANCELLING_DELETION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Origin {
    Internal = "INTERNAL",
    External = "EXTERNAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: KeyVersionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "externalKeyReferenceDetails": obj.externalKeyReferenceDetails
          ? model.ExternalKeyReferenceDetails.getJsonObj(obj.externalKeyReferenceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: KeyVersionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "externalKeyReferenceDetails": obj.externalKeyReferenceDetails
          ? model.ExternalKeyReferenceDetails.getDeserializedJsonObj(
              obj.externalKeyReferenceDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
