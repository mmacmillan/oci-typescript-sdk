/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Backup Options
 * To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
 *
 */
export interface DbBackupConfig {
  /**
   * If set to true, configures automatic backups. If you previously used RMAN or dbcli to configure backups and then you switch to using the Console or the API for backups, a new backup configuration is created and associated with your database. This means that you can no longer rely on your previously configured unmanaged backups to work.
   */
  "autoBackupEnabled"?: boolean;
  /**
   * Number of days between the current and the earliest point of recoverability covered by automatic backups.
   * This value applies to automatic backups only. After a new automatic backup has been created, Oracle removes old automatic backups that are created before the window.
   * When the value is updated, it is applied to all existing automatic backups.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recoveryWindowInDays"?: number;
  /**
    * Time window selected for initiating automatic backup for the database system. There are twelve available two-hour time windows. If no option is selected, a start time between 12:00 AM to 7:00 AM in the region of the database is automatically chosen. For example, if the user selects SLOT_TWO from the enum list, the automatic backup job will start in between 2:00 AM (inclusive) to 4:00 AM (exclusive).
* <p>
Example: `SLOT_TWO`
* 
    */
  "autoBackupWindow"?: DbBackupConfig.AutoBackupWindow;
  /**
   * Backup destination details.
   */
  "backupDestinationDetails"?: Array<model.BackupDestinationDetails>;
}

export namespace DbBackupConfig {
  export enum AutoBackupWindow {
    SlotOne = "SLOT_ONE",
    SlotTwo = "SLOT_TWO",
    SlotThree = "SLOT_THREE",
    SlotFour = "SLOT_FOUR",
    SlotFive = "SLOT_FIVE",
    SlotSix = "SLOT_SIX",
    SlotSeven = "SLOT_SEVEN",
    SlotEight = "SLOT_EIGHT",
    SlotNine = "SLOT_NINE",
    SlotTen = "SLOT_TEN",
    SlotEleven = "SLOT_ELEVEN",
    SlotTwelve = "SLOT_TWELVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DbBackupConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "backupDestinationDetails": obj.backupDestinationDetails
          ? obj.backupDestinationDetails.map(item => {
              return model.BackupDestinationDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
