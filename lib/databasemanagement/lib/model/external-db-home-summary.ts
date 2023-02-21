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
 * The summary of an external database home.
 */
export interface ExternalDbHomeSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external DB home.
   */
  "id": string;
  /**
   * The user-friendly name for the external DB home. The name does not have to be unique.
   */
  "displayName": string;
  /**
   * The name of the external DB home.
   */
  "componentName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external DB system that the DB home is a part of.
   */
  "externalDbSystemId": string;
  /**
   * The location of the DB home.
   */
  "homeDirectory"?: string;
  /**
   * The current lifecycle state of the external DB home.
   */
  "lifecycleState": string;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the external DB home was created.
   */
  "timeCreated": Date;
  /**
   * The date and time the external DB home was last updated.
   */
  "timeUpdated": Date;
}

export namespace ExternalDbHomeSummary {
  export function getJsonObj(obj: ExternalDbHomeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalDbHomeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
