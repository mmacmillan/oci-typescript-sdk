/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
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
 * Update properties for a member in a DR Protection Group.
 */
export interface UpdateDrProtectionGroupMemberDetails {
  /**
    * The OCID of the member.
* <p>
Example: `ocid1.database.oc1.phx.&lt;unique_id&gt;`
* 
    */
  "memberId": string;

  "memberType": string;
}

export namespace UpdateDrProtectionGroupMemberDetails {
  export function getJsonObj(obj: UpdateDrProtectionGroupMemberDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "memberType" in obj && obj.memberType) {
      switch (obj.memberType) {
        case "COMPUTE_INSTANCE":
          return model.UpdateDrProtectionGroupMemberComputeInstanceDetails.getJsonObj(
            <model.UpdateDrProtectionGroupMemberComputeInstanceDetails>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.UpdateDrProtectionGroupMemberAutonomousDatabaseDetails.getJsonObj(
            <model.UpdateDrProtectionGroupMemberAutonomousDatabaseDetails>(<object>jsonObj),
            true
          );
        case "VOLUME_GROUP":
          return model.UpdateDrProtectionGroupMemberVolumeGroupDetails.getJsonObj(
            <model.UpdateDrProtectionGroupMemberVolumeGroupDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_NON_MOVABLE":
          return model.UpdateDrProtectionGroupMemberComputeInstanceNonMovableDetails.getJsonObj(
            <model.UpdateDrProtectionGroupMemberComputeInstanceNonMovableDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_MOVABLE":
          return model.UpdateDrProtectionGroupMemberComputeInstanceMovableDetails.getJsonObj(
            <model.UpdateDrProtectionGroupMemberComputeInstanceMovableDetails>(<object>jsonObj),
            true
          );
        case "DATABASE":
          return model.UpdateDrProtectionGroupMemberDatabaseDetails.getJsonObj(
            <model.UpdateDrProtectionGroupMemberDatabaseDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.memberType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDrProtectionGroupMemberDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "memberType" in obj && obj.memberType) {
      switch (obj.memberType) {
        case "COMPUTE_INSTANCE":
          return model.UpdateDrProtectionGroupMemberComputeInstanceDetails.getDeserializedJsonObj(
            <model.UpdateDrProtectionGroupMemberComputeInstanceDetails>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.UpdateDrProtectionGroupMemberAutonomousDatabaseDetails.getDeserializedJsonObj(
            <model.UpdateDrProtectionGroupMemberAutonomousDatabaseDetails>(<object>jsonObj),
            true
          );
        case "VOLUME_GROUP":
          return model.UpdateDrProtectionGroupMemberVolumeGroupDetails.getDeserializedJsonObj(
            <model.UpdateDrProtectionGroupMemberVolumeGroupDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_NON_MOVABLE":
          return model.UpdateDrProtectionGroupMemberComputeInstanceNonMovableDetails.getDeserializedJsonObj(
            <model.UpdateDrProtectionGroupMemberComputeInstanceNonMovableDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_MOVABLE":
          return model.UpdateDrProtectionGroupMemberComputeInstanceMovableDetails.getDeserializedJsonObj(
            <model.UpdateDrProtectionGroupMemberComputeInstanceMovableDetails>(<object>jsonObj),
            true
          );
        case "DATABASE":
          return model.UpdateDrProtectionGroupMemberDatabaseDetails.getDeserializedJsonObj(
            <model.UpdateDrProtectionGroupMemberDatabaseDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.memberType}`);
      }
    }
    return jsonObj;
  }
}
