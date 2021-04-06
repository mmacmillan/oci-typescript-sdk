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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
* While creating a migration, specify the source and the application that you want migrate.
* Each migration moves a single application from a specified source to a specified Oracle Cloud Infrastructure tenancy.
* If required, provide the credentials of the application administrator in the source environment.
* Application Migration uses this information to access the application, as well as discover application artifacts,
* such as the complete domain configuration along with data sources and other dependencies.
* <p>
You must also assign a name and provide a description for the migration.
* This helps you to identify the appropriate source environment when you have multiple sources defined.
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
* 
*/
export interface CreateMigrationDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the source.
   *
   */
  "compartmentId": string;
  /**
   * User-friendly name of the application. This will be the name of the migrated application in Oracle Cloud Infrastructure.
   */
  "displayName"?: string;
  /**
   * Description of the application that you are migrating.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the source.
   */
  "sourceId": string;
  /**
   * Name of the application that you want to migrate from the source environment.
   */
  "applicationName": string;
  "discoveryDetails":
    | model.OicDiscoveryDetails
    | model.PcsDiscoveryDetails
    | model.IcsDiscoveryDetails
    | model.OacDiscoveryDetails
    | model.JcsDiscoveryDetails
    | model.SoacsDiscoveryDetails;
  /**
   * The pre-existing database type to be used in this migration. Currently, Application migration only supports Oracle Cloud
   * Infrastructure databases and this option is currently available only for `JAVA_CLOUD_SERVICE` and `WEBLOGIC_CLOUD_SERVICE` target instance types.
   *
   */
  "preCreatedTargetDatabaseType"?: model.TargetDatabaseTypes;
  /**
   * If set to `true`, Application Migration migrates the application resources selectively depending on the source.
   *
   */
  "isSelectiveMigration"?: boolean;
  /**
   * Configuration required to migrate the application. In addition to the key and value, additional fields are provided
   * to describe type type and purpose of each field. Only the value for each key is required when passing configuration to the
   * CreateMigration operation.
   *
   */
  "serviceConfig"?: { [key: string]: model.ConfigurationField };
  /**
   * Configuration required to migrate the application. In addition to the key and value, additional fields are provided
   * to describe type type and purpose of each field. Only the value for each key is required when passing configuration to the
   * CreateMigration operation.
   *
   */
  "applicationConfig"?: { [key: string]: model.ConfigurationField };
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateMigrationDetails {
  export function getJsonObj(obj: CreateMigrationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "discoveryDetails": obj.discoveryDetails
          ? model.DiscoveryDetails.getJsonObj(obj.discoveryDetails)
          : undefined,

        "serviceConfig": obj.serviceConfig
          ? common.mapContainer(obj.serviceConfig, model.ConfigurationField.getJsonObj)
          : undefined,
        "applicationConfig": obj.applicationConfig
          ? common.mapContainer(obj.applicationConfig, model.ConfigurationField.getJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
}
