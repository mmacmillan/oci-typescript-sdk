/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
* The Pluggable Database creation type.
* Use `LOCAL_CLONE_PDB` for creating a new PDB using Local Clone on Source Pluggable Database. This will Clone and starts a
* pluggable database (PDB) in the same database (CDB) as the source PDB. The source PDB must be in the `READ_WRITE` openMode to
* perform the clone operation.
* Use `REMOTE_CLONE_PDB` for creating a new PDB using Remote Clone on Source Pluggable Database. This will Clone a pluggable
* database (PDB) to a different database from the source PDB. The cloned PDB will be started upon completion of the clone
* operation. The source PDB must be in the `READ_WRITE` openMode when performing the clone.
* For Exadata Cloud@Customer instances, the source pluggable database (PDB) must be on the same Exadata Infrastructure as the
* target container database (CDB) to create a remote clone.
* <p>
Use `RELOCATE_PDB` for relocating the Pluggable Database from Source CDB and creating it in target CDB. This will relocate a
* pluggable database (PDB) to a different database from the source PDB. The source PDB must be in the `READ_WRITE` openMode when
* performing the relocate.
* 
*/
export interface CreatePluggableDatabaseCreationTypeDetails {
  "creationType": string;
}

export namespace CreatePluggableDatabaseCreationTypeDetails {
  export function getJsonObj(obj: CreatePluggableDatabaseCreationTypeDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "creationType" in obj && obj.creationType) {
      switch (obj.creationType) {
        case "RELOCATE_PDB":
          return model.CreatePluggableDatabaseFromRelocateDetails.getJsonObj(
            <model.CreatePluggableDatabaseFromRelocateDetails>(<object>jsonObj),
            true
          );
        case "REMOTE_CLONE_PDB":
          return model.CreatePluggableDatabaseFromRemoteCloneDetails.getJsonObj(
            <model.CreatePluggableDatabaseFromRemoteCloneDetails>(<object>jsonObj),
            true
          );
        case "LOCAL_CLONE_PDB":
          return model.CreatePluggableDatabaseFromLocalCloneDetails.getJsonObj(
            <model.CreatePluggableDatabaseFromLocalCloneDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.creationType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePluggableDatabaseCreationTypeDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "creationType" in obj && obj.creationType) {
      switch (obj.creationType) {
        case "RELOCATE_PDB":
          return model.CreatePluggableDatabaseFromRelocateDetails.getDeserializedJsonObj(
            <model.CreatePluggableDatabaseFromRelocateDetails>(<object>jsonObj),
            true
          );
        case "REMOTE_CLONE_PDB":
          return model.CreatePluggableDatabaseFromRemoteCloneDetails.getDeserializedJsonObj(
            <model.CreatePluggableDatabaseFromRemoteCloneDetails>(<object>jsonObj),
            true
          );
        case "LOCAL_CLONE_PDB":
          return model.CreatePluggableDatabaseFromLocalCloneDetails.getDeserializedJsonObj(
            <model.CreatePluggableDatabaseFromLocalCloneDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.creationType}`);
      }
    }
    return jsonObj;
  }
}
