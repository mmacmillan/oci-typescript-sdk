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
 * The details of a database serviced by an external ASM.
 */
export interface ExternalAsmServicedDatabase {
  /**
   * The list of ASM disk groups used by the database.
   */
  "diskGroups"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external database.
   */
  "id": string;
  /**
   * The user-friendly name for the database. The name does not have to be unique.
   */
  "displayName": string;
  /**
   * The unique name of the external database.
   */
  "dbUniqueName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which the external database resides.
   */
  "compartmentId"?: string;
  /**
   * The type of Oracle Database installation.
   */
  "databaseType"?: model.DatabaseType;
  /**
   * The subtype of Oracle Database. Indicates whether the database is a Container Database,
   * Pluggable Database, Non-container Database, Autonomous Database, or Autonomous Container Database.
   *
   */
  "databaseSubType"?: model.DatabaseSubType;
  /**
   * Indicates whether the database is a Managed Database or not.
   */
  "isManaged"?: boolean;
}

export namespace ExternalAsmServicedDatabase {
  export function getJsonObj(obj: ExternalAsmServicedDatabase): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalAsmServicedDatabase): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
