/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details of the aggregation dimensions used for summarizing audit events.
 */
export interface AuditEventAggregationDimensions {
  /**
   * The time the audit event occurred in the target database.
   */
  "auditEventTime"?: Array<Date>;
  /**
   * Name of the database user whose actions were audited.
   */
  "dbUserName"?: Array<string>;
  /**
   * The OCID of the target database that was audited.
   */
  "targetId"?: Array<string>;
  /**
   * The name of the target database that was audited.
   */
  "targetName"?: Array<string>;
  /**
   * Class of the target that was audited.
   */
  "targetClass"?: Array<AuditEventAggregationDimensions.TargetClass>;
  /**
   * Type of object in the source database affected by the action. i.e PL/SQL, SYNONYM, PACKAGE BODY.
   */
  "objectType"?: Array<string>;
  /**
   * Name of the host machine from which the session was spawned.
   */
  "clientHostname"?: Array<string>;
  /**
   * The application from which the audit event was generated. Examples SQL Plus or SQL Developer.
   */
  "clientProgram"?: Array<string>;
  /**
   * The client identifier in each Oracle session.
   */
  "clientId"?: Array<string>;
  /**
   * Type of auditing.
   */
  "auditType"?: Array<AuditEventAggregationDimensions.AuditType>;
  /**
   * The name of the event executed by the user on the target database. i.e ALTER SEQUENCE, CREATE TRIGGER, CREATE INDEX.
   */
  "eventName"?: Array<string>;
}

export namespace AuditEventAggregationDimensions {
  export enum TargetClass {
    Database = "DATABASE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AuditType {
    Standard = "STANDARD",
    FineGrained = "FINE_GRAINED",
    Xs = "XS",
    DatabaseVault = "DATABASE_VAULT",
    LabelSecurity = "LABEL_SECURITY",
    Rman = "RMAN",
    Datapump = "DATAPUMP",
    DirectPathApi = "DIRECT_PATH_API",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AuditEventAggregationDimensions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AuditEventAggregationDimensions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
