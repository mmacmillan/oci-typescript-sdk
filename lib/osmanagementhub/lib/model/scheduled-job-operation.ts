/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).
Use the table of contents and search tool to explore the  OS Management Hub API.

 * OpenAPI spec version: 20220901
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
 * Defines an operation in a scheduled job.
 */
export interface ScheduledJobOperation {
  /**
   * The type of operation this scheduled job performs.
   */
  "operationType": model.OperationTypes;
  /**
   * The names of the target packages (only if operation type is INSTALL_PACKAGES/UPDATE_PACKAGES/REMOVE_PACKAGES).
   */
  "packageNames"?: Array<string>;
  "manageModuleStreamsDetails"?: model.ManageModuleStreamsInScheduledJobDetails;
  "switchModuleStreamsDetails"?: model.ModuleStreamDetails;
  /**
   * The OCIDs for the software sources (only if operation type is ATTACH_SOFTWARE_SOURCES/DETACH_SOFTWARE_SOURCES).
   */
  "softwareSourceIds"?: Array<string>;
}

export namespace ScheduledJobOperation {
  export function getJsonObj(obj: ScheduledJobOperation): object {
    const jsonObj = {
      ...obj,
      ...{
        "manageModuleStreamsDetails": obj.manageModuleStreamsDetails
          ? model.ManageModuleStreamsInScheduledJobDetails.getJsonObj(
              obj.manageModuleStreamsDetails
            )
          : undefined,
        "switchModuleStreamsDetails": obj.switchModuleStreamsDetails
          ? model.ModuleStreamDetails.getJsonObj(obj.switchModuleStreamsDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScheduledJobOperation): object {
    const jsonObj = {
      ...obj,
      ...{
        "manageModuleStreamsDetails": obj.manageModuleStreamsDetails
          ? model.ManageModuleStreamsInScheduledJobDetails.getDeserializedJsonObj(
              obj.manageModuleStreamsDetails
            )
          : undefined,
        "switchModuleStreamsDetails": obj.switchModuleStreamsDetails
          ? model.ModuleStreamDetails.getDeserializedJsonObj(obj.switchModuleStreamsDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
