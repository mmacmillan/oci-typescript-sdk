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
 * The summary of an external database.
 */
export interface ExternalDatabaseSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external DB system.
   */
  "id": string;
  /**
   * The user-friendly name for the database. The name does not have to be unique.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The `DB_UNIQUE_NAME` of the external database.
   */
  "dbUniqueName"?: string;
  /**
   * The type of Oracle Database installation.
   */
  "databaseType"?: model.DatabaseType;
  /**
   * The subtype of Oracle Database. Indicates whether the database is a Container Database,
   * Pluggable Database, or Non-container Database.
   *
   */
  "databaseSubType"?: model.DatabaseSubType;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the parent Container Database (CDB)
   * if this is a Pluggable Database (PDB).
   *
   */
  "externalContainerDatabaseId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external DB home.
   */
  "externalDbHomeId"?: string;
  "dbSystemInfo"?: model.ExternalDbSystemBasicInfo;
  "dbManagementConfig"?: model.DatabaseManagementConfig;
  /**
   * The list of database instances if the database is a RAC database.
   */
  "instanceDetails"?: Array<model.ExternalDatabaseInstance>;
  /**
   * The current lifecycle state of the external database resource.
   */
  "lifecycleState": ExternalDatabaseSummary.LifecycleState;
  /**
   * The date and time the external DB system was created.
   */
  "timeCreated": Date;
}

export namespace ExternalDatabaseSummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExternalDatabaseSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbSystemInfo": obj.dbSystemInfo
          ? model.ExternalDbSystemBasicInfo.getJsonObj(obj.dbSystemInfo)
          : undefined,
        "dbManagementConfig": obj.dbManagementConfig
          ? model.DatabaseManagementConfig.getJsonObj(obj.dbManagementConfig)
          : undefined,
        "instanceDetails": obj.instanceDetails
          ? obj.instanceDetails.map(item => {
              return model.ExternalDatabaseInstance.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalDatabaseSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbSystemInfo": obj.dbSystemInfo
          ? model.ExternalDbSystemBasicInfo.getDeserializedJsonObj(obj.dbSystemInfo)
          : undefined,
        "dbManagementConfig": obj.dbManagementConfig
          ? model.DatabaseManagementConfig.getDeserializedJsonObj(obj.dbManagementConfig)
          : undefined,
        "instanceDetails": obj.instanceDetails
          ? obj.instanceDetails.map(item => {
              return model.ExternalDatabaseInstance.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
