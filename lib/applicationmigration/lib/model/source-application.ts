/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
 * Details about an application running in the source environment that you can migrate to Oracle Cloud Infrastructure.
 *
 */
export interface SourceApplication {
  /**
   * The name of the application.
   */
  "name"?: string;
  /**
   * The type of application.
   */
  "type"?: model.MigrationTypes;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the source to which the application belongs.
   */
  "sourceId"?: string;
  /**
   * The version of the application.
   */
  "version"?: string;
  /**
   * The current state of the application.
   */
  "state"?: string;
}

export namespace SourceApplication {
  export function getJsonObj(obj: SourceApplication): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SourceApplication): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
