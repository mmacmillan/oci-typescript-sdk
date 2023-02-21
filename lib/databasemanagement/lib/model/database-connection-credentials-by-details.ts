/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The credentials used to connect to the database.
 */
export interface DatabaseConnectionCredentialsByDetails
  extends model.DatabaseConnectionCredentials {
  /**
    * The name of the credential information that used to connect to the DB system resource.
* The name should be in \"x.y\" format, where the length of \"x\" has a maximum of 64 characters,
* and length of \"y\" has a maximum of 199 characters. The name strings can contain letters,
* numbers and the underscore character only. Other characters are not valid, except for
* the \".\" character that separates the \"x\" and \"y\" portions of the name.
* *IMPORTANT* - The name must be unique within the OCI region the credential is being created in.
* If you specify a name that duplicates the name of another credential within the same OCI region,
* you may overwrite or corrupt the credential that is already using the name.
* <p>
For example: inventorydb.abc112233445566778899
* 
    */
  "credentialName"?: string;
  /**
   * The user name used to connect to the database.
   */
  "userName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the secret containing the user password.
   */
  "passwordSecretId": string;
  /**
   * The role of the user connecting to the database.
   */
  "role": DatabaseConnectionCredentialsByDetails.Role;

  "credentialType": string;
}

export namespace DatabaseConnectionCredentialsByDetails {
  export enum Role {
    Sysdba = "SYSDBA",
    Normal = "NORMAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: DatabaseConnectionCredentialsByDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConnectionCredentials.getJsonObj(
            obj
          ) as DatabaseConnectionCredentialsByDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const credentialType = "DETAILS";
  export function getDeserializedJsonObj(
    obj: DatabaseConnectionCredentialsByDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConnectionCredentials.getDeserializedJsonObj(
            obj
          ) as DatabaseConnectionCredentialsByDetails)),
      ...{}
    };

    return jsonObj;
  }
}
